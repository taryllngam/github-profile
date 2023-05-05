const user = document.getElementById('user');
const searchBtn = document.getElementById('button')
const displayField = document.getElementById('display')

const base_url =`https://api.github.com/users/`;

async function searchUser() {
    let userName = user.value
    const data = await fetch(base_url + userName).then((res) => res.json()).catch((err => 
        displayField.innerHTML = `NO PROFILE FOUND`
        ))

    console.log(data);
    displayField.innerHTML = `
    <a href="https://github.com/${data.login}" target="_blank">
    <img src="${data.avatar_url}" alt="profile picture"/> 
  </a>
  <div class="following">
  <h2><a href="https://github.com/${data.login}" target="_blank"> ${data.name}</a></h2>
  <p><a href="https://github.com/${data.login}?tab=repositories" target="_blank"> Reposatories: ${data.public_repos}</a></p>
  </div>
  <div class="follows">
  <h2>followers<a href="https://github.com/${data.login}" target="_blank"> ${data.followers}</a></h2>
  <h2>following<a href="https://github.com/${data.login}" target="_blank"> ${data.following}</a></h2>
</div>
`
}



searchBtn.addEventListener("click", searchUser)