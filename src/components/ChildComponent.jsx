import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        console.log("Je suis dans le constructeur enfant")
    }
    componentDidMount () {
        console.log(" je suis dans le componentDidMount enfant");
        this.setState({

        })

    }
    render () {
        console.log("Je suis dans le render de l'enfant")
        return (
            <div>
                {console.log("Je suis dans le render --> return de l'enfant")}
            </div>
        );
    }
}
export default ChildComponent;