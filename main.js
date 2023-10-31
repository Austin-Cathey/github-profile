const gitAPI = "https://api.github.com/users/Austin-Cathey";
const reposAPI = "https://api.github.com/users/Austin-Cathey/repos";
let profile = document.getElementById('profile');
let profileInfo = document.getElementById('profile-info');
 
/* let photo = document.getElementById('profile-picture'); */
let fullName = document.getElementById('full-name');
let home = document.getElementById('location');
let url = document.getElementById('url');
let username = document.getElementById('username');
let repos = document.getElementById('repos');


fetch(gitAPI).then((response) => {
    return response.json();
}).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

    let photo = document.createElement('img');
    /* let fullName =  */
    
    photo.src = parsedJsonResponse['avatar_url'];
    profile.appendChild(photo);

   fullName.innerText = `Name: ${parsedJsonResponse.name}`
    


})