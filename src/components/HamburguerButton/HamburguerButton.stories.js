import React, { useState } from 'react'
import HamburguerButton from './HamburguerButton'

export default {
  title: 'HamburguerButton',
  component: HamburguerButton,
}

export const HamburguerButtonExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <HamburguerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
}
