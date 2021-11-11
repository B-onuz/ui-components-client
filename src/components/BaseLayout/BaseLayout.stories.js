import React, { useState } from 'react'
import BaseLayout from './BaseLayout'
import Fieldset from '../Fieldset'
import TextField from '../TextField'
import { Box, Flex } from 'reflexbox'
import SidebarMenu from '../SidebarMenu'
import SidebarMenuItem from '../SidebarMenuItem'
import CheckBox from '../CheckBox'
import Button from '../Button'
import ProfileBox from '../ProfileBox'
import bnz_icon from '../../assets/bnz_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../Logo'
import logoImg from '../../assets/logo_white.svg'
import { faHome, faDice, faCodeBranch, faAdjust, faKey, faKissBeam, faKissWinkHeart } from '@fortawesome/free-solid-svg-icons'

const menuItems = [
  { icon: faHome, text: 'Home' },
  { icon: faDice, text: 'Dados' },
  { icon: faCodeBranch, text: 'Branch' },
  { icon: faAdjust, text: 'Adjusts Darkmode' },
  { icon: faKey, text: 'Chaves de acesso' },
]

const DashboardSidebar = ({ ...rest }) => {
  return (
    <SidebarMenu {...rest} logo={<Logo width={180} my={3} src={logoImg} alt={'B-onuz Logo - legal services'} />}>
      {menuItems.map((item) => {
        return <SidebarMenuItem component={'header'} icon={<FontAwesomeIcon icon={item.icon} />} children={item.text} />
      })}
    </SidebarMenu>
  )
}

export default {
  title: 'BaseLayout',
  component: BaseLayout,
}

export const BaseLayoutExample = () => {
  return (
    <BaseLayout title="Cadastro de advogados">
      <h1>Layout base</h1>
    </BaseLayout>
  )
}

export const BaseLayoutWithSidebar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }
  return (
    <BaseLayout
      title={'Cadastro de advogados'}
      menuIsOpen={menuIsOpen}
      handleChangeMenuIsOpen={toggleMenu}
      cornerContent={<ProfileBox src={bnz_icon} balanceValue={2300} />}
      sidebar={<DashboardSidebar open={menuIsOpen} onClose={closeMenu} width={248} />}
    >
      <form noValidate>
        <Fieldset legend={'Informações pessoais'}>
          <Flex flexWrap={'wrap'} mx={-2}>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="name" name={'name'} label={'Nome'} m={2} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="name" name={'name'} label={'Nome'} m={2} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>
          </Flex>
        </Fieldset>
        <Fieldset mt={4} legend={'Informações Profissionais'}>
          <Flex flexWrap={'wrap'} mx={-2}>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="name" name={'name'} label={'Nome'} m={2} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="name" name={'name'} label={'Nome'} m={2} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} m={2} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>

            <Box width={[1, 1, 2 / 3]}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
            </Box>
          </Flex>
        </Fieldset>
        <Fieldset mt={4} legend={'Seleciona especialidades do advogado'}>
          <Flex m={-2} flexWrap={'wrap'} flexDirection={['column', 'column', 'row']}>
            <Box m={2}>
              <CheckBox id="societario" label={'Societário'} />
            </Box>
            <Box m={2}>
              <CheckBox id="propriedade-intelectual" label={'Propriedade Intelectual'} />
            </Box>
            <Box m={2}>
              <CheckBox id="tributario" label={'Tributário'} />
            </Box>
            <Box m={2}>
              <CheckBox id="contratos" label={'Contratos'} />
            </Box>
            <Box m={2}>
              <CheckBox id="investimentos" label={'Investimentos'} />
            </Box>
            <Box m={2}>
              <CheckBox id="contencioso" label={'Contencioso'} />
            </Box>
          </Flex>
        </Fieldset>
        <Fieldset mt={4} legend={'Administração da plataforma B-onuz'}>
          <CheckBox id="admin" label={'Adicionar esse advogado ao grupo de Administradores da Plataforma'} />
        </Fieldset>
        <Flex justifyContent={'flex-end'}>
          <Button m={2}>Cancelar</Button>
          <Button type="submit" color={'primary'} m={2}>
            Adicionar
          </Button>
        </Flex>
      </form>
    </BaseLayout>
  )
}

export const BaseLayoutCornerContentExample = () => {
  return <BaseLayout title="Cadastro de advogados" cornerContent={<ProfileBox src={bnz_icon} balanceValue={2300} />} />
}
