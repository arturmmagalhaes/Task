import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Task from './Task';
import api from '../services/api';

export const ContainerDiv = styled.div`
    width: 200px;
    margin-right: 15px;
`;

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: blue;
    padding: 10px;
    color: white;
`;

export const ContentDiv = styled.div`
    background-color: #D8D1EA;
    padding: 10px;
`;

export const AddTaskButton = styled.div`
    color: #2A7EDE;
    padding-top: 10px;
    cursor: pointer;
`;

export const DeleteButton = styled.div`
    position: relative;
    right: -19px;
    background-color: #9B9B9B;
    border-radius: 50%;
    width: 22px;
    height: 21px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
`;

export default function Group(props) {
    const history = useHistory();

    const addTask = (id) => {
        history.push(`/createtask/${id}`);
    }

    const deleteGroup = (id) => {
        api.delete(`/deletegroup/${id}`)
            .then(() => {
                document.location.reload(true);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const updateGroupName = (id) => {
        history.push(`/updategroup/${id}`)
    }

    return(<ContainerDiv>
        <TitleDiv><span onClick={() => updateGroupName(props.id)}>{props.name}</span> <DeleteButton onClick={() => deleteGroup(props.id)}>X</DeleteButton></TitleDiv>
        <ContentDiv>
            <Task groups={props.groups} current_group_name={props.name} tasks={props.tasks} id_group={props.id}/>
            <AddTaskButton 
                onClick={() => addTask(props.id)}>Novo Card +</AddTaskButton>
        </ContentDiv>
    </ContainerDiv>);
}