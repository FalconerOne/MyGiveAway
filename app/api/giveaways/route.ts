import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  try {
    // Initialize Supabase client (SSR)
    const supabase = createRouteHandlerClient({ cookies });

    // Fetch all active giveaways
    const { data, error } = await supabase
      .from('giveaways')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ giveaways: data }, { status: 200 });
  } catch (err) {
    console.error('Giveaways API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const body = await req.json();

    // Example: create a new giveaway
    const { data, error } = await supabase
      .from('giveaways')
      .insert([
        {
          title: body.title,
          description: body.description,
          start_date: body.start_date,
          end_date: body.end_date,
        },
      ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ giveaway: data }, { status: 201 });
  } catch (err) {
    console.error('Giveaways POST error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
