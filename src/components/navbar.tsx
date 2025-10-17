import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { Headset, TentTree } from "lucide-react";

export default function Navbar() {
  return (
    <div>
      <div className="h-[104px] bg-white flex items-center justify-between px-[72px]">
        <div className="flex items-center gap-[5px]">
          <TentTree className="h-[40px] w-[40px]" />
          <h1 className="font-inter font-bold text-[16px]">SG OUTDOOR</h1>
        </div>
        <div className="flex gap-[20px] font-inter">
          <Link href={ROUTES.NAV_ROUTES.HOME}>Home</Link>
          <Link href={ROUTES.NAV_ROUTES.RENT}>Rent</Link>
          <Link href={ROUTES.NAV_ROUTES.ABOUT}>About Us</Link>
          <Link href={ROUTES.NAV_ROUTES.CONTACT}>Contact</Link>
        </div>
        <div className="flex items-center gap-[12px]">
          <Headset className="h-[35px] w-[35px]" />
          <div>
            <h2 className="text-[16px]">Tanya Admin!</h2>
            <Link
              href={ROUTES.WA_ROUTES.DEFAULT_WA}
              target="blank"
              className="text-[16px] font-semibold"
            >
              +6282142527899
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
