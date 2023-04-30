import ContactForm from '@/components/ContactForm';
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React from 'react'
import { useIntl } from 'react-intl';

const Contact = () => {
  const intl = useIntl();
  const title = intl.formatMessage({id:"contact.title"});
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <ContactForm/>
    </>
  )
}

export default Contact