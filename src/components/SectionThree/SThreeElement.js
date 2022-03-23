import styled from 'styled-components'
import { ArrowForward } from '@material-ui/icons'

export const Container = styled.div`
  padding: 40px 70px;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
`
export const PhotoName = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #00b0f0;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const PhotoLink = styled.p`
  display: flex;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const Arrow = styled(ArrowForward)`
  color: #e74c3c;
`
export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  animation: scroll 40s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
