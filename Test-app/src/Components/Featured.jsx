import styled from 'styled-components'


const Container= styled.div`
margin: 10px auto;
max-width:900px;
@media only screen and (max-width: 768px){

    margin:10px 95px;
    overflow:hidden;
  
}

@media only screen and (max-width:568px){
    margin:5px 45px;
    overflow:hidden;
}
`

const Wrapper = styled.div`
display:flex;
margin:5px;

@media only screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    
    

}

@media only screen and  (max-width:768px){

}

`
const Seccion = styled.div`
flex:3;

`




const Name = styled.h1`
color:#8892b0;
text-decoration:underline;
text-decoration-color:#f9ab00;
text-decoration-thickness:3px;
text-underline-offset:10px;
display:flex;
justify-content:flex-end;

@media only screen and (max-width:768px){
    justify-content:flex-start;
}
`

const Text = styled.h2`
margin:25px 0px;
font-family:'Varela', sans-serif;
font-weight:700;
color:#333;
font-size:28px;


`

const Seccion1= styled.div`
flex:3;
margin:3px 10px;

@media only screen and ( max-width:768px){
    margin-bottom:5px;
    margin-left:3px;
}
`

const Info = styled.p`

margin:66px 0px;
font-size:18px;
font-family:'Varela', sans-serif;
font-weight:300;

@media only screen and (max-width:768px){
    margin:5px 0px;
    font-size:18px;
    font-weight:400;
    line-height:28px;
   
}
`


export default function Featured(){
     
    return(
        <Container id="about">
        <Wrapper> 

        <Seccion>
        <Name >About</Name>
        <Text> Hi, I'm Zolimar Carrasquero, nice to meet you. please take a look around </Text>
        
        </Seccion>
         <Seccion1>
         <Info > I'm a Front-End Developer specializing in building good designing, exceptional digital experiences.
            currently, I'm focused on building responsive web applications.
         </Info>
         </Seccion1>
         
         </Wrapper>
        </Container>
    )
}