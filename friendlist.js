// JavaScript code for dynamically adding friends to the list

document.addEventListener("DOMContentLoaded", function() {
   
    const friendsData = [
        { name: "Aavas Chaudhary", image: "aavas.jpg" },
        { name: "Surbi Karki", image: "surr.jpg" },
    
    ];

    const friendsList = document.getElementById('friendsList');


    function createFriendListItem(friend) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${friend.image}" alt="${friend.name}">
            <p>${friend.name}</p>
        `;
        friendsList.appendChild(listItem);
    }

    friendsData.forEach(friend => {
        createFriendListItem(friend);
    });
});
