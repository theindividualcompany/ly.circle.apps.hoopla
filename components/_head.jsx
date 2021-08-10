import React from "react"
import NextHead from "next/head"

const defaultTitle = "Hoopla: Calendar Alerts Even When You're On Do No Disturb"
const defaultDescription = "Calendar alerts even when you're on do no disturb."
const defaultOGURL = "https://hoopla.app"
const defaultOGImage = "/assets/iconset/512.png"
const defaultIcons = {
  androidChrome192: "/assets/iconset/128.png",
  androidChrome512: "/assets/iconset/512.png",
  appleTouch: "/assets/iconset/128.png",
  favicon: "/assets/iconset/6.png",
}

const Head = ({
  title = defaultTitle,
  description = defaultDescription,
  url = defaultOGURL,
  type = "",
  image = defaultOGImage,
}) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />

      <title>{title || "Hoopla"}</title>
      <meta name="description" content={description} />

      {/* <link rel='icon' sizes='512x512' href={defaultIcons.androidChrome512} />
      <link rel='icon' sizes='192x192' href={defaultIcons.androidChrome192} />
      <link rel='apple-touch-icon' href={defaultIcons.appleTouch} />
      <link rel='icon' href={defaultIcons.favicon} /> */}

      {/* From _document generated by favicon generator. */}
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type || ""} />

      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="180" />
      <meta property="og:image:height" content="180" />

      <meta name="twitter:card" content={"summary"} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:image" content={image} />
    </NextHead>
  )
}

export default Head
