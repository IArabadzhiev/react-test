import React, {Component} from 'react';
import {connect} from 'react-redux';

import Input from '../components/Input';
import {LOG_USER} from "../actions/actions";

class Login extends Component {

    state = {
        username: '',
        password: '',
        isLogged: false,
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
                {this.state.inputs.map((input) => {
                    return <Input key={input.id} options={input.options} changeHandler={this.onInputChange}/>
                })}
                <button onClick={() =>this.props.logUser(user)}>Login</button>
            </div>
        );

    }
}

function mapDispatchToProps(dispatch) {
    return {
        logUser: (user) => {
            dispatch({
                type: LOG_USER,
                payload: {
                username: user.username,
                    password: user.password,
                    isLogged: true
                }
            });
        }
    }
}

export default connect(() => {return {}}, mapDispatchToProps)(Login);
