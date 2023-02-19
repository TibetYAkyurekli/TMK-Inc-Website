import TopNav from "../../components/TopNav/TopNav";
import Nav from "../../components/Nav/Nav";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";

import "./contactUs.css";

function ContactUs() {
  return (
    <>
      <TopNav />
      <Nav />
      <div className="formContainer">
        <Container className="fullScreen" fluid="sm">
          <ContactForm />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
