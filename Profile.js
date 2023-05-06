const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior


      const name = document.getElementById('name').value;
			const address = document.getElementById('address').value;
			const email = document.getElementById('email').value;
			const comments = document.getElementById('comments').value;
      
      const formData = {
				'name': name,
				'address': address,
				'email': email,
				'comments': comments
			};
      localStorage.setItem('formData', JSON.stringify(formData));
      form.reset();

      alert('Your message has been sent!');
    });
