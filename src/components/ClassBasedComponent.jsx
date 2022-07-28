import React, { Component } from 'react';

class ClassBasedComponent extends Component {

    state = {
        // write all state properties inside of this
        count : 0,
        flag : false
    }

    handleClick = () => {
        const { count } = this.state;
        //setState method
        this.setState({
            count : count + 1
        }, () => {
            console.log(this.state);
        })
    }

    componentDidMount() {
        console.log('component is mounted');
    }

    componentDidUpdate (prevProps, prevState) {
        console.log(prevState, this.state);
        if(prevState && prevState.count !== this.state.count && this.state.count === 10){
            this.setState({
            flag: true
            })
        }
    }

    componentWillUnmount() {
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={this.handleClick} >Click</button>
                {
                    this.state.count === 5 && " count is five"
                }
                {
                    this.state.flag && <p> Flag is true</p>
                }
            </div>
        )
    }
};


export default ClassBasedComponent;