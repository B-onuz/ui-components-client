import React from 'react'
import Card from './Card'
import { Flex, Box } from 'reflexbox'
import { faArchive, faBoxes, faBoxOpen, faParachuteBox, faBan, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import serv_waiting from '../../assets/serv_waiting.svg'
import Typography from '../Typography'

export default {
  title: 'Card',
  component: Card,
}

export const CardExample = () => (
  <>
    <Card title={'Demandas Pendentes'} count={99} color={'danger'} icon={faArchive} />
    <Card
      title={
        <Typography textAlign="left" m={0}>
          REVISÃO DE OUTROS DOCUMENTOS OU CONTRATOS
        </Typography>
      }
      color="purple"
      icon={faParachuteBox}
      disclaimer={
        <Typography m={0} textAlign="left">
          Pendente
        </Typography>
      }
      disclaimerColor="lightGrey"
      count={
        <Typography m={0} fontSize={2}>
          {`#58758`}
        </Typography>
      }
    />
  </>
)

export const CardColors = () => (
  <Flex justifyContent={'flex-start'} p={3} flexWrap={'wrap'}>
    <Card title={'Demandas Pendentes'} count={99} color={'lightGrey'} icon={faBoxes} />
    <Card title={'Demandas Em Aberto'} count={99} color={'teal'} icon={faBoxOpen} />
    <Card title={'Demandas Concluídas'} count={13279} color={'green'} icon={faThumbsUp} />
    <Card title={'Demandas Canceladas'} count={99} cancel={true} color={'red'} icon={faBan} />
    <Card title={'Pacotes promocionais'} count={99} color={'blue'} icon={faParachuteBox} disclaimer={'últimos 7 dias'} disclaimerColor={'#138204'} />
  </Flex>
)

export const MultiColorsControl = () => (
  <Flex>
    <Card
      color={'primary'}
      textColor={'#DDD'}
      iconColor={'#000'}
      counterColor={'warning'}
      title={'Demandas Pendentes'}
      count={99}
      customIcon={serv_waiting}
      // imgBackground={'primary'}
    />
    <Card color={'primary'} textColor={'#DDD'} iconColor={'#DDD'} title={'Demandas Pendentes'} icon={faParachuteBox} cardBackground={'primary'} />
  </Flex>
)

export const CardButton = () => (
  <>
    <Flex>
      <Card
        clickableCard
        color={'primary'}
        textColor={'#DDD'}
        iconColor={'#DDD'}
        title={'Demandas Pendentes'}
        customIcon={serv_waiting}
        cardBackground={'primary'}
        mr={2}
      />
      <Card
        clickableCard
        reverseOrder
        color={'primary'}
        textColor={'#DDD'}
        iconColor={'#DDD'}
        title={'Demandas Pendentes'}
        customIcon={serv_waiting}
        cardBackground={'primary'}
        parentHeight="115px"
      />
    </Flex>
    <Box mt={[3]}>
      <Card
        clickableCard
        reverseOrder
        color={'primary'}
        textColor={'#DDD'}
        iconColor={'#DDD'}
        title={'Demandas Pendentes'}
        customIcon={serv_waiting}
        cardBackground={'primary'}
      />
    </Box>
  </>
)
