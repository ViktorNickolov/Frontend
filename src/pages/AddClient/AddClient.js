import React from 'react';
import {Field, reduxForm} from "redux-form";
import renderField from "../../components/FormInputs/renderField";

const AddClient = () => (

  <div className="card">
    <div className="header">
      <h4>Create new Client</h4>
    </div>
    <div className="content">
      <form className="form-horizontal">

        <div className="form-group">
          <label className="control-label col-md-3">First Name</label>
          <div className="col-md-9">
            <Field
                name="First Name"
                type="text"
                placeholder="first name"
                component={renderField}/>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Last Name</label>
          <div className="col-md-9">
            <Field
                name="Last Name"
                type="text"
                placeholder="last name"
                component={renderField}/>
          </div>
        </div>

      </form>
    </div>
  </div>
);

const ConnectedAddClient = reduxForm({
    form: 'clientForm',  // Replace with a unique form name
})(AddClient);

export default ConnectedAddClient;