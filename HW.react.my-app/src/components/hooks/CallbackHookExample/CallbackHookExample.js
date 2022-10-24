import React, { useCallback, useEffect, useState } from 'react';

const ItemList = ({ getData }) => {

  const [state, setState] = useState(null);

  useEffect(() => {
    const data = getData();
    setState(data);
  }, [getData]);

  return(
    <ul>
      {state?.map(el => <li key={el}>{el}</li>)}
    </ul>
  )
}


const CallbackHookExample = () => {

  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(6);

  const getData = useCallback(() => {
    console.log('render!');
    return new Array(count2).fill(null).map((_, idx) => `Element ${idx + 1}`)
  }, [count2]);
  //
  // const getData = ()=>{
  //   console.log('render!');
  //   return new Array(count2).fill(null).map((_, idx) => `Element ${idx + 1}`)
  // };

  return(
    <div>
      <h3>{count}, {count2}</h3>
      <h3>CallbackHookExample</h3>

      <ItemList getData={getData}/>

      <button onClick={() => setCount(count + 1)}>
        Click 1
      </button>

      <button onClick={() => setCount2(count2 + 1)}>
        Click 2
      </button>
    </div>
  )
}

export default CallbackHookExample;