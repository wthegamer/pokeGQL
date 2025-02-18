import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false)

  // I didn't want to sign up for something like email js.
  // So instead I simulated a slight delay as if the email was processing
  const fakeEmailSender = (success = true, delay = 2000) => {
    setIsSending(true)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Request Succeeded!");
        } else {
          reject("Request Failed!");
        }
      }, delay);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    // Fake email send
    await fakeEmailSender()
      .then((message) => {
        setIsSending(false)
        setStatusMessage(`${message} Message Sent.`);
      })
      .catch((error) => {
        setIsSending(false)
        setStatusMessage(`${error} Message not sent.`);
      });

       // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <h1 className="h1 ms-3 mt-3">Contact Form</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={handleInputChange}
              value={formData.name}
            />
            <label className="form-label" htmlFor="name">
              Name
            </label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={handleInputChange}
              value={formData.email}
            />
            <label className="form-label" htmlFor="email">
              Email address
            </label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              onChange={handleInputChange}
              value={formData.message}
            ></textarea>
            <label className="form-label" htmlFor="message">
              Message
            </label>
          </div>

          <button
            data-mdb-ripple-init
            type="submit"
            className="btn btn-primary btn-block mb-4"
          >
            Send
          </button>
          {isSending && <p>Sending message...</p>}
          {statusMessage && <p>{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
