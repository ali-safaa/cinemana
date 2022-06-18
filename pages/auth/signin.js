import { getProviders, signIn } from 'next-auth/react'

export default function SignIn({ providers }) {
  return (
    <div className="font h-screen bg-black pt-10 text-white">
      {Object.values(providers).map((provider) => (
        <div className="grid items-center justify-center" key={provider.name}>
          <img
            className="mx-auto w-[100px]"
            src="/images/cinemana.svg"
            alt=""
          />
          <p className="text-md my-5 text-gray-400 md:text-lg">
            Welcome to the best platform to watch movies & series on cinemana
          </p>
          <button
            className="mx-auto w-max cursor-pointer rounded-md  border-0 bg-transparent px-7 py-2 text-lg font-semibold text-blue-500 duration-300 hover:border hover:border-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
