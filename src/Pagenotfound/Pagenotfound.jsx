import React from 'react'

function Pagenotfound() {
  return (
      <div className='  mx-auto my-auto text-center h-screen bg-[#F5F5F5] w-screen'>
          
          <p className='text-[320px] '>
              404
          </p>
          <div className='flex justify-center text-center gap-4 font-wixmadefor text-2xl '>
              <p>
                Page not found   
              </p>
              <p>
              పేజీ కనుగొనబడలేదు
              </p>
              <p>
              पृष्ठ नहीं मिला
              </p>
              <p>പേജ് കണ്ടെത്താനില്ല</p>
              <p> Página no encontrada</p>
          </div>
          <button className='border rounded-xl  p-5 mt-10 hover:bg-red-300'>
              Go to main page 
          </button>
      </div>
  )
}

export default Pagenotfound