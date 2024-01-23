'use client';
import { useEffect, useState } from 'react';
import {useForm , SubmitHandler, UseFormRegisterReturn, FieldError} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from './Button';



const schema = yup.object({
  name: yup.string().required('Name is Required'),
  email: yup.string().email('Not a Valid Email').required('Email is Required'),
  message: yup.string()
              .min(10, 'Message Should be At least 10 Characters')
              .max(255, 'Message Should not exceed 255 characters')
              .required('Message is Required'),
  access_key: yup.string().required()
}).required();
type FormData = yup.InferType<typeof schema>;

const FormField = ({fieldName, label, type, error, register, order, textArea, placeholder}:
  {
    fieldName: string,
    label: string,
    type: string,
    error?: FieldError,
    register: UseFormRegisterReturn,
    order: number
    textArea?: boolean,
    placeholder?: string,
  }) => {
  return (
    <>
      <label htmlFor={fieldName} className={`col-start-1 col-span-12`}>{label}:
      </label>
      <div className={`col-start-1 col-span-10 sm:col-span-6 text-slate-950`}>
        {!textArea && <input id={fieldName} type={type} {...register} className='w-full border border-slate-950 p-1 rounded-sm placeholder:text-gray-400' placeholder={placeholder}/>}
        {textArea && <textarea rows={5} id={fieldName} {...register} className='w-full border border-slate-950 p-1 rounded-sm placeholder:text-gray-400' placeholder={placeholder}/>}
        <p className='text-red-400'>{error?.message}</p>
      </div>
    </>
  );
}


const ContactForm = () => {

  const {register, handleSubmit, reset, 
    formState: {errors, isSubmitting, isSubmitSuccessful}
    } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit:SubmitHandler<FormData> = (data, e) => {
    setMessage('');
    setIsError(false);
    return new Promise(async (resolve, reject) => {
      try{
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(data, null, 2),
        })
        const json = await response.json();
        if (json.success) {
          e?.target.reset();
          reset();
          setMessage('Thank you For Contacting')
          resolve(json.success);
          setIsError(false);
        } else {
          setMessage(json.message);
          resolve(json.message);
          setIsError(true);
        }
      }catch(error:any){
        resolve(error?.message);
        setIsError(true);
      }
    });
  }


  return (
  <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-12 gap-y-4 items-start'>
      <FormField fieldName='name' type='text' label='Name' error={errors.name} register={register('name')} order={1} placeholder='John Smith'/>
      <FormField fieldName='email' type='email' label='Email' error={errors.email} register={register('email')} order={2} placeholder='johnSmit@example.com'/>
      <FormField fieldName='message' type='message' label='Message' error={errors.message} register={register('message')} order={3} textArea={true} placeholder='Hello from John Smith'/>
      {/* <button type="submit" className='col-start-1 col-span-4 border rounded-md p-1 max-w-32'>
        Submit
      </button> */}
      <input type='checkbox' name='robot' defaultChecked={false} hidden/>
      <input type="hidden" {...register('access_key')} value="f5a32584-04f0-4ae1-a925-8429eb3865e3"></input>
      <Button label='Submit' className='col-start-1 col-span-4 disabled:bg-gray-400' disabled={isSubmitting}/>
      <div className={`col-start-1 col-span-4 ${isError?'text-red-500':''}`}>
        <p>{message && message}</p>
      </div>
    </form>
  );
}

export default ContactForm;