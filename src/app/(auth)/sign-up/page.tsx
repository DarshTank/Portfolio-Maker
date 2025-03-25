"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { signUpSchema } from "@/schemas/signUpSchema";
import axios from "axios";
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
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

// Define the expected API response types
interface ApiResponse {
  message: string;
}

interface SignUpResponse extends ApiResponse {
  // Additional fields specific to sign-up response, if any
}

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const debounce = useDebounceCallback((value) => setUsername(value), 300);
  const { toast } = useToast();
  const router = useRouter();

  // Initialize the form with zodResolver
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const checkUsernameUnique = async () => {
      if (username) {
        setIsCheckingUsername(true);
        setUsernameMessage("");
        try {
          const response = await axios.get<ApiResponse>(
            `/api/check-username-unique?username=${username}`
          );
          setUsernameMessage(response.data.message);
        } catch (error) {
          // Handle error without AxiosError
          const errorMessage =
            error instanceof Error && "response" in error
              ? (error as any).response?.data?.message ?? "Error checking username"
              : "Error checking username";
          setUsernameMessage(errorMessage);
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };
    checkUsernameUnique();
  }, [username]);

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post<SignUpResponse>("/api/sign-up", data);
      toast({
        title: "Success",
        description: response.data.message,
        variant: "default",
      });
      router.replace(`/verify/${data.username}`);
    } catch (error) {
      console.error("Error in sign-up of user", error);
      // Handle error without AxiosError
      const errorMessage =
        error instanceof Error && "response" in error
          ? (error as any).response?.data?.message ?? "An error occurred during sign-up"
          : "An error occurred during sign-up";
      toast({
        title: "Signup Failed",
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
        <title>Sign Up | PortfolioMaker</title>
        <meta
          name="description"
          content="Sign up for PortfolioMaker to start building your stunning personal portfolio."
        />
      </Head>
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-lg shadow-lg">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sign Up for <span className="text-orange-500">PortfolioMaker</span>
            </h1>
            <p className="text-gray-400">
              Create an account to start building your portfolio
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        className="bg-gray-800 border-gray-700 text-white focus:ring-orange-500 focus:border-orange-500"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          debounce(e.target.value);
                        }}
                      />
                    </FormControl>
                    <div className="flex items-center mt-1">
                      {isCheckingUsername && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin text-orange-500" />
                      )}
                      <p
                        className={`text-sm ${
                          usernameMessage === "Username is unique"
                            ? "text-green-500"
                            : "text-orange-500"
                        }`}
                      >
                        {usernameMessage}
                      </p>
                    </div>
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
                    Signing Up...
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
          </Form>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-orange-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>

          <Toaster />
        </div>
      </div>
    </>
  );
}