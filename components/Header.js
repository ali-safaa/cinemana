import React from 'react'

function Header() {
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <div className="flex items-center">
        <img className="w-[40px]" src="/images/cinemana.svg" alt="" />
        <i className="fas fa-bars ml-5 inline-flex md:hidden"></i>
        <div className="ml-8 hidden items-center space-x-5 md:inline-flex">
          <h4 className="cursor-pointer duration-300 hover:text-blue-500">
            HOME
          </h4>
          <h4 className="cursor-pointer duration-300 hover:text-blue-500">
            NEW RELEASES
          </h4>
          <h4 className="cursor-pointer duration-300 hover:text-blue-500">
            POPLUAR
          </h4>
          <h4 className="cursor-pointer duration-300 hover:text-blue-500">
            MOVIES
          </h4>
          <h4 className="cursor-pointer duration-300 hover:text-blue-500">
            SERIES
          </h4>
          <h4 className="cursor-pointer duration-300 hover:text-blue-500">
            ANIME
          </h4>
        </div>
      </div>
      <div className=" hidden w-[300px] items-center space-x-3 rounded-md bg-gray-700 py-3 pl-5 md:inline-flex">
        <i className="fas fa-search"></i>
        <input
          className="w-[300px] border-none bg-transparent text-white outline-none placeholder:text-white"
          type="text"
          placeholder="Search movie & series"
        />
      </div>
      <div className="ml-5 flex items-center space-x-3">
        <h4>arabic</h4>
        <img
          className="h-[40px] w-[40px] rounded-full object-cover"
          src="https://images.pexels.com/photos/9940538/pexels-photo-9940538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
    </div>
  )
}

export default Header
