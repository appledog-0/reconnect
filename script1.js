function postImage() {
  
    var fileInput = document.getElementById('fileInput');
    var captionInput = document.getElementById('captionInput');
    var tagInput = document.getElementById('tagInput');

    var file = fileInput.files[0];
    var caption = captionInput.value;
    var tags = tagInput.value.split(',');

    console.log('File:', file);
    console.log('Caption:', caption);
    console.log('Tags:', tags);

   
    alert('Post Successful!'); 
}
