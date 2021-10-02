import { Text } from '@chakra-ui/layout'
import * as React from 'react'

const Copyright = (props) => (
  <Text fontSize="sm" {...props} color="#FFF">
    &copy; {new Date().getFullYear()} Loliza Ateliê. Todos os direitos reservados.
  </Text>
)

export { Copyright }