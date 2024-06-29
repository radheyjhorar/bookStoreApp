import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

const ContactUs = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[40%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-xl">Contact US</h3>
            {/* FullName */}
            <div className='mt-4 space-y-2'>
              <span>Name</span><br />
              <input
                type='text'
                placeholder='Enter your name'
                className='w-full py-1 px-3 border rounded-md outline-none'
                {...register("name", { required: true })}
              />
              <br/>
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <input
                type='email'
                placeholder='Email address'
                className='w-full py-1 px-3 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Message</span><br />
              <textarea
                placeholder='Type your message'
                className='w-full py-1 px-3 border rounded-md outline-none'
                {...register("message", { required: true })}
              />
              <br/>
              {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Button */}
            <div className=' mt-4'>
              <button className='bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-700 duration-200'>
                Submit
              </button>
            </div>
          </form>
      </div> 
    </div>
  )
}

export default ContactUs