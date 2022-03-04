const loadCountry = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => dsiplay(data));
};

loadCountry();

const dsiplay = (countries) => {
  for (const country of countries) {
    const conuntryContainer = document.getElementById("country-container");
    const div = document.createElement("div");
    div.setAttribute("id", "myBtn");
    div.innerHTML = `<img src=${country.flags.png} alt="" /> 
    <p>${country.name}</p> 
    <button onclick="loadCountryByName('${country.name}')">Details</button>
  
    `;

    console.log(div);
    //console.log(country.name.common);
    // country name
    console.log(country.flags.png);
    conuntryContainer.appendChild(div);
    viewModal();
  }
};

const loadCountryByName = (country) => {
  const url = `https://restcountries.com/v3.1/name/${country}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data[0]));
};

const viewModal = () => {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
