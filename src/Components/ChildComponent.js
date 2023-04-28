import React from 'react'

// export default class ChildComponent extends Component {

//     render() {
//         return (
//             <div>
//                 <h1>Data from Parent Component: {this.props.count}</h1>
//             </div>
//         )
//     }
// }
export default function ChildComponent({ count, setState }) {
console.log(count, setState);
    return (
        <>
            <button onClick={()=>setState(count + 1)}>Increament By one</button>
            <h1>Value is: {count}</h1>
        </>

    )
}