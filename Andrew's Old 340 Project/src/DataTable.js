import React, { useState} from 'react';
import {getDatabase, ref, update, remove} from 'firebase/database';
export default function DataTable(props) {
    
    const columnNames = ["Icon", "Service", "Plan", "Monthly Price ($)", "Use Time (Hour/Day)"];

    //handle no data case
    if (props.data === null) {
      return (
        <table className="table table-bordered">
          <TableHeader columnNames={columnNames} key={columnNames}/>
        <tbody>
        </tbody>
      </table>
      )
    }
    const serviceObjects = props.data.map((element) => (
      <DataRow data={element} key={element.name+element.time}/>
  ))
    
    return (
      <table className="table table-bordered">
        <TableHeader columnNames={columnNames} key={columnNames}/>
        <tbody>
          {serviceObjects}
        </tbody>
      </table>
    )
  }
  
  export function TableHeader(columnNames) {
    const trArray = columnNames.columnNames.map((element) => (
      <th key={element}>
        {element}
      </th>
    ));
  
    return (
    <thead>
      <tr>
        {trArray}
      </tr>
    </thead>
    );
  }
  
  export function DataRow(data) {
    const [useTime, setUseTime] = useState();
    const db = getDatabase();
    

    const handleSubmitUseTime = (event) => {
        const subRef = ref(db, (data.data.userId + "/" + data.data.firebaseKey));
        if (useTime) {
          update(subRef, {
            useTime: useTime
        });
        }
    }
    const handleRemove = (event) => {
      const subRef = ref(db, (data.data.userId + "/" + data.data.firebaseKey));
      remove(subRef);
  }

    const handleUseTime = (event) => {
        setUseTime(event.target.value);
    }

    return (
      <tr key={data.data.time}>
        <td key={data.data.time+data.data.img+"img"}>
            <img src={data.data.img} className="icon" alt="logo" />
        </td>
        <td key={data.data.time+data.data.name+"name"}>
          {data.data.name}
        </td>
        <td key={data.data.plan+data.data.time+"plan"}>
            {data.data.plan}
        </td>
        <td key={data.data.time+data.data.price+"price"}>
            {data.data.price}
        </td>
        <td key={data.data.time+"input"}>
            <input type="text" className="form-control" placeholder="3" aria-label="Service name" onChange={handleUseTime}/>
        </td>
        <td key={data.data.time+"update"}>
            <button type="button" className="btn btn-primary btn-sm" onClick={handleSubmitUseTime}>Update Use Time</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={handleRemove}>Remove Subscription</button>             
        </td>
      </tr>
    )
  }