import { motion } from "framer-motion";

function Preorder() {
  return (
    <section
      className="w-full min-h-screen h-max lg:h-[70vh] rounded-lg flex flex-col  "
      style={{
        backgroundImage: "url(/images/Preorder.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-medium w-full md:w-1/2 text-stone-800 tracking-tight pt-10 md:pt-20  px-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 0.5 }}
      >
        Craft Your Ideal Furniture Masterpieces Today
      </motion.h2>
      <motion.p
        className="w-full md:w-1/2 text-stone-700 tracking-tight pt-10 px-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 0.5 }}
      >
        Whether its a sleek wooden chair, a plush sofa, or a functional table
        with drawer, our platform offers endless possibilites. Start crafting
        your dream furniture now and bring you vison to lif!
      </motion.p>
      <div className="pt-10 px-10">
        <motion.button
          className="bg-stone-800 rounded-lg shadow text-slate-100 w-max px-5 py-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.5 }}
          whileTap={{ scale: 0.8 }}
        >
          Pre-Order Now
        </motion.button>
      </div>
    </section>
  );
}

export default Preorder;
