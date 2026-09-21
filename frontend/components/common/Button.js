import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    glow: "btn-glow",
  }[variant] || "btn-primary";

  const sizeClasses = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  }[size] || "";

  const classes = cn(baseClasses, variantClasses, sizeClasses, className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
