import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  try {
    // Initialize Supabase client (SSR)
    const supabase = createRouteHandlerClient({ cookies });

    // Fetch dashboard data example
    const { data, error } = await supabase
      .from('dashboard')
      .select('*');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ dashboard: data }, { status: 200 });
  } catch (err) {
    console.error('Dashboard API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
