import React, { useRef, useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import emailjs from '@emailjs/browser';
import AnimatedText from './AnimatedText';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

const ContactForm = () => {
    const intl = useIntl();
    const {locale} = useRouter();
    const main = intl.formatMessage({id:"contact.main"});
    const name = intl.formatMessage({id:"form.name"});
    const subject = intl.formatMessage({id:"form.subject"});
    const inputName = intl.formatMessage({id:"form.msg.name"});
    const inputSubject = intl.formatMessage({id:"form.msg.subject"});
    const inputMsg = intl.formatMessage({id:"form.msg.msg"});
    const msg = intl.formatMessage({id:"form.msg"});
    const btn = intl.formatMessage({id:"form.btn"});
    const [formEnviado, setFormEnviado] = useState(false);
    const form = useRef();
    
  return (
    <>
    <Formik
    initialValues={{
        user_name: '',
        user_tittle: '',
        user_email: '',
        user_message: '',
    }}
    validate={(valores)=>{
        let errores = {};
        console.log(locale)
        if(locale === 'es'){
            
            if(!valores.user_name){
            
                errores.user_name = 'Ingrese un nombre. Mín 3 caract.';
            }else if(!/[a-zA-Z][a-zA-Z ]/.test(valores.user_name)){
                errores.user_name = 'Sólo inserte letras y espacios';
            }
            if(!valores.user_tittle){
                errores.user_tittle = 'Ingrese el asunto del mensaje';
            }
            if(!valores.user_email){
                errores.user_email = 'Ingrese un email válido';
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.user_email)){
                errores.user_email = 'Email inválido';
            }
            if(!valores.user_message){
                errores.user_message = 'Ingrese un mensaje.';
            }else if((valores.user_message).length < 6){
                errores.user_message = 'Mensaje muy corto. Caracteres mínimos: 6';
            }
        }else{
            
            if(!valores.user_name){
            
                errores.user_name = 'Enter a name. Min 3 characters.';
            }else if(!/[a-zA-Z][a-zA-Z ]/.test(valores.user_name)){
                errores.user_name = 'Only enter letters and spaces';
            }
            if(!valores.user_tittle){
                errores.user_tittle = 'Enter the message subject.';
            }
            if(!valores.user_email){
                errores.user_email = 'Enter a valid email';
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.user_email)){
                errores.user_email = 'Enter a valid email';
            }
            if(!valores.user_message){
                errores.user_message = 'Enter a message.';
            }else if((valores.user_message).length < 6){
                errores.user_message = 'Message too short. Minimum characters: 6.';
            }
        }
        

        return errores;
    }}
    onSubmit={(valores, {resetForm})=>{
        resetForm();
        setFormEnviado(true);
        setTimeout(() => {
            setFormEnviado(false)
        }, 3000);
        
      emailjs.sendForm('service_6n0izp8', 'template_qtvsiqo', form.current, 'F9UhVcH9FxUryBicv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }}
    >
        {({values, handleBlur})=>(
            <div className='w-full flex flex-col justify-center items-center min-h-[70vh] px-6'>
                <AnimatedText text={main} className="!text-6xl !text-center 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
                <Form className='flex w-[50%] flex-col items-center min-h-[70vh]  lg:w-[95%] sm:w-[80%] sm:pt-3 xs:w-[95%] xs:pt-5' ref={form} >   
            <div className='flex w-[85%] flex-col pl-10   sm:pl-0   xs:pl-0 '>
                <label className='w-full flex justify-start text-lg lg:text-base md:text-sm dark:text-light ' htmlFor='name'>{name} </label>
                <Field type="text" className="w-[95%] flex h-14 border rounded-2xl px-5 border-black dark:border-light  dark:text-light dark:bg-dark " id="name" name='user_name' placeholder={inputName}  value={values.user_name} onBlur={handleBlur}/>
                <div className='w-full h-7'>
                <ErrorMessage className='flex justify-start text-red-600 text-sm' name='user_name' component='div'></ErrorMessage>
                </div>
            </div>
            <div className='flex w-[85%] flex-col pl-10   sm:pl-0   xs:pl-0 '>
                <label className='w-full flex justify-start text-lg lg:text-base md:text-sm dark:text-light' htmlFor='tittle'>{subject} </label>
                <Field type="text" className="w-[95%] flex h-14 border rounded-2xl px-5 border-black dark:border-light  dark:text-light dark:bg-dark" id="tittle" name='user_tittle' placeholder={inputSubject}  value={values.user_tittle} onBlur={handleBlur}/>
                <div className='w-full h-7'>
                <ErrorMessage className='flex justify-start text-red-600 text-sm' name='user_tittle' component='div'></ErrorMessage>
                </div>

            </div>
            <div className='flex w-[85%] flex-col pl-10   sm:pl-0   xs:pl-0 '>
                <label className='w-full flex justify-start text-lg lg:text-base md:text-sm dark:text-light' htmlFor='email'>Email: </label>
                <Field type="email" className="w-[95%] flex h-14 border rounded-2xl px-5 border-black dark:border-light  dark:text-light dark:bg-dark" id="email" name='user_email' placeholder="name@example.com"  value={values.user_email} onBlur={handleBlur}/>
                <div className='w-full h-7'>
                <ErrorMessage className='flex justify-start text-red-600 text-sm' name='user_email' component='div'></ErrorMessage>

                </div>
            </div>
            <div className='flex w-[85%] flex-col pl-10   sm:pl-0   xs:pl-0 '>
                <label className='w-full flex justify-start text-lg lg:text-base md:text-sm dark:text-light' htmlFor='message'>{msg} </label>
                <Field className="w-[95%] flex h-25 border rounded-2xl pt-2 px-5 border-black dark:border-light  dark:text-light dark:bg-dark" as="textarea" id="message" rows="3" placeholder={inputMsg}  name='user_message' value={values.user_message} onBlur={handleBlur}/>
                <div className='w-full h-7'>
                <ErrorMessage className='flex justify-start text-red-600 text-sm' name='user_message' component='div'></ErrorMessage>

                </div>
            </div>
            <div className="flex items-center justify-center mt-2 lg:self-center">
                <button type="submit" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                "
                >
                    {btn}
                </button>
            </div>
            {formEnviado && 
            <p className='flex justify-start text-green-500 text-sm'>Formulario enviado con éxito!</p>}
            </Form>
            </div>
            
        )
        }   
    </Formik>    
    </>
  )
}

export default ContactForm