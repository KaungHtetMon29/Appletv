import { Arrow, Logo } from "../assets/svg/icons";
function Footer() {
  const shopandlearn = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Visin",
    "Airpods",
    "TV & Home",
    "Air Tag",
    "Accessories",
    "Gift Card",
  ];
  const Account = ["Manage your AppleID", "Apple Store Account", "iCloud.com"];
  const Entertainment = [
    "Apple One",
    "Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Fitness+",
    "Apple News+",
    "Appl Podcasts",
    "Apple Books",
    "App Store",
  ];
  const AppleStore = [
    "Find a store",
    "Genius Bar",
    "Today at Apple",
    "Apple Camp",
    "Apple Store App",
    "Certified Refurbished",
    "Apple Trade In",
    "Financing",
    "Career Deals at Apple",
    "Order Status",
    "Shopping Help",
  ];
  const ForBusiness = ["Apple and Business", "Shop for Business"];
  const ForEducation = [
    "Apple and Education",
    "Shop For K12",
    "Shop for College",
  ];
  const ForHealth = [
    "Apple in Healthcare",
    "Health on Apple Watch",
    "Health Records on iPhone",
  ];
  const Gov = ["shop for Government", "Shop for verterans and Military"];
  const Applevalues = [
    "Accessibility",
    "Education",
    "Environment",
    "Inclusions and Diversity",
    "Privacy",
    "Racial Equity and Justice",
    "Supplier Responsibility",
  ];
  const Aboutapple = [
    "Newsroom",
    "Apple leadershiop",
    "Career Oppurtunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    "Contact Apple",
  ];
  const applewallet = ["Wallet", "Apple Card", "Apple pay", "Apple Cash"];
  const li = (arr) => {
    return arr.map((e, index) => {
      return (
        <a href="" key={index} className="hover:underline">
          {e}
        </a>
      );
    });
  };
  return (
    <div className="relative bg-gray-200 text-black ">
      <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-2xl flex flex-col justify-center mx-auto gap-y-6">
        <div className="border-b-2 border-gray-400 p-0">
          <ol className="flex flex-col gap-y-4 py-8 list-decimal pb-12 ">
            <li>
              New and qualified returning subscribers only. $6.99/month after
              free trial. Only one offer per Apple ID and only one offer per
              family if you’re part of a Family Sharing group, regardless of the
              number of devices you or your family purchases. This offer is not
              available if you or your Family have previously accepted an Apple
              TV+ three months free or one year free offer. Offer good for 3
              months after eligible device activation. Plan automatically renews
              until cancelled. Restrictions and other terms apply.
            </li>
            <li>
              One subscription per Family Sharing group. Plan automatically
              renews until cancelled.
            </li>
            <li>
              The Apple One free trial includes only services that you are not
              currently using through a free trial or a subscription. Plan
              automatically renews after trial until cancelled. Restrictions and
              other terms apply.
            </li>
            <li>
              Limited-time offer; offer may end at any time. Free Apple TV+
              access for students ends when you no longer qualify or do not
              renew your Apple Music Student subscription. Offer good for
              verified college students only and does not extend to a Family
              Sharing group.
            </li>
          </ol>
        </div>
        <div className="text-black flex flex-col gap-y-4">
          <div className="flex gap-x-3 items-center">
            <Logo text="black" />
            <div className="-rotate-90 w-6">
              <Arrow />
            </div>

            <a href="#">Only on Apple</a>
            <div className="-rotate-90 w-6">
              <Arrow />
            </div>
            <a href="#">Apple TV+</a>
          </div>
          <div className="flex xl:gap-x-16 lg:gap-x-8 xl:text-base lg:text-sm">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Shop and Learn</p>
                {li(shopandlearn)}
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Apple Wallet</p>
                {li(applewallet)}
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Account</p>
                {li(Account)}
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Entertainment</p>
                {li(Entertainment)}
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Apple Store</p>
                {li(AppleStore)}
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">For Business</p>
                {li(ForBusiness)}
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">For Education</p>
                {li(ForEducation)}
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">For Healthcare</p>
                {li(ForHealth)}
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">For Government</p>
                {li(Gov)}
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">Apple Values</p>
                {li(Applevalues)}
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">About Apple</p>
                {li(Aboutapple)}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-4 xl:border-b-2 lg:border-none border-gray-400 2xl:text-sm xl:text-sm lg:text-xs">
            <p>
              More ways to shop:{" "}
              <a href="" className="text-blue-700 underline">
                Find an Apple Store
              </a>{" "}
              or{" "}
              <a href="" className="text-blue-700 underline">
                other retailer
              </a>{" "}
              near you. Or call 1-800-MY-APPLE.
            </p>
          </div>
          <div className="pt-4 pb-8 flex xl:flex-row lg:flex-col-reverse lg:gap-y-2 2xl:gap-x-12 xl:gap-x-8 xl:text-xs 2xl:text-sm lg:text-xs">
            <div className="flex xl:flex-row lg:flex-col lg:gap-y-2">
              <div>
                <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
              </div>
              <div className="flex grow">
                <p className="2xl:pr-4 xl:pr-2 lg:pr-2">Privacy Policy</p>
                <p className="border-x-2 border-black 2xl:px-4 xl:px-2 lg:px-2">
                  Terms of Use
                </p>
                <p className="2xl:px-4 xl:px-2 lg:px-2">Sales and Refund</p>
                <p className="border-x-2 border-black 2xl:px-4  xl:px-2 lg:px-2">
                  Legal
                </p>
                <p className="2xl:pl-4 xl:pl-2 lg:pl-2">Site Map</p>
              </div>
            </div>

            <div className="lg:">
              <p>United States</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
