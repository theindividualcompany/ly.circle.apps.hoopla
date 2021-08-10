import React from "react"
import classnames from "classnames"

export type PressableProps = {
  children: any
  className?: string
  onPress?: () => void
}

const Pressable: React.FunctionComponent<PressableProps> = ({
  children,
  className,
  onPress,
}: PressableProps) => {
  const classes = classnames(className, "cursor-pointer")
  return (
    <div onClick={onPress} className={classes}>
      {children}
    </div>
  )
}

export default Pressable
