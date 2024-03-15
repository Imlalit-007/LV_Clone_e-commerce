import "../../styles/Footer.css";
import Accordion from "./Accordion.jsx";
import { accordionData } from "./accordionData.js";

function Footer() {
  console.log("footer rendered");
  return (
    <div className='footer'>
      <div className='footer_logo'>
        <span>louis vuitton</span>
      </div>
      <div className='footer_accordion'>
        <Accordion />
      </div>
      <div className='footer_info'>
        <div className='info_one'>
          <p>Full Name and Address of the Manufacturer</p>
          <p>Louis Vuitton Malletier SAS</p>
          <p>2 Rue du Pont Neuf</p>
          <p>75034 Paris CEDEX 01</p>
          <p>FRANCE</p>
          <p>
            Please refer to the product label for specific country of origin for
            each product.
          </p>
        </div>
        <div className='info_two'>
          <p>Full Name and Address of the Importer</p>
          <p>Louis Vuitton India Retail Private Limited</p>
          <p>901A Ninth Floor, Time Tower, MG Road</p>
          <p>Gurgaon, Haryana - 122002</p><p>INDIA</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
