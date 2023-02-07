import styled from 'styled-components'
import {LinkedIn} from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'


const Container = styled.div`
width:200px;
position:fixed;
height: 50vh;
top:50px;



`
const Wrapper = styled.div`
padding:25px 0px;

`



const List = styled.ul`
list-style:none;

`

const ListItems = styled.li`
width:100px;
height:40px;
margin-left:-100px;
background-color:${props => props.bg};

padding:3px;
cursor: pointer;



&:hover {
    margin-left:-10px;
    transition-duration:2s;
}
`

const Icons = styled.a`
display:flex;
justify-content:space-between;
align-items:center;
text-decoration:none;
color:white;
width:100%;


`



const Title= styled.span`
color:white;
`


export default function Slider(){
    return(
        <Container>
            <Wrapper>
            <List>
                <ListItems bg="#0000FF">
                    <Icons>  <Title >Linkedin </Title><LinkedIn style={{color:"white"}}/>  </Icons>
                </ListItems>
                <ListItems bg="#333333">
                    <Icons> <Title> GitHub </Title><GitHub style={{color:"white"}}/> </Icons>
                </ListItems>
                <ListItems bg="#6fc2b0">
                    <Icons><Title>Email</Title> <LinkedIn/> </Icons>
                </ListItems>
                <ListItems bg="#6fc2b0">
                    <Icons> <Title> Email </Title><GitHub/>  </Icons>
                </ListItems>

            </List>
           </Wrapper>
        </Container>
    )
}