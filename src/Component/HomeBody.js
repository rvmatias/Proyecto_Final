
import Carousel from "../Component/Carousel";
import Card from "../Component/Card";
import CardH from "../Component/CardH";
import Cards from "../Component/Cards";

function HomeBody() {
    return (
      <div>
        <Carousel/>
        <br/>
        <CardH/>
        <br/>
        <Card/>
        <br/>
        <Cards/>
        <br/>
        <Card/>
    </div>
    );
  }
  
  export default HomeBody;