// meta - React
import React from "react"
import "react-hot-loader"

// meta - Components
import EarthT from "./First/earthT"
import EarthB from "./First/earthB"
import Protons from "./First/protons"
import Clouds from "./clouds.js"
import Intro from "./First/intro"
import Cards from "./Third/cards"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

// meta - Other
import "./paral.css"

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`

export default () => (
  <Parallax ref={ref => (React.parallax = ref)} pages={3}>
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={3}
      style={{ backgroundColor: "rgb(52,52,52)", backgroundSize: "cover" }}
    />
    {/* @meta - First */}
    <ParallaxLayer
      offset={0}
      speed={0.1}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Protons style={{ width: "100%" }} />
    </ParallaxLayer>
    <ParallaxLayer
      offset={0}
      speed={0}
      factor={3}
      style={{ backgroundImage: url("stars", true), backgroundSize: "cover" }}
    />
    <ParallaxLayer
      offset={0}
      speed={0.1}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <EarthT/>
    </ParallaxLayer>
    {/* @meta - Second */}
    <ParallaxLayer
      offset={1}
      speed={1}
      style={{ backgroundColor: "#807080", opacity: 0.7 }}
    />
    <ParallaxLayer
      offset={2}
      speed={1}
      style={{ backgroundColor: "#87BCDE", opacity: 1 }}
    />

    {/* @meta - Third */}
    <ParallaxLayer
      offset={2.2}
      speed={0.4}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <EarthB/>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.0}
      speed={1}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Cards/>
    </ParallaxLayer>

    {/* @meta - wall decoration */}\
    <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
      <img
        src={url("cloud")}
        style={{ display: "block", width: "20%", marginLeft: "55%" }}
        alt="cloud"
      />
      <img
        src={url("cloud")}
        style={{ display: "block", width: "10%", marginLeft: "15%" }}
        alt="cloud"
      />
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
      <Clouds />
    </ParallaxLayer>
    <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
      <img
        src={url("cloud")}
        style={{ display: "block", width: "20%", marginLeft: "70%" }}
        alt="cloud"
      />
      <img
        src={url("cloud")}
        style={{ display: "block", width: "20%", marginLeft: "40%" }}
        alt="cloud"
      />
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
      <img
        src={url("cloud")}
        style={{ display: "block", width: "10%", marginLeft: "10%" }}
        alt="cloud"
      />
      <img
        src={url("cloud")}
        style={{ display: "block", width: "20%", marginLeft: "75%" }}
        alt="cloud"
      />
    </ParallaxLayer>
    <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
      <img
        src={url("cloud")}
        style={{ display: "block", width: "20%", marginLeft: "60%" }}
        alt="cloud"
      />
      <img
        src={url("cloud")}
        style={{ display: "block", width: "25%", marginLeft: "30%" }}
        alt="cloud"
      />
      <img
        src={url("cloud")}
        style={{ display: "block", width: "10%", marginLeft: "80%" }}
        alt="cloud"
      />
    </ParallaxLayer>
    <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
      <img
        src={url("cloud")}
        style={{ display: "block", width: "20%", marginLeft: "5%" }}
        alt="cloud"
      />
      <img
        src={url("cloud")}
        style={{ display: "block", width: "15%", marginLeft: "75%" }}
        alt="cloud"
      />
    </ParallaxLayer>
    <ParallaxLayer
      offset={0}
      speed={0.7}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <Intro />
    </ParallaxLayer>
  </Parallax>
)
