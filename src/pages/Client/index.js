import React from 'react';
import Table from "./Table";
import Button from "./AddButton";
import generateClientData from "./generateClientData";

const data = generateClientData(5);

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