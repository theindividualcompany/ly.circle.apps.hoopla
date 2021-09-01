import React from "react"
import Head from "next/head"
import { getCsrfToken, getSession } from "next-auth/client"
import Text from "@components/Text"
export default function Login({ csrfToken }) {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center py-12">
        <img className="h-16 mx-auto" src="/assets/iconset/128@2x.png" alt="Hoopla Logo" />
        <Text variant="caption">Hoopla is free during beta.</Text>
      </div>
      <div className="bg-neutral-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <Text variant="headline">Welcome to Hoopla!</Text>
          <Text className="mt-6">Create your Hoopla account so you stop missing meetings.</Text>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 mx-2 rounded-sm sm:px-10">
            <form
              className="space-y-6 text-center"
              method="post"
              action="/api/auth/callback/credentials?callbackUrl=/">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} hidden />
              <div className="">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none w-full font-medium py-3 border-b border-t-0 border-l-0 border-r-0 border-dashed outline-none text-xl leading-none text-center leading-6 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                  />
                </div>
              </div>

              <div>
                <div className="">
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                    Password
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none w-full font-medium py-3 border-b border-t-0 border-l-0 border-r-0 border-dashed outline-none text-xl leading-none text-center leading-6 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                  />
                </div>
              </div>

              <div className="space-y-2 flex justify-center">
                <button
                  type="submit"
                  className="flex justify-center rounded-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                  <Text variant="title3">Okay, let's go</Text>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session) {
    return { redirect: { permanent: false, destination: "/" } }
  }

  return {
    props: { csrfToken: await getCsrfToken({ req: context.req }) },
  }
}
