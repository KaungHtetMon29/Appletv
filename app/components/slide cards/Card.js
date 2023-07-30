import { useState } from "react";
import { Btn } from "../Buttons/Btn";
import { motion } from "framer-motion";

function Card({
  imglink = "https://www.apple.com/tv-pr/shows-and-films/t/the-big-door-prize/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Big_Door_Prize_key_art_graphic_header_4_1_show_home.jpg.large.jpg",
}) {
  const [popup, setpopup] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setpopup(true);
      }}
      onMouseLeave={() => setpopup(false)}
      className={`relative flex-grow-0 flex-shrink-0 group `}
    >
      <div className="absolute w-full h-full z-10 mx-auto flex items-center justify-center overflow-hidden font-bold">
        <motion.div
          className={`h-14 w-1/3 ${popup ? "flex" : "hidden"}`}
          initial={{ y: 30, opacity: 0 }}
          animate={popup ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <Btn txt="Stream Now" />
        </motion.div>
      </div>
      <img
        src={imglink}
        className="z-0 rounded-2xl group-hover:opacity-50 relative"
        width={500}
      />
    </div>
  );
}
export default Card;
