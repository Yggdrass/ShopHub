import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./styles/Buttons.css";
import "./styles/Input.css";
import "../../pages/Pages.modules.css";
import { Button } from "@mui/material";

const StyledSubmitContactFormButton = styled(Button)`
  text-decoration: none;
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 25px;
  background-color: green;
  color: white;
  margin-top: 3rem;
  cursor: pointer;
`;

const ContactForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 3) {
      validationErrors.firstName =
        "Your first name must be longer than 3 characters";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    } else if (formData.lastName.length < 3) {
      validationErrors.lastName =
        "Your last name must be longer than 3 characters";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!regex.test(formData.email)) {
      validationErrors.email = "This is not a valid email";
    }

    if (!formData.subject.trim()) {
      validationErrors.subject = "A subject is required";
    } else if (formData.subject.length < 3) {
      validationErrors.subject = "The subject must be longer than 3 characters";
    }

    if (!formData.body.trim()) {
      validationErrors.body = "A body name is required";
    } else if (formData.body.length < 3) {
      validationErrors.body = "The body must be longer than 3 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      navigate(`/contact/contactFormSubmitSuccess`);
    }
  };

  return (
    <div className="container">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Type your first name here..."
          autocomplete="off"
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}

        <br />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Type your last name here..."
          autocomplete="off"
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}

        <br />

        <label htmlFor="email">Your email</label>
        <input
          type="text"
          name="email"
          placeholder="Type a valid email..."
          autocomplete="off"
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}

        <br />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Type the title of your message here..."
          autocomplete="off"
          onChange={handleChange}
        />
        {errors.subject && <span>{errors.subject}</span>}

        <br />

        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          placeholder="Type your message here..."
          autocomplete="off"
          onChange={handleChange}
        />
        {errors.body && <span>{errors.body}</span>}

        <br />

        <div className="button_div">
          <StyledSubmitContactFormButton type="submit">
            Submit Form
          </StyledSubmitContactFormButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
