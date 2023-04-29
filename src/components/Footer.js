import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { useIntl } from 'react-intl';

const Footer = () => {
  const intl = useIntl();
  const rights = intl.formatMessage({id:"footer.rights"});
  const main = intl.formatMessage({id:"footer.main"});
  const main2 = intl.formatMessage({id:"footer.main2"});
  const msg = intl.formatMessage({id:"footer.msg"});

  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; {rights}</span>
            <div className='flex items-center lg:py-2'>
                {main} <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                {main2}&nbsp;<Link href="/" className='underline  underline-offset-2'>LeoTolaba</Link>
            
            </div>
            <Link className='hover:underline  underline-offset-2' href="https://api.whatsapp.com/send?phone=+5401123937902&text=Hola,%20Me%20encanto%20tu%20portfolio!%20Queria%20contactarte!%20%F0%9F%92%99" target={"_blank"}>{msg}</Link>
        </Layout>
    </footer>
  )
}

export default Footer