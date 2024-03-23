import React from 'react'
import { Link } from 'react-router-dom'
import Chart from './Chart'
import Chart2 from './Chart2'

function Mid() {
  return (
    <div>
    <section className="bg-gray-50 light:bg-gray-800">
    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg light:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 light:text-white">Work with tools you already use</h2>
                <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                
                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 light:border-gray-700">
                    <li className="flex space-x-3">
                       
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Continuous integration and deployment</span>
                    </li>
                    <li className="flex space-x-3">
                       
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Development workflow</span>
                    </li>
                    <li className="flex space-x-3">
                     
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Knowledge management</span>
                    </li>
                </ul>
                <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
            </div>
            {/** this is chart
            <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="../src/assets/images/feature-1.png" alt="dashboard feature image" />
  */}

  
  <Chart />

        </div>
        
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <Chart2 />
            <div className="text-gray-500 sm:text-lg light:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 light:text-white">We invest in the world’s potential</h2>
                <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
               
                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 light:border-gray-700">
                    <li className="flex space-x-3">
                       
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Dynamic reports and dashboards</span>
                    </li>
                    <li className="flex space-x-3">
                        
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Templates for everyone</span>
                    </li>
                    <li className="flex space-x-3">
                        
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Development workflow</span>
                    </li>
                    <li className="flex space-x-3">
                        
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Limitless business automation</span>
                    </li>
                    <li className="flex space-x-3">
                        
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 light:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-medium leading-tight text-gray-900 light:text-white">Knowledge management</span>
                    </li>
                </ul>
                <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
            </div>
        </div>
    </div>
  </section>



  <section className="bg-white light:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div className="col-span-2 mb-8">
                <p className="text-lg font-medium text-purple-600 light:text-purple-500">Trusted Worldwide</p>
                <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl light:text-white">Trusted by over 600 million users and 10,000 teams</h2>
                <p className="font-light text-gray-500 sm:text-xl light:text-gray-400">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
                <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 light:border-gray-700">
                    <div>
                      <Link to="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 light:text-purple-500 light:hover:text-purple-700">
                        Explore Legality Guide
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                    </div>
                    <div>
                      <Link to="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 light:text-purple-500 light:hover:text-purple-700">
                          Visit the Trust Center
                          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                      </div>
                </div>
            </div>
            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 light:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold light:text-white">99.99% uptime</h3>
                    <p className="font-light text-gray-500 light:text-gray-400">For Landwind, with zero maintenance downtime</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 light:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold light:text-white">600M+ Users</h3>
                    <p className="font-light text-gray-500 light:text-gray-400">Trusted by over 600 milion users around the world</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 light:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold light:text-white">100+ countries</h3>
                    <p className="font-light text-gray-500 light:text-gray-400">Have used Landwind to create functional websites</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 light:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold light:text-white">5+ Million</h3>
                    <p className="font-light text-gray-500 light:text-gray-400">Transactions per day</p>
                </div>
            </div>
        </div>
      </section>


    <section className="bg-gray-50 light:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
                <svg className="h-12 mx-auto mb-3 text-gray-400 light:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <blockquote>
                    <p className="text-xl font-medium text-gray-900 md:text-2xl light:text-white">"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" /> 
                    <div className="flex items-center divide-x-2 divide-gray-500 light:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 light:text-white">Micheal Gough</div>
                        <div className="pl-3 text-sm font-light text-gray-500 light:text-gray-400">CEO at Google</div>
                    </div>
                </figcaption>
            </figure>
        </div>
      </section>



      <section className="bg-white light:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 light:text-white">Designed for business teams like yours</h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl light:text-gray-400">Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              
              <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow light:border-gray-600 xl:p-8 light:bg-gray-800 light:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                  <p className="font-light text-gray-500 sm:text-lg light:text-gray-400">Best option for personal use & for your next project.</p>
                  <div className="flex items-baseline justify-center my-8">
                      <span className="mr-2 text-5xl font-extrabold">$29</span>
                      <span className="text-gray-500 light:text-gray-400">/month</span>
                  </div>
                 
                  <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Team size: <span className="font-semibold">1 developer</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                        
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Premium support: <span className="font-semibold">6 months</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Free updates: <span className="font-semibold">6 months</span></span>
                      </li>
                  </ul>
                  <Link to="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:text-white  light:focus:ring-purple-900">Get started</Link>
              </div>
             
              <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow light:border-gray-600 xl:p-8 light:bg-gray-800 light:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Company</h3>
              <p className="font-light text-gray-500 sm:text-lg light:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div className="flex items-baseline justify-center my-8">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-gray-500 light:text-gray-400">/month</span>
              </div>
             
                
                  <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                          
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Team size: <span className="font-semibold">10 developers</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Premium support: <span className="font-semibold">24 months</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Free updates: <span className="font-semibold">24 months</span></span>
                      </li>
                  </ul>
                  <Link to="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:text-white  light:focus:ring-purple-900">Get started</Link>
              </div>
              
              <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow light:border-gray-600 xl:p-8 light:bg-gray-800 light:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                  <p className="font-light text-gray-500 sm:text-lg light:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                  <div className="flex items-baseline justify-center my-8">
                      <span className="mr-2 text-5xl font-extrabold">$499</span>
                      <span className="text-gray-500 light:text-gray-400">/month</span>
                  </div>
                
                  <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                        
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Individual configuration</span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>No setup, or hidden fees</span>
                      </li>
                      <li className="flex items-center space-x-3">
                         
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Team size: <span className="font-semibold">100+ developers</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                          
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Premium support: <span className="font-semibold">36 months</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                          
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 light:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          <span>Free updates: <span className="font-semibold">36 months</span></span>
                      </li>
                  </ul>
                  <Link to="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:text-white  light:focus:ring-purple-900">Get started</Link>
              </div>
          </div>
      </div>
    </section>




    <section className="bg-white light:bg-gray-900">
    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl light:text-white">Frequently asked questions</h2>
        <div className="max-w-screen-md mx-auto">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white light:bg-gray-900 text-gray-900 light:text-white" data-inactive-classes="text-gray-500 light:text-gray-400">
                <h3 id="accordion-flush-heading-1">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 light:border-gray-700 light:bg-gray-900 light:text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                        <span>Can I use Landwind in open-source projects?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                    <div className="py-5 border-b border-gray-200 light:border-gray-700">
                        <p className="mb-2 text-gray-500 light:text-gray-400">Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                        <p className="text-gray-500 light:text-gray-400">Check out this guide to learn how to <Link to="#" className="text-purple-600 light:text-purple-500 hover:underline">get started</Link> and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </div>
                </div>
                <h3 id="accordion-flush-heading-2">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 light:border-gray-700 light:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                        <span>Is there a Figma file available?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                    <div className="py-5 border-b border-gray-200 light:border-gray-700">
                        <p className="mb-2 text-gray-500 light:text-gray-400">Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                        <p className="text-gray-500 light:text-gray-400">Check out the <Link to="#" className="text-purple-600 light:text-purple-500 hover:underline">Figma design system</Link> based on the utility classes from Tailwind CSS and components from Landwind.</p>
                    </div>
                </div>
                <h3 id="accordion-flush-heading-3">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 light:border-gray-700 light:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                        <span>What are the differences between Landwind and Tailwind UI?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                    <div className="py-5 border-b border-gray-200 light:border-gray-700">
                        <p className="mb-2 text-gray-500 light:text-gray-400">The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                        <p className="mb-2 text-gray-500 light:text-gray-400">However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                        <p className="mb-2 text-gray-500 light:text-gray-400">Learn more about these technologies:</p>
                        <ul className="pl-5 text-gray-500 list-disc light:text-gray-400">
                            <li><Link to="#" className="text-purple-600 light:text-purple-500 hover:underline">Landwind Pro</Link></li>
                            <li><Link to="#" className="text-purple-600 light:text-purple-500 hover:underline">Tailwind UI</Link></li>
                        </ul>
                    </div>
                </div>
                <h3 id="accordion-flush-heading-4">
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 light:border-gray-700 light:text-gray-400" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                        <span>What about browser support?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                    <div className="py-5 border-b border-gray-200 light:border-gray-700">
                        <p className="mb-2 text-gray-500 light:text-gray-400">The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                        <p className="mb-2 text-gray-500 light:text-gray-400">However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                        <p className="mb-2 text-gray-500 light:text-gray-400">Learn more about these technologies:</p>
                        <ul className="pl-5 text-gray-500 list-disc light:text-gray-400">
                            <li><Link to="#" className="text-purple-600 light:text-purple-500 hover:underline">Landwind Pro</Link></li>
                            <li><Link to="#" className="text-purple-600 light:text-purple-500 hover:underline">Tailwind UI</Link></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>               
    </div>
</section>



<section className="bg-gray-50 light:bg-gray-800">
<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
    <div className="max-w-screen-sm mx-auto text-center">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 light:text-white">Start your free trial today</h2>
        <p className="mb-6 font-light text-gray-500 light:text-gray-400 md:text-lg">Try Landwind Platform for 30 days. No credit card required.</p>
        <Link to="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 light:bg-purple-600 light:hover:bg-purple-700 focus:outline-none light:focus:ring-purple-800">Free trial for 30 days</Link>
    </div>
</div>
</section>


    </div>
  )
}

export default Mid
