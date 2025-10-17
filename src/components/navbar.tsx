import Link from "next/link";
import { NAV_ROUTES } from "@/lib/routes";

export default function Navbar() {
  return (
    <div>
      <div className="h-[104px] bg-white flex items-center justify-between px-[72px]">
        <div>
          <h1 className="font-inter font-bold text-[16px]">SG OUTDOOR</h1>
        </div>
        <div className="flex gap-[20px] font-inter">
          <Link href={NAV_ROUTES.HOME}>Home</Link>
          <Link href={NAV_ROUTES.PRODUCTS}>Products</Link>
          <Link href={NAV_ROUTES.CONTACT}>Contact</Link>
        </div>
        <div>
          <h1>Nomor HP</h1>
        </div>
      </div>
    </div>
  );
}
