// script.js

// Function to display service details
function viewServiceDetails(serviceId) {
  let serviceDetails = {
    service1: {
      title: "Web Design",
      description: "We create beautiful, responsive websites tailored to your brand and needs. Our web designs are user-friendly and visually stunning."
    },
    service2: {
      title: "SEO Optimization",
      description: "Our SEO experts will optimize your website, helping you rank higher in search engines and drive organic traffic to your site."
    },
    service3: {
      title: "Digital Marketing",
      description: "We provide digital marketing strategies to grow your online presence, improve brand visibility, and increase sales through targeted campaigns."
    }
  };

  const service = serviceDetails[serviceId];
  alert(`${service.title}\n\n${service.description}`);
}

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent page reload

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    document.getElementById('formResponse').innerHTML = `
      <p>Thank you, ${name}. We have received your message and will get back to you shortly.</p>
    `;
    document.getElementById('contactForm').reset();  // Reset form fields
  } else {
    document.getElementById('formResponse').innerHTML = `
      <p style="color: red;">Please fill out all fields before submitting.</p>
    `;
  }
});
