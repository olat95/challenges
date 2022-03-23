import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: auto;
    margin: 0 auto;
  }
`
export const Wrapper = styled.div`
  margin-right: 10px;
`
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CardImage = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const CardSubTitle = styled.h3`
  padding: 20px 0;
  cursor: pointer;
`
export const CardDesc = styled.p`
  padding-bottom: 30px;
  text-align: justify;
`
export const CardDate = styled.p`
  font-style: italic;
  color: #999;
  padding-bottom: 30px;
`
