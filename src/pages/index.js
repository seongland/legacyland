import React from "react"
import Paral from "../components/paral/index.js"
import favicon from "../images/favicon.png"
import ogtag from "../images/ogtag.png"
import { Helmet as OG } from "react-helmet"

import "react-hot-loader"
import "../components/paral/paral.css"

const IndexPage = () => (
  <div>
    <OG link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]} >
      <meta charSet="utf-8" />
      <title>Seong-Land</title>
      <meta property="fb:app_id" content="419108182355029" />
      <meta property="og:site_name" content="Seong-Land" />
      <meta property="og:url" content="https://www.seonglae.com/" />
      <meta property="og:image" content={ogtag} />
      <meta property="og:title" content="Seong-Land" />
      <meta
        property="og:description"
        content="Land Will Guide You to know Seong-lae"
      />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
    </OG>
    <Paral />
  </div>
)

export default IndexPage
