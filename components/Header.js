import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

function Header() {
  const { data: session } = useSession()
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
        <select className="border-none bg-gray-800 py-1 px-3 text-white outline-none">
          <option>Arabic</option>
          <option>English</option>
        </select>
        {!session ? (
          <h4 className="cursor-pointer" onClick={() => signIn()}>
            Signin
          </h4>
        ) : (
          <img
            onClick={() => signOut()}
            className="h-[40px] w-[40px] cursor-pointer rounded-full object-cover"
            src={session?.user?.image}
            alt=""
          />
        )}
      </div>
    </div>
  )
}

export default Header
