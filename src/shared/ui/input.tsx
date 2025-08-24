import * as React from "react";

import { cn } from "@/shared/lib";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

export { Input };
