import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="bg-blue-100">
        Booking
      </div>
      <div className = "cols-span-2 bg-red-100 order-first md:order-last">
        map
      </div>
      
    </div>
  );
}
