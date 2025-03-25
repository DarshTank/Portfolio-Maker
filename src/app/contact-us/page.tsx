"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import axios from "axios";

// Define the form schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  // Initialize the form with zodResolver
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/contact", data);
      toast({
        title: "Success",
        description:
          response.data.message || "Your message has been sent successfully!",
        variant: "default",
      });
      form.reset(); // Clear the form after successful submission
      // Optional: Redirect to home page
      // router.push("/");
    } catch (error) {
      console.error("Error submitting contact form", error);
      const errorMessage =
        error instanceof Error && "response" in error
          ? (error as any).response?.data?.message ??
            "An error occurred while sending your message"
          : "An error occurred while sending your message";
      toast({
        title: "Submission Failed",
        description: errorMessage,
        // variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | PortfolioMaker</title>
        <meta
          name="description"
          content="Get in touch with the PortfolioMaker team for support, inquiries, or feedback."
        />
      </Head>
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-lg shadow-lg">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-orange-500">PortfolioMaker</span>
            </h1>
            <p className="text-gray-400">
              We’d love to hear from you! Fill out the form below to get in
              touch.
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="bg-gray-800 border-gray-700 text-white focus:ring-orange-500 focus:border-orange-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-orange-500" />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-800 border-gray-700 text-white focus:ring-orange-500 focus:border-orange-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-orange-500" />
                  </FormItem>
                )}
              />
              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        className="bg-gray-800 border-gray-700 text-white focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-orange-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-black hover:bg-orange-600 transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>

          {/* Back to Home Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Back to{" "}
              <Link href="/" className="text-orange-500 hover:underline">
                Home
              </Link>
            </p>
          </div>

          <Toaster />
        </div>
      </div>
    </>
  );
}
