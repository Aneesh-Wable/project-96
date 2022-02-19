function addUser()
{
    username = document.getElementById("userName").value;
    localStorage.setItem("Username:",username);
    window.location = "chat_room.html"
}