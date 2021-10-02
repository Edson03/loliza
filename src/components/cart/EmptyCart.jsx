import React from 'react'
import { Box, Badge, Image, HStack, Icon, Flex, Button, Spacer } from "@chakra-ui/react"
import { MdRemoveShoppingCart } from 'react-icons/md'
import { FaShoppingBasket } from 'react-icons/fa'
import Link from 'next/Link'

const EmptyCart = () => {
    return (
        <Flex minH={450} align="center" justify="center" direction="column">
            <Icon color="orange" as={MdRemoveShoppingCart} w={150} h={150} /> 
            <Box color="orange" mb={4}>Carrinho vazio</Box>
            <Link href="/">
                <Button leftIcon={<FaShoppingBasket />} colorScheme="pink" variant="solid">Vamos as compras</Button>
            </Link> 
        </Flex>
    )
}

export default EmptyCart
