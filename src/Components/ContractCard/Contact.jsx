import Formcon from "../Form/Formcon";
import "./Contact.css";



const Contact = () => {
  return (
    <>
        <div className="col custom-form ">
            <h2 className="text-center">Contact</h2>
            <Formcon />
        </div>
        <div className="col custom-contact">
            <h4>Opening Hours</h4>
            <p>Monday-Friday: 9am to 7pm <br />Saturday: 9am to 4pm<br />Sunday: Closed </p>
            <hr />
            <h4>Address</h4>
            <p>1132 W. Hamilton Street Suite #302, Allentown, PA 18101</p>
            <hr />
            <h6>Main Office:</h6>
            <p>484-350-3601</p>
            <p>Fax: 484-387-1205</p>
            <p>info@lhsss-email.com</p>
        </div>
    </>
  );
};

export default Contact;
