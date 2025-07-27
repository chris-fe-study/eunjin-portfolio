import { Button } from "@/shared";

export default function HeaderLoginButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Button className="w-20 h-10 rounded-[100px] inline-flex justify-center items-center gap-2.5 bg-blue-600 hover:bg-blue-400">
      {children}
    </Button>
  );
}
