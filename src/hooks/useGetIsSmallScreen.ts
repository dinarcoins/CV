import {useEffect, useState} from 'react';

const getIsSmallScreen = () => {
  if(!process.browser) {
    return false
  }
  return window.innerWidth < 767
}  

export const useGetIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const calcIsSmallScreen = () => {
      setIsSmallScreen(getIsSmallScreen())
    }
    calcIsSmallScreen()
    window.addEventListener("resize", calcIsSmallScreen)
    return () => {
      window.removeEventListener("resize", calcIsSmallScreen)
    }
  }, [])

  return isSmallScreen
}