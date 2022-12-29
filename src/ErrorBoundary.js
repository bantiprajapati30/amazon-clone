import React, { Component } from 'react';
import NotFoundPage from './component/NotFoundPage';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
   this.state ={
    hasError:false
   }
    }
static getDerivedStateFromError(error) {
    return {
        hasError:true
    }
}
    

    render() {
        if(this.state.hasError) {
            return <NotFoundPage />
        }
        return this.props.children
    }
}


export default ErrorBoundary;