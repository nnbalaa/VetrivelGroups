import {
  Coffee,
  CircuitBoard,
  Camera,
  Sparkles,
  UtensilsCrossed,
  Briefcase,
  GraduationCap,
  Heart,
  Building2,
  ShieldCheck,
  Users,
  Medal,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Coffee,
  CircuitBoard,
  Camera,
  Sparkles,
  UtensilsCrossed,
  Briefcase,
  GraduationCap,
  Heart,
  Building2,
  ShieldCheck,
  Users,
  Medal,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
