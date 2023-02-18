import TopNav from "../../components/TopNav/TopNav";
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
      body: "Pruning is essential for removing dead or diseased branches, promoting healthy growth, and maintaining the structural integrity of trees. Regular pruning can also enhance the aesthetic appeal of trees by giving them a more visually appealing shape and improving their overall appearance. By investing in regular tree pruning, you can keep your trees healthy and thriving, while also ensuring that they add beauty and value to your property.",
    },
    {
      id: 1,
      image: removal,
      name: "Tree Removal",
      body: "When it comes to tree removal, safety and precision are our top priorities. Whether a tree is in severe decline, has died, or needs to be removed for safety reasons or to make way for new construction, our professional tree removal services can help. We prioritize safety, ensuring that the tree is removed without causing damage to your property or surrounding trees. When you need a tree removed, trust us to get the job done right.",
    },
    {
      id: 2,
      image: stump,
      name: "Stump Grinding",
      body: "We offer professional stump grinding services, with the option to grind stumps to a maximum depth of 12 inches (30cm). Our team can also remove debris from stump grinding and leave it on-site or reinstate it with topsoil and grass seed for a fresh, clean look. Whether you want the stump completely removed or ground down to make room for new landscaping, we have the experience and tools to get the job done efficiently and safely. Contact us today to learn more about our stump grinding services.",
    },
    {
      id: 3,
      image: hedge,
      name: "Hedge Trimming",
      body: "Looking to enhance the beauty and privacy of your property? Regularly trimming your hedges is the answer! Not only does trimming your hedges improve the aesthetics of your landscape by adding structure and definition, but it also boosts your property's curb appeal. In addition, a well-trimmed hedge creates an impenetrable barrier that blocks unwanted views and noise, making your outdoor space safer and more secluded. By investing in regular hedge trimming, you can enhance the appearance and functionality of your property's landscape.",
    },
    {
      id: 4,
      image: emergency,
      name: "24/7 Emergency Tree Service",
      body: "No matter the tree-related hazard you face, our team at TMK Inc is always prepared to help. From broken branches to fallen trees caused by ice storms, tornadoes, or other severe weather events, we have the experience and tools to handle any situation. Our team is dedicated to providing prompt and efficient emergency tree services to help protect your property and ensure your safety. Contact us today to learn more about how we can assist you with any potential tree hazards.",
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
