import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Group from '../components/Group';
import api from '../services/api';

export const ContainerDiv = styled.div`
  display: flex;
`;

export const ButtonAddGroup = styled.button`
  height: 40px;
  width: 200px;
`;

function Home() {
    const [groups, setGroups] = useState([
        /*{
          id: 1,
          name: 'Em planejamento',
          task: [
            {
              id: 1,
              name: 'Cadastro de Projetos'
            },
            {
              id: 2,
              name: 'Cadastro de Tarefas'
            },
          ]},
        {
          id: 2,
          name: 'Em andamento',
          task: [
            {
              id: 2,
              name: 'Cadastro de Usuário'
            },
          ]},
          {
            id: 3,
            name: 'Em testes',
            task: [
            ]},*/
      ]);
    const [tasks, setTasks] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
      api.get('')
        .then(response => {
          setGroups(response.data.group);
          setTasks(response.data.task);
        })
        .catch(error => {
          console.error(error);
        });
    },[]);
    
    const addGroup = () => {
        history.push("/creategroup", {groups})
    }
  
    return (<ContainerDiv>
        {groups.length > 0 && groups.map(item => {
          return(<Group key={item.id} groups={groups} name={item.name} tasks={tasks} id={item.id}/>)
        })}
        <ButtonAddGroup
          onClick={addGroup}>Novo Grupo +</ButtonAddGroup>
    </ContainerDiv>
    );
}

export default Home;