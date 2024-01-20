
import './App.css'
// import { createGrid } from 'ag-grid-community';

// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';


function App() {
 

  return (

  <div>
    <h1 className='text-center'>This is CT</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Student-Id</th>
      <th scope="col">Student-Name</th>
      <th scope="col">CO1</th>
      <th scope="col">CO2</th>
      <th scope="col">CO3</th>
      <th scope="col">CO4</th>
      <th scope="col">CO5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td><input type="text" maxlength="4" size="4"/></td>
      <td><input type="text" maxlength="4" size="4"/></td>
      <td><input type="text" maxlength="4" size="4"/></td>
      <td><input type="text" maxlength="4" size="4"/></td>
      <td><input type="text" maxlength="4" size="4"/></td>
    </tr>
      <tr>
      <th scope="row">CSE02607348</th>
      <td>Md Sujait Ullah Talukder</td>
      <td><input type="text" maxlength="4" size="4"/></td>
      <td><input type="text" maxlength="4" size="4"/></td>
      <td><input type="text" maxlength="4" size="4"/></td>
      <td><input type="text" maxlength="4" size="4"/></td>
      <td><input type="text" maxlength="4" size="4"/></td>
    </tr>


  </tbody>
</table>

  </div>


  )
}

export default App
