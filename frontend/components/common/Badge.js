import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "default",
  className,
  ...props
}) {
  const variantClasses = {
    default: "badge",
    primary: "badge badge-primary",
    emerald: "badge badge-emerald",
    amber: "badge badge-amber",
  }[variant] || "badge";

  return (
    <span className={cn(variantClasses, className)} {...props}>
      {children}
    </span>
  );
}
