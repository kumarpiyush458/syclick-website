import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
    console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

console.log("Service key exists:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

console.log(
  "Service key prefix:",
  process.env.SUPABASE_SERVICE_ROLE_KEY?.substring(0, 20)
);
  try {
    const body = await request.json();

    const requiredFields = ["full_name", "email", "plan"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          {
            success: false,
            error: `${field} is required.`,
          },
          { status: 400 }
        );
      }
    }

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert([
        {
          full_name: body.full_name,
          email: body.email,
          phone: body.phone,
          company: body.company,
          designation: body.designation,
          plan: body.plan,
          monthly_call_volume: body.monthly_call_volume,
          message: body.message,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      lead: data,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}