import React from "react"
import Head from "@components/_head"
import Text from "@components/Text"
import Landing from "@components/Landing"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { PlusIcon } from "@heroicons/react/outline"
import { getSession } from "next-auth/client"
import { _getAccount } from "./api/account/_operations"
import TimezoneSelect from "react-timezone-select"
import Pressable from "@components/Pressable"
import CalendarListItem from "../components/CalendarListItem"
import { Calendar } from "../components/CalendarListItem/CalendarListItem"
import { _getManyCalendarConnection } from "./api/calendarConnection/_operations"
import { Account, CalendarConnection } from "@prisma/client"
import isEmpty from "lodash/isEmpty"

const calendars: Calendar[] = [
  {
    type: "google_calendar",
    title: "Google Calendar",
    description: "For personal and business calendars",
    imageSrc: "/assets/integrations/google-calendar.svg",
  },
  {
    type: "office365_calendar",
    title: "Office 365 / Outlook.com Calendar",
    description: "For personal and business calendars",
    imageSrc: "/assets/integrations/outlook.svg",
  },
  {
    type: "apple_calendar",
    title: "Apple Calendar",
    description: "For personal and business calendars",
    imageSrc: "/assets/integrations/apple.png",
  },
  {
    type: "zoom_video",
    title: "Zoom",
    description: "For meetings and conferences",
    imageSrc: "/assets/integrations/zoom.svg",
  },
]

type PageProps = {
  user: Account
  calendarConnections: CalendarConnection[]
}

export default function Page({ user, calendarConnections }: PageProps) {
  if (!user) {
    return <Landing />
  }

  const [timeZone, setTimeZone] = React.useState({ value: null, label: null })

  function integrationHandler(type) {
    if (type === "apple_calendar") {
      console.log("unimplemented")
      return
    }

    fetch("/api/integrations/" + type.replace("_", "") + "/add")
      .then((response) => response.json())
      .then((data) => (window.location.href = data.url))
  }

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
        <div className="pt-2 pb-8 lg:pb-24 text-black">
          <header className="header">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 space-x-2 flex items-center">
                <img className="block h-8 w-auto" src="/assets/iconset/64.png" alt="Hoopla Logo" />
                <Text variant="headline" className="font-black ">
                  Hoopla
                </Text>
              </div>
            </div>

            <div className="relative z-10 ml-4 flex items-center space-x-4">
              <div className="flex-shrink-0 relative ml-4">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="button button__secondary button__xs button__round">
                  <div
                    className="rounded-md p-2 inline-flex items-center justify-center text-secondary focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false">
                    <span className="sr-only">Open menu</span>

                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <div
                    className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8"
                      id="user-avatar"
                      src="https://ik.imagekit.io/83dpwdi5fkr/Frame_2x_ZtQJERqU08.png"
                    />
                  </div>
                </button>
                <ProfileMenu isOpen={isProfileMenuOpen} />
              </div>
            </div>
          </header>
        </div>
      </section>
    )
  }

  const Main = () => {
    return (
      <main className="px-6 lg:px-8">
        <section className="flex flex-col space-y-12">
          <section className="">
            <label htmlFor="phone">
              <Text variant="headline">Send Reminders To</Text>
            </label>
            <div className="mt-3">
              <PhoneInput
                name="phone"
                placeholder="Enter phone number"
                id="phone"
                required
                className="shadow-sm dark:bg-black dark:text-white dark:border-gray-900 focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={() => {
                  /* DO NOT REMOVE: Callback required by PhoneInput, comment added to satisfy eslint:no-empty-function */
                }}
              />
            </div>
          </section>

          <section className="">
            <label htmlFor="timezone">
              <Text variant="headline">Time Zone</Text>
            </label>
            <div className="mt-3">
              <TimezoneSelect
                id="timeZone"
                value={timeZone}
                onChange={(tz) => setTimeZone(tz.value)}
                className="shadow-sm focus:ring-black focus:border-black mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </section>

          <section className="">
            <Text variant="headline">Calendars</Text>
            {isEmpty(calendarConnections) ? (
              <div>
                <Text className="mt-1 " variant="subtitle">
                  Get started by connecting a calendar.
                </Text>
                <ul
                  role="list"
                  className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
                  {calendars.map((calendar, itemIdx) => (
                    <li key={itemIdx}>
                      <Pressable onPress={() => integrationHandler(calendar.type)}>
                        <CalendarListItem calendar={calendar} />
                      </Pressable>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <Text className="mt-1 " variant="subtitle">
                  These are the calendars Hoopla will use to check...
                </Text>
                <div className="mt-6">
                  <ul
                    role="list"
                    className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
                    {calendarConnections.map((calendar, itemIdx) => {
                      const c = calendars.find((c) => c.type === calendar.provider)
                      return (
                        <li key={itemIdx}>
                          <CalendarListItem calendar={{ connectionId: calendar.id, ...c }} />
                        </li>
                      )
                    })}
                  </ul>

                  <button className="w-full py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900">
                    <PlusIcon className="w-5 h-5 mr-1 inline" />
                    Connect a calendar
                  </button>
                </div>
              </div>
            )}
          </section>
        </section>
        <section className="mt-20">
          <Text variant="headline">How To</Text>
          <ol className="mt-2 list-outside list-decimal space-y-2">
            <li>Open the Contacts app on the iPhone</li>
            <li>Add Hoopla to Contacts</li>
            <li>
              Tap on the name of the contact whose text messages you want to receive when in DND
              mode
            </li>
            <li>Tap Edit at the top right of the screen</li>
            <li>Tap Text Tone</li>
            <li>Swipe the Emergency Bypass switch to ON</li>
          </ol>
        </section>
      </main>
    )
  }

  return (
    <>
      <Head />
      <div className="max-w-xl mx-auto mb-20">
        <Header />
        <Main />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return { redirect: { permanent: false, destination: "/auth/login" } }
  }

  const user = await _getAccount({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      email: true,
    },
  })

  const calendarConnections = (
    await _getManyCalendarConnection({
      where: {
        accountId: user.id,
      },
    })
  ).map((connection) => {
    return {
      ...connection,
      createdAt: connection.createdAt.toString(),
      updatedAt: connection.updatedAt.toString(),
    }
  })

  return {
    props: { user, calendarConnections },
  }
}
