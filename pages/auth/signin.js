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
          <h3 className="my-5 w-[220px] text-sm md:w-[300px] md:text-lg">
            Welcome signin to watch best movies & series on platform cinemana
          </h3>
          <button
            className="mx-auto w-max cursor-pointer border-none bg-blue-500 px-7 py-2 text-lg font-semibold text-white md:text-xl"
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
