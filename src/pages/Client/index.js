import React from 'react';
import Table from "./Table";

const data = fetch('http://localhost:8080/api/v1/clients');
console.log(data)

const Client = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <Table data={data} />
            </div>
        </div>
    </div>
);

export default Client;