import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import api from '../services/api';

export const BackButton = styled.span`
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
`;

export default function Form(props) {
    const [inputName, setInputName] = useState(props.task);
    const [group, setGroup] = useState(props.current_group_id);
    const history = useHistory();
    const params = useParams();

    const inputNameOnChange = (event) => {
        setInputName(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if(props.path === 'insertgroup'){
            api.post(props.path,{name: inputName})
                .then(() => {        
                    history.push("/");
                })
                .catch(error => {
                    console.error(error);
                });
        } 
        else if(props.path === 'updategroup'){
            api.put(props.path+`/${params.id}`, {name: inputName})
                .then(() => {        
                    history.push("/");
                })
                .catch(error => {
                    console.error(error);
                });
        }
        else if(props.path === 'updatetaskgroup'){
            api.put(props.path+`/${params.id}/${group}`, {name: inputName})
                .then(() => {        
                    history.push("/");
                })
                .catch(error => {
                    console.error(error);
                });
        }
        else {
            api.post(props.path+`/${params.id}`,{
                name: inputName
            })
            .then(() => {        
                history.push("/");
            })
            .catch(error => {
                console.error(error);
            });
        }
    }

    const onChangeGroup = (event) => {
        setGroup(event.target.value);
    }

    return(<>
        <BackButton onClick={() => {history.goBack();}}>{'<'}</BackButton>
        <form onSubmit={submitForm}>
            {props.path === 'updatetaskgroup' && 
            <select onChange={onChangeGroup}>
                <option value={props.current_group_id}>{props.current_group_name}</option>
                <option value={props.current_group_id}>__________________</option>
                {props.groups.length > 0  && props.groups.map(item => {
                return(<option name="group" defaultValue={props.current_group} key={item.id} value={item.id}>{item.name}</option>)
                })}
            </select>}
            <input 
                type="text"
                placeholder={props.placeholder}
                value={inputName}
                onChange={inputNameOnChange}/>
            <button>Enviar</button>
        </form>
    </>);
}