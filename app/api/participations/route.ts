import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  try {
    // Initialize Supabase client (SSR)
    const supabase = createRouteHandlerClient({ cookies });

    // Fetch all participations
    const { data, error } = await supabase
      .from('participations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ participations: data }, { status: 200 });
  } catch (err) {
    console.error('Participations API GET error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const body = await req.json();

    // Example: add a new participation
    const { data, error } = await supabase
      .from('participations')
      .insert([
        {
          user_id: body.user_id,
          giveaway_id: body.giveaway_id,
          entries: body.entries || 1,
        },
      ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ participation: data }, { status: 201 });
  } catch (err) {
    console.error('Participations API POST error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
