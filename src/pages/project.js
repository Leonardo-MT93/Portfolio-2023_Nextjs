import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project0 from '../../public/images/projects/metaversus.webp'
import project1 from "../../public/images/projects/HotelAlura.webp";
import project2 from '../../public/images/projects/proyecto-journal.webp'
import project3 from '../../public/images/projects/proyecto-car.webp'
import project4 from "../../public/images/projects/proyecto-calendar.webp";
import project5 from '../../public/images/projects/proyecto-cuchita.webp'
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { useIntl } from "react-intl";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githubLink, btnMain }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative   dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    ">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale: 1.1}}
        transition={{duration: 0.3}}
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            {btnMain}
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectMin = ({ title, type, img, link, githubLink, btnSub }) => {
  return (
    <article className="w-full flex flex-col items justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]  bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale: 1.1}}
        transition={{duration: 0.3}}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            {btnSub}
          </Link>
          <Link href={githubLink} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  const intl = useIntl();
  const title = intl.formatMessage({id:"project.title"});
  const mainTitle = intl.formatMessage({id:"project.main"});
  const btnMain = intl.formatMessage({id:"project.btn.main"});
  const btnSub = intl.formatMessage({id:"project.btn.sub"});
  const mainTitleProject = intl.formatMessage({id:"pjt1.title"});
  const mainDesc = intl.formatMessage({id:"pjt1.desc"})
  const title2 = intl.formatMessage({id:"pjt2.title"});
  const title3 = intl.formatMessage({id:"pjt3.title"});
  const mainTitleProject2 = intl.formatMessage({id:"pjt4.title"});
  const mainDesc2 = intl.formatMessage({id:"pjt4.desc"})
  const title5 = intl.formatMessage({id:"pjt5.title"});
  const title6 = intl.formatMessage({id:"pjt6.title"});
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text={mainTitle}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={mainTitleProject}
                summary={mainDesc}
                link="https://metaversus-next13-ten.vercel.app/"
                type="NextJS 13 + Framer Motion"
                img={project0}
                githubLink="https://github.com/Leonardo-MT93/Metaversus_Next13"
                btnMain={btnMain}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectMin
                title={title2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://vimeo.com/772893200"
                type="Java + MySQL + POO"
                img={project1}
                githubLink="https://github.com/Leonardo-MT93/Hotel-Alura---OracleOne"
                btnSub={btnSub}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectMin
                title={title3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://journal-app-23.netlify.app/"
                type="React + Firebase/Firestore"
                img={project2}
                githubLink="https://github.com/Leonardo-MT93/JournalApp"
                btnSub={btnSub}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={mainTitleProject2}
                summary={mainDesc2}
                link="https://car-hub-nextjs13-app-leonardo-mt93.vercel.app/"
                type="NextJS 13 + Typescript + RapidAPI"
                img={project3}
                githubLink="https://github.com/Leonardo-MT93/CarHub-Nextjs13-App"
                btnMain={btnMain}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectMin
                title={title5}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://calendarapp-leonify.netlify.app/"
                type="MERN Stack + Redux"
                img={project4}
                githubLink="https://github.com/Leonardo-MT93/CalendarApp"
                btnSub={btnSub}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectMin
                title={title6}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://portfolio-2023-nextjs.vercel.app/"
                type="🚀Proximamente..."
                img={project5}
                githubLink="https://github.com/Leonardo-MT93/"
                btnSub={btnSub}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Project;
