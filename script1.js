function postImage() {
    // Add logic to handle the post action
    // Retrieve values from file input, caption input, and tag input
    var fileInput = document.getElementById('fileInput');
    var captionInput = document.getElementById('captionInput');
    var tagInput = document.getElementById('tagInput');

    var file = fileInput.files[0];
    var caption = captionInput.value;
    var tags = tagInput.value.split(',');

    // Add your logic to handle the post, e.g., send the data to a server
    console.log('File:', file);
    console.log('Caption:', caption);
    console.log('Tags:', tags);

    // After posting, you can redirect the user or perform additional actions
    alert('Post Successful!'); // You may replace this with your actual redirection logic
}
