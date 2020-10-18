import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateGroup from './CreateGroup';
import CreateTask from './CreateTask';
import Home from './Home';
import UpdateGroupName from './UpdateGroupName';
import UpdateTaskName from './UpdateTaskName';

export default function Routes() {
    return(<Switch>
        <Route exact path="/" render={(props) => <Home {...props} />}/>
        <Route exact path="/creategroup" render={(props) => <CreateGroup {...props}/>}/>
        <Route exact path="/updategroup/:id" render={(props) => <UpdateGroupName {...props}/>}/>
        <Route exact path="/createtask/:id" render={(props) => <CreateTask {...props}/>}/>
        <Route exact path="/updatetask/:id/:id_group" render={(props) => <UpdateTaskName {...props}/>}/>
    </Switch>);
}