import React from 'react'

const ContactCard = ({Logo,span1,para,span2,clickfunction}) => {
  return (
    <>
    <div className='sm:p-4 p-1 rounded-2xl bg-[rgba(128,128,128,0.20)] flex  justify-center items-center gap-8 m-2  '>
         {/* logo */}
        <div className='rounded-full p-1 bg-[#19d5fb] '>
       <Logo className='text-3xl text-black'/>
        </div>
          {/* another elements */}
        <div className='flex flex-1 flex-col gap-2'>
            <span className='font-bold'>{span1}</span>
            <p className='text-gray-200'>{para}</p>
            <span className='font-bold text-[#19d5fb] hover:underline' onClick={clickfunction} >{span2}</span>
        </div>
    </div>
    </>
  )
}

export default ContactCard