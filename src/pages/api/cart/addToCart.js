import { getCart } from "."

export default function addToCart(req, res) {
  //console.log('data: ', req.body)
  const products = getCart(req.body.product)
  res.status(200).json(products)
}

