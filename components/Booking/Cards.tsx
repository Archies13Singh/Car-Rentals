import CardsLists from "@/data/CardsLists";
import Image from "next/image";
import React, { useState } from "react";

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState<any>();
  return (
    <div className="mt-3">
      <h2 className="text-[14px] font-medium">Payment Methods</h2>
      <div className="grid grid-cols-5 mt-2 pl-2">
        {CardsLists.map((card: any, index: number) => (
          <div
            key={index}
            className={`w-[50px] border-[1px] flex items-center justify-center rounded-md hover:border-yellow-300 hover:scale-110 transition-all cursor-pointer ${index === activeIndex ? 'border-yellow-400 border-[2px] scale-110'  : 'none'}`}
            onClick={()=>{setActiveIndex(index)}}
          >
            <Image
              src={card?.image}
              alt={`${card?.name}`}
              width={30}
              height={50}
            />
            {/* <h2 className="text-[12px] text-gray-500">{card?.name}</h2> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
