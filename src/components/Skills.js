import React from "react";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-4 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold
      "
      whileHover={{ scale: 1.15 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  const intl = useIntl();
  const title = intl.formatMessage({id:"skills.title"});
  return (
    <>
    {/* className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 */}
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 xs:text-4xl md:mb-16">{title}</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark  
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      ">
        <motion.div
          className="flex items-end justify-end rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
          lg:p-6 md:p-4 xs:text-xs xs:p-2 
          "
          whileHover={{ scale: 1.15 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="13vw" y="5vw" />
        <Skill name="React" x="0vw" y="13vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="NodeJS" x="12vw" y="-12vw" />
        <Skill name="NextJs" x="34vw" y="-5vw" />
        <Skill name="Docker" x="-25vw" y="16vw" />
        <Skill name="Github" x="0vw" y="-21vw" />
        <Skill name="TailwindCSS" x="18vw" y="16vw" />
      </div>
    </>
  );
};

export default Skills;
