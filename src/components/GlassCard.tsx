import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = ({ children, className, hover = true, glow = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6",
        hover && "hover-scale hover-glow cursor-pointer",
        glow && "glow",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
