import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { useIntl } from "react-intl";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const intl = useIntl();
  const title = intl.formatMessage({id:"education.title"});
  const sub1 = intl.formatMessage({id:"edu.title1"});
  const info1 = intl.formatMessage({id:"edu.info1"});
  const sub2 = intl.formatMessage({id:"edu.title2"});
  const info2 = intl.formatMessage({id:"edu.info2"});
  const sub3 = intl.formatMessage({id:"edu.title3"});
  const info3 = intl.formatMessage({id:"edu.info3"});
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">{title}</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type={sub1}
            time="2021-2023"
            place="Facultad Regional Avellaneda (UTN)"
            info={info1}
          />
          <Details
            type={sub2}
            time="2022-2023"
            place="Greenwood Institute"
            info={info2}
          />
          <Details
            type={sub3}
            time="2022-2022"
            place="ORACLE NEXT EDUCATION"
            info={info3}
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
