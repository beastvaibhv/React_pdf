import React from 'react'

const ResumeTemplate2 = () => {
  return (
    <div className=" ">
       <div className='w-3/4 lg:w-40% xl:w-40% shadow-md border-2 border-black p-2 m-2 font-serif'>

        {/**Header Section -------------------------------------------------------------------------------------------------- */}
           <div className='flex flex-col items-center space-y-px'>
               <div class="z-10">
                   <h1 class="text-3xl font-bold">John Doe</h1>
               </div>

  
               <div class="z-0 mt-1 text-xs">
                   <span className='mx-1 '>+91 912XXXXXXX</span>
                   <span className='mx-1'>Dehradun, India</span>
               </div>

  
               <div class="z-0 mt-1 text-xs">
               <span className='mx-1'>Email</span>
               <span className='mx-1'>Github</span>
               <span className='mx-1'>Linkedin</span>
            </div>
        </div>

        <hr className="border-t-2 border-gray-300" />


        {/**About Section -----------------------------------------------------------------------------------------------------*/}
        <div className='my-1'>
            <h1 className="text-base font-semibold">About</h1>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem quo laudantium eos atque cupiditate iusto pariatur libero, quod, saepe error 
                voluptas a? Sunt alias dicta magnam nam modi tempore deserunt dolor ratione reiciendis enim, voluptates aliquam dolorum, ducimus autem 
                distinctio expedita, tenetur quaerat unde in odio temporibus! Repellendus, minima!</p>

        </div>

        <hr className="border-t-2 border-gray-300" />


        {/**Experience Section ------------------------------------------------------------------------------------------------*/}
        <div className='Experience'>
        <h1 className="text-base font-semibold">Experience</h1>
            <div>
                
                <div>
                    <div className='flex justify-between text-xs font-semibold'>
                        <span className=''>Frontend Developer</span>
                        <span className='font-medium'>2021-present</span>
                    </div>
                    <div className='flex justify-between text-xs'>
                        <span className=''>ABC Company</span>
                        <span>Gurugram, India</span>
                    </div>
                </div>
                <div>
                    <ul className='list-disc text-xs ps-4 my-1'>
                       <li>Developed user-friendly interface as a front-end developer at yepp.in to facilitate efficient resume creation and digital profile management.</li>
                       <li>Streamlined resume creation process, resulting in reduced time and zero user issues.</li>
                       <li>Implemented strategies to ensure seamless user experience during resume creation and digital profile management.</li>
                    </ul>

                </div>
            </div>
            <div>
                
                <div>
                    <div className='flex justify-between text-xs font-semibold'>
                        <span className=''>Intern</span>
                        <span className='font-medium'>2020-2021</span>
                    </div>
                    <div className='flex justify-between text-xs'>
                        <span className=''>XYZ Company</span>
                        <span>Bangalore, India</span>
                    </div>
                </div>
                <div>
                    <ul className='list-disc text-xs ps-4 my-1'>
                       <li>Designed basic logic gates using NGSPICE and MAGIC software.</li>
                       <li>Explored the impact of W/L ratio on CMOS devices.</li>
                    </ul>

                </div>
            </div>
            

        </div>

        <hr className="border-t-2 border-gray-300" />


        {/**Projects Section---------------------------------------------------------------------------------------------------- */}
        <div className='Project'>
            <h1 className="text-base font-semibold">Project</h1>
            <div>
                
                <div>
                    <div className=' text-xs'>
                        <h6 className='font-semibold'>Project 1</h6>
                        <h6 className='font-medium'>Technology Used</h6>
                    </div>
                </div>
                <div>
                    <ul className='list-disc text-xs ps-4 my-1'>
                       <li>Developed a React web application enabling users to browse a food menu, select items, and place orders for delivery
or pickup.</li>
                       <li>Utilized modern web development tools and frameworks including Parcel as the bundler, Tailwind CSS for styling,
Redux for state management, and React Router for navigation.</li>
                    </ul>

                </div>
            </div>
            <div>
                
                <div>
                    <div className=' text-xs'>
                        <h6 className='font-semibold'>Project 2</h6>
                        <h6 className='font-medium'>Technology Used</h6>
                    </div>
                </div>
                <div>
                    <ul className='list-disc text-xs ps-4 my-1'>
                       <li>Developed a React web application that closely emulates the features and functionality of the popular video-sharing
platform.</li>
                       <li>Integrated the YouTube Search API to fetch and display relevant video results based on user queries.</li>
                    </ul>

                </div>
            </div>
            

        </div>

        <hr className="border-t-2 border-gray-300" />


        {/**Education Section ------------------------------------------------------------------------------------*/}
        <div className='Education'>
        <h1 className="text-base font-semibold">Education</h1>
            <div>
                
                <div className='my-1'>
                    <div className='flex justify-between text-xs font-semibold'>
                        <span className=''>XYZ college</span>
                        <span className='font-medium'>2017-2021</span>
                    </div>
                    <div className='flex justify-between text-xs'>
                        <span className=''>B.Tech</span>
                        <span>Bangalore, India</span>
                    </div>
                    <div className='flex justify-between text-xs font-medium'>
                        <span className=''>8.05</span>
                        
                    </div>
                </div>

                <div className='my-1'>
                    <div className='flex justify-between text-xs font-semibold'>
                        <span className=''>ABC School</span>
                        <span className='font-medium'>2015-2017</span>
                    </div>
                    <div className='flex justify-between text-xs'>
                        <span className=''>Intermediate</span>
                        <span>Chandigarh, India</span>
                    </div>
                    <div className='flex justify-between text-xs font-medium'>
                        <span className=''>10 CGPA</span>
                        
                    </div>
                </div>
                
            </div>


        </div>

        <hr className="border-t-2 border-gray-300" />



        {/** Awards Section------------------------------------------------------------------------------------------------------- */}
        <div className='Awards'>
        <h1 className="text-base font-semibold">Awards & Achievements</h1>
            <div>
                <ul className='list-disc text-xs ps-4 my-1'>
                    <li>Completed XyZ certificate from XYZ platform</li>
                    <li> X rank  at ABC coding Competition</li>
                </ul>    
            </div>
        </div>

       </div>
    </div>
  )
}

export default ResumeTemplate2
