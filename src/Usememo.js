import React, { useMemo, useState } from 'react'
import { useReducer } from 'react'


function Usememo() {

  // const reducer =(state,action)=>{
  //   switch(action.type)
  //   {
  //     case 'inc' : return {count : state.count+1};

  //     case 'decs' : return {count : state.count-1};

  //     default : return state.count;
  //   }
  // }

  // const[state,dispatch]=useReducer(reducer,{count:0})
  
  const[count,setcount] = useState(0);
  const[item,setitem]= useState(0);
  
  const UpCount=()=>{
    setcount(count+1)
  }
  
  const DownCount=()=>{
    setcount(count-1)
  }

  const Upitem=()=>{
    setitem(item+1)
  }

  const Downitem=()=>{
    setitem(item-1)
  }


  const demo = useMemo(()=>{
    console.log("demo function called")
  },[count])



  return (
    <>


<h1> Initial count {count} </h1>

<button onClick={()=>UpCount()}>Up count</button>
<button onClick={()=>DownCount()}>Down count</button>



<h1>Initial Item {item}</h1>

<button onClick={()=>Upitem()}>Up item</button>
<button onClick={()=>Downitem()}>Down item</button>



<h1>{demo}</h1>












































    {/* <h1>count : {state.count}</h1>
    <button onClick={()=>dispatch({type:'inc'})}>increse count</button>
    <button onClick={()=>dispatch({type:'decs'})}>decreas count</button> */}
    </>
  )
}

export default Usememo
