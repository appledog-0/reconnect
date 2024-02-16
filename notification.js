
window.addEventListener('click', function(event) {
    var notificationContainer = document.querySelector('.notification-container');
    if (event.target !== notificationContainer && !notificationContainer.contains(event.target)) {
        notificationContainer.style.display = 'none';
    }
});


window.addEventListener('keydown', function(event) {
    var notificationContainer = document.querySelector('.notification-container');
    if (event.key === 'Escape') {
        notificationContainer.style.display = 'none';
    }
});
function closeNotifications() {
    var notificationContainer = document.querySelector('.notification-container');
    notificationContainer.style.display = 'none';
}


function toggleNotifications() {
    var notificationContainer = document.querySelector('.notification-container');
    notificationContainer.style.display = notificationContainer.style.display === 'none' ? 'block' : 'none';
}