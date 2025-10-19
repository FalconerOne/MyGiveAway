// app/api/notifications/cleanup/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@/config/supabase';

// Replace this with a strong secret and store it in your Vercel environment variables
// Example: CRON_SECRET=randomly-generated-string
const CRON_SECRET = process.env.CRON_SECRET || 'f3c2a1b0-9d87-4e5f-bc12-3456789abcd';

export async function GET(req: Request) {
  // Security check
  const authHeader = req.headers.get('Authorization');
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const supabase = createClient();

    // Example cleanup logic: remove old notifications older than 7 days
    const { error } = await supabase
      .from('notifications')
      .delete()
      .lt('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

    if (error) {
      console.error('Cleanup error:', error);
      return new NextResponse('Cleanup failed', { status: 500 });
    }

    return new NextResponse(JSON.stringify({ ok: true, message: 'Cleanup completed' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Unexpected cleanup error:', err);
    return new NextResponse('Cleanup failed', { status: 500 });
  }
}
