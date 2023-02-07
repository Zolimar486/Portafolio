import styled from 'styled-components'
import {useState, useEffect} from 'react'

const Container= styled.div`
height:10vh;
width:100%;
background-color:#333;
display:flex;
align-items:center;
justify-content:center;
margin-top:20px;

@media only screen and (max-width:768px){
   
  @media only screen and (max-width:768px){
    padding: 20px 38px;
  }    
    
}
`

const Span = styled.span`
font-family:'Varela', sans-serif;
color:white;
font-size:17px;

@media only screen and (max-width:768px){
    font-size:15px;
    
    
}
`



export default function Footer(){
     
    const [getYear, setGetYear] = useState("")

    const data = () => setGetYear(new Date().getFullYear())

    useEffect(() => {
        data()
    },[])

    return(
        <Container>

            <Span> © {getYear} | Created by Zolimar Carrasquero | All Rights Reserved</Span>
        </Container>
    )
}