import React from "react"
import Head from "@components/_head"
import Text from "@components/Text"
import NextImage from "next/image"
import dayjs from "dayjs"
import Link from "next/link"

export const Landing = () => {
  const Header = ({}) => {
    return (
      <section className="relative w-full">
        <div className="pt-8 text-black">
          <header className="header">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 space-x-2 flex items-center">
                <img
                  className="block h-8 w-auto"
                  src="/assets/iconset/64.png"
                  alt="Hoopla Logo"
                />
                <Text variant="headline" className="font-black ">
                  Hoopla
                </Text>
              </div>
            </div>

            <div className="relative z-10 ml-4 flex items-center space-x-4">
              <Link href="/auth/login">
                <a className="">
                  <Text className="font-bold">Log in</Text>
                </a>
              </Link>
              <Link href="/auth/signup">
                <a className="button button__round button__lg">
                  <Text className="font-bold">Try it FREE</Text>
                </a>
              </Link>
            </div>
          </header>
        </div>
      </section>
    )
  }

  const Main = () => {
    return (
      <main className="space-y-16 px-4 sm:px-8 lg:px-16 py-8 max-w-4xl mx-auto relative">
        <div className="sticky-note">
          <p>
            Meeting <b>TODAY</b>
          </p>
          <p> at {dayjs().format("h:mm a")}</p>
        </div>
        <section className="space-y-6">
          <Text variant="headline">Stop Missing Meetings</Text>
          <section className="mb-32">
            <blockquote className="letter mb-8">
              <Text className="mb-8">Here's the gist-</Text>
              <Text className="mb-4">I’m Femi.</Text>
              <Text className="mb-4">This app is so you stop missing meetings.</Text>
              <Text className="mb-4">
                I'm an iPhone user. I'm <strong>always</strong>, <em>literally always</em>, on Do
                Not Disturb.
              </Text>
              <Text className="mb-4">
                So I be missing a bunch of ****** meetings because Apple thinks it's wise to cancel
                my calendar notifications too.
              </Text>
              <Text className="mb-4">I get it. But then again I don't.</Text>
              <Text className="mb-4">
                I built this app that will text me when I have a meeting.
              </Text>
              <Text className="mb-4">
                Yes, you'll get a notification. Your phone'll vibrate, play sound, whatever. Even if
                you're on DND.
              </Text>
              <Text className="mb-4">
                Shout out to this guy <a href="https://mthomas.co.uk">Mike</a>, blogging just to
                blog, for helping me figure this out.{" "}
              </Text>
              <section className="mb-4">
                <Text className="mb-1">
                  Anyhow, <s>for $12/year</s> free during beta Hoopla will send you a text anytime
                  you have a meeting.
                </Text>
                <Text variant="caption">
                  If you have a Circlely Official Account Hoopla is free.
                </Text>
              </section>
              <div className="flex align-center items-center space-x-2">
                <Text>- Femi</Text>
                <NextImage
                  className="rounded-full"
                  src="/assets/femyeda.png"
                  width={40}
                  height={40}
                  layout="fixed"
                />
              </div>
            </blockquote>
          </section>
        </section>
      </main>
    )
  }

  return (
    <div>
      <Head />
      <Header />
      <Main />
    </div>
  )
}

export default Landing
