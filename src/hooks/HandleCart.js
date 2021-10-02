import React, { useState } from 'react';

export const Context  = React.createContext()

export default function HandleCart({children}) {

    const carrinho = [
        {
          
          "id":1,
          
          "imageUrl":"/images/burger_normal.jpg",
          
          "imageAlt":"Burger normal",
          
          "type":"Normal",
          
          "formattedPrice":"R$16,00",
          
          "qtd":3
          
        },
        
        {
          
          "id":3,
          
          "imageUrl":"/images/burger_free_gluten.jpg",
          
          "imageAlt":"Burger free gluten",
          
          "type":"Free gluten",
          
          "formattedPrice":"R$22,00",
          
          "qtd":2
          
        }
    ]

    const [cart, setCart] = useState([])

    const [qtdCart, setQtdCart] = useState(0)

    const provider = React.useMemo(() => ({
        cart, setCart,
        qtdCart, setQtdCart,
    }), [cart, qtdCart]);

    return (
        <Context.Provider value={provider} > {children} </Context.Provider>
    )
}
