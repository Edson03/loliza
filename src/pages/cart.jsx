// import { useContext, useState } from 'react'
// import { Context } from '../hooks/HandleCart'
import { Layout } from '../components/shared/Layout'
import { ProductCart } from '../components/cart/ProductCart'

export default function Cart() {
  return (
    <Layout>
      <ProductCart/>
    </Layout>
  )
}