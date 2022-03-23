import styled from 'styled-components'
import { ArrowForward } from '@material-ui/icons'
import { Link as LinkRoute } from 'react-router-dom'

export const Container = styled.div`
  padding: 40px 70px;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
`
export const TitleName = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #00b0f0;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`
export const TitleLink = styled.p`
  display: flex;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const Arrow = styled(ArrowForward)`
  color: #e74c3c;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const PostLink = styled(LinkRoute)`
  color: inherit;
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;
`
