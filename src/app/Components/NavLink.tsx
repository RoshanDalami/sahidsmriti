'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavLink = ({ href, exact, children, ...props }:any) => {
  const pathname = usePathname();
  const active = ' bg-rose-600 rounded'
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};