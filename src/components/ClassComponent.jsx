import { Component } from "react";

class ClassComponent extends Component {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        if (this.state.count === 3) {
            throw new Error('Some count error!')
        }
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
                {this.state.count}
            </div>
        )
    }
}

export default ClassComponent;