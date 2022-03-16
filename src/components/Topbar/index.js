import React from 'react'
import Logo from '../../images/logo.svg'
import { Container, LogoImage, Title, Wrapper } from './TopbarElement'

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoImage src={Logo} alt='logo' />
        <Title>Everyday News</Title>
      </Wrapper>
    </Container>
  )
}

export default Topbar
