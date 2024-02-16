// JavaScript code for dynamically adding friends to the list

document.addEventListener("DOMContentLoaded", function() {
    // Sample friends data (replace with your actual data)
    const friendsData = [
        { name: "Aavas Chaudhary", image: "aavas.jpg" },
        { name: "Surbi Karki", image: "surr.jpg" },
        // Add more friend objects as needed
    ];

    const friendsList = document.getElementById('friendsList');

    // Function to create and append friend list items
    function createFriendListItem(friend) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${friend.image}" alt="${friend.name}">
            <p>${friend.name}</p>
        `;
        friendsList.appendChild(listItem);
    }

    // Populate the friend list
    friendsData.forEach(friend => {
        createFriendListItem(friend);
    });
});
