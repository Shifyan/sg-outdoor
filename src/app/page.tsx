import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { MapPinned, Wallet, PackageCheck, ArrowRight } from "lucide-react";
import MyCard from "@/components/card";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-[72px] ">
        <div className="w-full bg-blue-700 rounded-[40px] text-white px-[72px] py-[78.5px]">
          <div className="">
            <div className="flex flex-col text-center justify-center items-center">
              <h1 className="text-[50px] font-bold mb-[25px]">
                Maksimalkan Pengalaman Outdoormu dengan Gear Terbaik Kami!
              </h1>
              <p className="w-[460px] mb-[40px] text-[16px]">
                SG Outdoor menyediakan berbagai alat outdoor terbaik yang anda
                butuhkan untuk petualangan seru anda
              </p>
              <Link href={ROUTES.NAV_ROUTES.RENT}>
                <Button className="hover:cursor-pointer bg-white hover:bg-zinc-400 text-black">
                  Sewa Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[72px] py-[60px]">
        <div className="flex justify-between">
          <div className="w-[357px] flex flex-col justify-center">
            <div className="flex justify-center mb-[10px]">
              <MapPinned className="w-[45px] h-[45px]" />
            </div>
            <h1 className="text-[24px] font-semibold text-center mb-[15px]">
              Fleksibel
            </h1>
            <p className="text-[16px] text-center">
              Janjian bertemu dimana saja, kami akan antar barangmu
            </p>
          </div>
          <div className="w-[357px] flex flex-col justify-center">
            <div className="flex justify-center mb-[10px]">
              <Wallet className="w-[45px] h-[45px]" />
            </div>
            <h1 className="text-[24px] font-semibold text-center mb-[15px]">
              Hemat
            </h1>
            <p className="text-[16px] text-center">
              Cari barang terbaik dengan harga sewa termurah di tempat kami
            </p>
          </div>
          <div className="w-[357px] flex flex-col justify-center">
            <div className="flex justify-center mb-[10px]">
              <PackageCheck className="w-[45px] h-[45px]" />
            </div>
            <h1 className="text-[24px] font-semibold text-center mb-[15px]">
              Lengkap
            </h1>
            <p className="text-[16px] text-center">
              Cari kebutuhanmu, mulai dari tenda, sepatu, jaket dan barang
              lainnya
            </p>
          </div>
        </div>
      </div>
      <div className="px-[72px] py-[60px]">
        <div className="">
          <div className="flex mb-[40px]">
            <div className="flex-1/2 text-[40px] font-bold">
              <h1>Cari dan pilih peralatan yang kamu sukai</h1>
            </div>
            <div className="flex-1/2 flex items-end justify-end">
              <Link
                href={ROUTES.NAV_ROUTES.RENT}
                className="text-[20px] font-bold flex items-center"
              >
                Vew All <ArrowRight className="ms-[8px]" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[24px]">
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </div>
        </div>
      </div>
    </div>
  );
}
