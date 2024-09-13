import { SlideUp } from "../../animation/animate";
import { motion } from "framer-motion";
import Banner from "../../assets/banner2.png";

const Banner2 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col">
            <motion.h1
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              Simple way to make stylish living room
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              distinctio sequi quod nemo, obcaecati mollitia corporis veritatis
              minus ipsum ad?
            </motion.p>
            <motion.div
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font bold font-serif">15</p>
                <p className="text-gray-500 text-sm">Years of Experience</p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font bold font-serif">350</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font bold font-serif">34</p>
                <p className="text-gray-500 text-sm">Awards</p>
              </div>
            </motion.div>
            <div>
              <motion.button
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
          {/* Image section */}
          <div className="flex flex-col justify-center ">
            <motion.img
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              src={Banner}
              alt="banner"
              className="w-[95%]  md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;