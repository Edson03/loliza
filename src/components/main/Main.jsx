import { Box, Stack } from '@chakra-ui/layout'
import React from 'react'
import { CardItem } from './Card'

const Main = ({property, addToCart}) => {
    return (
        <Box bg="white">
            <Box
                as="main"
                role="contentinfo"
                mx="auto"
                maxW="7xl"
                //py="8"
                bg="white"
                px={{
                base: '4',
                md: '8',
                }}
            >
                <Stack 
                    direction={{base:"column", md:"row", xl:"row"}} 
                    spacing="4" 
                    align="center" 
                    justify="center"
                    mt="6"
                    mb="6"
                >
                    <CardItem property={property[0]} addToCart={addToCart}/>
                    <CardItem property={property[1]} addToCart={addToCart}/>
                    <CardItem property={property[2]} addToCart={addToCart}/>
                </Stack>
            </Box>
        </Box>
    )
}

export { Main }
