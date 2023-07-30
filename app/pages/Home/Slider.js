"use client";
import { motion } from "framer-motion";
import { Btn } from "../../components/Buttons/Btn";
import Card from "../../components/slide cards/Card";

function Slider(props) {
  const arr = [
    "https://www.apple.com/tv-pr/shows-and-films/b/boom-boom-the-world-vs-boris-becker/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Boom_Boom_World_Boris_Becker_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680742649806",
    "https://www.apple.com/tv-pr/shows-and-films/t/the-big-door-prize/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Big_Door_Prize_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680658918379",
    "https://www.apple.com/tv-pr/shows-and-films/p/platonic/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Platonic_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1684332674246",
    "https://www.apple.com/tv-pr/shows-and-films/s/see/images/season-03/show-home-graphic-header/key-art-01/4x1/Apple_TV_See_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1668041485392",
    "https://www.apple.com/tv-pr/shows-and-films/b/boom-boom-the-world-vs-boris-becker/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Boom_Boom_World_Boris_Becker_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680742649806",
    "https://www.apple.com/tv-pr/shows-and-films/t/the-big-door-prize/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Big_Door_Prize_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680658918379",
    "https://www.apple.com/tv-pr/shows-and-films/p/platonic/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Platonic_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1684332674246",
    "https://www.apple.com/tv-pr/shows-and-films/s/see/images/season-03/show-home-graphic-header/key-art-01/4x1/Apple_TV_See_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1668041485392",
    "https://www.apple.com/tv-pr/shows-and-films/b/boom-boom-the-world-vs-boris-becker/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Boom_Boom_World_Boris_Becker_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680742649806",
    "https://www.apple.com/tv-pr/shows-and-films/t/the-big-door-prize/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Big_Door_Prize_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680658918379",
    "https://www.apple.com/tv-pr/shows-and-films/p/platonic/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Platonic_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1684332674246",
    "https://www.apple.com/tv-pr/shows-and-films/s/see/images/season-03/show-home-graphic-header/key-art-01/4x1/Apple_TV_See_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1668041485392",
    "https://www.apple.com/tv-pr/shows-and-films/b/boom-boom-the-world-vs-boris-becker/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Boom_Boom_World_Boris_Becker_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680742649806",
    "https://www.apple.com/tv-pr/shows-and-films/t/the-big-door-prize/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Big_Door_Prize_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1680658918379",
    "https://www.apple.com/tv-pr/shows-and-films/p/platonic/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Platonic_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1684332674246",
    "https://www.apple.com/tv-pr/shows-and-films/s/see/images/season-03/show-home-graphic-header/key-art-01/4x1/Apple_TV_See_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1668041485392",
  ];
  return (
    <div className="bg-black relative flex flex-col justify-center gap-y-8 overflow-hidden py-12">
      <motion.div
        className="flex gap-x-8 flex-nowrap"
        initial={{ x: "-80%" }}
        animate={{ x: "-206%" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {arr.map((e, index) => {
          return <Card imglink={e} key={index} />;
        })}
      </motion.div>
      <motion.div
        className="flex gap-x-8 flex-nowrap"
        initial={{ x: "-80%" }}
        animate={{ x: "-206%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {arr.map((e, index) => {
          return <Card imglink={e} key={index} />;
        })}
      </motion.div>
      <div className="xl:w-1/6 lg:w-1/4 h-16 flex justify-center mx-auto">
        <Btn txt="see full lineup >" />
      </div>
    </div>
  );
}

export default Slider;
