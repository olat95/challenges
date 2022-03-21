import React from 'react'
import PostImg from '../../images/Rectangle 49.svg'
import Gallaryy from '../../components/Gallaryy'
import {
  CalenderIcon,
  CommentSection,
  ContactIcon,
  Container,
  FacebookIcon,
  COptions,
  COptionSplit,
  CPost,
  CReply,
  CTime,
  CUser,
  FirstComment,
  ImgDetailsText,
  JoinDiscussionContainer,
  LinkedInIcon,
  MessageIcon,
  RCTitle,
  RCWrapper,
  SecondComment,
  ShareWrapper,
  SPDescription,
  SPimage,
  SPimgdesc,
  SPimgdetails,
  SPtitle,
  SWtext,
  TimeIcon,
  TwitterIcon,
  WhatsAppIcon,
  Wrapper,
  COptionIcon,
  JDText,
  JDTextarea,
  JDLabel,
  JDInput,
  JDButton,
  JDInputField,
  TSWrapper,
  TSTitle,
  TCGallaryWrapper,
  JDForm,
} from './SingleElement'

const SinglePost = () => {
  return (
    <Container>
      <Wrapper>
        <SPtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
          iaculis nisi.
        </SPtitle>
        <ShareWrapper>
          <SWtext>Share This Post:</SWtext>
          <FacebookIcon />
          <TwitterIcon />
          <WhatsAppIcon />
          <LinkedInIcon />
        </ShareWrapper>
        <SPimage src={PostImg} alt='post' />
        <SPimgdesc>Financial Writer</SPimgdesc>
        <SPimgdetails>
          <ContactIcon />
          <ImgDetailsText>Solomon James</ImgDetailsText>
          <CalenderIcon />
          <ImgDetailsText>1 March 2022</ImgDetailsText>
          <TimeIcon />
          <ImgDetailsText>6 mins Read</ImgDetailsText>
        </SPimgdetails>
        <SPDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
          iaculis nisi. Praesent varius diam nisi, sit amet mollis dolor
          pharetra sit amet. Suspendisse porttitor viverra nunc nec ultrices.
          Nam venenatis quis massa at tempus. Suspendisse pretium metus magna,
          et interdum dolor gravida luctus. Fusce maximus nisi eros, eu
          malesuada ipsum ultrices vel. Nam in mi finibus, venenatis nisi
          tempor, feugiat massa.
          <br /> Quisque elementum, mi vel sodales luctus, est nunc egestas
          tortor, eget accumsan sapien lorem vitae erat. Curabitur a ex iaculis,
          posuere lorem at, varius urna. Nam iaculis viverra eros porta
          fringilla. Nulla vulputate, orci eu convallis rutrum, metus felis
          euismod quam, quis faucibus mauris dolor eget quam. Proin facilisis
          erat nunc, quis placerat erat tempor ut. Vestibulum fermentum a ligula
          id faucibus.
          <br /> Pellentesque maximus ipsum nunc, eleifend congue nisl faucibus
          ut. Nulla ultricies augue ut viverra congue. Maecenas arcu metus,
          posuere sed orci ut, convallis viverra eros. Proin in neque nisi.
          Proin eu nunc fringilla, dapibus nisi nec, pretium felis. Sed aliquam
          dui est, auctor egestas turpis dictum a. Donec placerat eu orci eget
          cursus. Mauris sodales iaculis mauris et feugiat. In aliquam mi
          lacinia massa egestas rutrum.
        </SPDescription>
        <RCWrapper>
          <RCTitle>Reader Comments</RCTitle>
          <CommentSection>
            <FirstComment>
              <CPost>
                Fusce bibendum fringilla nunc vitae condimentum. Vivamus ante
                velit, fermentum id mattis sed, venenatis eu nulla. Proin lacus
                dui, faucibus sit amet maximus et,
              </CPost>
              <COptions>
                <COptionSplit>
                  <CUser>Felix</CUser>
                  <CTime>An hour ago</CTime>
                </COptionSplit>
                <COptionIcon>
                  <MessageIcon />
                  <CReply>Reply Comment</CReply>
                </COptionIcon>
              </COptions>
            </FirstComment>
            <SecondComment>
              <CPost>
                Fusce bibendum fringilla nunc vitae condimentum. Vivamus ante
                velit, fermentum id mattis sed, venenatis eu nulla. Proin lacus
                dui, faucibus sit amet maximus et,
              </CPost>
              <COptions>
                <COptionSplit>
                  <CUser>Jack</CUser>
                  <CTime>3mins ago</CTime>
                </COptionSplit>
                <COptionIcon>
                  <MessageIcon />
                  <CReply>Reply Comment</CReply>
                </COptionIcon>
              </COptions>
            </SecondComment>

            <JoinDiscussionContainer>
              <JDText>Join the discussion</JDText>
              <JDForm>
                <JDTextarea
                  row='5'
                  placeholder='Write your comment'
                  name='user_message'
                />
                <JDInputField>
                  <JDLabel>Your Name:</JDLabel>
                  <JDInput type='text' placeholder='' name='user_name' />
                  <JDLabel>Email Address:</JDLabel>
                  <JDInput type='email' placeholder='' name='email' />
                </JDInputField>
                <JDButton>Submit</JDButton>
              </JDForm>
            </JoinDiscussionContainer>
          </CommentSection>
        </RCWrapper>
        <TSWrapper>
          <TSTitle>Top Stories</TSTitle>
          <TCGallaryWrapper>
            <Gallaryy />
          </TCGallaryWrapper>
        </TSWrapper>
      </Wrapper>
    </Container>
  )
}

export default SinglePost
