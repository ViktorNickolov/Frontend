import React from 'react';
import { withRouter } from 'react-router-dom';
import AddClient from "../AddClient/AddClient";

const AddButton = ({ history }) => {
    const handleAddClick = () => {
        // Navigate to the desired component
        history.push('/add-client');
    };

    return (
        <div className="content buttons-with-margin">

            <button
                className="btn btn-success btn-fill btn-wd"
                onClick={handleAddClick}
            >
                Add
            </button>
        </div>
    );
};

export default withRouter(AddButton);
