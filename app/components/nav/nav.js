"use client";
import { useState } from "react";
import { Logo, Lens, Bag, Menu } from "../../assets/svg/icons";
function Navigation() {
  const [click, setclick] = useState(false);
  return (
    <nav className=" bg-black relative z-50">
      <div
        className={`absolute w-full bg-black lg:${
          click ? "flex" : "hidden"
        } flex-col md:hidden pt-12 pb-24 px-16 z-40 `}
      >
        <div className=" max-w-2xl font-bold flex flex-col gap-y-4 text-3xl text-white">
          <div>Store</div>
          <div>Mac</div>
          <div>iPad</div>
          <div>iPhone</div>
          <div>Watch</div>
          <div>Vision</div>
          <div>Airpods</div>
          <div>TV & Home</div>
          <div>Entertainment</div>
          <div>Accessories</div>
          <div>Support</div>
        </div>
      </div>
      <div className="flex relative mx-auto  2xl:max-w-7xl xl:max-w-5xl lg:max-w-2xl justify-center 2xl:gap-x-10 xl:gap-x-6 lg:gap-x-8 py-2 items-center text-gray-200 2xl:text-base xl:text-sm lg:text-xs">
        <div className="flex lg:grow xl:grow-0">
          <Logo />
        </div>

        <div className="xl:flex md:hidden 2xl:gap-x-8 xl:gap-x-6">
          <div className="cursor-pointer">Store</div>
          <div className="cursor-pointer">Mac</div>
          <div className="cursor-pointer">iPad</div>
          <div className="cursor-pointer">iPhone</div>
          <div className="cursor-pointer">Watch</div>
          <div className="cursor-pointer">Vision</div>
          <div className="cursor-pointer">Airpods</div>
          <div className="cursor-pointer">TV & Home</div>
          <div className="cursor-pointer">Entertainment</div>
          <div className="cursor-pointer">Accessories</div>
          <div className="cursor-pointer">Support</div>
        </div>
        <div className="cursor-pointer">
          <Lens />
        </div>
        <div className="cursor-pointer">
          <Bag />
        </div>
        <div
          className="xl:hidden lg:flex cursor-pointer z-50"
          onClick={() => {
            setclick(!click);
          }}
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
