// my code

const containerDiv = document.getElementsByClassName("h-photo")[0];

const pixaKey = "24477339-22b8ee8a367b2cdaebd16eb69";
const pixaAPI = fetch(
  `https://pixabay.com/api/?key=${pixaKey}&q=paris&image_type=photo&pretty=true&imageHeight=1080&imageWidth=1920`
)
  .then((res) => {
    if (res.status !== 200) {
      console.log("there was a problem connecting to Api");
    } else {
      return res.json();
    }
  })
  .then((data) => {
    const photo = document.createElement("img");
    photo.setAttribute("src", `${data.hits[0].largeImageURL}`);
    photo.setAttribute("id", `header`);
    containerDiv.appendChild(photo);
  });

const countryAPI = fetch(`https://restcountries.com/v3.1/name/france`)
  .then((res) => {
    if (res.status !== 200) {
      console.log("there was a problem connecting to Api");
    } else {
      return res.json();
    }
  })
  .then((data) => {
    const officialName = document.createElement("h1");
    officialName.setAttribute("id", "official-name");
    officialName.innerHTML = `${data[0].name.official}`;
    containerDiv.appendChild(officialName);

  });
