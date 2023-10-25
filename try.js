const videoSources = [
    "1.mp4",
    "2.mp4",
    "3.mp4" ,
    "4.mp4" ,
    "5.mp4" ,
    "7.mp4" ,
    "8.mp4" ,
    "9.mp4" ,
    "10.mp4",
    "11.mp4",
    "p1.mp4",
    "p2.mp4",
    "p3.mp4",
    "p4.mp4"
    // Add more video URLs as needed
];






const chatContent = document.getElementById('chat-content');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatVideo = document.getElementById('chat-video');

const questions = [
    'Tell Me About Yourself? ...',
    'Where Do You See Yourself in 5 Years? ...',
    'What Are Your Biggest Achievements? ...',
    'How Do You Handle Stress and Pressure? ...',
    'Why Are You Interested in this Job? ...',
    // 'What Are Your Salary Expectations? ...',

    'Do you have any technical certifications?',
    'How many programming languages do you know?',
    'What are the different types of OS you are comfortable working with?',
    'What is the extent of your technical expertise?',
    'How many development tools have you used?',

    'What is a data structure?',
    'What is a linked list?',
    // 'What is the difference between an array and a linked list?',
    // 'What is LIFO?'
    // 'What is FIFO?'
    'What is a stack?'    ,
    'What are binary trees?'
];

let currentQuestionIndex = 0;

// Event listener for send button click
sendButton.addEventListener('click', () => {
    const userAnswer = userInput.value.trim();
    if (userAnswer === '') return;

    const question = questions[currentQuestionIndex];
    appendMessage(`You: ${userAnswer}`);
    // appendMessage(`Chatbot: ${question}`);

    if (question.toLowerCase().includes('play a video')) {
        playVideo(); // Play video if the question contains "Play a video"
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(askQuestion, 1000); // Ask the next question after a delay
    } else {
        appendMessage('Chatbot: Thank you for the conversation.');
        userInput.disabled = true;
        sendButton.disabled = true;
    }

    userInput.value = '';
});

// Function to ask the current question
function askQuestion() {
    const question = questions[currentQuestionIndex];
    appendMessage(`Chatbot: ${question}`);
}

// Function to play a video
function playVideo() {
    // You can customize this function to load and play the desired video
    if(question === questions[0]){
        chatVideo.innerHTML = '<video controls><source src="1.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[0];
        videoPlayer.load();
        videoPlayer.play();

    }
    else if(question === questions[1]){
        chatVideo.innerHTML = '<video controls><source src="2.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[1];
        videoPlayer.load();
        videoPlayer.play();
        
    }
        
    else if(question ===questions[2]){
        chatVideo.innerHTML = '<video controls><source src="3.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[2];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question ===questions[3]){
        chatVideo.innerHTML = '<video controls><source src="4.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[3];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question === questions[4]){
        chatVideo.innerHTML = '<video controls><source src="5.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[4];
        videoPlayer.load();
        videoPlayer.play();
    }
    
    else if(question === 'Do you have any technical certifications?'){
        chatVideo.innerHTML = '<video controls><source src="7.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[5];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question ==='How many programming languages do you know?'){
        chatVideo.innerHTML = '<video controls><source src="8.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[6];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question === 'What are the different types of OS you are comfortable working with?'){
        chatVideo.innerHTML = '<video controls><source src="9.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[7];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question === 'What is the extent of your technical expertise?'){
        chatVideo.innerHTML = '<video controls><source src="10.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[8];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question ==='How many development tools have you used?'){
        chatVideo.innerHTML = '<video controls><source src="11.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[9];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question === 'What are binary trees?'){
        chatVideo.innerHTML = '<video controls><source src="p1.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[10];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question ===  'What is a linked list?'){
        chatVideo.innerHTML = '<video controls><source src="p2.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[11];
        videoPlayer.load();
        videoPlayer.play();
    }

    else if(question === 'What is a data structure?'){
        chatVideo.innerHTML = '<video controls><source src="p3.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[12];
        videoPlayer.load();
        videoPlayer.play();
    }

    else{
        chatVideo.innerHTML = '<video controls><source src="p4.mp4" type="video/mp4"></video>';
        videoPlayer.src = videoSources[13];
        videoPlayer.load();
        videoPlayer.play();
    }




}








// Function to append a message to the chat content
function appendMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = message;

    chatContent.appendChild(messageDiv);
}

// Initial question
askQuestion();
