const httpClient = axios.create({
  baseURL: "http://localhost:3000",
});

document.querySelectorAll(".list-page-advocado").forEach((btn) => {
  btn.onclick = (event) => {
    avocadoRestaurant(event.target.dataset.id, event.target); // dataset para acceder al atributo del 🥑 --> contiene la id del restaurante
  };
});

const avocadoRestaurant = (id, image) => {
  image.classList.toggle("list-page-advocado-active");
  httpClient.post(`/avocado/${id}`).catch((error) => console.error(error));
};
