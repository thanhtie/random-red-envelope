const generateBtn = document.getElementById('generateBtn');
const resultElement = document.getElementById('result');
const messageElement = document.getElementById('message');

// List of choices
const choices = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

// Check if the result is already locked in localStorage
if (localStorage.getItem('randomChoice')) {
    resultElement.textContent = `Locked Choice: ${localStorage.getItem('randomChoice')}`;
    messageElement.textContent = "Your random choice has been locked.";
    generateBtn.disabled = true; // Disable the button once locked
} else {
    // Function to generate a random choice
    generateBtn.addEventListener('click', () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        
        // Lock the choice in localStorage
        localStorage.setItem('randomChoice', randomChoice);

        // Display the result
        resultElement.textContent = `Your Random Choice: ${randomChoice}`;
        messageElement.textContent = "Your random choice has been locked!";
        
        // Disable the button to prevent further changes
        generateBtn.disabled = true;
    });
}
