
// Obtener el botón con el id "loginbutton"
const loginButton = document.getElementById("btn_loginButton");

loginButton.addEventListener("click", function () {
    const route    = document.getElementById("linkInput").value;
    const userName = document.getElementById("btn_email").value;
    const passWord = document.getElementById("btn_pass").value;

    fetch(route + '/sendUser/', {
        method: 'PUT',
        headers: {
            //'ngrok-skip-browser-warning': 'true',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: userName, pass: passWord})
    })
    .then(response => {
        if (response.ok) {
            return response.text(); // Obtener la respuesta como texto (o podrías usar .json() si la respuesta es JSON)
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .then(data => {
        console.log(data); // Mostrar la respuesta en consola
    })
    .catch(error => {
        console.error('Hubo un error con la solicitud:', error);
    });

});
