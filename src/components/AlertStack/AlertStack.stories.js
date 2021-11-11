import React, { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import SelectField from '../SelectField'
import AlertStackProvider from './AlertStackProvider'
import AlertStack from './AlertStack'
import useAlertStack from '../../hooks/useAlertStack'

export default {
  title: 'AlertStack',
  component: AlertStack,
}

const App = () => {
  const { showMessage } = useAlertStack()
  const [message, setMessage] = useState('Lorem ipsum dolor sit amet larem')
  const [title, setTitle] = useState('Lorem ipsum dolor')
  const [color, setColor] = useState('success')
  const [position, setPosition] = useState('bottom-left')
  const [time, setTime] = useState(3000)
  return (
    <>
      <TextField m={20} label="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
      <TextField m={20} label="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField m={20} label="Duração" type={'number'} value={time} onChange={(e) => setTime(e.target.value)} />
      <SelectField m={20} value={color} onChange={(e) => setColor(e.target.value)} required label={'Color'} m={2} placeholder={'Nome'}>
        <option value="danger">Danger</option>
        <option value="warning">Warning</option>
        <option value="success">Success</option>
        <option value="info">Info</option>
      </SelectField>
      <SelectField m={20} value={position} onChange={(e) => setPosition(e.target.value)} required label={'Posição'} m={2} placeholder={'Nome'}>
        <option value="top-right">Top - Right</option>
        <option value="top-left">Top - Left</option>
        <option value="bottom-left">Bottom - Left</option>
        <option value="bottom-right">Bottom - Right</option>
      </SelectField>
      <Button
        onClick={() =>
          showMessage({
            title,
            message,
            color,
            position,
            time: Number(time),
          })
        }
      >
        Mostrar Mensagem
      </Button>
    </>
  )
}

export const AlertStackExample = () => {
  return (
    <AlertStackProvider>
      <App />
      <AlertStack />
    </AlertStackProvider>
  )
}
