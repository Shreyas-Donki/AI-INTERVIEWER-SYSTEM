function playVideo0() {
    const videoNumber = parseInt(document.getElementById('videoNumber').value, 10);

    // const videoNumber = questions[currentQuestionIndex+1];

    const videoPlayer = document.getElementById('videoPlayer');

    // Define video sources and their corresponding numbers
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

    if (videoNumber >= 1 && videoNumber <= videoSources.length) {
        // Set the source of the video player based on user input
        videoPlayer.src = videoSources[videoNumber - 1];
        videoPlayer.load();
        videoPlayer.play();
    } else {
        alert('Invalid video number. Please enter a valid number between 1 and ' + videoSources.length);
    }
}