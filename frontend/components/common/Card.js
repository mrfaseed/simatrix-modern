import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  glass = true,
  style,
  ...props
}) {
  return (
    <div
      className={cn(glass ? "card-glass" : "card", className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
