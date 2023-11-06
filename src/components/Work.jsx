import React from 'react'
import ThriftThreads from '../assets/THRIFTHREADS.png'
import Mixifi from '../assets/MIXIFI.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#80D1FF]'>Work</p>
            <p className='py-6'>// Check out some of my recent work</p>
        </div>

        <div style={{backgroundImage: `url(${ThriftThreads})`}}
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                {/* Hover effects */}

                <div className='opacity-0 group group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>

                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button>Demo</button>
                            </a>
                            <a href='/'>
                                <button>Code</button>
                            </a>
                        </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Work