import React from "react"
import classnames from "classnames"
import Text from "@components/Text"
import { ChevronRightIcon } from "@heroicons/react/outline"

export type Calendar = {
  connectionId?: string
  type: string
  title: string
  description: string
  imageSrc: string
}

export type CalendarListItemProps = {
  calendar?: Calendar
}

const CalendarListItem: React.FunctionComponent<CalendarListItemProps> = ({
  calendar,
}: CalendarListItemProps) => {
  return (
    <div className="relative group py-4 flex items-start space-x-3">
      <div className="flex-shrink-0">
        <span
          className={classnames("inline-flex items-center justify-center h-10 w-10 rounded-lg")}>
          <img className="h-full w-full mr-2" src={calendar.imageSrc} alt={calendar.title} />
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-gray-900">
          <Text>
            <span className="absolute inset-0" aria-hidden="true" />
            {calendar.title}
          </Text>
        </div>
        <Text className="text-sm text-gray-500">{calendar.description}</Text>
      </div>
      <div className="flex-shrink-0 self-center">
        <ChevronRightIcon
          className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export default CalendarListItem
