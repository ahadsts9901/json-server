window.cricket = function(event) {
    event.preventDefault()
    let year = document.querySelector("#input").value;

    axios.get(`/cricket/${year}`)
        .then(function(response) {
            console.log(response.data);

            // document.querySelector("#result").innerHTML =
            // `current temperature is ${response.data.tempInC}°C`

        })
        .catch(function(error) {
            // handle error
            console.error(error.data);
            // document.querySelector("#result").innerHTML = "error in getting weather data"
        })
}