
import Carousel from "../Component/Carousel";
import Card from "../Component/Card";
import CardH from "../Component/CardH";
import Cards from "../Component/Cards";

function HomeBody() {
    const imgUrl= "https://cdn.getcrowder.com/images/260524fa-99a6-421e-b67b-6e5f721c1922-line-upaa-1920x720.png?w=1140";
    const imgUrl_1="https://cdn.getcrowder.com/images/1669587717903-null-1920x720-18.png?w=1140";
    return (
      <div>
        <Carousel/>
        <br/>
        <CardH/>
        <br/>
        <Card img = {imgUrl} />
        <br/>
        <Cards/>
        <br/>
        <Card img = {imgUrl_1}/>
    </div>
    );
  }
  
  export default HomeBody;