import Image from "next/image";
import { Button } from "./ui/button";
export default function MyCard() {
  return (
    <div className="bg-gray-100 rounded-[20px] p-[24px]">
      <div className=" relative w-full h-[240px] mb-[20px]">
        <Image fill alt="Gambar" src="/tent.png" className="object-cover" />
      </div>
      <div className="flex justify-between mb-[40px]">
        <div>
          <h1 className="font-semibold text-[24px]">Corosel A15</h1>
          <h2>Tenda</h2>
        </div>
        <div className="text-end">
          <h3 className="font-semibold text-[24px] text-[#5937E0]">
            Rp. 10.000
          </h3>
          <h3 className="text-[14px]">Per Hari</h3>
        </div>
      </div>
      <div>
        <Button className="w-full bg-[#5937E0] hover:cursor-pointer hover:bg-[#4830AA]">
          Sewa Sekarang
        </Button>
      </div>
    </div>
  );
}
