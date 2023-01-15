import { useEffect, useState } from "react";

const Timer = (props) => {
  console.log(props);
  const {startTimer, correctWords} = props;

  // Todo: Start time as soon as user start typing
 const [timeElapsed,setTimeElapsed] = useState(0);

  useEffect(() => {
    if(startTimer) {
    const timer =  setInterval(() => {
        setTimeElapsed((oldTime) => {
          return oldTime + 1;
        })
      },1000)
    }
  },[startTimer]);
  const minutes = timeElapsed/60;

  return  <><p>Speed: {(((correctWords/minutes) || 0)).toFixed(0)}</p></>
}

export default Timer;
