import "./Banner.scss";

const Banner = (props: any) => {
  return (
    <>
      <section></section>
      <div className="overlay"></div>
      <div className="banner-text d-flex flex-column align-items-center justify-content-center w-100">
        <h1 className="text-white">{props.title} <span className="fw-bold">{props.brand}</span></h1>
        <p className="text-white">{props.description}</p>
      </div>
    </>
  );
};
export default Banner;
