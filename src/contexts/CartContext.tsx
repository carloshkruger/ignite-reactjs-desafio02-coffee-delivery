import { ReactNode, createContext, useState } from 'react'

export interface Coffee {
  id: number
  name: string
  description: string
  unitPrice: number
  tags: string[]
  imageName: string
}

export interface CartItem {
  coffee: Coffee
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (cartItem: CartItem) => void
  removeFromCart: (cartItem: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(newCartItem: CartItem) {
    const itemExistsInCart = cartItems.some(
      (cartItem) => cartItem.coffee.id === newCartItem.coffee.id,
    )
    if (!itemExistsInCart) {
      setCartItems((state) => [...state, newCartItem])
    } else {
      setCartItems((state) =>
        state.map((item) => {
          if (item.coffee.id === newCartItem.coffee.id) {
            return newCartItem
          }
          return item
        }),
      )
    }
  }

  function removeFromCart(cartItem: CartItem) {
    setCartItems((state) =>
      state.filter((item) => item.coffee.id !== cartItem.coffee.id),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
