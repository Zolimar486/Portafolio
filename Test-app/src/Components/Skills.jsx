import styled from 'styled-components'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import javaScript from '../Assets/javascript.png'
import react from '../Assets/react.png'
import node from '../Assets/node.png'
import mongo from '../Assets/mongo.png'


const Container = styled.div`
margin: 10px auto;
max-width:900px;


@media only screen and (max-width:768px){
    margin: 10px 50px;
    
}


`
        
const Wrapper= styled.div`
display:flex;
margin:8px 0px;
margin-left:-23px;

@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    margin:10px 0px;
    align-items:center;
    justify-content:center;
    
}


`

const Items= styled.div`
margin:0px 30px;
-webkit-box-shadow: 0px 0px 15px -6px rgba(249, 171, 0, 1);
 box-shadow: 0px 0px 15px -6px rgba(249, 171, 0, 1);
 border-radius:10px;
 padding:20px;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 cursor:pointer;
 transition: all 0.5s ease;
 flex:1;
 &:hover{
    transform: scale(1.1);
 }

 @media  only screen and (max-width:768px){
    margin-bottom:10px;
    width:90%;
 }

`

const Title = styled.h1`
color:#8892b0;
text-decoration:underline;
text-decoration-color:#f9ab00;
text-decoration-thickness:3px;
text-underline-offset:10px;
@media only screen and (max-width: 768px){
    text-align:center;
}

`

const Text= styled.p`
margin:15px 0px;
font-size:17px;
font-weight:500;
font-family: 'Varela Round', sans-serif;
@media only screen and (max-width:768px){
    text-align:center;
}
`

const Image = styled.img`
width:100px;
height:90px;

`
const Span = styled.span`
margin:5px 0px;

font-weight:500;
font-family: 'Varela Round', sans-serif;

`



export default function Skills(){
    return(
        <Container id="skills">
          <Title>Experience</Title>
          <Text>Technology i've work with</Text>
          <Wrapper>
            <Items>
                <Image src={html}/>
                <Span>Html</Span>
            </Items>
            <Items>
                <Image src={css}/>
                <Span>Css</Span>
            </Items>
            <Items>
                <Image  src={javaScript}/>
                <Span>JavaScript</Span>
            </Items>
          </Wrapper>
          <Wrapper>
            <Items>
                <Image src={react}/>
                <Span>React</Span>
            </Items>
            <Items>
                <Image src={node}/>
                <Span>Node</Span>
            </Items>
            <Items>
                <Image src={mongo}/>
                <Span>Mongo</Span>
            </Items>
          </Wrapper>
        </Container>
    )
}