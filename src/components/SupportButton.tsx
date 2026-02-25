import { type ComponentProps } from "react";

type Variant = "outline" | "solid";
type Size = "sm" | "md" | "lg";

interface SupportButtonProps extends Omit<ComponentProps<"a">, "href"> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  outline:
    "border border-gray-300 text-gray-800 hover:border-gray-900 hover:bg-gray-50",
  solid: "bg-edges-500 text-white hover:bg-edges-600 border border-transparent",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2 text-sm",
  lg: "px-6 py-2.5 text-base",
};

export function SupportButton({
  variant = "outline",
  size = "md",
  href = "mailto:info@edges.studio",
  className = "",
  children,
  ...rest
}: SupportButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children ?? "Support"}
    </a>
  );
}
