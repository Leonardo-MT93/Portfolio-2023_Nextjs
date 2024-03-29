import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile.webp";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { useIntl } from "react-intl";

export default function Home({dir}) {

  const intl = useIntl();
  const title = intl.formatMessage({id:"home.title"});
  const mainTitle = intl.formatMessage({id:"home.main"});
  const subTitle = intl.formatMessage({id:"home.subtitle"});
  const btnResume = intl.formatMessage({id:"home.btn.resume"});
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Desarrollador fullstack especializado en el stack MERN y en constante aprendizaje. Me encuentro enfocado en brindar las mejores soluciones a los clientes y en llevar su negocio al siguiente nivel." />
        <meta name="author" content="Leonardo Manuel Tolaba" />
      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light md:items-start  xs:items-start">
        <Layout className="pt-0  md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="LeoTolaba"
                className="w-[80%] h-auto lg:hidden md:inline-block md:w-full md:pb-3  xs:pb-5 "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" 
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text={mainTitle} className="!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                {subTitle}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="/CV-LEONARDO TOLABA.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                "
                download={true}
                >{btnResume} 
                <LinkArrow className={"w-5 ml-1"}/>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
