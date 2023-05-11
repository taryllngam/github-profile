const user = document.getElementById('user')
const displayField = document.getElementById('display')
const myForm = document.getElementById('myForm')

const baseUrl = 'https://api.github.com/users/'

async function searchUser () {
  const userName = user.value
  if (userName === '') {
    return noProfile()
  }

  const data = await fetch(baseUrl + userName).then((res) => res.json())

  console.log(':::', data)

  if (data.message === 'Not Found') {
    return noUser()
  }

  displayField.innerHTML = `
    <a href="https://github.com/${data.login}" target="_blank">
    <img src="${data.avatar_url}" alt="profile picture"/> 
  </a>
  <div class="following">
  <h2><a href="https://github.com/${data.login}" target="_blank"> ${data.name}</a></h2>
  <p><a href="https://github.com/${data.login}?tab=repositories" target="_blank"> REPOSITORIES: ${data.public_repos}</a></p>
  <p><a href="https://github.com/${data.login}"target="_blank"> ${data.bio}</a></p>

  </div>
  <div class="follows">
  <h2>followers<a href="https://github.com/${data.login}" target="_blank"> ${data.followers}</a></h2>
  <h2>following<a href="https://github.com/${data.login}" target="_blank"> ${data.following}</a></h2>
</div>
<div class="gitlink">
<p><i class="fa fa-link" aria-hidden="true"></i><a href="https://github.com/${data.login}"target="_blank"> ${data.blog}</a></p>
</div>
`
}

const noUser = () => {
  displayField.innerHTML = `
    <p>Sorry, user not found!</p>
`
}

const noProfile = () => {
  displayField.innerHTML = `
    <p>Please enter a profile name to search</p>
    `
}

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  searchUser()
})
