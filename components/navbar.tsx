"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/logs", label: "Logs" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white p-4 sticky top-0 shadow-md z-10">
      <div className="container mx-auto flex items-center">
        <div className="flex-shrink-0 mr-8">
          <Link href="/" className="flex justify-center items-center w-44 h-12 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-md font-bold text-xl border border-white/10 shadow-md hover:translate-y-[-2px] transition">
            NVMA TECH
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-10 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 ${
                    pathname === item.href ? "text-blue-300 font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-48 flex-shrink-0"></div>
      </div>
    </nav>
  );
}
