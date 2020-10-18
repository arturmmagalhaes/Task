import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
    background-color: white;
    place-content: center;
    border: 1px solid;
    margin-bottom: 10px;
`;

export const ContentDiv = styled.div`
    padding: 10px;
`;

export default function Task(props){
    const [groups] = useState({group: props.groups, current_group: props.current_group_name, id_group: props.id_group});
    const [task, setTask] = useState(undefined);
    const history = useHistory();

    const updateTaskName = (id, id_group, task) => {
        setTask(task)
        history.push(`/updatetask/${id}/${id_group}`, {groups, task});
    }

    
    return(<>
        {props.tasks.length > 0 && props.tasks.map(item => {
            return(props.id_group === item.id_group && <ContainerDiv key={item.id}>
                <ContentDiv onClick={() => updateTaskName(item.id, item.id_group, item.task)}>{item.task}</ContentDiv>
            </ContainerDiv>)
        })}
    </>);
}