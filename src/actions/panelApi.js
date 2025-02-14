consultaTareas();

function consultaTareas(){

    const url = "http://localhost:3000/tasks";

    fetch(url).then(resp => resp.json()).then(data => {
        console.log("Sucedio!: ", data)
    })
    .catch((error) => console.log("Hubo un error!", error))

}