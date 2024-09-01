import { motion } from "framer-motion";

import AboutUs from "../../Components/AboutUs/AboutUs";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import Inventory from "../../Components/Inventory/Inventory";
import Preorder from "../../Components/Preorder/Preorder";
import Footer from "../../Components/Footer/Footer";

function Main() {
  return (
    <div className="max-w-screen-xl h-max overflow-y-auto flex flex-col mx-auto gap-5 pb-10">
      <Navbar />
      <Header />
      <AboutUs />

      {/* Status */}
      <section className="w-full flex justify-between gap-10 py-10 ">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
        >
          <span className="text-5xl font-semibold text-stone-800 px-2">
            10+
          </span>
          <span className="tracking-tight text-stone-600 text-sm">
            With a decade of expertise, Rexrosan crafts high-quality bespoke
            furnitutre that blends style and functionality.
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
        >
          <span className="text-5xl font-semibold text-stone-800 px-2">
            800+
          </span>
          <span className="tracking-tight text-stone-600 text-sm">
            Our commitment to customer satisfaction ensures we deliver
            outstanding service and products that exceed expectations.
          </span>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
        >
          <span className="text-5xl font-semibold text-stone-800 px-2">
            1200+
          </span>
          <span className="tracking-tight text-stone-600 text-sm">
            Rexrosan has crafted over 1200 unique furniture pieces, from elegant
            sofas to functional cabinets, with precision and care.
          </span>
        </motion.div>
      </section>
      {/* Status Image */}
      <motion.span
        className="relative p-2 rounded-xl w-full h-[500px] shadow-lg"
        style={{
          backgroundImage: "url(/images/Status.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
      ></motion.span>

      <Products />
      <Inventory />
      <Preorder />
      <Footer />
    </div>
  );
}

export default Main;
