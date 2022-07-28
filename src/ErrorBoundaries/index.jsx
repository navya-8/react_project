import { Component } from "react";

class ErrorBoundaries extends Component {
    state = {
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, info) {
        this.setState({
            error,
            errorInfo: info
        })
    }

    render() {
        console.log(this.state);
        if (this.state.error) {
            return (
                <p>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {
                        this.state.errorInfo && this.state.errorInfo.componentStack
                    }
                </p>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundaries;