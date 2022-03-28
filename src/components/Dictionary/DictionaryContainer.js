import React from 'react'
import Dictionary from './Dictionary'
import Login from './../Login/Login'

class DictionaryContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            login: 'Admin',
            pass: '12345',
            return: false
        }
    }

    componentDidMount() {
        if(localStorage.login === this.state.login && localStorage.pass === this.state.pass) {
            this.setState(
                {return: true}
            )
        } else {
            this.setState(
                {return: false}
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.return ? <Dictionary /> : <Login dataLogin = {this.state.login} dataPass = {this.state.pass} />
                }
            </div>
        )
    }
}

export default DictionaryContainer;