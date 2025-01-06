import React ,{useState } from 'react';
//React equivalent of PrimeNg
//npm install primereact primeicons
//npm install primeflex (CSS framework)
//https://www.primefaces.org/primereact/
//PrimeReact requires a CSS framework for styling. By default, it uses a theme from its own library.
// PrimeReact Theme
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Replace with your preferred theme
//PrimeReact doesn’t automatically generate labels, so you can use a <label> element for accessibility.
// PrimeReact Core CSS
import 'primereact/resources/primereact.min.css';

// PrimeIcons CSS
import 'primeicons/primeicons.css';

// Optional: PrimeFlex for grid and utilities
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
import customers from './tableData';
function PrimeReact() {
const [value, setValue] = useState('');
const [error, setError] = useState(false);

const validate = () => {
  if (value.trim() === '') {
    setError(true);
  } else {
    setError(false);
    alert(`Submitted: ${value}`);
  }
};


    return (
        <div>
           <h1>Welcome to PrimeReact</h1>
      {/* Button Example */}
      <Button label="Click Me" icon="pi pi-check" />

      {/* DataTable Example */}
      <div className="card">
        <DataTable value={customers} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
        <Column field="id" header="Id" footer="Id" style={{ minWidth: '100px' }}></Column>
        <Column field="name" header="Name" footer="Name" style={{ minWidth: '200px' }}></Column>
        <Column field="country.name" header="Country" footer="Country" style={{ minWidth: '200px' }}></Column>
        <Column field="date" header="Date" footer="Date" style={{ minWidth: '200px' }}></Column>
        <Column field="balance" header="Balance" footer="Balance"  style={{ minWidth: '200px' }}></Column>
        <Column field="company" header="Company" footer="Company" style={{ minWidth: '200px' }}></Column>
        <Column field="status" header="Status" footer="Status" style={{ minWidth: '200px' }}></Column>
        <Column field="activity" header="Activity" footer="Activity" style={{ minWidth: '200px' }}></Column>
        <Column field="representative.name" header="Representative" footer="Representative" style={{ minWidth: '200px' }}></Column>
    
        </DataTable>
      </div>
      <h3>Basic InputText Example</h3>
      <label htmlFor="username">Username:</label>
        <br />
        <div className="p-input-icon-left">
      <i className="pi pi-search" />
      <InputText id="username"
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Enter your text here" 
        data-pr-tooltip="Enter your username" 
        className={error ? 'p-invalid' : ''} // PrimeReact class for invalid stat
      />
      <Tooltip target="#username" />
      </div>
      {error && <small className="p-error">Field is required.</small>}
      <button onClick={validate}>Submit</button>
      <p>You entered: {value}</p>
        </div>
    );
}
export default PrimeReact;
