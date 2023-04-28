import { useMemo, useState } from "react";

const UseMemoHook = () => {

    const[text,formatText] = useState('');
    
    const demo= useMemo(()=>{
      console.log("I am calculating...");
      return text;
    })
    function handleChange(e){
      formatText(e.target.value);
    }
    return (
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <p>Updated Text: {demo}</p>
        
      </div>
    )
  }
  export default UseMemoHook