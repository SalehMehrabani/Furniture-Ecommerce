import { motion } from "framer-motion";

function Product({ data }) {
  return (
    <motion.div
      className="h-[350px]  flex-1 rounded-xl min-w-[300px] flex flex-col justify-between cursor-pointer p-5"
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      whileHover={{
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
      }}
    >
      <span className="font-medium text-stone-800 tracking-tight bg-white/50 py-1 px-3 rounded-full w-max">
        {data.name}
      </span>
      <div className="flex items-center justify-between">
        <span className="text-stone-700 tracking-tight  text-sm bg-white/50 py-1 px-3 rounded-full w-max">
          {data.category}
        </span>
        <span className="text-stone-900 tracking-tighter text-sm bg-white/50 py-1 px-3 rounded-full w-max">
          {data.price}
        </span>
      </div>
    </motion.div>
  );
}

export default Product;
