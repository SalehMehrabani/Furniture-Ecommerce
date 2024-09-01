import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.section
      className="w-full flex items-start justify-between px-5 py-10 gap-5 md:gap-1 md:flex-row flex-col "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
    >
      <h2 className="w-1/4 text-xl text-stone-700 tracking-tighter">
        About Us
      </h2>
      <q className="w-full md:w-3/4 text-3xl md:text-4xl text-stone-900 tracking-tight ">
        We believe quality furniture is key to a beautiful, functional home.
        With a passion for design and craftsmanship, we blend modern asethetics
        with timeless elegance.
      </q>
    </motion.section>
  );
}

export default AboutUs;
