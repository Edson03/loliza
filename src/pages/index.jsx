import { useContext } from 'react'
import Data from './api/products/getProducts'
import { Layout } from '../components/shared/Layout'
import { Main } from '../components/main/Main'
import { Context } from '../hooks/HandleCart'

export default function Home({products}) {
  
  // const [cart, setCart] = useContext(Context)

  const { cart, setCart, qtdCart, setQtdCart } = useContext(Context)

  const addToCart = async (idProduct, qtd) => {

    const index = cart.findIndex(i => i.id == idProduct)

    if(index !== -1){
      cart[index].qtd = cart[index].qtd + qtd 
    }else{
      let index = products.findIndex(i => i.id == idProduct)
      let product = products[index]
      let productDetails = {
        id: product.id,
        imageUrl: product.imageUrl,
        imageAlt: product.imageAlt,
        type: product.type,
        price: product.price,
        qtd: qtd
      }
      setCart([...cart, productDetails])
      setQtdCart(qtdCart + 1)
    }
  }

  return (
    <Layout>
      <Main property={products} addToCart={addToCart}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const products = Data()
  return { 
      props: { products }
      //revalidate: 60 
  }
}
