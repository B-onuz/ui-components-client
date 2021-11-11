import React from 'react'
import BreadCrumb from './BreadCrumb'
import { Flex, Box } from 'reflexbox'
import { action } from '@storybook/addon-actions'

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
}

const longExampleObj = [
  {
    label: 'Gestão da rota do Link 1',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 2',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 3',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 4',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 5',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 6',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 7',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 8',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 9',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 10',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 11',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 12',
    onClick: action('Ação do Link'),
  },
]

const exampleObj = [
  {
    label: 'Gestão da rota do Link 1',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 2',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 3',
    onClick: action('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 4',
    onClick: action('Ação do Link'),
  },
]

export const BreadCrumbColors = () => (
  <Flex flexDirection={'column'}>
    <Box>
      <BreadCrumb navigationLinks={exampleObj} color={'primary'} />
    </Box>
    <Box>
      <BreadCrumb navigationLinks={exampleObj} color={'violet'} />
    </Box>
    <Box>
      <BreadCrumb navigationLinks={exampleObj} color={'info'} />
    </Box>
    <Box>
      <BreadCrumb navigationLinks={exampleObj} color={'olive'} />
    </Box>
  </Flex>
)

export const LongListItems = () => <BreadCrumb navigationLinks={longExampleObj} />
