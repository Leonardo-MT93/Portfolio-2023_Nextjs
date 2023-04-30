import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import profilePic from "../../public/images/profile/about.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { FormattedMessage, useIntl } from "react-intl";

const AnimatedNumbers = ({value}) => {

  
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});
    
    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
      springValue.on("change", (latest)=> {
        if(ref.current && latest.toFixed(0) <=  value){
            ref.current.textContent = latest.toFixed(0);
        }
      })
    }, [springValue, value])
    
    
    return <span ref={ref}></span>
}

const About = () => {

  const intl = useIntl();
  const title = intl.formatMessage({id:"about.title"});
  const main = intl.formatMessage({id:"about.main"});
  const subtitle = intl.formatMessage({id:"about.subtitle"});
  const text1 = intl.formatMessage({id:"about.text1"});
  const text2= intl.formatMessage({id:"about.text2"});
  const text3 = intl.formatMessage({id:"about.text3"});
  const client = intl.formatMessage({id:"about.client"});
  const projects = intl.formatMessage({id:"about.projects"});
  const years = intl.formatMessage({id:"about.years"});

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text={main} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {subtitle}
              </h2>
              <p className="font-medium">
                {text1}
              </p>
              <p className="my-4 font-medium">
                {text2}
              </p>
              <p className="font-medium">
                {text3}
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]  bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="LeoTolaba"
                className="w-full h-auto rounded-2xl 
                "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl "><AnimatedNumbers value={15}/>+</span><h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">{projects}</h2>
                </div>
                <div className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={10}/>+</span><h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">{client}</h2>
                </div >
                
                <div className="flex flex-col items-end justify-center xl:items-center" >
                    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl "><AnimatedNumbers value={1}/>+</span><h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">{years}</h2>
                </div>
            </div>
          </div>
        
        <Skills/>
        <Experience/>
        <Education/>
        </Layout>
      </main>
    </>
  );
};

export default About;
