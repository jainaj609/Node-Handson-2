// import React, { useState } from 'react'
// import ChildComponent from './ChildComponent'
// export default class ClassComponent extends Component {

//     state= {
//         count:0
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <ChildComponent count={this.state.count}/>
//       </div>
//     )
//   }
// }


// export default function ClassComponent() {

//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1> {count}</h1>
//       <ChildComponent count={{ count, setCount }} />
//     </>
//   )
// }

// import React, { Component } from 'react'

// class LifeCyclemethods extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }
//   componentDidMount() {
//     console.log("Hello world!! our component is successfully mounted");
//   }
//   componentDidUpdate() {
//     console.log("Hello guys!! I am updated");
//     alert("updated")
//   }
//   componentWillUnmount() {
//     console.log("Component is unmounted");
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 })
//   }


//   render() {
//     return (
//       <div>LifeCyclemethods:

//         <div>{this.state.count}</div>

//         <div><button onClick={() => { this.increment() }}>Click Me !!</button></div>

//         <div style={{ color: 'red' }}>{this.props.data}</div>

//       </div>
//     )
//   }
// }

// export default LifeCyclemethods