"use client";
import { Arrow } from "../../assets/svg/icons";
import PC from "../../components/slide cards/previewcard";
function Preview() {
  const arr = [
    "https://www.apple.com/tv-pr/shows-and-films/b/boom-boom-the-world-vs-boris-becker/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Boom_Boom_World_Boris_Becker_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680742649806",
    "https://www.apple.com/tv-pr/shows-and-films/t/the-big-door-prize/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Big_Door_Prize_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680658918379",
    "https://www.apple.com/tv-pr/shows-and-films/p/platonic/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Platonic_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1684332674246",
    "https://www.apple.com/tv-pr/shows-and-films/s/see/images/season-03/show-home-graphic-header/key-art-01/4x1/Apple_TV_See_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1668041485392",
    "https://www.apple.com/tv-pr/shows-and-films/k/killers-of-the-flower-moon/images/show-home-graphic-header/Apple_TV_Killers_of_the_Flower_Moon_key_art_sh_cr.jpg",
  ];
  return (
    <div className="font-white bg-black relative overflow-hidden">
      <div className="flex justify-center py-12  h-full relative">
        <div className="z-40 absolute w-20 rotate-90 flex items-center h-full left-0">
          <Arrow color="white" />
        </div>
        <div className="flex justify-center relative gap-x-12">
          {arr.map((e, index) => {
            return <PC imglinks={e} key={index} />;
          })}
        </div>
        <div className="z-40 absolute w-20 -rotate-90 flex items-center h-full right-0">
          <Arrow color="white" />
        </div>
      </div>
    </div>
  );
}
export default Preview;
