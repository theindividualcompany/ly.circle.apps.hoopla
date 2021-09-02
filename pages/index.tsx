import React from "react"
import Head from "@components/_head"
import Text from "@components/Text"
import Landing from "@components/Landing"
import "react-phone-number-input/style.css"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import { PlusIcon } from "@heroicons/react/outline"
import { getSession, signOut } from "next-auth/client"
import { _getAccount } from "./api/account/_operations"
import TimezoneSelect from "react-timezone-select"
import Pressable from "@components/Pressable"
import CalendarListItem from "../components/CalendarListItem"
import { Calendar } from "../components/CalendarListItem/CalendarListItem"
import { _getManyCalendarConnection } from "./api/calendarConnection/_operations"
import { Account, CalendarConnection } from "@prisma/client"
import isEmpty from "lodash/isEmpty"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import Router from "next/router"
import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import classnames from "classnames"
import { find } from "lodash"

dayjs.extend(utc)
dayjs.extend(timezone)

const CALENDARS: Calendar[] = [
  {
    type: "google_calendar",
    title: "Google Calendar",
    description: "For personal and business calendars",
    imageSrc: "/assets/integrations/google-calendar.svg",
    available: true,
  },
  {
    type: "office365_calendar",
    title: "Office 365 / Outlook.com Calendar",
    description: "For personal and business calendars",
    imageSrc: "/assets/integrations/outlook.svg",
    available: false,
  },
  {
    type: "apple_calendar",
    title: "Apple Calendar",
    description: "For personal and business calendars",
    imageSrc: "/assets/integrations/apple.png",
    available: false,
  },
  {
    type: "zoom_video",
    title: "Zoom",
    description: "For meetings and conferences",
    imageSrc: "/assets/integrations/zoom.svg",
    available: false,
  },
]

type Carrier = {
  title: string
  value: string
}

const CARRIERS: Carrier[] = [
  {
    title: "T Mobile",
    value: "tmobile",
  },
  {
    title: "At&t",
    value: "att",
  },
  {
    title: "Sprint",
    value: "sprint",
  },
  {
    title: "Verizon",
    value: "verizon",
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

  function integrationHandler(type) {
    if (type === "apple_calendar") {
      console.log("unimplemented")
      return
    }

    if (type === "office365_calendar") {
      console.log("unimplemented")
      return
    }

    if (type === "zoom_video") {
      console.log("unimplemented")
      return
    }

    fetch("/api/integrations/" + type.replace("_", "") + "/add")
      .then((response) => response.json())
      .then((data) => (window.location.href = data.url))
  }

  function unimplementedHandler() {
    alert("This integration is currently unavailable")
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
            onClick={() => {
              signOut()
            }}
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
    const [shouldUpdate, setShouldUpdate] = React.useState(false)
    const [accountValid, setAccountValid] = React.useState(() => {
      if (user.timezone && user.phone && isValidPhoneNumber(user.phone) && user.carrier) {
        return true
      }

      return false
    })

    const [timeZone, setTimeZone] = React.useState(() => {
      if (user.timezone) {
        return { value: user.timezone, label: null }
      }
      return { value: null, label: null }
    })

    const [phoneNumber, setPhoneNumber] = React.useState(() => {
      if (user.phone) {
        return user.phone
      }

      return null
    })

    const [carrier, setCarrier] = React.useState<Carrier>(() => {
      if (user.carrier) {
        return find(CARRIERS, ["value", user.carrier])
      }

      return null
    })

    React.useEffect(() => {
      if (!user.timezone) {
        const guessedTimeZone = dayjs.tz.guess()

        ;(async () => {
          setTimeZone({
            value: guessedTimeZone,
            label: "",
          })

          await updateUser({
            timezone: guessedTimeZone,
          })
        })()
      }
    }, [user])

    React.useEffect(() => {
      if (
        user.phone === phoneNumber &&
        user.timezone === timeZone?.value &&
        user.carrier === carrier?.value
      ) {
        setShouldUpdate(false)
        return
      }

      if (phoneNumber && !isValidPhoneNumber(phoneNumber)) {
        setShouldUpdate(false)
      }

      if (phoneNumber && phoneNumber !== user?.phone && isValidPhoneNumber(phoneNumber)) {
        setShouldUpdate(true)
      }
      console.log("carrier", carrier)
      if (carrier && carrier.value !== user?.carrier) {
        setShouldUpdate(true)
      }

      if (timeZone?.value && timeZone.value !== user?.timezone) {
        setShouldUpdate(true)
      }
    }, [timeZone, phoneNumber, carrier])

    const updateUser = async (data) => {
      const body = JSON.stringify({
        data: {
          where: {
            id: user.id,
          },
          data: {
            ...data,
          },
        },
      })

      return await fetch("/api/account/update", {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    const saveChanges = async () => {
      const res = await updateUser({
        timezone: timeZone.value,
        phone: phoneNumber,
        carrier: carrier.value,
      })

      if (res.ok) {
        Router.reload()
      }
    }

    const onChangeTimeZone = (tz) => {
      setTimeZone(tz)
    }

    const onChangePhoneNumber = (number) => {
      setPhoneNumber(number ? number : null)
    }

    const AccountStatus = React.useMemo(() => {
      return (
        <div className="px-4 py-4 flex justify-between">
          <Text>
            {accountValid ? "Your account is all configured." : "Hey, fill out those values."}
          </Text>
          {shouldUpdate && (
            <>
              <button onClick={saveChanges} className="button button__secondary">
                Save Changes
              </button>
            </>
          )}
        </div>
      )
    }, [shouldUpdate, accountValid])

    return (
      <main className="px-6 lg:px-8">
        <section className="flex flex-col space-y-12">
          <section className="">
            <label htmlFor="phone">
              <Text variant="headline">Send Reminders To</Text>
              <Text className="mt-1 " variant="subtitle">
                Only works with major cell providers...
              </Text>
            </label>
            <div className="mt-3">
              <PhoneInput
                name="phone"
                defaultCountry="US"
                placeholder="Enter phone number"
                id="phone"
                required
                className="shadow-sm dark:bg-black dark:text-white dark:border-gray-900 focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md"
                value={phoneNumber}
                onChange={onChangePhoneNumber}
              />
            </div>
            <Listbox
              as="div"
              className="w-full mt-3 relative inline-block text-left"
              value={carrier}
              onChange={setCarrier}>
              <div>
                <Listbox.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  {carrier ? carrier.title : "Select Carrier"}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Listbox.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Listbox.Options className="origin-top-right z-10 absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {CARRIERS.map((carrier) => (
                    <div key={carrier.title} className="py-1">
                      <Listbox.Option value={carrier} as={Fragment}>
                        {({ active }) => (
                          <li
                            className={classnames(
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}>
                            {carrier.title}
                          </li>
                        )}
                      </Listbox.Option>
                    </div>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </section>

          <section className="">
            <label htmlFor="timezone">
              <Text variant="headline">Time Zone</Text>
              <Text className="mt-1 " variant="subtitle">
                If this is not your timezone...
              </Text>
            </label>
            <div className="mt-3">
              <TimezoneSelect
                instanceId="select-timezone"
                id="timeZone"
                value={timeZone}
                onChange={onChangeTimeZone}
                className="shadow-sm focus:ring-black focus:border-black mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </section>
          <section className="bg-neutral-900 min-h-8 w-full text-white">{AccountStatus}</section>
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
                  {CALENDARS.map((calendar, itemIdx) => (
                    <li key={itemIdx}>
                      <Pressable
                        onPress={() =>
                          calendar.available
                            ? integrationHandler(calendar.type)
                            : unimplementedHandler()
                        }>
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
                      const c = CALENDARS.find((c) => c.type === calendar.provider)
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
            <li>
              Add Hoopla to Contacts
              <div>
                <strong>Name</strong> Hoopla
              </div>
              <div>
                <strong>Email</strong> hoopla@hoopla.apps.circle.ly
              </div>
            </li>

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
    return { props: { user: null } }
  }

  let connections = []
  const user = await _getAccount({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      email: true,
      timezone: true,
      phone: true,
      carrier: true,
    },
  })

  if (user) {
    connections = (
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
  }

  return {
    props: { user, calendarConnections: connections },
  }
}
