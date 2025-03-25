"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
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
import { Loader2 } from "lucide-react";
import { signInSchema } from "@/schemas/sigInSchema";
import { signIn } from "next-auth/react";
import Head from "next/head";

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  // React Hook Form Setup
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsSubmitting(true);
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });
    setIsSubmitting(false);

    if (result?.error) {
      toast({
        title: "Login Failed",
        description: "Incorrect Username or Password",
        // variant: "destructive",
      });
      return;
    }

    if (result?.url) {
      toast({
        title: "Login Successful",
        description: "Redirecting...",
        variant: "default",
      });
      router.replace("/dashboard");
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | PortfolioMaker</title>
        <meta
          name="description"
          content="Sign in to PortfolioMaker to build your stunning personal portfolio."
        />
      </Head>
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-lg shadow-lg">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sign In to <span className="text-orange-500">PortfolioMaker</span>
            </h1>
            <p className="text-gray-400">
              Access your account to build your stunning portfolio
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="identifier"
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
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="bg-gray-800 border-gray-700 text-white focus:ring-orange-500 focus:border-orange-500"
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
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Don’t have an account?{" "}
              <Link href="/sign-up" className="text-orange-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          <Toaster />
        </div>
      </div>
    </>
  );
}
