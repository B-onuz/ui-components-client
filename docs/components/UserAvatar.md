# UserAvatar (Component)

Componente de Avatar

## Como utilizar

```js
import UserAvatar from 'ui-components/lib/components/UserAvatar'
```

```jsx
import UserAvatar from './UserAvatar'
import { Box, Flex } from 'reflexbox'

export default {
  title: 'UserAvatar',
  component: UserAvatar,
}

export const UserAvatarExample = () => <UserAvatar userName="John" />
```

## Variações

### Color

```jsx
<UserAvatar color={color} />
```

### DisplayName

```jsx
<Tooltip displayName="name or title" />
```

Escala no tema: `theme.variantScale`

## Styled-system props

- space https://styled-system.com/table#space
