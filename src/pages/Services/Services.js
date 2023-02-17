import TopNav from "../../components/TopNav";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./services.css";

//Image Imports
import emergency from "../../images/services/emergency.jpeg";
import hedge from "../../images/services/osman-rana-aEcF58jG1n4-unsplash.jpg";
import pruning from "../../images/services/pruning.jpg";
import removal from "../../images/services/removal.jpg";
import stump from "../../images/services/stump.jpg";

function Services() {
  const services = [
    {
      id: 0,
      image: pruning,
      name: "Tree Pruning",
      body: "Pruning is an important and crucial practice for maintaining or improving the health of your trees.",
    },
    {
      id: 1,
      image: removal,
      name: "Tree Removal",
      body: "Tree removal is sometimes necessary. Whether a tree is in a severe state of decline or has already died, removal may be the only solution. It may also be necessary to remove trees to make way for a new addition or the tree may just be aesthetically unappealing.",
    },
    {
      id: 2,
      image: stump,
      name: "Stump Grinding",
      body: "Stumps may be ground to a maximum depth of 12 inches (30cm). Debris from stump grinding may be left on site or removed, as well as reinstated with topsoil and grass seed.",
    },
    {
      id: 3,
      image: hedge,
      name: "Hedge Trimming",
      body: "Trimming of hedges is usually done for aesthetic reasons. Trimming your hedges annually will help improve privacy and curb appeal.",
    },
    {
      id: 4,
      image: emergency,
      name: "24/7 Emergency Tree Service",
      body: "From ice storms to tornados, broken branches to fallen trees, TMK Inc is always prepared to help with any potential tree relegated hazards.",
    },
  ];

  return (
    <>
      <TopNav />
      <Nav />
      <h1 className="container">Services</h1>
      {services.map((service) => {
        return (
          <div key={service.id} className="serviceCardContainer container">
            <ServiceCard
              image={service.image}
              name={service.name}
              body={service.body}
              id={service.id}
            />
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default Services;
