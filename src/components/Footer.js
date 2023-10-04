import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy; {new Date().getFullYear()}</h5>
      <img src={logo} alt='fancy logo' />
      <h5>All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  img {
    display: block;
    width: 140px;
    /* margin-left: -15px; */
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
