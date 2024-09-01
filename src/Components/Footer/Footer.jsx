import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="w-full mt-20 flex flex-col border-t border-gray-400 pt-10 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
    >
      {/* Top Part */}
      <div className="w-full flex justify-between items-start gap-20 pb-20 border-b border-gray-400 px-5">
        {/* Sections */}
        <div className="w-2/3 flex gap-5 items-start justify-between">
          {/* Locations */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-stone-800 tracking-tight font-medium">
              Locations:
            </h3>
            <div className="flex flex-col gap-1  tracking-tight text-stone-700">
              <span>Rexrosan Furniture Store 123</span>
              <span>Harmony Street, Suite 245</span>
              <span>Germany, 12345</span>
            </div>
          </div>
          {/* Contact Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-stone-800 tracking-tight font-medium">
              Contact US:
            </h3>
            <div className="flex flex-col gap-1  tracking-tight text-stone-700">
              <span>Phone: +98 9303369912</span>
            </div>
          </div>
          {/* Email*/}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-stone-800 tracking-tight font-medium">
              Email:
            </h3>
            <div className="flex flex-col gap-1  tracking-tight text-stone-700">
              <span>For Purchase: SalehMehrabani.business@gmail.com</span>
              <span>For Support: SalehMehrabani.business@gmail.com</span>
            </div>
          </div>
        </div>
        {/* News Latter */}
        <div className="w-1/3 flex flex-col gap-5">
          <h3 className="text-3xl font-semibold text-stone-900 tracking-tight">
            Sign up for our newsletter
          </h3>
          <div className="flex gap-5 items-center justify-between border border-gray-400 rounded-lg p-1 shadow pl-5">
            <input
              type="text"
              placeholder="Enter email address"
              className="outline-none border-none bg-white placeholder:font-normal placeholder:text-stone-600 placeholder:tracking-tight text-stone-800 tracking-tight p-3"
            />
            <button className="bg-stone-800 text-slate-100 px-10 py-2 rounded-xl">
              Enter
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="w-full flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <SocialIcon
            url="https://www.linkedin.com/in/amirsaleh-naderzadeh-mehrabani/"
            bgColor="#9ca3af"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            url="https://www.youtube.com/@SalehMehrabani"
            bgColor="#9ca3af"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
        </div>
        <p className="text-sm text-stone-600 tracking-tight">
          Copyright 2024, All Right Reserved
        </p>
        <p className="text-sm text-stone-600 tracking-tight">
          Terms & Conditions
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
