import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    // field arg - properties of Field
    const {
      meta: { touched, error }
    } = field; // field.meta.touched
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // ... - says it's an object  with all methods = onChange={field.input.onChange} and onFocus and other.
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div> // automatically gets from a validate function
    );
  }

  onSubmit(values) {
    // this === component
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  // values - user entered into form
  const errors = {};
  // Validate the inputs from values
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!"; // title is the same as name in a Field to connect them
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }
  // if errors is empty the form is valid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm" // unique name of form
})(PostsNew);

// PostEdi
