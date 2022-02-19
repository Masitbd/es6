function addBorder() {
  document.getElementById("friend-container").style.border = "2px solid red";
}

function addBackground() {
  const friends = document.getElementsByClassName("friend");

  for (const friend of friends) {
    friend.style.backgroundColor = "yellow";
  }
}

function addFriend() {
  const parent = document.getElementById("friend-container");
  const div = document.createElement("div");
  div.className = "friend";
  div.innerHTML = `
    <h1>friend - 6</h1>
    <p>Quos corporis quibusdam voluptatibus architecto tempora culpa quia perspiciatis, assumenda vitae, porro esse
    possimus consequatur eveniet expedita fugiat vel, accusamus a laborum. Placeat nihil temporibus vitae assumenda,
    unde autem quos.</p>`;
  parent.appendChild(div);
  console.log(div);
}
