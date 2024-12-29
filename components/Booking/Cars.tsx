import CarsList from "@/data/CarsList";
import Image from "next/image";
import React from "react";

const Cars = () => {
  return (
    <div className="mt-3">
      <h2 className="font-semibold">Select Car</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2">
        {CarsList.map((item: any, index: number) => (
          <div
            key={index}
            className="m-2 p-2 border-[1px] rounded-md hover:border-yellow-300 cursor-pointer"
          >
            <Image
              className="w-full"
              src={item?.image}
              alt="carname"
              width={75}
              height={90}
            />
            <div className="flex items-center justify-between">
              <h2 className="text-[12px]">{item?.name}</h2>
              <span className="float-right"><span>&#8377;</span>{item?.charges * 2}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
