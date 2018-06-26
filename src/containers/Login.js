import React, {Component} from 'react';
import {connect} from 'react-redux';

import Input from '../components/Input';
import {LOG_USER} from "../actions/actions";

class Login extends Component {

    state = {
        username: '',
        password: '',
        isLogged: false,
        users: [
            {
                username: 'asdasd',
                password: 'asdasd'
            }
        ],
        inputs: [
            {
                value: '',
                id: 'username',
                options: {
                    type: 'text',
                    id: 'username',
                    placeholder: 'Enter username:'
                }
            },{
                value: '',
                id: 'password',
                options: {
                    type: 'password',
                    id: 'password',
                    placeholder: 'Enter password'
                }
            }
        ]
    };

    onInputChange = (event, id) => {
        const inputs = this.state.inputs.slice();
        const currentInput = inputs.find((input) => {
            return input.id === id;
        });
        currentInput.value = event.target.value;

        this.setState({ inputs });
    };

    render() {
        const user = {};
        this.state.inputs.forEach((input) => {
            user[input.options.id] = input.value
        });
        return (
            <div>
                <em>username/password:  asdasd / asdasd</em>
                {this.state.inputs.map((input) => {
                    return <Input key={input.id} options={input.options} changeHandler={this.onInputChange}/>
                })}
                <button onClick={() =>this.props.logUser(user, this.state.users)}>Login</button>
            </div>
        );

    }
}

function mapDispatchToProps(dispatch) {
    return {
        logUser: (user, availableUsers) => {
            if (availableUsers.filter((availableUser) => {
                    return availableUser.username === user.username
                    && availableUser.password === user.password
                }).length > 0
            ) {
                dispatch({
                    type: LOG_USER,
                    payload: {
                        username: user.username,
                        password: user.password,
                        isLogged: true
                    }
                });
            } else {
                dispatch({
                    type: LOG_USER,
                    payload: {
                        username: '',
                        password: '',
                        isLogged: false
                    }
                });
            }
        }
    }
}

export default connect(() => {return {}}, mapDispatchToProps)(Login);
