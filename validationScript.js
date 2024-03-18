// JavaScript code for form validation
	// Prevent form from submitting
    
    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve the input field element using JavaScript
        const form = document.getElementById('myForm'); // Retrieve the form element
        const inputField = document.getElementById('inputField'); // Retrieve the input field element
    
        // Add an event listener to the form submits an event
        form.addEventListener('submit', function (event) {
            // Prevent form from submitting
            event.preventDefault();
    
            // Retrieve the input field value
            const inputValue = inputField.value.trim();
    
            // Regular expression pattern for alphanumeric input
            const alphanumericPattern = /^[a-zA-Z0-9]+$/;
    
            // Implement a function that validates the input value using a regular expression for alphanumeric input
            // Check if the input value matches the pattern
            if (alphanumericPattern.test(inputValue)) {
                // Valid input: display confirmation and 'submit' the form
                alert('Input is valid.'); // Display a confirmation message
                // Since the server is not set up for form processing, the 'submit' action will not actually submit anything
            } else {
                // Invalid input: display error message and prevent form submission
                alert('Error: Input must be alphanumeric.'); // Display an error message
            }
        });
    });
    