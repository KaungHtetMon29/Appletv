function PC({ imglinks }) {
  return (
    <div className="w-8/12 flex flex-grow-0 flex-shrink-0 relative z-30">
      <img
        src={`${imglinks}`}
        className="z-0 relative w-full rounded-3xl opacity-90"
      />
      <div className="flex absolute bottom-0 py-12 px-12 items-center w-full">
        <div className="flex grow">
          <p className="text-4xl font-bold">
            title <span className="font-normal">detail</span>
          </p>
        </div>
        <div className="flex">
          <button className="bg-white text-black rounded-full  px-8 py-4 font-bold">
            Stream Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default PC;
