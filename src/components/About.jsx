import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] h-screen w-full text-amber-100'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[100px] w-full grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <span className='text-4xl font-bold inline border-b-4 border-amber-400'>
                    About
                </span>
            </div>
            <div></div>  {/*EMpty grid space */}      
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deleniti!</p>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius rem, placeat expedita deleniti veritatis tempora consequuntur itaque voluptatem nihil reiciendis pariatur esse, voluptates assumenda harum! Impedit perferendis laborum doloribus nisi nesciunt labore dicta nihil laudantium aut. Sunt facere provident exercitationem assumenda nam eos perspiciatis optio, autem hic atque aspernatur enim fugiat velit. Aspernatur, impedit consequatur. Quis eum unde blanditiis?
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
