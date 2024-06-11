import React, { useState } from 'react';
import './Involvement.css';

//Involvement function and form information
export default function Involvement() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    aboutYou: '',
    productInfo: '',
    questions:'',
    productImages: []
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prevState => ({
      ...prevState,
      productImages: [...prevState.productImages, ...files].slice(0, 5)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data to console
    console.log('Form Data:', formData);

    setFormSubmitted(true);
  };

  return (
    <>
    <div className="involvement-body">
      <div className="involvement-container">
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="involvement-form">
             <h2 className="form-header">Vendor Request to Local Harvest</h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="aboutYou">About You:</label>
              <p className="example-questions">
                Example questions:
                <br />
                <span style={{ color: '#888', fontSize: 'small', marginBottom: '10px' }}>
                - How long have you been in business?
                <br />
                - What inspired you to start this business?
                <br />
                - What values or principles guide your business operations?
                <br />
                - Can you tell me about your company's mission and vision?
                <br />
                - Do you have any partnerships or affiliations with other businesses or organizations?
                <br />
                - What is your target market or customer base?
                <br />
                - How do you handle customer feedback or complaints?
                <br />
                - Are there any upcoming product launches or developments?
                <br />
                - How do you stay competitive in the market?
                </span>
              </p>
              <textarea
                id="aboutYou"
                name="aboutYou"
                value={formData.aboutYou}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="productInfo">Product Information:</label>
              <p className="example-questions">
                Example questions:
                <br />
                <span style={{ color: '#888', fontSize: 'small' }}>
                - What is the name of your product?
                <br />
                - Can you describe your product in detail?
                <br />
                - What are the key features and benefits of your product?
                <br />
                - How is your product made or sourced?
                <br />
                - Are there any certifications or quality standards associated with your product?
                <br />
                - Can you provide samples or demonstrations of your product?
                <br />
                - How does your product stand out from competitors?
                <br />
                - What are the available sizes, variations, or customization options for your product?
                <br />
                - What is the shelf life or durability of your product?
                <br />
                - Are there any special storage or handling requirements for your product?
                </span>
              </p>
              <textarea
                id="productInfo"
                name="productInfo"
                value={formData.productInfo}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="questions">Questions:</label>
              <p>
              <br />
                <span style={{ color: '#888', fontSize: 'small' }}>
                Ask us anything you'd like to know about our business. We thrive on mutual trust between us, our customers, and vendors.
              <br />
                </span>
              </p>
              <textarea
                id="questions"
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="productImages">Product Images:</label>
              <input
                type="file"
                id="productImages"
                name="productImages"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                style={{ display: 'none' }}
                disabled={formData.productImages.length >= 5}
              />
              <button
                type="button"
                onClick={() => document.getElementById('productImages').click()}
                disabled={formData.productImages.length >= 5}
              >
                Add Images
              </button>
              <div className="image-preview-box">
                {formData.productImages.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Product ${index + 1}`}
                    className="image-thumb"
                  />
                ))}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="submission-message">
            <p>Thank you for your request! The Local Harvest team will be intouch with you.</p>
          </div>
        )}
        <div className="contact-info">
          <h3>Contact Information for Local Harvest</h3>
          <p>Email: contact@localharvest.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 1234 Harvest Lane, Townsville, State, 56789</p>
        </div>
      </div>
    </div>
    </>
  );
}
