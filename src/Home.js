import React from 'react'
import styled from 'styled-components'

const Home = ({theme}) => {
  return <Wrapper><h1 className='test'>Home Page</h1></Wrapper>
}
const Wrapper = styled.section`background-color:${({theme})=>theme.colors.bg},width:"10rem",height:"10rem"
`; 
export default Home