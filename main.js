const gitAPI = "https://api.github.com/users/Austin-Cathey";
const reposAPI = "https://api.github.com/users/Austin-Cathey/repos";
let profile = document.getElementById('profile');
let profileInfo = document.getElementById('profile-info');
 
/* let photo = document.getElementById('profile-picture'); */

/* let home = document.getElementById('location');
let url = document.getElementById('url');
let username = document.getElementById('username');
let repos = document.getElementById('repos'); */


fetch(gitAPI).then((response) => {
    return response.json();
}).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

    let photo = document.createElement('img');
    let fullName = document.createElement("h1");
    let home = document.createElement("h3");
    
    
    photo.src = parsedJsonResponse['avatar_url'];
    profile.appendChild(photo);

   fullName.innerText = parsedJsonResponse.name;
    home.innerText = "Location: " + parsedJsonResponse.location;
   
    profileInfo.appendChild(fullName);
    profileInfo.appendChild(home);
    
    let url = document.createElement("h4");
    let gitUrl = document.createElement("a");
    gitUrl.innerHTML = parsedJsonResponse.login;
    gitUrl.href = parsedJsonResponse.html_url;
    url.innerText = "My GitHub: "  

    profileInfo.appendChild(url);
    url.appendChild(gitUrl);

})


fetch(reposAPI).then((response) => {
    return response.json();
}).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

    let reposAPI = document.createElement("ul");

    let firstRepo = document.createElement("li");
    let firstUrl = document.createElement("a");
    firstUrl.innerHTML = parsedJsonResponse[0]["name"];
    firstUrl.href = parsedJsonResponse[0]["html_url"];
    repos.appendChild(firstRepo);
    firstRepo.appendChild(firstUrl);

    let secondRepo = document.createElement("li");
    let secondUrl = document.createElement("a");
    secondUrl.innerText = parsedJsonResponse[1]["name"];
    secondUrl.href = parsedJsonResponse[1]["html_url"];
    repos.appendChild(secondRepo);
    secondRepo.appendChild(secondUrl);

    let thirdRepo = document.createElement("li");
    let thirdUrl = document.createElement("a");
    thirdUrl.innerText = parsedJsonResponse[2]["name"];
    thirdUrl.href = parsedJsonResponse[2]["html_url"];
    repos.appendChild(thirdRepo);
    thirdRepo.appendChild(thirdUrl);

});