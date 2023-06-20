window.cricket = function(event) {
    event.preventDefault()
    let year = document.querySelector("#input").value;

    axios.get(`/cricket/${year}`)
        .then(function(response) {
            console.log(response.data);

            document.getElementById("year").innerHTML = response.data.year
            document.getElementById("tournament").innerHTML = response.data.tournament
            document.getElementById("format").innerHTML = response.data.format
            document.getElementById("winner").innerHTML = response.data.winner
            document.getElementById("winner-captain").innerHTML = response.data.captain
            document.getElementById("runner-up").innerHTML = response.data.runnerUP
            document.getElementById("host").innerHTML = response.data.host
        })
        .catch(function(error) {
            console.error(error.data);
            document.querySelector(".results").innerHTML = `<h1 class="top-left">No ICC Tournament In ${year}</h1>`
        })

    document.getElementById("input").value = ""
}