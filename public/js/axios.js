const httpClient = axios.create({
    baseURL: 'http://localhost:3000'
})

const avocadoRestaurant = (id, image) => httpClient.post('/avocado/${id}')
.then(() => {
    image.classList.toggle('icon-avocado')
})
.catch(error => console.error(error))
.finally(() => image.classList.remove('avocado-events-none'))

document.querySelectorAll('.avocado-action').forEach(btn => {
    btn.onclick = (event) => {
        btn.classList.add('avocado-events-none')
        avocadoRestaurant(event.target.dataset.id, event.target) // dataset para acceder al atributo del 🥑 --> contiene la id del restaurante
    }
})