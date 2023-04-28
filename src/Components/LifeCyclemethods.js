import React, { Component } from "react";

class LifeCyclemethods extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate() {
        return true;
    }
    componentDidMount() {
        console.log("Hello world!! our component is successfully mounted");
    }
    componentDidUpdate() {
        console.log("Hello guys!! I am updated");
    }
    componentWillUnmount() {
        console.log("Component is unmounted");
    }
    
    render() {
        return (        
                <div>LifeCyclemethods:
                    <h1>This method is : {this.state.count}</h1>
                    <button onClick={()=>this.setState({count: this.state.count+1})}>Click Me !!</button>
                </div>
        )
    }
}

export { LifeCyclemethods }