const input = document.querySelector('#input')
const button = document.querySelector('#button')

button.addEventListener('click', async event => {

    let city = input.value
    const url = `/check/${city}`
    const  response = await fetch(url)
    const json = await response.json()

    const cityName = document.querySelector('#city-name')
    cityName.innerHTML = json.results.city_name
    const temp = document.querySelector('#temp')
    temp.innerHTML = json.results.temp +'°'
    console.log(json)
})