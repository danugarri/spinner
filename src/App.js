import React, { useState, useEffect } from 'react';
import { Spinner } from "./components/Spinner/Spinner";
import './App.css';

function App() {

  const [spinner, setSpinner] = useState(true);
  const [dataTest, setDataTest ] = useState(<></>);
    const data = (<table>
      <tr>
      <th> Nombre </th>
      <th> Apellido </ th>
      <th> Nota </ th>
      <th> Convocatoria </ th>
      </ tr>
      <tr>
      <td> Maria </ td>
      <td> Campos </ td>
      <td> 8.3 </ td>
      <td> EVA1 </ td>
      </ tr>
      <tr>
      <td> Jose </ td>
      <td> Garcia </ td>
      <td> 6.7 </ td>
      <td> EVA1 </ td>
      </ tr>
      <tr>
      <td> Marcos </ td>
      <td> Galvez </ td>
      <td> 3.5 </ td>
      <td> EVA1 </ td>
      </ tr>
      </table>)

  const funcionAsincrona = () => {
    setSpinner(false);
  }
   const showData = () => {
     setDataTest(data);
    }
  useEffect(() => {
   
    setTimeout(showData,4000);
    setTimeout(funcionAsincrona,4000)
  },[]);

  return (
    <div>
     {
     spinner && <Spinner />
    }
    {
    !spinner && dataTest}
    </div>
  );
}

export default App;
