import styled from 'styled-components'
import git from '../Assets/github.gif'
import link from '../Assets/link.gif'
import gmail from '../Assets/gmail.gif'


const Container = styled.div`
position:fixed;
left:1%;
bottom:50%;
display:flex;
flex-direction:column;

@media only screen and (max-width:768px){
    display:none;
}


`

const Icon = styled.a`
cursor:pointer;
`


const Image = styled.img`
width:2.5rem;
height:2.5rem;

`


export default function Icons(){
    return(
        <Container>
            <Icon>
                <Image src={git}/>
            </Icon>
            <Icon>
                <Image src={link}/>
            </Icon>
            <Icon>
                <Image src={gmail}/>
            </Icon>
        </Container>
    )
}

