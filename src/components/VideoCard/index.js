import React from 'react'
import {
  Arrow,
  Container,
  Left,
  LeftDesc,
  LeftSubtitle,
  Right,
  RightDesc,
  RightSubtitle,
  RightVideo,
  TitleLink,
  TitleName,
  TitleWrapper,
  VideoBgLeft,
  VideoBgRight,
  VideoBgRightt,
  Wrapper,
  WrapperCard,
} from './VcardElement'
import Video1 from '../../videos/video1.mp4'
import Video2 from '../../videos/video2.mp4'
import Video3 from '../../videos/video3.mp4'

const VideoCard = () => {
  return (
    <Container>
      <TitleWrapper>
        <TitleName>Category Name</TitleName>
        <TitleLink>
          More Videos
          <Arrow />
        </TitleLink>
      </TitleWrapper>
      <WrapperCard>
        <Left>
          <VideoBgLeft loop muted controls src={Video1} type='video/mp4' />
          <LeftSubtitle>
            Donec consequat ipsum ut pretium ullamcorper.
          </LeftSubtitle>
          <LeftDesc>
            Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum
            magna vitae ante posuere, sit amet posuere libero egestas.
          </LeftDesc>
        </Left>
        <Right>
          <RightVideo>
            <VideoBgRight loop muted controls src={Video2} type='video/mp4' />
            <Wrapper>
              <RightSubtitle>
                Donec consequat ipsum ut pretium ullamcorper.
              </RightSubtitle>
              <RightDesc>
                Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum
                magna vitae ante posuere, sit amet posuere libero egestas.
              </RightDesc>
            </Wrapper>
          </RightVideo>
          <RightVideo>
            <VideoBgRightt loop muted controls src={Video3} type='video/mp4' />
            <Wrapper>
              <RightSubtitle>
                Donec consequat ipsum ut pretium ullamcorper.
              </RightSubtitle>
              <RightDesc>
                Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum
                magna vitae ante posuere, sit amet posuere libero egestas.
              </RightDesc>
            </Wrapper>
          </RightVideo>
        </Right>
      </WrapperCard>
    </Container>
  )
}

export default VideoCard
