import { useEffect, useRef, useState } from "react"
import "../styles/switch.css"

const Switch = () => {
  const [checked, setChecked] = useState<boolean>(false)
    const ref = useRef<HTMLInputElement>(null)

    const handleChange = ()=>{
      console.log(ref.current?.checked)
      setChecked(ref.current?.checked)

      if(ref.current?.checked){
        document.body.classList.add('is-dark-mode')
        document.body.classList.remove('is-light-mode')
      }else{
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
      }

    }

  

  return (
    <div className="dark-mode">
        <p>Dev Mode</p>
        <input ref={ref} checked={checked} onChange={handleChange} className="checkbox" type="checkbox" id="colortheme" />
        <label className="switch" htmlFor="colortheme">
        </label>
    </div>
  )
}

export default Switch