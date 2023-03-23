import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class UrlForm extends Component {
    handleChange (event) {
        this.setState({url: event.target.value});
    }
    handleSubmit (event) {
        if (this.state.url.match(
            /^http(s)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*$)/g
        )) {
            window.open(this.state.url, '_blank').focus();
        } else {
            console.log('this is not a valid url');
        }
        event.preventDefault();
    }
    constructor() {
        super();
        this.state = {url: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="urlForm.url">
                    <Form.Label>Enter a valid URL, please</Form.Label>
                    <Form.Control type="text" placeholder="https://example.com" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Go to the website</Button>
            </Form>
        );
    }
}

export default UrlForm;