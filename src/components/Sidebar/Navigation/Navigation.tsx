import {
  Home,
  Library,
  List,
  LogOutIcon,
  NotebookPen,
  Settings,
  ShoppingBag,
  Target,
  type LucideIcon,
} from "lucide-react";
type NavItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};
const NAV_ITEMS: NavItem[] = [
  { label: "داشبورد", icon: Home, active: true },
  { label: "اطلاعات پایه", icon: Library },
  { label: "مواد اولیه", icon: List },
  { label: "محصولات", icon: Target },
  { label: "مراکز خرید", icon: ShoppingBag },
  { label: "برنامه تولید", icon: NotebookPen },
  { label: "گزارشات", icon: Settings },
];
const Navigation = () => (
  <nav className="space-y-2 flex-1">
    {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
      <NavItem key={label} label={label} Icon={Icon} active={active} />
    ))}
    <NavItem label="خروج" Icon={LogOutIcon} className="text-red-500" />
  </nav>
);

type NavItemProps = {
  label: string;
  Icon: LucideIcon;
  active?: boolean;
  className?: string;
};

const NavItem = ({ label, Icon, active, className }: NavItemProps) => {
  const baseClasses =
    "flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer";

  const activeClasses = "bg-gray-100 text-gray-800 font-medium";

  const inactiveClasses = "text-gray-500 hover:bg-gray-50";

  return (
    <div
      className={`${baseClasses} ${
        active ? activeClasses : inactiveClasses
      } ${className}`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </div>
  );
};
export default Navigation;
