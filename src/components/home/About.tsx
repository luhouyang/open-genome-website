import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils";
import { SectionWrapper } from "../../hoc";
import { Link } from "@tanstack/react-router";

const ServiceCard: React.FC<{ index: number; title: string; icon: string; link: string; color: string }> = ({
  index,
  title,
  icon,
  link,
  color,
}) => {
  const textColor = `text-${color.split("-")[1]}`;

  return (
    <Link
      to={link}
      className="flex-1/3 xl:max-w-[400px] lg:max-w-[350px] max-h-[350px]"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Tilt
        scale={1}
        tiltMaxAngleX={45}
        transitionSpeed={450}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className={`${color} w-full p-[1px] rounded-[20px] shadow-card`}
        >
          <div className="bg-secondary rounded-[20px] py-4 px-12 lg:min-h-[280px] sm:min-h-[250px] min-h-[200px] flex justify-evenly items-center flex-col">
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className={`${textColor} text-primary md:text-xl sm:text-lg font-bold text-center`}>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </Link>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary bg-[var(--smoke)]/10 py-2 px-4 rounded-md backdrop-blur-sm"
      >
        Open-Genome Project (OGP) is an open-source genome database for all types of AI models, using XAI techniques. We aim to
        map out areas of interest in various AI models that contribute to the skill & behaviour of AI models. Help researchers, ML
        engineers & decision makers, better understand & regulate AI development towards a safer, more useful, humanity aligned
        future.
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
