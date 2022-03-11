const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://veganteam.herokuapp.com/",
});

document.querySelectorAll(".list-page-advocado").forEach((btn) => {
  btn.onclick = (event) => {
    avocadoRestaurant(event.target.dataset.id, event.target); // dataset para acceder al atributo del 🥑 --> contiene la id del restaurante
  };
});

const avocadoRestaurant = (id, image) => {
  image.classList.toggle("list-page-advocado-active");
  httpClient.post(`/avocado/${id}`).catch((error) => console.log(error));
};

/* 
  const deleteComment = (id) => httpClient.delete(`/comment/${id}`)
    .then(() => {
      document.getElementById(`/comment/${id}`).remove()
    })
    .catch(err => console.error(err))

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.onclick = (event) => {
      btn.classList.add('disabled')
      deleteComment(event.target.value)
    }
  })
 */
