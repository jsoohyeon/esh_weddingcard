import React from "react";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default () => {
  const { width, height } = useWindowSize()
  return (
      <Confetti
      width={2}
      height={3}
      />
  )
  }