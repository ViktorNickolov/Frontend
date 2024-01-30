import React, { useState, useEffect } from 'react';
import Table from "./Table";
import AddClient from "../AddClient/AddClient";

const Client = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/clients');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that useEffect runs only once, similar to componentDidMount

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Table data={data} />
                </div>
            </div>
        </div>
    );
};

export default Client;
