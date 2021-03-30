import React from "react"
import Paral from "../components/paral/index.js"
import { Helmet as OG } from "react-helmet"

import "react-hot-loader"
import "../components/paral/paral.css"

const IndexPage = () => (
  <main id="main">
    <OG
      htmlAttributes={{
        lang: "en",
      }}
      link={[
        { rel: "icon", type: "image/svg+xml", href: "/seongland.svg" },
      ]}
    >
      <meta charSet="utf-8" />
      <title>Seong-Land</title>
      <link
        rel="preload"
        as="image"
        crossorigin="anonymous"
        href="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=%E2%98%95&slug=seongland&button_colour=fff7&font_colour=000&font_family=Lato&outline_colour=&coffee_colour=424242"
      />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css?family=Anton&display=swap"
        type="text/css"
        crossorigin="anonymous"
      />
      <meta
        name="description"
        content="Land Will Guide You to know Seong-lae"
      ></meta>
      <meta property="fb:app_id" content="419108182355029" />
      <meta property="og:site_name" content="Seong-Land" />
      <meta property="og:url" content="https://www.seongland.com/" />
      <meta property="og:image" content="https://seongland.com/ogtag.png" />
      <meta property="og:title" content="Seong-Land" />
      <meta
        property="og:description"
        content="Land Will Guide You to know Seong-lae"
      />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "c8b3924687ca4bdaaf9bd8f31abbd40b"}'
      ></script>
    </OG>
    <Paral />
  </main>
)

export default IndexPage
