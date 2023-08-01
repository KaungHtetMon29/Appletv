import Link from "next/link";

function Appletvnav() {
  return (
    <nav className=" bg-black relative z-50 flex items-center px-12 w-full">
      <div className=" relative flex gap-10 justify-center grow py-6">
        <div className="text-white">
          <Link href="/">Apple TV+</Link>
        </div>
        <div>MLS Season Pass</div>
      </div>
      <div className="absolute right-12 my-4 flex gap-x-8">
        <input
          className="  bg-black border-2 border-white rounded-lg px-4 py-2"
          placeholder="Search"
        />
        <button className="bg-blue-600 px-8 rounded-xl">Signin</button>
      </div>
    </nav>
  );
}
export default Appletvnav;
