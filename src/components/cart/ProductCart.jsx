import React from 'react'
import { useContext } from 'react'
import { Context } from '../../hooks/HandleCart'
import { Box } from '@chakra-ui/react'
import ListProduct from './ListProduct'
import EmptyCart from './EmptyCart'

const ProductCart = () => {

    const { qtdCart } = useContext(Context)

    return (
        <Box bg="white" minH="calc(100vh - 258px)">
            <Box
                mx="auto"
                maxW="7xl"
                bg="white"
                px={{
                    base: '4',
                    md: '8',
                }}
                mt={10}
                mb={10}
            >
                {qtdCart > 0 ? (
                    <ListProduct/>
                ) : (
                    <EmptyCart/>
                )}
            </Box>
        </Box>
    )
}

export { ProductCart }
