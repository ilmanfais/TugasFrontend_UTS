import React from "react";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
// img
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas pharetra aliquet euismod. Integer vel nibh velit. Sed
                ultricies id diam.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://github.com/ilmanfais/Portfolio_React_Ilman"
                  target="_blank"
                >
                  <button className="btn btn-sm text-3x1 text-white mr-4">
                    Github
                  </button>
                </a>
                <a
                  href="https://portfolio-react-ilman.vercel.app/"
                  target="_blank"
                >
                  <button className="btn btn-sm text-3x1 text-white">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://github.com/ilmanfais/maleo-uas"
                  target="_blank"
                >
                  <button className="btn btn-sm text-3x1 text-white mr-4">
                    Github
                  </button>
                </a>
                <a
                  href="https://maleo-uas.vercel.app/"
                  target="_blank"
                >
                  <button className="btn btn-sm text-3x1 text-white">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://github.com/ilmanfais/ProjectAkhirIlman_Web-Design"
                  target="_blank"
                >
                  <button className="btn btn-sm text-3x1 text-white mr-4">
                    Github
                  </button>
                </a>
                <a
                  href=""
                  target="_blank"
                >
                  <button className="btn btn-sm text-3x1 text-white">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
