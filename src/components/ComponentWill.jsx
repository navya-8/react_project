import React, { Component } from 'react';

class ComponentWill extends Component {
    state = {
        formData: {
            name: "",
            age: 0,
        },
        finalFormData: {

        }
    };

    handleNameChange = (event) => {
        const { value } = event.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                name: value
            }
        }))
    }

    handleAgeChange = (event) => {
        const { value } = event.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                age: value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { formData } = this.state
        this.setState(prevState => ({
            ...prevState,
            finalFormData: {
                ...prevState.finalFormData,
                ...formData
            },
            formData : {
                name: "",
                age: 0,
            }
        }))
    }

    render() {
        console.log(this.state.formData);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='name' placeholder='name' type={'text'} value={this.state.formData.name} onChange={this.handleNameChange} />
                    <input name='age' placeholder='age' type={'number'} value={this.state.formData.age} onChange={this.handleAgeChange} />
                    <button type='submit' aria-label='submit' >
                        Submit
                    </button>
                </form>
                {
                    this.state.finalFormData && Object.keys(this.state.finalFormData).length > 0 && (
                        <p>
                            final data is {this.state.finalFormData.name} and  {this.state.finalFormData.age}
                        </p>
                    )
                }
            </div>
        )
    }
};


export default ComponentWill;