import React from 'react';
import Button from "./AddButton";

const Table = ({data}) => (
    <div className="card">
        <div className="header">
            <h4 className="title">CLIENTS</h4>
            <p className="category">Here is a subtitle for this table</p>
        </div>
        <div className="text-right">
            <Button/>
        </div>
        <div className="content table-responsive table-full-width">

            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {[data].map((item, index) => (
                    <tr key={index + 1}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default Table;