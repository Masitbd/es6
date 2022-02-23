function loadPhoto() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => display(data));
}

loadPhoto();

function display(photos) {
  const photoContainer = document.getElementById("photo-container");
  for (const photo of photos) {
    var img = document.createElement("img");

    var div = document.createElement("div");
    div.innerHTML = `
    <img src=${photo.url} alt="" />
    <h2>${photo.title}</h2>
    <p>${photo.id}</p>
    `;
    photoContainer.appendChild(div);
  }
}
