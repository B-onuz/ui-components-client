import React from 'react'
import UserAvatar from './UserAvatar'
import { Box, Flex } from 'reflexbox'

export default {
  title: 'UserAvatar',
  component: UserAvatar,
}

export const UserAvatarExample = () => <UserAvatar userName="John" />

export const UserAvatarWithName = () => (
  <Flex flexDirection={'column'}>
    <UserAvatar userName="John The Doe" color={'primary'} displayName="Client" m={2} />
    <UserAvatar userName="John Doe The" displayName="Lawyer" nameColor={'primary'} m={2} />
    <UserAvatar userName="Example Lawyer" displayName="Lawyer" m={2} />
    <UserAvatar userName="Client" displayName="Client" color={'primary'} nameColor={'primary'} m={2} />
  </Flex>
)
