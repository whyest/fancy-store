import React from 'react'
import styled from 'styled-components'
import under_construction from '../assets/under_construction.svg'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <img src={under_construction} alt='The page is under construction' />
        <h1>Under construction</h1>
        <h3>Sorry, the page is coming soon...</h3>
        <Link to='/products' className='btn'>
          continue shopping
        </Link>
      </section>
    </Wrapper>
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
  }
  h1 {
    font-size: 5rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default LoginPage
