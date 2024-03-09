import React from "react";
import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg";
import {
  Container,
  ContainerItens,
  Image,
  H1,
  Div,
  Button,
} from "./styles";

const App = () => { 


  return (
    <Container>
      <Image src={Avatar} />
      <ContainerItens>
        <H1>Seus Usuários</H1>

         <Div> <a href="https://github.com/gabrielfloss">GitHub</a> </Div>

         <Div> <a href="https://www.instagram.com/gabrielflxs/">Instagram</a> </Div>
     
        <Button >
        <img src={Arrow} alt=""/>Voltar
        </Button>
        

       
      </ContainerItens>
    </Container>
  );
};
 

export default App;

