import { Button } from "@/shared/ui";
import type { PropsWithChildren } from "react";

export default function HeaderLoginButton({ children }: PropsWithChildren) {
  return (
    <Button className="w-20 h-10 rounded-[100px] inline-flex justify-center items-center gap-2.5 bg-blue-600 hover:bg-blue-400">
      {children}
    </Button>
  );
}
