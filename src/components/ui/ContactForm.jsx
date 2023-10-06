import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    description: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
    console.log(formValues);
    if (isSubmit === true) {
      navigate("/contactFormSubmitSuccess");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //First Name input errors:
    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (values.firstName.length < 3) {
      errors.firstName = "First name must be minimum 3 characters";
    }

    //Last Name input errors:
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Last name must be minimum 3 characters";
    }

    //Email input errors:
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email format is not valid!";
    }

    //Subject input errors:
    if (!values.subject) {
      errors.subject = "A subject is required";
    } else if (values.subject.length < 3) {
      errors.subject = "The subject must be minimum 3 characters";
    }

    //Description input errors:
    if (!values.desccription) {
      errors.description = "A description is required";
    } else if (values.description.length < 3) {
      errors.description = "The description must be minimum 3 characters";
    }

    return errors;
  };

  return (
    <div className="container">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          name="firstName"
          value={formValues.firstName}
          placeholder="Type your first name here..."
          onChange={handleChange}
        />
        <p className="errorMessage">{formErrors.firstName}</p>

        <label htmlFor="lastName">Last name</label>
        <input
          name="lastName"
          value={formValues.lastName}
          placeholder="Type your last name here..."
          onChange={handleChange}
        />
        <p className="errorMessage">{formErrors.lastName}</p>

        <label htmlFor="email">Your email</label>
        <input
          name="email"
          value={formValues.email}
          placeholder="Type a valid email..."
          onChange={handleChange}
        />
        <p className="errorMessage">{formErrors.email}</p>

        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={formValues.subject}
          placeholder="Type the title of your message here..."
          onChange={handleChange}
        />
        <p className="errorMessage">{formErrors.subject}</p>

        <label htmlFor="description">Description</label>
        <input
          name="description"
          value={formValues.description}
          placeholder="Type your message here..."
          onChange={handleChange}
        />
        <p className="errorMessage">{formErrors.description}</p>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
