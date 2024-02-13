import { useRef } from "react"
import "../styles/switch.css"

const Switch = () => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <div className="dark-mode">
        <p>Dev Mode</p>
        <input ref={ref}  className="checkbox" type="checkbox" id="colortheme" />
        <label className="switch" htmlFor="colortheme">
        </label>
    </div>
  )
}

export default Switch