
import './App.css';
import { useState } from 'react';
import { TableData } from './table';

function App() {
  const [student, setStudent] = useState({ fname: '', lname: '', hobby: '' });
  const [data, setData] = useState(JSON.parse(localStorage.getItem("sm")) || []);

  const jon = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value })

  }

  const submmit = () => {
    setData([...data, student]) 
    localStorage.setItem("sm", JSON.stringify(data))
  }


  const deletedata = (idx) => {
    const delet = data.filter((item, index) => { return idx !== index })
    setData(delet)
  }

  const sortdata = () => {
    const sorted = data.sort((a, b) => {
      return (a.fname > b.fname ? 1 : -1)
    })
    setData([...sorted])
  }

  return (
    <div>
      <lable htmlFor='fname'>Fname</lable>
      <input type='text' name='fname' id='fname' value={student.fname} onChange={(e) => jon(e)} /><br />
      <br />
      <label htmlFor='lname'>Lname</label>
      <input type='text' name='lname' id='lname' value={student.lname} onChange={(e) => jon(e)} /><br />
      <br />
      <label htmlFor='hobby'>hobby :-</label>
      <label htmlFor='cricket'>Cricket :</label>

      <input type='checkbox' name='hobby' id='cricket' value="cricket" onChange={(e) => jon(e)} />
      <label htmlFor='hockey'>Hockey :</label>
      <input type='checkbox' name='hobby' id='hockey' value="hockey" onChange={(e) => jon(e)} />

      <button onClick={() => submmit()}>Submmit</button>
      <button onClick={() => sortdata()}>sort</button>
      <TableData recordsdata={data} deletedata={(e)=> deletedata(e)}/>
    </div>
  )
}

export default App;
