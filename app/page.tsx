import Booking from "@/components/Booking/Booking";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div>
        <Booking/>
      </div>
      <div className = "cols-span-2 bg-red-100 order-first md:order-last">
        map
      </div>

    </div>
  );
}
