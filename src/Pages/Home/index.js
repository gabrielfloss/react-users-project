import React, { useState } from "react";
import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg"
import {
  Container,
  ContainerItens,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
  User,
  A
} from "./styles";

const App = () => { 

  const [users, setusers] = useState([]);
  const [name, setname] = useState([]);
  const [age, setage] = useState([]);

   function addNewUser(){
    setusers([...users,{id: Math.random(), name, age}])
   }

   function deleteUser(userId){
      const newUsers = users.filter((user) => user.id !== userId);

      setusers(newUsers);
   }

   function changeIputName(event){
    setname(event.target.value)
   }

   function changeIputAge(event){
    setage(event.target.value)
   }

  return (
    <Container>
      <Image src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeIputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input  onChange={changeIputAge} placeholder="Idade"  />

        <Button onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="" />
        </Button>

        <A to="/usuarios"> Selecionar um Usuário </A>

        <ul>
          {users.map((user) => (
             <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)} ><img src={Trash} alt="lata-de-lixo" /></button>
             </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};
 

export default App;

