import styled from 'styled-components'
import Typed from 'react-typed'
import Particle from './Particle'
import {Link} from 'react-scroll'

const Container = styled.div`
background:url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") no-repeat;
background-position:center;

height:80vh;
background-size:cover;
font-family: 'Josefin Sans', sans-serif;
`

const Wrapper = styled.div`
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-bottom:10px;
text-align:center;
`

const Title= styled.h2`
color:#f9ab00;
text-transform:uppercase;

@media only screen and (max-width:768px){
    line-height:30px;
}
`

const Button = styled.button`
border: 1px solid #f9ab00;
border-radius:0;
padding:8px 12px 8px 12px;
color:white;
margin:10px 0px;
background-color:transparent;
cursor:pointer;
font-family: 'Varela', sans-serif;
&:hover {
    background-color:transparent;
    color:white;

};
`

const SectionParticle = styled.div``

export default function Header(){
    return(
        <Container>
           <Wrapper>
            <Title>Web Development and Websites Promotions </Title>
                <Typed
                 strings = {["Web Desing", "Web Development"]}
                 style={{color:" white", fontSize:"20px", margin:"10px 0px" }}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                />
                <Button><Link to="works"  smooth={true} offset={20} duration={800}>View Works</Link></Button>
            </Wrapper>
           <Particle />
        </Container>
    )
}