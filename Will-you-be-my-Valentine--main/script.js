const messages = [
    "Are you sure? 🥺",
    "Really sure?? 😢",
    "Are you positive? 💔",
    "Pookie please... 🙏",
    "Just think about it! 💭",
    "If you say no, I will be really sad... 😭",
    "I will be very sad... 😿",
    "I will be very very very sad... 💔💔",
    "Ok fine, I will stop asking... 😔",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let yesSize = 1;

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionPage = document.getElementById('questionPage');
const successPage = document.getElementById('successPage');

noButton.addEventListener('click', () => {
    // Change the No button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Grow the Yes button each click
    yesSize += 0.3;
    yesButton.style.transform = `scale(${yesSize})`;
});

yesButton.addEventListener('click', () => {
    questionPage.style.display = 'none';
    successPage.classList.add('active');
});
