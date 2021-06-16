import React, { Component } from 'react';
import ChildComponent from './ChildComponent'

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Toto",
            index: 1,
        }
        console.log(this.state.index + " je suis dans le constructeur");
    }
    componentDidMount () {
        console.log(this.state.index + " je suis dans le componentDidMount");
        this.setState({
            name: this.props.name,
            index: this.state.index + 1
        })
        console.log("Changement de step")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.index + " Je suis dans le componentDidUpdate");
        console.log(prevState)
        console.log(this.state);
    }
    

    render () {
        console.log(this.state.index + " je suis dans le render");
        return (
            <div>
                {console.log(this.state.index + " je suis dans le return")}
                <ChildComponent />
            </div>
        )
    }
}
export default LifeCycle;