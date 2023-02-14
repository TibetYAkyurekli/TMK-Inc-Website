import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "../App.css";

function ContactForm() {
  const [disabled, setDisabled] = useState(true);

  //#region Form Data Object
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
    // <Container fluid="sm" className="fullHeight">
    <Form
      action="https://formspree.io/f/mlekjogq"
      method="POST"
      className="form"
    >
      <Form.Group controlId="formName">
        <Form.Label>Your Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Your Phone #:</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Your email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formMessage">
        <Form.Label>Message:</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={formData.message}
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
          <option value="">Select a Service</option>
          <option value="Tree Pruning">Tree Pruning</option>
          <option value="Tree Removal">Tree Removal</option>
          <option value="Stump Grinding">Stump Grinding</option>
          <option value="Hedge Trimming">Hedge Trimming</option>
          <option value="EMERGENCY TREE SERVICE">
            24/7 Emergency Tree Service
          </option>
        </Form.Control>
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
    // </Container>
  );
}

export default ContactForm;
