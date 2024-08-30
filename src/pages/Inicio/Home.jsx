import Header from "../../components/Header/Header";
import Banner from "./Banner/Banner";
import Reasons from "./Reasons/Reasons";
import CardReasons from "./Reasons/CardReasons/CardReasons";
import Clients from "./Clients/Clients";
import CTA from "./CTA/CTA";
import Confia from "./Confia/Confia";

const Home = () => {
  return (
    <div>
   
      <Banner />
      <Reasons/>
      <CardReasons />
      <Clients/>
      <CTA/>
      <Confia/>
    </div>
  )
}

export default Home;
