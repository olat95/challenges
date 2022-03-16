import styled from 'styled-components'
import {
  Facebook,
  Twitter,
  WhatsApp,
  LinkedIn,
  PermContactCalendar,
  DateRange,
  QueryBuilder,
  Message,
} from '@material-ui/icons'

export const Container = styled.div`
  width: 100%;
`
export const Wrapper = styled.div`
  padding: 40px 70px;
`
export const SPtitle = styled.h1`
  font-weight: 400;
  font-size: 70px;
  color: #000229;
  margin-bottom: 10px;
`
export const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`
export const SWtext = styled.h3`
  color: #acacac;
  font-weight: 400;
  font-size: 30px;
`
export const FacebookIcon = styled(Facebook)`
  margin-left: 10px;
  width: 50px !important;
  height: 50px !important;
  color: #19afff;
`
export const TwitterIcon = styled(Twitter)`
  margin-left: 10px;
  width: 50px !important;
  height: 50px !important;
  color: #1ea1f2;
`
export const WhatsAppIcon = styled(WhatsApp)`
  margin-left: 10px;
  width: 50px !important;
  height: 50px !important;
  color: #61fd7d;
`
export const LinkedInIcon = styled(LinkedIn)`
  margin-left: 10px;
  width: 50px !important;
  height: 50px !important;
  color: #1265bf;
`
export const SPimage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 5px;
`
export const SPimgdesc = styled.p`
  color: #acacac;
`
export const SPimgdetails = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
`
export const ContactIcon = styled(PermContactCalendar)``
export const CalenderIcon = styled(DateRange)`
  margin-left: 10px;
`
export const TimeIcon = styled(QueryBuilder)`
  margin-left: 10px;
`
export const ImgDetailsText = styled.h4`
  color: #acacac;
  font-size: 25px;
  padding-left: 10px;
`
export const SPDescription = styled.h3`
  color: #2f3640;
  line-height: 50px;
  text-align: left;
  font-weight: 400;
  font-size: 30px;

  &::first-letter {
    margin-left: 50px;
    font-size: 80px;
    font-weight: 700;
  }
`
export const RCWrapper = styled.div`
  margin-top: 60px;
`
export const RCTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #00b0f0;
  border-bottom: 1px solid #2f3640;
`
export const CommentSection = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: rgba(245, 245, 245, 0.6);
`

export const FirstComment = styled.div`
  width: 70%;
  padding: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 3px 4px 5px rgba(64, 64, 64, 0.25);
  border-radius: 30px;
`
export const CPost = styled.p``
export const COptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`
export const COptionSplit = styled.div``
export const CUser = styled.h4``
export const CTime = styled.p``
export const CReply = styled.p`
  margin-left: 10px;
`

export const SecondComment = styled.div`
  width: 70%;
  padding: 20px;
  margin-left: 20px;
  margin-bottom: 100px;
  background-color: #fff;
  box-shadow: 3px 4px 5px rgba(64, 64, 64, 0.25);
  border-radius: 30px;
`
export const COptionIcon = styled.div`
  display: flex;
`
export const MessageIcon = styled(Message)``

export const JoinDiscussionContainer = styled.div`
  background-color: #fff;
  margin: 0 20px;
  padding: 40px;
`
export const JDText = styled.h2``
export const JDForm = styled.form``
export const JDInputField = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  align-items: center;
  ${'' /* justify-content: space-around; */}
`
export const JDTextarea = styled.textarea`
  width: 949px;
  height: 90px;
  border: 1px solid #d0cece;
  border-radius: 30px;
  font-size: 19px;
  padding: 30px;
  color: #000229;
  resize: none;
  outline: none;
  margin-top: 20px;
  margin-bottom: 50px;
`
export const JDLabel = styled.label`
  font-size: 24px;
  color: #000229;
  font-weight: 400;
  padding-right: 20px;
`
export const JDInput = styled.input`
  width: 382px;
  height: 60px;
  border: 1px solid #d0cece;
  border-radius: 30px;
  margin-right: 40px;
`
export const JDButton = styled.button`
  background-color: #00b0f0;
  border-radius: 50px;
  margin-top: 30px;
  border: none;
  color: #fff;
  font-size: 24px;
  width: 382px;
  height: 60px;
`
export const TSWrapper = styled.div`
  margin-top: 70px;
`
export const TSTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #00b0f0;
  border-bottom: 1px solid #2f3640;
`
export const TCGallaryWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 50px;
  background-color: rgba(245, 245, 245, 0.6);
`
// export const Container = styled.div``
// export const Container = styled.div``
