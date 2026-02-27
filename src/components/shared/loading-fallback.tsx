import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface LoadingFallbackProps {
  message?: string;
}

export function LoadingFallback({ message = "Loading..." }: LoadingFallbackProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-center gap-3 py-8">
        <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
        <p className="text-muted-foreground text-sm">{message}</p>
      </CardContent>
    </Card>
  );
}
