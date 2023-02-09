import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';


const DataFromGit = () => {
    const [ data, setData ] = useState([]);
    const [ columns, setColumns ] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/repos/Equator-Studios/scrapers/contents/scrapers`).then(res => {
            const data = res.data.map(item => ({
                name: item.name,
                html_url: item.html_url,
                raw_file_url: item.download_url,
            }));

            setData(data);

            setColumns([
                { field: 'name', headerName: 'Name', width: 500 },
                { field: 'html_url', headerName: 'Github URL', width: 500, 
                  renderCell: ( rowData ) => (
                    <a href={rowData.value} target="_blank" rel="noopener noreferrer">
                      Github Link
                    </a>
                  )
                },
                { field: 'raw_file_url', headerName: 'Raw File URL', width: 500, 
                  renderCell: ( rowData ) => (
                    <a href={rowData.value} target="_blank" rel="noopener noreferrer">
                      Raw File
                    </a>
                  )
                },
            ]);
        });
}, []);





    return (
        <div style={{ height: 350, width: '100%'}}>
            <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, padding: 10 }}>
                Scraper List for Equator
            </div>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10, 20, 50]}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(row) => row.name}
                headerStyle={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    backgroundColor: '#ddd',
                    textAlign: 'center'
                  }}
            />
        </div>
    );
};

export default DataFromGit;




//INITIAL CODE I STARTED WITH FOR TESTING

// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const data = [
//   { id: 1, name: 'Andy Hoax', age: 32 },
//   { id: 2, name: 'Paul Anita', age: 29 },
//   { id: 3, name: 'Linda Cowell', age: 40 },
// ];

// const columns = [
//   { field: 'name', headerName: 'Name' },
//   { field: 'age', headerName: 'Age' },
// ];

// function App() {
//   return (
//     <div>
//       <h2>Data Grid Example</h2>
//       <DataGrid rows={data} columns={columns} />
//     </div>
//   );
// }

// export default App;
