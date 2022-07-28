import { useEffect, useState } from "react";

function ThirdAnimation() {
    const [timeToChange, setTimeToChange] = useState(false);
    const iconBackgroundColors = ['#52DA81', '#0BC5B9', '#6952FD', '#FD52AB', '#FFA500'];
    const [currentColorIndex, setCurrentColorIndex] = useState(1)

    const changeColor = () => {
        if (currentColorIndex==iconBackgroundColors.length-1) {
            setCurrentColorIndex(0)
        }else{
            setCurrentColorIndex(currentColorIndex+1)
        }
    }

    useEffect(() => {
      const interval = setInterval(() => {setTimeToChange(!timeToChange);changeColor()}, 1500)
      return () => {
        clearInterval(interval);
      };
    })



  return (
    <div className='rounded-circle position-absolute' style={{ zIndex:3,backgroundColor:iconBackgroundColors[currentColorIndex], height:'20%', width:'20%'}}/>
  )
}

export default ThirdAnimation