import styled from 'styled-components'
import { ArrowForward } from '@material-ui/icons'

export const Container = styled.div`
  padding: 40px 70px;
`
export const WrapperCard = styled.div`
  display: flex;
`
export const Left = styled.div`
  ${'' /* width: 50%; */}
  flex: 6;
  height: 100%;
  margin-right: 20px;
`
export const Arrow = styled(ArrowForward)`
  color: #e74c3c;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TitleName = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #00b0f0;
`
export const TitleLink = styled.p`
  display: flex;
`
export const VideoBgLeft = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  margin-top: 40px;
  border-radius: 5px;
`
export const LeftSubtitle = styled.h3`
  padding-top: 20px;
`
export const LeftDesc = styled.p`
  padding-top: 30px;
`

export const Right = styled.div`
  margin-top: 40px;
  flex: 6;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const RightVideo = styled.div`
  display: flex;
  width: 100%;
`
export const VideoBgRight = styled.video`
  width: 50%;
  flex: 2;
  height: 30%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 5px;
  border: 1px solid black;
`
export const VideoBgRightt = styled.video`
  width: 50%;
  height: 30%;
  flex: 2;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 5px;
  border: 1px solid black;
`

export const Wrapper = styled.div``
export const RightSubtitle = styled.h3`
  padding-bottom: 40px;
`
export const RightDesc = styled.p``

// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
