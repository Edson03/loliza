
var cart = []

export default function getFromCart(req, res) {
    //const products = data.filter((product) => product.category === category);
    const products = cart
    res.status(200).json(products)
}

export function getCart(product){
    //const products = data.filter((product) => product.category === category);
    cart.push(product)
    console.log(cart)
    return cart
}