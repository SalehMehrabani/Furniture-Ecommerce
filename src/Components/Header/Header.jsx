import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function Header() {
  const headerWords = [
    "Discover",
    "Comfort,",
    "Style,",
    "and",
    "Quality",
    "Craftsmapships",
  ];
  return (
    <header
      className="relative p-2 rounded-xl w-full min-h-screen h-max md:h-screen flex flex-col gap-10 shadow-lg"
      style={{
        backgroundImage: "url(/images/Header.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex item-center w-full md:w-3/4 px-4 md:px-10 md:pt-10 pt-5  gap-2 sm:gap-4 text-stone-800 font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight md:break-normal break-words flex-wrap">
        {headerWords.map((item, index) => (
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: index / 4 }}
            key={index}
          >
            {item}
          </motion.span>
        ))}
      </div>
      <motion.p
        className="px-4 md:px-10 w-full md:w-3/4 text-lg tracking-tight text-stone-800 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
      >
        Our furniture embodies a perfect blend of functionality and aesthetic
        appeal, ensuring every piece enhance your home with enduring elegance
        and superior durability
      </motion.p>
      <div className="sm:px-10 sm:py-0 p-4">
        <motion.button
          className="bg-stone-800 px-4 md:px-6 py-2 rounded-lg w-max tracking-tight hover:bg-stone-900 transition-colors text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileTap={{ scale: 0.8 }}
        >
          Join Membership
        </motion.button>
      </div>
      <span className=" absolute bottom-5 left-1/2 -translate-x-1/2 p-4 border border-slate-100 rounded-full text-slate-100 w-max hover:bg-white hover:text-stone-800 transition-colors cursor-pointer">
        <ArrowLongDownIcon className="size-8 font-bold" />
      </span>
    </header>
  );
}

export default Header;
