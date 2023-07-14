const form = document.getElementById('response-form');

    // Add event listener for form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Validate form values (you can add more validation if needed)
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Prepare form data to be sent
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      // Send form data to server-side script (submit_response.php)
      fetch('submit_response.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        // Handle response from the server
        alert(data); // Display the response message
        form.reset(); // Clear the form
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });