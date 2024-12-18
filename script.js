function searchGitHubUser(){
    const username = document.getElementById('username').value;
    const profileContainer = document.getElementById('profile');
    const errorContainer = document.getElementById('error');

    if (username.trim() === ""){
        errorContainer.textContent="Please enter a GitHub Username.";
        profileContainer.style.display = "none";
        return;
    }

    errorContainer.textContent="";
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            if (data.message === "Not Found"){
                errorContainer.textContent = "User not found";
                profileContainer.style.display = "none";
            } else {
                document.getElementById('avatar').src = data.avatar_url;
                document.getElementById('name').textContent = data.name || "No Name Available";
                document.getElementById('bio').textContent = data.bio || "No Bio Available";
                document.getElementById('profileLink').href = data.html_url;
                document.getElementById('profileLink').textContent = "Visit Profile";

                profileContainer.style.display = "block";

            }
        })
        .catch(error =>{
            errorContainer.textContent = "An error occured. Please try again.";
            profileContainer.style.display = "none";
        });

}

document.getElementById("year").textContent = new Date().getFullYear();