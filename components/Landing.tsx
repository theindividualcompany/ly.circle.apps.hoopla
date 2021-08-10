import React from "react"
import Head from "@components/_head"
import Text from "@components/Text"
import NextImage from "next/image"
import dayjs from "dayjs"
import useTypeform from "../lib/TypeForm/useTypeform"
import Link from "next/link"

export const Landing = () => {
  useTypeform()
  const Header = ({}) => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false)
    const toggleMenu = () => {
      setIsProfileMenuOpen(!isProfileMenuOpen)
    }

    const ProfileMenu = ({ isOpen }) => {
      if (!isOpen) {
        return null
      }
      return (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0">
            Your Profile
          </a>

          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1">
            Settings
          </a>

          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2">
            Sign out
          </a>
        </div>
      )
    }

    return (
      <section className="relative w-full">
        <div className="pt-8 text-black">
          <header className="header">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 space-x-2 flex items-center">
                <img
                  className="block h-24 w-auto"
                  src="/assets/iconset/512.png"
                  alt="Hoopla Logo"
                />
                <Text variant="headline" className="font-black ">
                  Hoopla
                </Text>
              </div>
            </div>

            <div className="relative z-10 ml-4 flex items-center space-x-4">
              <Link href="/auth/login">
                <a>
                  <Text variant="caption">Login</Text>
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
              <Text className="mb-4">Btw where would we be without the internet?</Text>
              <section className="mb-4">
                <Text className="mb-1">
                  Anyhow, for $12/year Hoopla will send you a text anytime you have a meeting.{" "}
                </Text>
                <Text variant="caption">
                  If you have a Circlely Official Account Hoopla is free.
                </Text>
              </section>

              <Text className="flex align-center items-center space-x-2">
                <span>- Femi</span>
                <NextImage
                  className="rounded-full"
                  src="/assets/femyeda.png"
                  width={40}
                  height={40}
                  layout="fixed"
                />
              </Text>
              <a
                className="typeform-share button button__lg w-full button mt-8 mb-8 mx-auto flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href="https://form.typeform.com/to/zTUUJnrk?typeform-medium=embed-snippet"
                data-mode="popup">
                Join waiting list.
              </a>
            </blockquote>
          </section>
        </section>
      </main>
    )
  }

  const Footer = () => {
    return (
      <footer className="" aria-labelledby="footer-heading">
        <div className="h-48"></div>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="py-8 px-4 sm:px-8 lg:px-16">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8 space-y-16 lg:space-y-0">
            <div>
              <Text variant="overline">About</Text>
              <ul className="flex flex-col space-y-2 mt-4 lg:block lg:space-x-0 lg:space-y-4 ">
                <li>
                  <a href="#" className="">
                    <Text variant="caption">How Hoopla works</Text>
                  </a>
                </li>

                <li>
                  <a href="#" className="">
                    <Text variant="caption">What is a Gold Mic?</Text>
                  </a>
                </li>

                <li>
                  <a href="#" className="">
                    <Text variant="caption">Circlely</Text>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <Text variant="overline">Studios</Text>
              <ul className="flex flex-col space-y-2 mt-4 lg:block lg:space-x-0 lg:space-y-4 ">
                <li>
                  <a href="#" className="">
                    <Text variant="caption">Host your studio</Text>
                  </a>
                </li>

                <li>
                  <a href="#" className="">
                    <Text variant="caption">Apply for Gold Mic</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Text variant="overline">Engineers</Text>
              <ul className="flex flex-col space-y-2 mt-4 lg:block lg:space-x-0 lg:space-y-4 ">
                <li>
                  <a href="#" className="">
                    <Text variant="caption">Become an engineer</Text>
                  </a>
                </li>

                <li>
                  <a href="#" className="">
                    <Text variant="caption">Apply for Gold Mic</Text>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <Text variant="overline"> Support</Text>
              <ul className="flex flex-col space-y-2 mt-4 lg:block lg:space-x-0 lg:space-y-4 ">
                <li>
                  <a href="#" className="">
                    <Text variant="caption">Contact support</Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-secondary-200 pt-4">
            <div className="flex mt-4 justify-between lg:space-x-0">
              <div>
                <Text variant="caption">&copy; 2021 Hoopla.</Text>
              </div>
              <div className="">
                <div className="flex space-x-6">
                  <a href="#" className="">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a href="#" className="">
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a href="#" className="">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>

                  <a href="#" className="">
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <div>
      <Head />
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  )
}

export default Landing
