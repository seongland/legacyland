import { render } from "react-dom"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { useSprings, animated, interpolate } from "react-spring"
import { useDrag } from "react-use-gesture"
import "./cards.css"

const cards = [
  "",
  "github.com/sungle3737",
  "https://www.linkedin.com/in/sungle3737/",
  "",
  "",
  "info.seonglae.com",
]

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -5 + Math.random() * 10,
  delay: i * 100,
})

const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const trans = (r, s) =>
  `perspective(1500px) rotateX(10deg) rotateY(${
  r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }))

  const bind = useDrag(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!down && trigger) gone.add(index)
      set((i) => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
        const scale = down ? 1.1 : 1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600)
    }
  )

  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        <div>
          <iframe
            style={{
              WebkitUserSelect: "none", border: "2px solid #ebebeb", height: "600px", width: "100%"
            }}
            src="https://vizydrop.com/shared/drop/5e3ea0f1b56e7c81523f39aa?authkey=85cc6617d521fe9b38a9"
          ></iframe>
          {cards[i]}
        </div>
      </animated.div>
    </animated.div>
  ))
}

export default class Cards extends React.Component {
  componentDidMount() {
    render(<Deck />, ReactDOM.findDOMNode(this.refs.cards))
  }

  render() {
    return <div id="card" ref="cards"></div>
  }
}
