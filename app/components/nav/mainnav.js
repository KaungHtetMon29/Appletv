import { Btn } from "../Buttons/Btn";

function Mainnav() {
  return (
    <div className=" sticky top-0 justify-center  bg-black z-40">
      <div className="flex mx-auto 2xl:max-w-6xl xl:max-w-4xl  lg:max-w-2xl py-3 ">
        <div className="flex grow font-semibold text-2xl">Apple TV+</div>
        <div className="flex xl:text-lg lg:text-base">
          <Btn txt="Stream Now" />
        </div>
      </div>
    </div>
  );
}
export default Mainnav;
