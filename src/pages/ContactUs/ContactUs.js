import TopNav from "../../components/TopNav";
import Nav from "../../components/Nav";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";

import "./contactUs.css";

function ContactUs() {
  return (
    <>
      <TopNav />
      <Nav />
      <Container fluid="sm">
        <h1>Get in Contact</h1>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}

export default ContactUs;
