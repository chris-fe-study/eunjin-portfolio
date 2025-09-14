import { Button } from "@/shared/ui";
import { type PropsWithChildren } from "react";

export default function CategoryButton({
  children,
  isClick = false,
  onClick,
}: PropsWithChildren<{
  isClick: boolean;
  onClick?: () => void;
}>) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      className={`
        font-normal font-['Inter']
    ${
      isClick
        ? "bg-white text-neutral-900 hover:bg-white"
        : "bg-neutral-900 text-white hover:bg-neutral-300 "
    }
  `}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
