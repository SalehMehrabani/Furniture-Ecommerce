import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Product from "./Product";

const productData = [
  {
    name: "WalnutGrace Chair",
    category: "Chair",
    price: "$1,450",
    image: "/images/Chair-1.jpg",
  },
  {
    name: "Minimalist Luxe Storage Buffet",
    category: "Table",
    price: "$2,950",
    image: "/images/Table-1.jpg",
  },
  {
    name: "Classic Harmony Sideboard",
    category: "Table",
    price: "$1,150",
    image: "/images/Table-2.jpg",
  },
  {
    name: "ChicHaven Couch",
    category: "Chair",
    price: "$1,540",
    image: "/images/Chair-2.jpg",
  },
  {
    name: "Relaxation Lounge Chair",
    category: "Chair",
    price: "$2,150",
    image: "/images/Chair-3.jpg",
  },
  {
    name: "Vertex Premium Patio Chair",
    category: "Chair",
    price: "$1,650",
    image: "/images/Chair-4.jpg",
  },
  {
    name: "Nebula Cozy Family Sofa",
    category: "Sofa",
    price: "$2,590",
    image: "/images/Sofa-1.jpg",
  },
  {
    name: "Luna Luxury Leather Couch",
    category: "Sofa",
    price: "$3,240",
    image: "/images/Sofa-2.jpg",
  },
];

function Products() {
  return (
    <section className="w-full flex flex-col gap-10 pt-20 px-2">
      {/* Header */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col gap-5">
        <motion.h2
          className="text-5xl text-stone-800 font-medium tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
        >
          Interiors by Rexrosan
        </motion.h2>
        <motion.div
          className="flex items-center gap-3 text-stone-800"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
        >
          <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <ArrowLongLeftIcon className="size-8 cursor-pointer" />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <ArrowLongRightIcon className="size-8 cursor-pointer" />
          </motion.span>
        </motion.div>
      </div>
      {/* Products */}
      <div className="flex items-center gap-3 flex-wrap justify-between w-full">
        {productData.map((item, index) => (
          <Product data={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Products;
