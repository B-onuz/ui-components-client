import React from 'react'
import Tooltip from './Tooltip'
import { Flex, Box } from 'reflexbox/styled-components'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

const tooltipLongText =
  'Exemplo de texto longo para ser exibido na ToolTip caso o componente seja utilizado para dar uma descrição maior de uma determinada funcionalidade'
const tooltipShortText = 'Exemplo de Texto curto'

export const TooltipExample = () => (
  <Flex style={{ height: '100vh' }} width={[1]} justifyContent={'space-evenly'} alignItems={'center'}>
    <Box p={4}>
      <Tooltip m={3} text={tooltipShortText}>
        Example
      </Tooltip>
    </Box>
    <Box p={4}>
      <Tooltip m={3} text={tooltipLongText}>
        Example
      </Tooltip>
    </Box>
  </Flex>
)

export const TooltipDirectionsExample = () => (
  <Flex style={{ height: '100vh' }} width={[1]} justifyContent={'space-evenly'} alignItems={'center'}>
    <Box p={4}>
      <Tooltip m={3} direction={'bottom'} color={'violet'} text={tooltipShortText}>
        Example
      </Tooltip>
    </Box>
    <Box p={4}>
      <Tooltip m={3} direction={'top'} color={'olive'} text={tooltipLongText}>
        Example
      </Tooltip>
    </Box>
    <Box p={4}>
      <Tooltip m={3} direction={'right'} text={tooltipShortText}>
        Example
      </Tooltip>
    </Box>
    <Box p={4}>
      <Tooltip m={3} direction={'left'} color={'secondary'} text={tooltipShortText}>
        Example
      </Tooltip>
    </Box>
  </Flex>
)
