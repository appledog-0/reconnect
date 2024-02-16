// Functionality for handling likes and comments
document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
        
            handleLike(button);
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
     
            handleComment(button);
        });
    });

    function handleLike(button) {
      
        button.textContent = 'Liked!';
       
    }

    function handleComment(button) {

        alert('Comment functionality is not implemented yet!');
        
    }
});
