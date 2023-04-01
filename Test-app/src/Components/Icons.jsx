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

const Tag = styled.a``



export default function Icons(){
    return(
        <Container>
            <Icon>
                <Tag  href="https://github.com/Zolimar486?tab=repositories" target ="_blank"><Image src={git} /></Tag>
                
                
            </Icon>
            <Icon>
            <Tag  href=" https://www.linkedin.com/in/zolimarcarrasquero/" target ="_blank"><Image src={link} /></Tag>
            </Icon>
            <Icon>
                <Image src={gmail}/>
            </Icon>
        </Container>
    )
}

