import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Banner
        title={"Welcome to the"}
        brand={"eShop"}
        description={"This is the main page"}
      />
      
      <div className="container-fluid my-4">
        <div className="row g-3">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              title={"New spicy meals"}
              imgSrc={
                "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
              }
              cardText={
                "Recently, we added several exotic new dishes to our restaurant menu. Ha and enjoy our juicy meals from around the world."
              }
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              title={"New spicy meals"}
              imgSrc={
                "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
              }
              cardText={
                "Recently, we added several exotic new dishes to our restaurant menu. Ha and enjoy our juicy meals from around the world."
              }
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              title={"New spicy meals"}
              imgSrc={
                "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
              }
              cardText={
                "Recently, we added several exotic new dishes to our restaurant menu. Ha and enjoy our juicy meals from around the world."
              }
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              title={"New spicy meals"}
              imgSrc={
                "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
              }
              cardText={
                "Recently, we added several exotic new dishes to our restaurant menu. Ha and enjoy our juicy meals from around the world."
              }
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              title={"New spicy meals"}
              imgSrc={
                "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
              }
              cardText={
                "Recently, we added several exotic new dishes to our restaurant menu. Ha and enjoy our juicy meals from around the world."
              }
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              title={"New spicy meals"}
              imgSrc={
                "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
              }
              cardText={
                "Recently, we added several exotic new dishes to our restaurant menu. Ha and enjoy our juicy meals from around the world."
              }
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Dashboard;
