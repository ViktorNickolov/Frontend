import React from 'react';

const AddButton = () => (
    <div className="content buttons-with-margin">
      <button className="btn btn-success btn-fill btn-wd">Add
          <Route path={`http://localhost:8080/api/v1/clients`} component={Client} />
      </button>
    </div>
);

export default AddButton;