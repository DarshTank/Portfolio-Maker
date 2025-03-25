import { Home, Search, User, Settings } from "lucide-react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" />
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" />
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

export const Icons = {
  home: Home,
  search: Search,
  user: User,
  settings: Settings,
  logo: Logo,
};
