import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNameAction, createUserAction} from "../../actions/actions";

const MainPage = () => {
    const users = useSelector(state => state.usersReducer.users);
    const name = useSelector(state => state.usersReducer.name);
    const dispatch = useDispatch()
    const createUser = () => {
        dispatch(createUserAction(name))
    }
    const changeInput = (e) => {
        dispatch(addNameAction(e.target.value))
    }
    return (
        <div>
            main page
            <div>
                <input type="number" onChange={changeInput} value={name}/>
                <button onClick={createUser}>create user</button>
            </div>
            
            <ul>
                <li>users:</li>
                {users.map((user, key) => <li key={key}>{user}</li>)}
            </ul>

        </div>
    );
};

export default MainPage;