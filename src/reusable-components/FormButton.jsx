import React from 'react'

const FormButton = ({ buttonName,...props}) => {
  return (
    <div className='relative mb-6 '>
        <button {...props}
        className='w-full pr-3 py-2 rounded bg-red-500 hover:bg-red-700 text-white font-bold'
        >{buttonName}</button>
    </div>
  )
}

export default FormButton