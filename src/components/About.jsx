import React from 'react'

const About = () => {
  return (
    <div  name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-100">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product.</p>
        <br />
        <p className="text-xl">Currently i love to work on web applications using technologies like Html, css, Javascript,React.js.</p>
       </div>
    </div>
  )
}

export default About;
