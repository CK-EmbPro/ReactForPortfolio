import { useState } from "react"


const StopWatch = () => {
    const [tick, setTick] = useState<number | null >(null)
    const [totalSeconds, setTotalSeconds] = useState(0)

    const getSeconds = (): number =>{
        return totalSeconds % 60
    }
    const seconds = getSeconds()

    const getMinutes = (): number=>{
        return parseInt((totalSeconds / 60).toString(), 10)%60
    }
    const minutes  = getMinutes()

    const getHours = (): number =>{
        return parseInt((totalSeconds / 3600).toString(), 10) %24
    }
    const hours = getHours()

    const increment = ()=>{
      setTotalSeconds(prevSeconds => prevSeconds++)
    }

    const startCount = ()=>{
      if(tick){
        clearInterval(tick)
      }

      setTick(setInterval(()=>{increment}, 1000))
    }


    const resumeCount = ()=>{
        if(tick) clearInterval(tick)
        setTick(setInterval(()=>{increment}, 1000))
    }


    const StopCount = ()=>{
        if(tick) clearInterval(tick)
        setTick(null)
    }

    const resetCount = ()=>{
        if(tick) clearInterval(tick)
        setTotalSeconds(0)
    }

   

    let started = hours >0 || minutes >0 || seconds >0
    let buttons: null | React.ReactNode = null

    if(!tick && !started){
      // implement ui for starting from 0 without reset button
    }else if(!tick && started){
      // implement ui for resuming with reset
    }else{
      // started with both ticking and seconds counting, implement ui for stopping with reset button
    }
    
    
    return (
    <div>
        
    </div>
  )
}

export default StopWatch