import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 'name='contact'>
    
    <form action="https://getform.io/f/94ac69dc-6aab-43fa-9d90-0de3f03b0d10" method='POST' className='flex flex-col max-w-[600px] w-full h-full'>
    <div className='pb-8'>
    <p className='text-3xl font-bold border-b-4 border-pink-600 inline text-white'>
        Contact
    </p>
    <p className='py-4 text-gray-400'>Send me an Email at - <strong className='text-white'> Umushtaq159@gmail.com  </strong>to get Started </p>


    </div>
    <input type="text"
    placeholder='name'
    name='name'
    className='bg-[#ccd6f6]'
    />
       <input type="email"
    placeholder='email'
    name='email'
    className='my-4 p-2 bg-[#ccd6f6]'
    />

    <textarea name="message" className='bg-[#ccd6f6] p-2' placeholder='Message'  rows="10"></textarea>
    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex item-center' type='submit'>Lets Collabrate</button>
    </form>
    
    </div>
  )
}

export default Contact