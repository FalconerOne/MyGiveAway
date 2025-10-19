import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    // Fetch current user profile
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .limit(1);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ profile: data?.[0] || null }, { status: 200 });
  } catch (err) {
    console.error('Profile API GET error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const body = await req.json();

    // Update user profile
    const { data, error } = await supabase
      .from('profiles')
      .update({
        full_name: body.full_name,
        email: body.email,
        avatar_url: body.avatar_url,
      })
      .eq('id', body.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ profile: data?.[0] || null }, { status: 200 });
  } catch (err) {
    console.error('Profile API PATCH error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

