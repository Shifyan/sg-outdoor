import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-[72px]">
        <div className="w-full bg-blue-700 rounded-[40px] text-white px-[72px]">
          <h1>Hero</h1>
        </div>
      </div>
    </div>
  );
}
