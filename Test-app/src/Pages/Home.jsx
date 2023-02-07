import styled from 'styled-components'
import Featured from '../Components/Featured'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import Header from '../Components/Header'
import Icons from '../Components/Icons'
import Navbar from '../Components/Navbar'
import Particle from '../Components/Particle'
import Skills from '../Components/Skills'
import Slider from '../Components/Slider'
import Works from '../Components/Works'

const Container = styled.div``

const Wrapper = styled.div`
position:relative;
z-index: 99999;
background-color:white;
`

export default function Home(){
    return(
        <Container>
            <Navbar/>
            <Header/>
            <Slider/>
            <Wrapper>
            <Featured/>
            <Skills/>
            <Works/>
            <Icons/>
            <Form/>
            <Footer/>
            </Wrapper>
           
        </Container>
    )
}