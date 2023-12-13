import React from 'react'
import solarSystem from '../assets/solarsystem.png';
import trivia from '../assets/trivia.png';
import deskLife from '../assets/desklife.png';
import trybesmith from '../assets/trybesmith.jpg';
import todolist from '../assets/todolist.png';
import starWars from '../assets/star-wars.png';


const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 flex flex-col justify-center items-center'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* {Grid Item} */}
          <div 
          style={{backgroundImage: `url(${solarSystem})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* {"Hover Effects"} */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                Solar System
              </span>
              <div className='pt-8 text-center'>
                <a href="https://thierrydrmv.github.io/Solar-System/" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/thierrydrmv/Solar-System" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div 
          style={{backgroundImage: `url(${trivia})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* {"Hover Effects"} */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                Trivia
              </span>
              <div className='pt-8 text-center'>
                <a href="https://trivia-three-theta.vercel.app/" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/thierrydrmv/trivia" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div 
          style={{backgroundImage: `url(${deskLife})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* {"Hover Effects"} */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                DeskLife
              </span>
              <div className='pt-8 text-center'>
                <a href="https://thierrydrmv.github.io/DeskLife/" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/thierrydrmv/DeskLife" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div 
          style={{backgroundImage: `url(${todolist})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* {"Hover Effects"} */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                Docker to do list
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/thierrydrmv/docker-todo-list" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div 
          style={{backgroundImage: `url(${trybesmith})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* {"Hover Effects"} */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                Trybesmith
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/thierrydrmv/trybesmith" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div 
          style={{backgroundImage: `url(${starWars})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* {"Hover Effects"} */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                StarWars
              </span>
              <div className='pt-8 text-center'>
                <a href="https://star-wars-sepia-omega.vercel.app/" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/thierrydrmv/star-wars" target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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