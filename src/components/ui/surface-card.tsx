import { cn } from "@/lib/cn";

type SurfaceCardProps = React.ComponentProps<"div">;

export function SurfaceCard({ className, ...props }: SurfaceCardProps) {
  return <div className={cn("sg-card", className)} {...props} />;
}
