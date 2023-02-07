import styled from 'styled-components'
import logo from '../Assets/logo.png'
import logo1 from '../Assets/logo1.png'
import {BsFillDiagram3Fill} from 'react-icons/bs'
import {useState} from 'react'
import {Link} from 'react-scroll'
import Featured from './Featured'

const Container = styled.div`
background-color:#333;
padding:0 2rem;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap: wrap;
position:relative;
z-index:100000;
position:sticky;
top:0;



@media only screen and (max-width:768px){
    
}

`

const Left = styled.div`
padding: 1rem 0rem;
`

const Logo = styled.a`
color:#f9ab00;
font-family:'Satisfy', cursive;
font-size:30px;


`

const Point= styled.span`
width:55px;
height:55px;
border-radius:50%;
border:1px solid white;

margin:0px 5px;
display:flex;
align-items:center;
justify-content:center;

`

const Burguer= styled.div`
display:none;
flex-direction:column;
cursor:pointer;

@media only screen and (max-width:768px){
    display:flex;
   
}
`

const Span = styled.span`
width: 25px;
height:4px;
margin-bottom:4px;
border-radius:5px;
background-color:white;
`

const List= styled.ul`
display:flex;
list-style:none;
justify-content:space-between;
align-items:center;
color:white;
font-weight:300;
font-size:20px;

font-family:'Varela', sans-serif;

@media only screen and  (max-width:768px){

    overflow:hidden;
    display:flex;
    flex-direction:column;
    width:100%;
    max-height: ${({isOpen}) => (isOpen? "300px" :"0")};
    transition: max-height 0.3s ease-in;
    margin-bottom:10px;
   
    
}   
`

const ListItems= styled.li`
margin:0px 5px;
cursor:pointer;

@media only screen and ( max-width:768px){
    margin-bottom:5px;
}

`

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return(

        <Container>
            <Left>
                <Logo>
                 
                 <Point>ZC</Point>
                </Logo>
            </Left>
            <Burguer onClick={() => setIsOpen(!isOpen)}>
                
                <Span></Span>
                <Span></Span>
                <Span></Span>
            </Burguer>
            <List isOpen={isOpen} >

                <ListItems>Home</ListItems>
                <ListItems>
                    <Link to="about"  smooth={true} offset={50} duration={1000}>About</Link>
                </ListItems>
                <ListItems>
                <Link to="skills"  smooth={true} offset={50} duration={1000}>Skills</Link>
                </ListItems>
                <ListItems>
                <Link to="works"  smooth={true} offset={50} duration={1000}>Works</Link>
                </ListItems>
            </List>
        </Container>
    )

}