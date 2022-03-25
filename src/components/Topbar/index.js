import React from 'react'
import Logo from '../../images/logo.svg'
import { Container, LogoImage, LogoLink, Title } from './TopbarElement'

const Topbar = () => {
  return (
    <Container>
      <LogoLink to='/'>
        <LogoImage src={Logo} alt='logo' />
        <Title>Everyday News</Title>
      </LogoLink>
    </Container>
  )
}

export default Topbar
