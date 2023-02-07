import styled from 'styled-components'

const Container = styled.p`
font-family:'Varela', sans-serif;
color:red;
margin-top:2px;

`

export default function InlineError({error}){
    return (
        <Container>{error}</Container>
    )
}