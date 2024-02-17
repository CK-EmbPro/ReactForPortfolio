import { useState } from "react"


const StopWatch = () => {
  const [tick, setTick] = useState<number | null>(null)
  const [totalSeconds, setTotalSeconds] = useState(0)

  const Separator = () => {
    return (
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" width=".7em" height=".7em" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
        </svg>
      </div>
    )
  }
  const getSeconds = (): number => {
    return totalSeconds % 60
  }
  const seconds = getSeconds()

  const getMinutes = (): number => {
    return parseInt((totalSeconds / 60).toString(), 10) % 60
  }
  const minutes = getMinutes()

  const getHours = (): number => {
    return parseInt((totalSeconds / 3600).toString(), 10) % 24
  }
  const hours = getHours()

  const increment = () => {
    setTotalSeconds(prevSeconds => prevSeconds++)
  }

  const startCount = () => {
    if (tick) {
      clearInterval(tick)
    }

    setTick(setInterval(() => { increment }, 1000))
  }


  const resumeCount = () => {
    if (tick) clearInterval(tick)
    setTick(setInterval(() => { increment }, 1000))
  }


  const StopCount = () => {
    if (tick) clearInterval(tick)
    setTick(null)
  }

  const resetCount = () => {
    if (tick) clearInterval(tick)
    setTotalSeconds(0)
  }



  let started = hours > 0 || minutes > 0 || seconds > 0
  let buttons: null | React.ReactNode = null

  if (!tick && !started) {
    buttons =(
      <button onClick={startCount} className="startButton">
        Start
      </button>
    )
  } else if (!tick && started) {
    <div>
      <button className="startButton" onClick={resumeCount}>Resume</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  } else {
    <div>
      <button onClick={StopCount}>Stop</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  }

  const leadingZero = (num: number) =>{
    return num < 10 ? '0'+num : num
   }


  return (
    <div className="clockContainer">
      <div className="clockInfoContainer">
        {leadingZero(hours)}
        <Separator />
        {leadingZero(minutes)}
        <Separator />
        {leadingZero(seconds)}
      </div>

      {buttons}
    </div>
  )
}

export default StopWatch