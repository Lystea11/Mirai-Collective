"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  category: z.string(),
  message: z.string(),
});

export async function submitInquiry(values: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(values);

    // In a real application, you would process this data:
    // - Save to a database
    // - Send an email notification
    // - etc.
    console.log("Received inquiry:", validatedData);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

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
