import Swal from 'sweetalert2';
export default function ContactUs() {
  const handleAlertClick=()=>{
    Swal.fire('Thank you,\nYour Response has been recorded');
  }
  
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className="sub--title"><br/>Let's Dive, Drive and Dominate</h1>
        <h2>Please fill the form below...</h2>
        <p className="text-lg">
          
        </p>
      </div>
       <form className="contact--form--container">
        <div className="container">
        <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name of member 1</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Name of member 2</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Department of member 1</span>
            <input
              type="text"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Department of member 2</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Contact number of member 1</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Contact number of member 2</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Semester</span>
            <input
              type="text"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <span>Scan the qr code to pay</span>
          <img src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg"className="qr" />
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Scan the qr code to pay and
            <br/>Upload payment proof</span>
            <input
              type="file"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
          
        </div>
        
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Name of the team</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="1"
            placeholder=""
          />
        </label>
        
        <div>
          <button onClick={handleAlertClick} className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
