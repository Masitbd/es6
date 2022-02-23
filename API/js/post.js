fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => resp.json())
  .then((data) => display(data));

function display(posts) {
  const parent = document.getElementById("parent-post");
  for (post of posts) {
    console.log(post);
    const p = document.createElement("p");
    p.classList.add("pp");
    p.innerHTML = `
                 <h3>${post.title}</h3>
                 <p>${post.body}</p>
                  `;
    parent.appendChild(p);
  }
}
