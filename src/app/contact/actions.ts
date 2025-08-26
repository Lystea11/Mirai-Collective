"use server";

import * as z from "zod";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  category: z.string(),
  message: z.string(),
});

export async function submitInquiry(values: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(values);

    // Save to Supabase database
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          category: validatedData.category,
          message: validatedData.message,
        }
      ])
      .select();

    if (error) {
      console.error("Database error:", error);
      return {
        success: false,
        message: "There was an error submitting your inquiry. Please try again.",
      };
    }

    console.log("Inquiry saved:", data);

    return {
      success: true,
      message: "Your inquiry has been sent successfully!",
    };
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return {
      success: false,
      message: "There was an error submitting your inquiry. Please try again.",
    };
  }
}
