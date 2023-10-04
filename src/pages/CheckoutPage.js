import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import empty_cart from '../assets/empty_cart.svg'

// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='Checkout' />
      <Wrapper className='page'>
        <section>
          <img src={empty_cart} alt='The page is under construction' />
          <h1>Oops, we lost your cart...</h1>
          <h3>To be found soon...</h3>
          <Link to='/products' className='btn'>
            continue shopping
          </Link>
        </section>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    height: 11rem;
    margin-bottom: 3rem;
  }
  h1 {
    font-size: 3rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`
export default CheckoutPage
