import React, { useState } from 'react'
import Button from './Button'
import { Flex, Box } from 'reflexbox'
import icon_grain from '../../assets/icon_grain.png'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Button',
  component: Button,
}

export const Colors = () => (
  <div>
    <Button m={2}>{'Default'}</Button>
    <Button m={2} color={'default'}>
      {'Default'}
    </Button>
    <Button m={2} color={'primary'}>
      {'Primary'}
    </Button>
    <Button m={2} color={'secondary'}>
      {'Secondary'}
    </Button>
    <Button m={2} color={'fullDarkRed'}>
      {'fullDarkRed'}
    </Button>
    <Button m={2} color={'darkRed'}>
      {'darkRed'}
    </Button>
    <Button m={2} color={'lightRed'}>
      {'lightRed'}
    </Button>
    <Button m={2} color={'red'}>
      {'red'}
    </Button>
    <Button m={2} color={'orange'}>
      {'orange'}
    </Button>
    <Button m={2} color={'yellow'}>
      {'yellow'}
    </Button>
    <Button m={2} color={'olive'}>
      {'olive'}
    </Button>
    <Button m={2} color={'green'}>
      {'green'}
    </Button>
    <Button m={2} color={'teal'}>
      {'teal'}
    </Button>
    <Button m={2} color={'blue'}>
      {'blue'}
    </Button>
    <Button m={2} color={'violet'}>
      {'violet'}
    </Button>
    <Button m={2} color={'purple'}>
      {'purple'}
    </Button>
    <Button m={2} color={'pink'}>
      {'pink'}
    </Button>
    <Button m={2} color={'brown'}>
      {'brown'}
    </Button>
    <Button m={2} color={'white'} borderColor={'primary'}>
      {'white'}
    </Button>
    <Button m={2} color={'facebookBlue'}>
      {'facebookBlue'}
    </Button>
  </div>
)

export const Loading = () => {
  const [loading, setLoading] = useState(false)
  const send = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(true)
    }, 1000)
  }
  return (
    <div>
      <Button m={2} loading={loading} disabled={loading} outline color={'primary'} onClick={() => send()}>
        Enviar
      </Button>
    </div>
  )
}

export const Sizes = () => (
  <div>
    <Button m={2} size={'small'} color={'primary'}>
      {'Small'}
    </Button>
    <Button m={2} size={'medium'} color={'primary'}>
      {'Medium'}
    </Button>
    <Button m={2} size={'big'} color={'primary'}>
      {'Big'}
    </Button>
    <Button m={2} size={'huge'} color={'primary'}>
      {'huge'}
    </Button>
  </div>
)

export const Fullwidth = () => (
  <Flex flexWrap={'wrap'}>
    <Box width={[1]} m={2}>
      <Button color="primary" fullWidth>
        {'Full Width'}
      </Button>
    </Box>
  </Flex>
)

export const Outline = () => (
  <div>
    <Button outline m={2}>
      {'Default'}
    </Button>
    <Button outline m={2} color={'default'}>
      {'Default'}
    </Button>
    <Button outline m={2} color={'primary'}>
      {'Primary'}
    </Button>
    <Button outline m={2} color={'secondary'}>
      {'Secondary'}
    </Button>
    <Button outline m={2} color={'fullDarkRed'}>
      {'fullDarkRed'}
    </Button>
    <Button outline m={2} color={'darkRed'}>
      {'darkRed'}
    </Button>
    <Button outline m={2} color={'lightRed'}>
      {'lightRed'}
    </Button>
    <Button outline m={2} color={'red'}>
      {'red'}
    </Button>
    <Button outline m={2} color={'orange'}>
      {'orange'}
    </Button>
    <Button outline m={2} color={'yellow'}>
      {'yellow'}
    </Button>
    <Button outline m={2} color={'olive'}>
      {'olive'}
    </Button>
    <Button outline m={2} color={'green'}>
      {'green'}
    </Button>
    <Button outline m={2} color={'teal'}>
      {'teal'}
    </Button>
    <Button outline m={2} color={'blue'}>
      {'blue'}
    </Button>
    <Button outline m={2} color={'violet'}>
      {'violet'}
    </Button>
    <Button outline m={2} color={'purple'}>
      {'purple'}
    </Button>
    <Button outline m={2} color={'pink'}>
      {'pink'}
    </Button>
    <Button outline m={2} color={'brown'}>
      {'brown'}
    </Button>
    <Button outline m={2} color={'grey'}>
      {'grey'}
    </Button>
    <Button outline m={2} color={'black'}>
      {'black'}
    </Button>
  </div>
)

export const LinkButton = () => (
  <>
    <Button linkButton m={2} color={'primary'}>
      {'Link Button'}
    </Button>
    <Button linkButton underline m={0} p={0} as={'a'} color={'primary'} href={'http://google.com'} target="_blank">
      {'http://google.com'}
    </Button>
  </>
)

export const IconButton = () => (
  <Flex flexWrap={'wrap'}>
    <Box as={Flex} justifyContent={'space-evenly'} width={[1]} m={2}>
      <Button color="primary" linkButton icon={faArchive} iconSize={'18px'}>
        {'Icon example'}
      </Button>
      <Button color="primary" linkButton imgBackground={'https://i.pravatar.cc/300'} imgSize={'50px'}>
        {'Icon example'}
      </Button>
      <Button color="primary" linkButton imgBackground={icon_grain} bgColor={'black'}>
        {'Icon example'}
      </Button>
    </Box>
  </Flex>
)
