import { useContext, useState, useEffect } from 'react'
import { Context } from '../../hooks/HandleCart'
import {
    SimpleGrid,
    Flex,
    HStack,
    Image,
    Icon,
    Button
} from '@chakra-ui/react'
import { BsPlus, BsDash } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

const ListProduct = () => {
    // const resul = carrinho.filter((i, index) => i.id !== 1)
    // const index = carrinho.findIndex(i => i.id === 3)
    const { cart, setCart, qtdCart, setQtdCart } = useContext(Context)

    const handleItem = (type,id) => {
        const index = cart.findIndex(i => i.id == id)
        if(type === 'INCREASE'){
            cart[index].qtd = cart[index].qtd + 1
            setCart([...cart])
        } else if (type === 'DECREASE'){
            if(cart[index].qtd !== 1){
                cart[index].qtd = cart[index].qtd - 1
                setCart([...cart])
            }
        } else {
            setCart(cart.filter(i => i.id != id))
            setQtdCart(qtdCart - 1)
        }
    }

    const [total, setTotal] = useState(0)

    const calcTotal = () => {
        setTotal(0)
        let totalParcial = 0
        cart.map((item) => {
            totalParcial += parseFloat(item.price) * parseInt(item.qtd)
        })
        setTotal(totalParcial)
    }

    useEffect(() => {
        calcTotal()
    }, [cart])

    return (
        <>
            <SimpleGrid columns={5} spacing={[1,2,4,4]}>
                <Flex align="center" justify="center" height="20px">IMAGEM</Flex>
                <Flex align="center" justify="center" height="20px">TIPO</Flex>
                <Flex align="center" justify="center" height="20px">QTD</Flex>
                <Flex align="center" justify="center" height="20px">PREÇO</Flex>
                <Flex align="center" justify="center" height="20px"></Flex>
            </SimpleGrid>
            {cart.map((item) => (
                <SimpleGrid key={`grid${item.id}`} columns={5} spacing={[1,2,4,4]} mt={[1,2,4,4]}>
                    <Flex  align="center" justify="center" bg="gray.100" height="50px">
                        <Image w={12} h={12} borderRadius="lg" src={item.imageUrl} alt={item.imageAlt} />
                    </Flex>
                    <Flex align="center" justify="center" bg="gray.100" height="50px">
                        {item.type}
                    </Flex>
                    <Flex  align="center" justify="center" bg="gray.100" height="50px">
                        <HStack mt="1" spacing="2px">
                            <Flex
                                as="button"
                                border="1px teal solid" 
                                borderRadius="3px" 
                                color="teal" 
                                justify="center"
                                align="center"
                                w={[5,6,7,7]} 
                                h={[5,6,7,7]}
                                onClick={() => {handleItem('DECREASE',item.id)}} 
                            >
                                <Icon as={BsDash} fontSize={["20px","25px"]}/>
                            </Flex>
                            <Flex  
                                textColor="teal" 
                                borderRadius="3px" 
                                w={[4,5,6,7]} 
                                h={[5,6,7,7]} 
                                align="center" 
                                justify="center"
                            > 
                                {item.qtd} 
                            </Flex>
                            <Flex
                                as="button"
                                border="1px teal solid" 
                                borderRadius="3px" 
                                color="teal" 
                                justify="center"
                                align="center"
                                w={[5,6,7,7]} 
                                h={[5,6,7,7]}
                                onClick={() => {handleItem('INCREASE',item.id)}} 
                            >
                                <Icon as={BsPlus} fontSize={["20px","25px"]}/>
                            </Flex>
                        </HStack>
                    </Flex>
                    <Flex align="center" justify="center" bg="gray.100" height="50px">
                        {item.price}
                    </Flex>
                    <Flex  align="center" justify="center" bg="gray.100" height="50px">
                        <Flex
                            as="button"
                            borderRadius="3px" 
                            color="red"
                            justify="center"
                            align="center"
                            w={[5,6,7,7]} 
                            h={[5,6,7,7]}
                            onClick={(e) => {handleItem('DELETE',item.id)}} 
                        >
                            <Icon as={RiDeleteBin6Line} fontSize={["20px","25px"]}/>
                        </Flex>
                    </Flex>
                </SimpleGrid>
            ))}
            <Flex justify="flex-end" align={["center","center","flex-end","flex-end"]} direction={["column","column","row","row"]}>
                <Flex minW="190px" height="50px" bg="gray.100" mt={4} ml={[0,0,4,4]} justify="center" align="center">
                    <Flex p={2}>Total:</Flex>
                    <Flex p={2}>{`R$${total}`}</Flex>
                </Flex>
                <Flex minW="190px" height="50px" bg="gray.100" mt={4} ml={[0,0,4,4]} justify="center" align="center">
                    <Button maxW={150} colorScheme="teal" variant="solid">
                        Finalizar pedido
                    </Button>
                </Flex>
            </Flex>

        </>        
    )
}

export default ListProduct
