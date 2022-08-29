import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        // you need to pass whatever props this takes to the parent's constructor too
        super(props);
        this.state = {
            hasError: false
        };
    }

    // lifecycle method that is basically the equivalent of a catch in a try/catch block
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }
        
        // if no error, just render the children and do nothing else
        return this.props.children;
    }
}

export default ErrorBoundary;