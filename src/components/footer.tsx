import { TentTree, MapPin, Mail, Phone, Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function Footer() {
  return (
    <div className="py-[60px] px-[72px]">
      <div className="flex items-center">
        <div className="flex flex-[1.2]  items-center gap-[5px]">
          <TentTree className="h-[40px] w-[40px]" />
          <h1 className="font-inter font-bold text-[16px]">SG OUTDOOR</h1>
        </div>
        <div className=" flex  items-center gap-[12px] flex-[1.1]">
          <div className="rounded-full w-[40px] h-[40px] bg-[#FF9E0C] flex justify-center items-center text-white">
            <MapPin />
          </div>
          <div>
            <h1>Alamat</h1>
            <h1 className="font-semibold">Kec. Badegan, Kab Ponorogo</h1>
          </div>
        </div>
        <div className=" flex  items-center gap-[12px] flex-[1]">
          <div className="rounded-full w-[40px] h-[40px] bg-[#FF9E0C] flex justify-center items-center text-white">
            <Mail />
          </div>
          <div>
            <h1>Email</h1>
            <h1 className="font-semibold">asifyan02@gmail.com</h1>
          </div>
        </div>
        <div className=" flex justify-end items-center gap-[12px] flex-[1]">
          <div className="rounded-full w-[40px] h-[40px] bg-[#FF9E0C] flex justify-center items-center text-white">
            <Phone />
          </div>
          <div>
            <h1>Nomor HP</h1>
            <h1 className="font-semibold">+6282142527899</h1>
          </div>
        </div>
      </div>
      <div className="flex mt-[60px]">
        <div className="flex gap-[10px] items-end flex-[1.2]">
          <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-black ">
            <Link target="blank" href={ROUTES.SOCIAL_ROUTES.INSTAGRAM}>
              <Image
                src="/instagram.svg"
                alt="Instagram"
                height={20}
                width={20}
              ></Image>
            </Link>
          </div>
          <div className="rounded-full relative w-[40px] h-[40px] flex justify-center items-center bg-black">
            <Link href={ROUTES.SOCIAL_ROUTES.FACEBOOK} target="blank">
              <Image
                src="/facebook.svg"
                alt="Instagram"
                width={20}
                height={20}
              ></Image>
            </Link>
          </div>
        </div>
        <div className="flex-[1.1] flex flex-col justify-center">
          <h1 className="text-[20px] font-semibold mb-[24px]">Useful Links</h1>
          <div className="flex flex-col gap-[16px]">
            <Link href={ROUTES.NAV_ROUTES.HOME}>Home</Link>
            <Link href={ROUTES.NAV_ROUTES.RENT}>Rent</Link>
            <Link href={ROUTES.NAV_ROUTES.ABOUT}>About</Link>
            <Link href={ROUTES.NAV_ROUTES.CONTACT}>Contact</Link>
          </div>
        </div>
        <div className="flex-[1]">
          <h1 className="text-[20px] font-semibold mb-[24px]">Gears</h1>
          <div className="flex flex-col gap-[16px]">
            <Link href={ROUTES.NAV_ROUTES.HOME}>Tenda</Link>
            <Link href={ROUTES.NAV_ROUTES.RENT}>Pakaian</Link>
            <Link href={ROUTES.NAV_ROUTES.ABOUT}>Obat</Link>
            <Link href={ROUTES.NAV_ROUTES.CONTACT}>Perlengkapan</Link>
          </div>
        </div>
        <div className="flex-[1]"></div>
      </div>
      <div className="pt-[80px]">
        <div className="flex justify-center items-center text-black/50">
          <Copyright className="me-[3px]" size={14} />
          <h2 className=" text-[14px] ">
            Copyright SG Outdoor 2025. Design by{" "}
            <Link href={ROUTES.DEV.GIT}> Shifyan</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
