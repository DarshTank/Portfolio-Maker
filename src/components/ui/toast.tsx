"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Define types
export interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> {
  title: string;
  description?: string;
  variant?: "default" | "error";
}

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

// Toast Provider
const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <ToastPrimitives.Provider>{children}</ToastPrimitives.Provider>;
};

// Toast Viewport
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-4 right-4 z-[100] flex w-96 flex-col space-y-2",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = "ToastViewport";

// Toast Component
const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(({ className, title, description, variant = "default", ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={cn(
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 rounded-md border p-4 pr-6 shadow-lg transition-all",
      variant === "error" ? "bg-red-500 text-white" : "bg-gray-800 text-white",
      className
    )}
    {...props}
  >
    <div>
      <ToastTitle>{title}</ToastTitle>
      {description && <ToastDescription>{description}</ToastDescription>}
    </div>
    <ToastClose />
  </ToastPrimitives.Root>
));
Toast.displayName = "Toast";

// Toast Title
const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = "ToastTitle";

// Toast Description
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = "ToastDescription";

// Toast Close Button
const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-gray-500 opacity-50 transition-opacity hover:text-gray-700 focus:opacity-100",
      className
    )}
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = "ToastClose";

// Toast Action Button
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = "ToastAction";

// Custom Hook for managing Toasts
const ToastContext = React.createContext<{
  showToast: (message: string, type?: "default" | "error") => void;
} | null>(null);

export const ToastProviderWithState = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState<"default" | "error">("default");

  const showToast = (msg: string, type: "default" | "error" = "default") => {
    setMessage(msg);
    setVariant(type);
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastProvider>
        {children}
        <Toast open={open} onOpenChange={setOpen} title={variant === "error" ? "Error" : "Notification"} description={message} variant={variant} />
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
};

// Custom Hook to use Toast
export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProviderWithState");
  }
  return context;
};

// Export Components
export {
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastProvider,
};
