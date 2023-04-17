import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

import "./contactForm.css";

function ContactForm() {
  const [disabled, setDisabled] = useState(true);

  //#region Form Data Object
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    services: "",
  });
  //#endregion

  //#region Handle the input of the form.
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    console.log(formData);
  };
  //#endregion

  //#region Handle the input of service selection.
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // Handle Disabling the button when no service is selected.
    event.target.value !== "" ? setDisabled(false) : setDisabled(true);
  };
  //#endregion

  return (
    <div className="form">
      <h1 className="contactUsTitle">Get in Contact</h1>
      <Form
        action="https://submit-form.com/CgCpP2YC"
        className="formStyling"
        method="POST"
      >
        <Form.Group controlId="formName">
          <Form.Label>Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Your Phone #:</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Your Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Your Address:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formServices">
          <Form.Label>Service Required:</Form.Label>
          <Form.Control
            as="select"
            name="services"
            aria-label="Service Selection"
            onChange={handleInputChange}
            required
          >
            <option value="" disabled selected>
              Select a Service
            </option>
            <option value="Tree Pruning">Tree Pruning</option>
            <option value="Tree Removal">Tree Removal</option>
            <option value="Stump Grinding">Stump Grinding</option>
            <option value="Hedge Trimming">Hedge Trimming</option>
            <option value="EMERGENCY TREE SERVICE">
              24/7 Emergency Tree Service
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Form.Text>
            We'll <b>never</b> share your information with anyone else.
          </Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className={disabled === true ? "formBtnDisabled" : "formBtn"}
          disabled={disabled}
        >
          Send
        </Button>
      </Form>
      <p className="phoneText">
        Or Call <a href="tel:613-229-4024">613-229-4024</a>
      </p>
    </div>
  );
}

export default ContactForm;
