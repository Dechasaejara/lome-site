import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Building2,
  Calculator,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  HeartPulse,
  Hospital,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users,
  X,
} from "lucide-react";

export {
  Activity,
  ArrowRight,
  Building2,
  Calculator,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  HeartPulse,
  Hospital,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users,
  X,
};

export type IconName =
  | "phone"
  | "mail"
  | "mapPin"
  | "facebook"
  | "twitter"
  | "linkedin"
  | "instagram"
  | "individual"
  | "family"
  | "group"
  | "sparkle"
  | "users"
  | "clock"
  | "hospital";

const iconMap: Record<IconName, ComponentType<LucideProps>> = {
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  individual: HeartPulse,
  family: Users,
  group: Building2,
  sparkle: Sparkles,
  users: Users,
  clock: Clock3,
  hospital: Hospital,
};

type DynamicIconProps = LucideProps & {
  name: IconName;
};

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = iconMap[name];
  return <Icon {...props} />;
}
