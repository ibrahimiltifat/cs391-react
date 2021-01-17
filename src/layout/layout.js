import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from '../components/Menu'

export default function Layout({children}) {
    return (
      <>
      <Menu/>
      <Container>
          {children}
      </Container>
      </>
    )
}
