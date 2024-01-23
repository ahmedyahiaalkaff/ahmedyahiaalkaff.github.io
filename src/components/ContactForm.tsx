'use client';
import { useEffect } from 'react';
import {useForm , SubmitHandler, UseFormRegisterReturn, FieldError} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from './Button';



const schema = yup.object({
  name: yup.string().required('Name is Required'),
  email: yup.string().email('Not a Valid Email').required('Email is Required'),
  message: yup.string().min(10, 'Message Should be At least 10 Characters').required('Message is Required')
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

  const {register, handleSubmit,
    formState: {errors}
    } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit:SubmitHandler<FormData> = (data) => console.log(data);


  return (
  <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-12 gap-y-4 items-start'>
      <FormField fieldName='name' type='text' label='Name' error={errors.name} register={register('name')} order={1} placeholder='John Smith'/>
      <FormField fieldName='email' type='email' label='Email' error={errors.email} register={register('email')} order={2} placeholder='johnSmit@example.com'/>
      <FormField fieldName='message' type='message' label='Message' error={errors.message} register={register('message')} order={3} textArea={true} placeholder='Hello from John Smith'/>
      {/* <button type="submit" className='col-start-1 col-span-4 border rounded-md p-1 max-w-32'>
        Submit
      </button> */}
      <Button label='Submit' className='col-start-1 col-span-4'/>
    </form>
  );
}

export default ContactForm;