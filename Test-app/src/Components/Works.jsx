import styled from 'styled-components'
import travel  from '../Assets/Travel.png'
import blog from '../Assets/New.png'
import ecommerce from '../Assets/Ecommerce.png'
import tasks from '../Assets/tasks.png'
import project from '../Assets/project.png'
import site from '../Assets/site.png'

import './works.css'



const Container = styled.div`
margin:10px auto;
max-width:900px;
display:grid;
grid-template-columns:repeat(3, 1fr);
gap:8px;
padding:10px;

@media only screen and (max-width:768px){
    margin:10px 50px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
}



`
const Text= styled.h2`
margin:40px auto;
max-width:900px;
color:#8892b0;
text-decoration:underline;
text-decoration-color:#f9ab00;
text-decoration-thickness:3px;
text-underline-offset:10px;


@media only screen and (max-width:768px){
    text-align:center;
}
`



const Wrapper = styled.div`
flex:1;
margin:0px 5px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:20px;

-webkit-box-shadow: 0px 0px 15px -6px rgba(249, 171, 0, 1);
 box-shadow: 0px 0px 15px -6px rgba(249, 171, 0, 1);

@media only screen and (max-width:768px){
    margin-bottom:10px;
    width:90%;
    
}
`


const Image = styled.img`
width:80%;
height:70%;

border-radius:10px;

`

const Image1= styled.img`
width:80%;
height:100%;
object-fit:cover;
border-radius:10px;
`

const Info = styled.div`


margin-top:10px;

`

const Title= styled.h3`
font-weight:bold;
color:black;

`



const Button = styled.button`
border-radius:0;
border: 1px solid #f9ab00;
padding:8px 12px 8px 12px;
color:black;
margin:10px 0px;
background-color:transparent;
cursor:pointer;
font-family: 'Varela', sans-serif;


`

const Tag= styled.a`

color:black;

`

export default function Works(){
    return(
        <>
        <Text>Works</Text>
        <Container id="works">
        
            <Wrapper>
            
                <Image src={blog}/>
                <Info>
                    <Title> Blog Project</Title>
                    <Button><Tag href="https://oil-blog.netlify.app/" target="_blank" >Check it out</Tag></Button>
                </Info>
            </Wrapper>
            <Wrapper>
                <Image src={travel}/>
                <Info>
                    <Title>Travel Dot</Title>
                    <Button><Tag href="https://travel-site-1bp8.onrender.com" target="_blank">  Check it out </Tag></Button>
                </Info>
            </Wrapper>
            <Wrapper>
                <Image src={ecommerce}/>
                <Info>
                    <Title> E-commerce </Title>
                    <Button><Tag href="https://ecommerce-site-u4ue.onrender.com" target="_blank">Check it out</Tag></Button>
                </Info>
            </Wrapper>
            
            <Wrapper>
            
                <Image src={project}/>
                <Info>
                    <Title> Nike Site</Title>
                    <Button><Tag href="https://digitalfirstlanding.com/" target="_blank" >Check it out</Tag></Button>
                </Info>
            </Wrapper>
            <Wrapper>
            
                <Image src={tasks}/>
                <Info>
                    <Title> Task Project</Title>
                    <Button><Tag href="https://task-management-seven-nu.vercel.app/" target="_blank" >Check it out</Tag></Button>
                </Info>
            </Wrapper>
            <Wrapper>
            
                <Image src={site}/>
                <Info>
                    <Title> School Site</Title>
                    <Button><Tag href="https://site-project.netlify.app/" target="_blank" >Check it out</Tag></Button>
                </Info>
            </Wrapper>
        </Container>
        </>
    )
}