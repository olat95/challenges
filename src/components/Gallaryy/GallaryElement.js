import styled from 'styled-components'

export const Container = styled.div``
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
