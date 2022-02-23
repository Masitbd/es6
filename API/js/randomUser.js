const randomUser = () => {
  fetch("https://randomuser.me/api/")
    .then((resp) => resp.json())
    .then((data) => dsiplay(data));
};

randomUser();

function dsiplay(data) {
  //console.log(data.results[0].picture.large);
  const user = document.getElementById("user");
  const div = document.createElement("div");
  //const img = document.createElement("img");
  div.innerHTML = `
  <img src=${data.results[0].picture.large} alt="" /><p>My name is </p> <h1>${data.results[0].login.username}</h1>
  ${data.info.version}
  `;
  user.appendChild(div);
}
