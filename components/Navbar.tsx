import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex p-3 px-10 justify-between border-b-2 shadow-sm border-white">
      <div className="flex gap-10 items-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/imagestorage-6c529.appspot.com/o/HFTkj4OSb3YxnwMBg9OVQxzTrMK2%2Fimages%2Flogout.png?alt=media&token=971fb0d6-1cdb-46eb-bfa8-006ac100d6e2"
          height={32}
          width={32}
          alt="Picture of the author"
        />
        <div className="hidden md:flex gap-6">
          <h2 className="hover:bg-gray-500 p-2 rounded-md cursor-pointer transition-all">Home</h2>
          <h2 className="hover:bg-gray-500 p-2 rounded-md cursor-pointer transition-all">History</h2>
          <h2 className="hover:bg-gray-500 p-2 rounded-md cursor-pointer transition-all">Help</h2>
        </div>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
