import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { SocialMediaLinks } from './SocialMediaLinks'

const Footer = () => (
  <Box bg="#FF69B4">
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="8"
      bg="#FF69B4"
      px={{
        base: '4',
        md: '8',
        xl: '12'
      }}
    >
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Copyright
            alignSelf={{
              base: 'center',
              sm: 'start',
            }}
          />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  </Box>
)

export {Footer}