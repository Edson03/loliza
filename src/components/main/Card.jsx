import React, { useState } from 'react'
import { Box, Badge, Image, HStack, Icon, Flex, Button, Spacer } from "@chakra-ui/react"
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
//import Image from "next/image"

const CardItem = ({property, addToCart}) => {

    const [qtd, setQtd] = useState(1)

    const handleQuantity = (type) => {
        if(type === 'INCREASE'){
            setQtd(qtd + 1)
        } else {
            if(qtd > 1)
                setQtd(qtd - 1)
        }
    }

    const handleCart = (id) => {
        addToCart(id, qtd)

        setQtd(1)
    }

    return (
        <Box maxW="sm" minH={["auto","auto","625px","625px"]} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {property.type}
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h2"
                    lineHeight="tight"
                    h="auto"
                >
                    {property.title}
                </Box>

                <Box>
                    {`R$${property.price.toFixed(2).toString().replace('.', ',')}`}
                    <Box as="span" color="gray.600" fontSize="sm">
                        / unidade
                    </Box>
                </Box>


                <Flex direction="row">
                    <HStack mt="1">
                        <Icon color="teal" as={BsDashSquare} w={7} h={7} cursor="pointer" onClick= {() => handleQuantity('DECREASE')}/>
                        <Flex border="1px teal solid" textColor="teal" borderRadius="3px" w={7} h={7} align="center" justify="center"> {qtd} </Flex>
                        <Icon color="teal" as={BsPlusSquare} w={7} h={7} cursor="pointer" onClick= {() => handleQuantity('INCREASE')}/>  
                    </HStack>
                    <Spacer />
                    <Button 
                        rightIcon={<FaShoppingCart />} 
                        colorScheme="teal" 
                        variant="outline" 
                        position="flex-end"
                        onClick= {() => handleCart(property.id)}
                        >
                        Adicionar
                    </Button>
                </Flex>
                <Box fontSize="sm" mt={3}>* Informe as cores desejadas via Whatsapp</Box>
            </Box>
        </Box>
    )
}

export { CardItem }
