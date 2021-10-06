import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="#FFF" {...props}>
    <IconButton as="a" target="_blank" href="https://api.whatsapp.com/send?phone=+5548999236126" aria-label="Whatsapp" icon={<FaWhatsapp fontSize="20px" />} />
    <IconButton as="a" target="_blank" href="https://www.instagram.com/silvia_reginacruz" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
    <IconButton as="a" target="_blank" href="#" aria-label="Facebook" icon={<FaFacebookF fontSize="20px" />} />
  </ButtonGroup>
)

export { SocialMediaLinks }