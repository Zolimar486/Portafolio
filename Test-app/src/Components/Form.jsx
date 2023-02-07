import styled from 'styled-components'
import {useState, useEffect}  from 'react'
import axios from 'axios'
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhone} from 'react-icons/bi'
import {FiMapPin} from 'react-icons/fi'
import { validateEmail, validateName, validateText } from './validation'
import InlineError from '../Components/InlineError'

const Container = styled.div`
margin:18px auto;
max-width:900px;
display:flex;
padding-bottom:20px;
padding:0px 10px;


@media only screen and (max-width:768px){

    margin:10px 80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
   
    

}
`

const InfoLogo= styled.div`
background-color:white;
height:60vh;
display:flex;
align-items:center;
flex-direction:column;
width:45%;

@media only screen and (max-width:768px){
    width:300px;
}

`
const Section= styled.div`

`


const Div= styled.div`
width:50px;
height:50px;
border-radius:50%;
border:2px solid #333;
display:flex;
align-items:center;
justify-content:center;
margin:20px 0px;

`

const Span = styled.span`
color:#f9ab00;
font-family:'Satisfy', cursive;
font-size:30px;
`

const List = styled.ul`
list-style:none;
padding:0;
margin:0;
font-family:'Varela', sans-serif;
color:#333;
margin-bottom:10px 0px;
font-size:17px;

@media only screen and (max-width:768px){
    font-size:15px;

}
`

const ListItems= styled.li`
display;flex;
align-items:center;
justify-content:center;
margin-bottom:8px;
border-radius:10px;
padding:3px;
cursor:pointer;
&:hover{
    background-color:#F8F6F7;
    
}
`

const Text= styled.span``

const InfoContainer = styled.div`
width:50%;
padding: 0px 20px;
height:80vh;

@media only screen and (max-width:768px){
    width:300px;
}
`

const FormData= styled.form`
font-family:'Varela', sans-serif;
color:#333;
`

const Title = styled.h3`
font-weight:bold;
font-size:20px;
font-family:'Varela', sans-serif;
`

const FormItems = styled.div`
display:flex;
flex-direction:column;
margin-bottom:12px;
`

const Label= styled.label`
margin:3px 0px;
font-size:15px;

`

const Input= styled.input`
border:1px solid gray;
padding:5px;
border-radius:5px;
font-size:15px;
outline:none;

`

const TextArea= styled.textarea`
border:1px solid gray;
padding:5px;
border-radius:5px;
font-family:'Varela', sans-serif;
font-size:15px;
outline:15px;
height:150px;
`
const WrapperButton= styled.div`
display:flex;
align-items:center;
justify-content:center;
`

const Button = styled.button`
margin-top:10px;
width:50%;
padding: 0.4rem 1.4rem;
border:1px solid #f9ab00;
cursor:pointer;
background-color:white;

`

const Success= styled.div`
width:100%;
height:30px;
background-color:#333;
padding:3px;
margin-top:10px;
`

const Msg = styled.span`
color:#f9ab00;

`

export default function Form(){
   
   const [name, setName] = useState("")
   const [email, setEmail]= useState("")
   const [text, setText]= useState("")
   const [success, setSuccess] = useState(false)
   const [nameError, setNameError] = useState("")
   const [emailError, setEmailError] = useState("") 
   const [textError, setTextError]= useState("")
   
   const data = () => {
    setName("")
    setEmail("")
    setText("")
    
   }
    
   useEffect(() => {

    ///*** Validation ***///

    validateName({name, setNameError})
    validateEmail({email, setEmailError})
    validateText({text, setTextError})
   },[name, email,text])

   const handleSubmit= async(e) => {
     e.preventDefault()
     
     try{
        const res= await axios.post('https://portafolio-server.onrender.com/send', {
            name,
            email,
            text
        })

        res.data && data()

        setSuccess(true)
     }catch(err){}
     
     
   }

   

    return(
        <Container>
            <InfoLogo>
               <Title>Contact Information</Title>
                <Div>
                 <Span>ZC</Span>
                </Div>
                <List>
                    <ListItems>
                        <FiMapPin style={{margin:"0px 3px", fontSize:"17px"}}/>
                        <Text>Juan Domingo Peron 2618 Buenos Aires</Text>
                    </ListItems>
                    <ListItems>
                        <BiPhone style={{margin:"0px 3px", fontSize:"17px"}}/>
                        <Text>+ 54 1132625748</Text>
                    </ListItems>
                    <ListItems>
                        <HiOutlineMail style={{margin:"0px 3px", fontSize:"17px"}}/>
                        <Text>ing.carrasquero.zolimar@gmail.com</Text>
                    </ListItems>
                </List>
             </InfoLogo>

            <InfoContainer>
             <FormData onSubmit={handleSubmit}>
             <Title>
                Contact Me
             </Title>
            <FormItems>
                <Label>Name</Label>
                <Input type="text" onChange={(e)=> setName(e.target.value)} value={name} required />
                 {nameError && <InlineError error={nameError} />}
            </FormItems>
            <FormItems>
                <Label>Email</Label>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                 {emailError && <InlineError error={emailError}/>}
            </FormItems>
            <FormItems>
                <Label>Message</Label>
                <TextArea  onChange={(e) => setText(e.target.value)} value={text} required> </TextArea>
                {textError && <InlineError error={textError}/>}
        </FormItems>
             <WrapperButton>
             <Button type="submit">Send</Button>
             </WrapperButton>
              {success && <Success>
                <Msg>Message Sent successfully. Thank you!</Msg>
                </Success>}
             </FormData>
             
            </InfoContainer>
        </Container>
    )
}