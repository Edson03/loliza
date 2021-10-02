import { useContext } from 'react'
import { Context } from '../../hooks/HandleCart'
import Link from 'next/Link'
import Image from "next/image"
import { Box, Flex, Text, Stack, IconButton, Circle } from "@chakra-ui/react"
import { FaShoppingCart } from 'react-icons/fa'
 
const Navbar = () => {

  const { qtdCart } = useContext(Context)

  return (
    <Box bg="#ff6699">
        <Box
          as="nav"
          role="contentinfo"
          mx="auto"
          maxW="7xl"
          py="8"
          bg="#ff6699"
          px={{
            base: '4',
            md: '8',
            xl: '12'
          }}
        >
            <Stack>
                <Stack direction="row" spacing="4" align="center" justify="space-between">
                    <Link href={"/"}>
                      <Stack direction="row" spacing="2" align="center" justify="space-between" cursor="pointer">
                          <Box w="57px" h="50px" position="relative">
                              <Image
                                  layout="fill"
                                  objectFit="cover"
                                  src="/images/atelie_icon.png"
                                  alt="Logo"
                              />
                          </Box>
                          <Box w="200px">
                              <Text fontSize="lg" fontWeight="bold" color="#FFF">
                                  Loliza Ateliê
                              </Text>
                          </Box>
                      </Stack>
                    </Link>
                    <Flex position="relative">
                      <Link href="/cart">
                        <IconButton aria-label="LinkedIn" icon={<FaShoppingCart fontSize="22px" color="teal"/>} />
                      </Link>
                      {qtdCart > 0 ? (
                          <Circle 
                            position="absolute" 
                            size="18px" 
                            bg="green" 
                            color="white"
                            mt={0.5}
                            ml={5}
                          >
                            {qtdCart}
                          </Circle>
                        ) : (
                          null
                        )
                      }
                      
                    </Flex>
                </Stack>
            </Stack>
        </Box>
    </Box>
  )
}
 
export { Navbar }