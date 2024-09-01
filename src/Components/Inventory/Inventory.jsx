import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function Inventory() {
  return (
    <section className="w-full h-screen grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 pt-20 gap-5">
      {/* Bed */}
      <div
        className="col-start-1 col-end-3 row-start-1 row-end-2 lg:row-end-3 rounded-xl shadow flex items-end w-full py-7 px-4 sm:p-7"
        style={{
          backgroundImage: "url(/images/Bed.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <motion.span
          className="tracking-tighter cursor-pointer rounded-full px-5 py-1 bg-white/30 text-lg md:text-xl text-stone-800"
          whileHover={{ backgroundColor: "rgb(255 255 255 / 0.7)" }}
        >
          Our Beds Collection: Your Sleep Space with Comfort and style -
          Rexrosan Collection
        </motion.span>
      </div>
      {/* Sofas */}
      <div
        className="col-start-1 lg:col-start-3 col-end-3 lg:col-end-5 row-start-2 lg:row-start-1 row-end-3 lg:row-end-1 rounded-xl shadow flex items-end w-full p-7"
        style={{
          backgroundImage: "url(/images/Sofas.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <motion.span
          className="tracking-tighter  rounded-full px-5 py-1 bg-white/30 text-lg text-stone-800 cursor-pointer"
          whileHover={{ backgroundColor: "rgb(255 255 255 / 0.7)" }}
        >
          Browse Our Sofas Collection
        </motion.span>
      </div>
      {/* Tables */}
      <div
        className="col-start-1 lg:col-start-3 col-end-3 lg:col-end-4 row-start-2 row-end-3 rounded-xl shadow hidden items-end w-full p-7 lg:flex"
        style={{
          backgroundImage: "url(/images/Tables.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <motion.span
          className="tracking-tighter  rounded-full px-5 py-1 bg-white/30 text-lg text-stone-800 cursor-pointer"
          whileHover={{ backgroundColor: "rgb(255 255 255 / 0.7)" }}
        >
          Our Tables Collection
        </motion.span>
      </div>
      {/* Collections */}
      <div
        className="col-start-1 lg:col-start-4 col-end-3 lg:col-end-5 row-start-3 lg:row-start-2 row-end-4 lg:row-end-3 rounded-xl shadow flex items-end justify-center w-full p-7"
        style={{
          backgroundImage: "url(/images/Collections.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <motion.button
          className="text-stone-800 flex items-center gap-2 bg-white rounded-lg w-max px-4 py-2"
          whileTap={{ scale: 0.8 }}
        >
          <span className="tracking-tighter font-medium">
            See All Collection
          </span>
          <ArrowLongRightIcon className="size-5" />
        </motion.button>
      </div>
    </section>
  );
}

export default Inventory;
