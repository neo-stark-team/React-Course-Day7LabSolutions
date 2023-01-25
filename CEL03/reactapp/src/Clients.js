import React,{useState,useEffect} from 'react';  
const Clients =()=>{
    const[client, setClient]=useState([]);
    useEffect(()=>{
      let data=[
        {id:101,name:"Charles"},
        {id:102,name:"Kumar"}
    ];
    setClient(data);
    },[]);
    
    return <div>
        <h3>UseEffect Hook Used</h3>
        <ul>
      {client.map(cc => (
        <li key={cc.id}>{cc.name}</li>
      ))}
    </ul>
    </div>;
  };
  export default Clients;