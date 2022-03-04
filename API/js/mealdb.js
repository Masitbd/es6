const loadMeal = (searchText) => {
  // location.reload();
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then((res) => res.json())
    .then((data) => showDate(data.meals));
  console.log(searchText);
};

const showDate = (records) => {
  document.getElementById("meal-container").innerText = "";
  for (record of records) {
    console.log(record);
    const mealContainer = document.getElementById("meal-container");

    const div = document.createElement("div");
    div.setAttribute("div", "col");

    div.innerHTML = `
    <a href="/API/index.html">
    <img id="img-details" width=200 src=${record.strMealThumb} alt="">
    <h3></h3>
    </a>
    `;
    mealContainer.appendChild(div);
  }
};

//loadMeal("Arrabiata");
document.getElementById("search-btn").addEventListener("click", () => {
  const searchText = document.getElementById("seach-box").value;
  console.log(searchText);
  document.getElementById("seach-box").value = "";
  loadMeal(searchText);
});

const loadAll = () => {
  fetch(` https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
    .then((res) => res.json())
    .then((data) => displayByName(data.meals));
};

loadAll();

const displayByName = (records) => {
  for (record of records) {
    console.log(record);
    const mealContainer = document.getElementById("meal-container");

    const div = document.createElement("div");
    div.setAttribute("div", "col");

    div.innerHTML = `
    <img width=200 src=${record.strMealThumb} alt="">
    <h3></h3>
 
    `;
    mealContainer.appendChild(div);
  }
};

document.getElementById("img-details").addEventListener("click", () => {
  console.log("cliscked");
});
