"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Auth error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <AlertTriangle className="text-destructive h-12 w-12" />
      <h2 className="text-xl font-semibold">Authentication Error</h2>
      <p className="text-muted-foreground max-w-md text-center text-sm">
        Something went wrong with authentication. Please try again.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
