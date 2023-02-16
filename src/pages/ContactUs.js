import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";

function ContactUs() {
  return (
    <>
      <TopNav />
      <Nav />
      <Container fluid="sm">
        <h1 className="contactTitle">Get in Contact</h1>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}

export default ContactUs;
