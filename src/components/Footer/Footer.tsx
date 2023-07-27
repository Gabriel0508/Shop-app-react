import {
  FaPhone,
  FaTwitter,
  FaInstagramSquare,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark-red d-flex justify-content-around align-items-center p-4">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <h3 className="text-white">Follow us on: </h3>
        </div>
        <div className="text-white">
          <FaTwitter className="me-3 cursor-pointer" />
          <FaInstagramSquare className="cursor-pointer"/>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="text-white">
          <h3>Contact us:</h3>
        </div>
        <div className="text-white">
          <FaPhone className="me-3 cursor-pointer" />
          <FaEnvelope className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};
export default Footer;
