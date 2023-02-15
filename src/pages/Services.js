import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import "../App.css";

//Image Imports
import emergency from "../images/services/emergency.jpeg";
import hedge from "../images/services/osman-rana-aEcF58jG1n4-unsplash.jpg";
import pruning from "../images/services/pruning.jpg";
import removal from "../images/services/removal.jpeg";
import stump from "../images/services/stump.jpg";

function Services() {
  const services = [
    {
      id: 0,
      image: pruning,
      name: "Tree Pruning",
      body: "Test",
    },
    {
      id: 1,
      image: removal,
      name: "Tree Removal",
      body: "Test",
    },
    {
      id: 2,
      image: stump,
      name: "Stump Grinding",
      body: "Test",
    },
    {
      id: 3,
      image: hedge,
      name: "Hedge Trimming",
      body: "Test",
    },
    {
      id: 4,
      image: emergency,
      name: "24/7 Emergency Tree Service",
      body: "Test",
    },
  ];

  return (
    <>
      <TopNav />
      <Nav />
      <h1>Services</h1>
      {services.map((service) => {
        return (
          <div className="serviceCardContainer">
            <ServiceCard
              image={service.image}
              name={service.name}
              body={service.body}
              id={service.id}
              key={service.id}
            />
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default Services;
