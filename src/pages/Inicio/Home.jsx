import Header from "../../components/Header/Header";
import Banner from "./Banner/Banner";
import Reasons from "./Reasons/Reasons";
import CardReasons from "./Reasons/CardReasons/CardReasons";

const Home = () => {
  return (
    <div>
   
      <Banner />
      <Reasons/>
      <CardReasons />
    </div>
  )
}

export default Home;
