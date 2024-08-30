import {
  UserIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

function Navbar() {
  return (
    <section className="w-full flex flex-col">
      <nav className="w-full flex items-center justify-between py-5 text-stone-900 px-1">
        <motion.h2
          className="capitalize text-2xl cursor-pointer font-semibold tracking-tighter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          Rexrosan.
        </motion.h2>
        <motion.ul
          className="flex items-center gap-5 tracking-tight "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
        >
          <motion.li
            className="hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            Furniture
          </motion.li>
          <motion.li
            className="hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            Outdoor
          </motion.li>
          <motion.li
            className="hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            Lighting
          </motion.li>
          <motion.li
            className="hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            Dinning
          </motion.li>
          <motion.li
            className="hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            Bathrooms
          </motion.li>
          <motion.li
            className="hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            Mirror & Decors
          </motion.li>
        </motion.ul>
        <motion.div
          className="flex items-center gap-5 font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
        >
          <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
            <MagnifyingGlassIcon className="size-5 cursor-pointer" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
            <HeartIcon className="size-5 cursor-pointer" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
            <ShoppingBagIcon className="size-5 cursor-pointer" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
            <UserIcon className="size-5 cursor-pointer" />
          </motion.button>
        </motion.div>
      </nav>
      <span className="w-full h-[1px] bg-gray-400 rounded-lg"></span>
    </section>
  );
}

export default Navbar;
