import React from 'react'
import Footer from '../../components/Footer'
import { Title, ContentWrapper, TextWrapper } from './styles'

const NotFound = () => {
  return (
    <ContentWrapper>
      <TextWrapper>
        <Title>404</Title>
        <Title>Page not found</Title>
      </TextWrapper>
      <Footer />
    </ContentWrapper>
  )
}

export default NotFound
