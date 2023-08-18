import React, { useState } from 'react';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// I copied it from the internet
	const isEmailValid = (email) => !/\S+@\S+\.\S+/.test(email);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validateForm()) {
			console.log('Form data submitted:', formData);
		}
	};

	const validateForm = () => {
		let formErrors = {};
		let isValid = true;

		if (!formData.name.trim()) {
			formErrors.name = 'Name is required.';
			isValid = false;
		}

		if (!formData.email.trim()) {
			formErrors.email = 'Email is required.';
			isValid = false;
		} else if (isEmailValid(formData.email)) {
			formErrors.email = 'Email is not valid.';
			isValid = false;
		}

		if (!formData.message.trim()) {
			formErrors.message = 'Message is required.';
			isValid = false;
		}

		setErrors(formErrors);
		return isValid;
	};

	return (
		<div className="contact-form">
			<h2>Contact Me</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
					{errors.name && <small>{errors.name}</small>}
				</div>

				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email && <small>{errors.email}</small>}
				</div>

				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
					/>
					{errors.message && <small>{errors.message}</small>}
				</div>

				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
