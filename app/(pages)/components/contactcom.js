"use client";

import React, { useState } from 'react';
import { Phone, Clock, Globe } from 'lucide-react';
import { TextField, Checkbox, Button, Snackbar, Alert } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    saveInfo: false
  });
  
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'saveInfo' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS service configuration
    const serviceId = 'service_ymbzk6c'; // Replace with your EmailJS service ID
    const templateId = 'template_11eu016'; // Replace with your EmailJS template ID
    const publicKey = 'DB4rT4jsxTUXJr7da'; // Replace with your EmailJS public key

    // Prepare template parameters based on your template structure
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      message: formData.message
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          saveInfo: formData.saveInfo // Maintain checkbox state
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setSnackbar({
          open: true,
          message: 'Failed to send message. Please try again later.',
          severity: 'error'
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <div className="w-full bg-white mt-26  px-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Section: Quick Contact Info */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h1 className="text-sm text-start text-blue-900">QUICK CONTACT</h1>
            <h1 className="text-sm mt-2 text-start text-blue-900 flex items-center justify-start">
              <span className="inline-block w-8 mr-2 border-t-1 border-blue-900"></span>
              <StarIcon style={{ color: '#032b66', fontSize: '16px' }} />
              <span className="inline-block ml-2 w-8 border-t-1 border-blue-900"></span>
            </h1>
            <h2 className="text-3xl py-8 font-bold text-blue-900">Have Questions?<br />Don't Hesitate to Contact Us</h2>
            <p className="text-gray-600 mt-4">
              Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit,
              fermentum mattis erat rutrum. Porta semper lacus cursus, feugiat primis ultrice
              and ligula risus auctor tempus feugiat dolor et lacinia
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Globe className="text-blue-800 w-6 h-6" />
            <div>
              <h4 className="font-semibold text-blue-900">Location</h4>
              <p className="text-gray-600">
                141, First Floor, 12 St Roots Terrace, Los Angeles 90010
                United States of America.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex items-start gap-4">
              <Phone className="text-blue-800 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-blue-900">Quick Contact</h4>
                <p className="text-gray-600">Phone: +1 89-636-48018</p>
                <p className="text-gray-600">Email: yourmail@info.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-blue-800 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-blue-900">Opening Hrs</h4>
                <p className="text-gray-600">Mon - Friday:</p>
                <p className="text-gray-600">09.00 am to 07.00 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h1 className="text-sm text-start text-blue-900">LET'S CONNECT</h1>
            <h1 className="text-sm mt-2 text-start text-blue-900 flex items-center justify-start">
              <span className="inline-block w-8 mr-2 border-t-1 border-blue-900"></span>
              <StarIcon style={{ color: '#032b66', fontSize: '16px' }} />
              <span className="inline-block ml-2 w-8 border-t-1 border-blue-900"></span>
            </h1>
            <h2 className="text-3xl py-8 font-bold text-blue-900">Send Your Message</h2>
            <p className="text-gray-600 mt-4">
              Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit,
              fermentum mattis erat rutrum. Porta semper.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <TextField 
                label="Name" 
                variant="outlined" 
                fullWidth 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField 
                label="Email" 
                variant="outlined" 
                fullWidth 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField 
                label="Phone" 
                variant="outlined" 
                fullWidth 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <TextField 
                label="Subject" 
                variant="outlined" 
                fullWidth 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Fixed spacing for message text area */}
            <div className="mt-8">
              <TextField
                label="Your message here"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Checkbox 
                color="primary" 
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
              />
              <p className="text-gray-600">
                Save my name, email, and website in this browser for the next time I comment.
              </p>
            </div>

            <Button
              variant="contained"
              color="primary"
              className="bg-blue-900 text-white px-6 py-3 mt-4"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Message ➜'}
            </Button>
          </form>
        </div>
      </div>

      {/* Full Width Google Map */}
      <div className="w-full sm:h-112  sm:mb-22 md:h-112 mt-12">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090944!2d73.15796968317943!3d33.652000021948766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzMuNjUyMDAwMjE5NDg3NzYyMjM0!5e0!3m2!1sen!2s!4v1614049672709"
          allowFullScreen="true"
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      {/* Success/Error Notification */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactSection;