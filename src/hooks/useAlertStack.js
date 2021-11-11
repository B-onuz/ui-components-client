import React, { useContext } from 'react'
import AlertStackContext from '../components/AlertStack/AlertStackContext'

const useAlertStack = () => {
  const { showMessage } = useContext(AlertStackContext)
  return { showMessage }
}

export default useAlertStack
