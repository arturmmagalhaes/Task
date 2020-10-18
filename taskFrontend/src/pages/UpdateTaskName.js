import React from 'react';
import Form from '../components/Form';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import api from '../services/api';

export const DeleteSpan = styled.span`
    cursor: pointer;
`;

export default function UpdateTaskName(props) {
    const history = useHistory();
    const params = useParams();
    
    const deleteTask = () => {
        api.delete(`/deletetask/${params.id}`)
            .then(() => {history.push('/')})
            .catch(error => {
                console.error(error);
            })
    }

    return(<>
        <Form 
            groups={props.location.state.groups.group} 
            current_group_name={props.location.state.groups.current_group} 
            current_group_id={props.location.state.groups.id_group} 
            task={props.location.state.task} 
            path={'updatetaskgroup'} 
            placeholder={"Atualizar nome da tarefa"} />
        <DeleteSpan onClick={deleteTask} title="Deletar Tarefa">X</DeleteSpan>
    </>);
}