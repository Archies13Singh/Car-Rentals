import CarsList from "@/data/CarsList";
import Image from "next/image";
import React, { useState } from "react";

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<any>('')
  return (
    <div className="mt-3">
      <h2 className="font-semibold">Select Car</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2">
        {CarsList.map((item: any, index: number) => (
          <div
            key={index}
            className={`m-2 p-2 border-[1px] rounded-md hover:border-yellow-300 hover:scale-110 cursor-pointer ${index=== selectedCar ? 'border-yellow-300 border-[2px] scale-110' : null}`}
            onClick={()=>setSelectedCar(index)}
          >
            <Image
              className="w-full"
              src={item?.image}
              alt="carname"
              width={75}
              height={90}
            />
            <div className="flex items-center justify-between">
              <h2 className="text-[12px] text-gray-500">{item?.name}</h2>
              <span className="float-right text-black font-medium"><span>&#8377;</span>{item?.charges * 2}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
