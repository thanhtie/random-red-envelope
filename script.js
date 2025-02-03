const generateBtn = document.getElementById('generateBtn');
const resultElement = document.getElementById('result');
const messageElement = document.getElementById('message');

// List of prizes inside the red envelope
const choices = ['💰 10k', '💰 20k', '💰 50k', '💰 100k', '💰 200k'];

if (localStorage.getItem('randomChoice')) {
    resultElement.textContent = `🎊 Your Prize: ${localStorage.getItem('randomChoice')}`;
    messageElement.textContent = "Your lucky prize is locked!";
    generateBtn.disabled = true;
} else {
    generateBtn.addEventListener('click', () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        
        localStorage.setItem('randomChoice', randomChoice);

        resultElement.textContent = `🎊 Your Prize: ${randomChoice}`;
        messageElement.textContent = "Congratulations!";
        
        generateBtn.disabled = true;
    });
}
