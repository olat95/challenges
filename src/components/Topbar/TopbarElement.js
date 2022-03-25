import styled from 'styled-components'
import { Link as LinkRoute } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #232323;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const LogoLink = styled(LinkRoute)`
  display: flex;
  align-items: center;
  padding: 20px;
  color: inherit;
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;
`
export const LogoImage = styled.img`
  padding-left: 50px;
`
export const Title = styled.h1`
  padding-left: 30px;
`
