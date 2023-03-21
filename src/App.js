import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

class App extends Component {
    handleClick () {
        // alert("Oh, you've just pushed me!");
        axios.get('https://api.github.com/users/cassidoo')
            .then(response => {
                // console.log(response);
                this.setState({
                    isLoaded: true,
                    user: {
                        avatar_url: response.data.avatar_url,
                        login: response.data.login,
                        name: response.data.name,
                        bio: response.data.bio,
                    }
                });
            });
    }
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            user: {
                avatar_url: '',
                login: '',
                name: '',
                bio: ''
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render () {
        /*
        let profile_container = (
            <div className="profile-container">
                <img src={this.state.user.avatar_url} alt="Avatar"/>
                <h3>{this.state.user.name}</h3>
                <h4>@{this.state.user.login}</h4>
                <p>{this.state.user.bio}</p>
            </div>
        );
        */

        let profile_container = (
            <Card border="danger" className="bootstrap-profile-container">
                <Card.Img variant="top" src={this.state.user.avatar_url} />
                <Card.Body>
                    <Card.Title>{this.state.user.name}</Card.Title>
                    <Card.Text>{this.state.user.bio}</Card.Text>
                    <Card.Link href={'https://github.com/' + this.state.user.login}>
                        @{this.state.user.login}
                    </Card.Link>
                </Card.Body>
            </Card>
        );

        return (
            <main>
                <div className="button-container">
                    <Button variant="outline-danger" className="bootstrap-button" onClick={this.handleClick}>Push me!</Button>
                </div>
                {this.state.isLoaded && profile_container}
            </main>
        );
    }
}

export default App;
