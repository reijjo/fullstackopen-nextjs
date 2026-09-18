import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href} className="hover:text-gray-300">
      {children}
    </Link>
  );
};

export default NavLink;
