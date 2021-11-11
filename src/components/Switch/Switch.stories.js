import React from 'react'
import Switch from './Switch'

export default {
  title: 'Switch',
  component: Switch,
}

export const SwitchExample = () => (
  <>
    <Switch m={10} color={'primary'} />
    <Switch m={10} color={'secondary'} />
    <Switch m={10} color={'olive'} />
    <Switch m={10} color={'blue'} />
    <Switch m={10} color={'green'} />
    <Switch m={10} color={'yellow'} />
    <Switch m={10} color={'danger'} />
  </>
)
