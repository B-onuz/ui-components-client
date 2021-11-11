import React from 'react'
import ContextMenu from './ContextMenu'
import { Flex, Box } from 'reflexbox/styled-components'
import { action } from '@storybook/addon-actions'
import { faPlus, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'ContextMenu',
  component: ContextMenu,
}

const functionA = action('Função A')

const functionB = action('Função B')

const functionC = action('Função C')

const exampleObj = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
  {
    text: 'adicionar',
    buttonFunction: functionB,
  },
  {
    text: 'excluir',
    buttonFunction: functionC,
  },
]

const singleObj = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
]

const contextOptions = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
  {
    text: 'adicionar',
    buttonFunction: functionB,
  },
  {
    text: 'excluir',
    buttonFunction: functionC,
  },
]

export const ContextMenuExample = () => (
  <>
    <Flex
      style={{ height: '100px', border: '1px solid #f0f', marginTop: '40px', overflow: 'hidden' }}
      width={[1]}
      justifyContent={'space-evenly'}
      alignItems={'center'}
    >
      <Box p={4}>
        <ContextMenu contextMenuActions={singleObj} direction={'right'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={singleObj} direction={'top'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={singleObj} direction={'left'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={singleObj} direction={'bottom'} />
      </Box>
    </Flex>
    <Flex
      style={{ height: '100px', border: '1px solid #f0f', marginTop: '40px', overflow: 'hidden' }}
      width={[1]}
      justifyContent={'space-evenly'}
      alignItems={'center'}
    >
      <Box p={4}>
        <ContextMenu contextMenuActions={exampleObj} direction={'right'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={exampleObj} direction={'top'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={exampleObj} direction={'left'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={exampleObj} direction={'bottom'} />
      </Box>
    </Flex>
    <Flex
      style={{ height: '100px', border: '1px solid #f0f', marginTop: '40px', overflow: 'hidden' }}
      width={[1]}
      justifyContent={'space-evenly'}
      alignItems={'center'}
    >
      <Box p={4}>
        <ContextMenu contextMenuActions={contextOptions} contextFunctions buttonIcon={faPlus} direction={'right'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={contextOptions} contextFunctions buttonIcon={faPlus} direction={'left'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={contextOptions} contextFunctions buttonIcon={faPlus} direction={'top'} />
      </Box>
      <Box p={4}>
        <ContextMenu contextMenuActions={contextOptions} contextFunctions buttonIcon={faPlus} direction={'bottom'} />
      </Box>
    </Flex>
  </>
)
