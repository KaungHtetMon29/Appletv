"use client";
import { useState } from "react";
import { Arrow } from "../../assets/svg/icons";

function Ads() {
  const questions = [
    "What is Apple TV+?",
    "How Can I watch it?",
    "What does it cost",
    "Can I share with my family",
    "Are there commercials? And can I watch on demand",
    "Do I need an Apple TV 4K?",
    "Can I download to watch offine?",
  ];
  const answers = [
    "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
    "Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at tv.apple.com.",
    "That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for 3 months.1 (2) A monthly subscription is just $6.99 per month after a free seven-day trial.(3) Apple TV+ is included in Apple One, which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $16.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.4",
    "Of course. Apple TV+ lets you share your subscription with up to five family members.",
    "Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere.",
    "No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.",
    "Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.",
  ];
  const [checked, setchecked] = useState(Array(questions.length).fill(false));
  const updatedcheck = [...checked];
  const click = (index) => {
    updatedcheck[index] = !updatedcheck[index];
    setchecked(updatedcheck);
  };
  const arr = [
    [
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_samsung__er6s8sp9t126_large.jpg",
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_lg__7fxn3l0zf5ua_large.jpg",
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_vizio__crgnno5ezt2e_large.jpg",
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_sony__dv28xq4n91ea_large.jpg",
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg",
    ],
    [
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_roku__d3kr4gpcimoi_large.jpg",
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_firetv__f6qpefrj0ree_large.jpg",
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_google_tv__e5t4asdc2gsy_large.jpg",
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_playstation__djtq2b40wf2a_large.jpg",
      "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xbox__cfelmbxxfoaa_large.jpg",
    ],
  ];
  const map = (arr) => {
    return arr.map((e, index) => {
      return (
        <div key={index}>
          <img src={e} />
        </div>
      );
    });
  };
  return (
    <div className="bg-white relative py-24  text-black ">
      <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-2xl mx-auto gap-y-24 flex flex-col">
        <div className="flex flex-col gap-y-6 justify-center text-center">
          <div className="flex justify-center">
            <img
              src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_app_icon__cth1s5qlqpyu_xlarge.png"
              width={70}
            />
          </div>

          <h1 className=" leading-12  2xl:text-7xl xl:text-6xl lg:text-4xl font-bold">
            Watch Apple TV+ anywhere
            <br /> on the Apple TV app
          </h1>
          <div className="flex justify-center">
            <p className="2xl:text-lg xl:text-base lg:text-base">
              Find the Apple TV app on your favorite Apple devices.
              <br /> Or watch Apple TV+ online at{" "}
              <span className="text-blue-700">tv.apple.com.</span>
            </p>
          </div>
        </div>
        <div className="gap-y-12 flex flex-col">
          <div className="flex justify-center 2xl:gap-x-32 xl:gap-x-24 lg:gap-x-14">
            <div className="flex flex-col justify-center xl:gap-y-4">
              <div>
                <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_apple_tv__r2nel0gcigam_large.jpg" />
              </div>
              <p className="font-bold text-center">Apple TV</p>
            </div>
            <div className="flex flex-col justify-center xl:gap-y-4">
              <div>
                <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_iphone__c914mkstye0y_large.jpg" />
              </div>
              <p className="font-bold text-center">Apple TV</p>
            </div>
            <div className="flex flex-col justify-center xl:gap-y-4">
              <div>
                <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_ipad__cyk6qow5fiqa_large.jpg" />
              </div>
              <p className="font-bold text-center">Apple TV</p>
            </div>
            <div className="flex flex-col justify-center xl:gap-y-4">
              <div>
                <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_mac__b7y797p7oouq_large.jpg" />
              </div>
              <p className="font-bold text-center">Apple TV</p>
            </div>
            <div className="flex flex-col justify-center xl:gap-y-4">
              <div>
                <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_airplay__ddkvcm0sxtm6_large.jpg" />
              </div>
              <p className="font-bold text-center">Apple TV</p>
            </div>
          </div>
          <div className="flex gap-y-4 flex-col">
            <h1 className="text-center font-bold xl:text-4xl lg:text-3xl leading-snug">
              See it on your smart TV <br />
              or streaming device.
            </h1>
            <p className="2xl:text-xl xl:text-lg lg:text-lg text-blue-700 text-center">
              Set up your device &gt;
            </p>
          </div>
        </div>

        <div className="gap-y-8 flex flex-col">
          <div className="flex justify-center 2xl:gap-x-20 xl:gap-x-14 lg:gap-x-12">
            {map(arr[0])}
          </div>
          <div className="flex justify-center 2xl:gap-x-20 xl:gap-x-14 lg:gap-x-12">
            {map(arr[1])}
          </div>
        </div>
        <div className="flex justify-center flex-col gap-y-20">
          <h1 className="text-center leading-12  xl:text-7xl lg:text-4xl font-bold">
            Qusetions? Answers
          </h1>
          <div className="gap-y-2 flex flex-col">
            {questions.map((e, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-center flex-col 2xl:text-3xl xl:text-2xl lg:text-xl font-semibold xl:py-8 lg:py-4 cursor-pointer xl:gap-y-8 lg:gap-y-4 ${
                    index === questions.length - 1
                      ? "border-none"
                      : "border-b-2"
                  }`}
                >
                  <div
                    className="flex items-center"
                    onClick={() => {
                      click(index);
                    }}
                  >
                    <div className="flex grow ">{e}</div>
                    <div className="w-8">
                      <Arrow />
                    </div>
                  </div>
                  <div
                    className={`${
                      checked[index] ? "flex" : "hidden"
                    } font-normal xl:text-xl lg:text-lg pr-40`}
                  >
                    {answers[index]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-12 pt-24">
        <div className="flex 2xl:max-w-8xl xl:max-w-7xl lg:max-w-2xl mx-auto justify-center bg-gray-100 xl:py-28 lg:py-20 xl:px-24 lg:px-8 items-center">
          <div className="xl:w-full lg:w-1/2">
            <img
              src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/bundle__e93qdcv7mtm6_large.jpg"
              className="w-full"
            />
          </div>
          <div className="flex flex-col xl:gap-y-8 lg:gap-y-4 w-3/5">
            <div className="flex justify-center xl:w-1/6 lg:w-1/4 mx-auto">
              <img
                src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_one__b0modw3b87xy_large.png"
                className="w-full"
              />
            </div>

            <h1 className="2xl:text-5xl xl:text-4xl lg:text-2xl font-bold text-center">
              Bundle Apple TV+ with
              <br /> up to five other great services. And enjoy more for less.
            </h1>
            <button className="bg-black xl:py-4 lg:py-3 text-white px-6 rounded-full w-fit flex mx-auto">
              Try Apple on free
            </button>
            <a
              href="#"
              className="xl:text-xl lg:text-lg text-blue-700 mx-auto text-center"
            >
              Learn More &gt;
            </a>
          </div>
        </div>
        {/* second */}
        <div className="flex 2xl:max-w-8xl xl:max-w-7xl lg:max-w-2xl mx-auto bg-gray-100 xl:py-40 lg:py-20 xl:px-24 lg:px-12 items-center relative w-full">
          <div className="flex flex-col gap-y-8 xl:w-3/5 lg:w-2/4 left-0">
            <h1 className="2xl:text-5xl xl:text-4xl lg:text-2xl font-bold text-start">
              The Apple Music <br />
              Student Plan comes <br />
              with Apple TV+ for free.4
            </h1>
            <button className="bg-black py-4 text-white px-6 rounded-full w-fit flex font-bold ">
              Try Apple Music free
            </button>
          </div>
          <div className="bottom-0 flex absolute right-0 2xl:pr-24 xl:pr-24 lg:pr-12 ">
            <img
              src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/student_plan__bm7yp0v4tf6u_large.jpg"
              className="xl:w-full lg:w-80"
            />
          </div>
        </div>
        <div className="flex xl:gap-x-12 lg:gap-x-6 2xl:max-w-8xl xl:max-w-7xl lg:max-w-2xl mx-auto relative">
          <div className="bg-gray-100 px-8 pt-32 flex flex-col relative">
            <div className="bottom-0 flex mx-0   absolute">
              <img
                src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_4k_remote__igmcbznr1w2u_large.jpg"
                className="w-full"
              />
            </div>
            <div className="flex flex-col 2xl:gap-y-8 xl:gap-y-6 relative">
              <div className="mx-auto flex w-2/12 ">
                <img
                  src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_4k_logo__bx1mtrage32a_large.png"
                  className="w-full"
                ></img>
              </div>
              <div className="2xl:text-5xl xl:text-4xl font-bold text-center">
                <p>The Apple experience. Cinematic in every sense.</p>
              </div>
              <div className="flex justify-center items-center gap-x-8">
                <div>
                  <button className="bg-blue-700 text-white 2xl:text-lg xl:text-lg 2xl:px-8 2xl:py-4 xl:px-8 xl:py-2 rounded-full">
                    Buy
                  </button>
                </div>
                <div className="text-center 2xl:text-lg xl:text-lg text-blue-700">
                  <a href="#">Learn More &gt;</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-8 pt-32 flex flex-col relative">
            <div className="flex flex-col 2xl:gap-y-8 xl:gap-y-6 relative">
              <div className="mx-auto flex w-2/12 ">
                <h1 className="text-4xl font-semibold">AirPlay</h1>
              </div>
              <div className="2xl:text-5xl xl:text-4xl font-bold text-center">
                <p>The Apple experience. Cinematic in every sense.</p>
              </div>
              <div className="flex justify-center items-center gap-x-8">
                <div className="text-center 2xl:text-lg xl:text-lg text-blue-700 py-4">
                  <a href="#">Learn More &gt;</a>
                </div>
              </div>
            </div>
            <div className="bottom-0 flex mx-0 justify-center">
              <img
                src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/air_play__dyuvvwnd5riq_large.jpg"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
