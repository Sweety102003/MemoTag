import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


export async function POST(req) {
    const { name, email, phone, signingFor } = await req.json();
  
    const { error } = await supabase
      .from("waitlist_emails")
      .insert({
        name,
        email,
        phone,
        signing_for: signingFor,
      });
  
    if (error) {
      return new Response(JSON.stringify({ success: false, error }), {
        status: 500,
      });
    }
  
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  }
  