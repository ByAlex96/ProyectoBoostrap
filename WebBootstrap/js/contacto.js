
var miBoton = document.getElementById("enviar");
var miForm = document.getElementById("form");

miBoton.addEventListener("click", (evento) => {
    evento.preventDefault(); /*No envía el formulario */
    valido = validar();
    if (valido == true) {
        miForm.submit();
    }
})

function validar() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var telefono = document.getElementById("telefono");
    var email = document.getElementById("email");


    let correcto = true;

    if (nombre.value == null || nombre.value == "") {
        setError(nombre, "El campo nombre está en blanco.\n");
        correcto = false;
    } else {
        let name_re = /^([A-Za-zÑñÁáÉéÍíÓóÚú]{2,15})$/;
        if (!name_re.exec(nombre.value)) {
            setError(nombre, "El nombre solo puede estar compuesto de letras.\n");
            correcto = false;
        } else {
            setSuccess(nombre);
        }
    }



    /********  APELLIDO  ***************/

    if (apellido.value == null || apellido.value == "") {
        setError(apellido, "El campo apellido está en blanco.\n");
        correcto = false;
    } else {
        let ape_re = /^[A-Za-zÑñÁáÉéÍíÓóÚú]{2,40}$/;
        if (!ape_re.exec(apellido.value)) {
            setError(apellido, "El apellido solo puede estar compuesto de letras.\n");
            correcto = false;
        } else {
            setSuccess(apellido);
        }
    }


    /********  TELEFONO  ***************/

    if (telefono.value == null || telefono.value == "") {
        setError(telefono, "El campo telefono está en blanco.\n");
        correcto = false;
    } else {
        let tel_re = /^[\d]{9}$/;
        if (!tel_re.exec(telefono.value)) {
            setError(telefono, "Introduce número de 9 dígitos.\n");
            correcto = false;
        } else {
            setSuccess(telefono);
        }
    }


    /********  EMAIL  ***************/

    if (email.value == null || email.value == "") {
        setError(email, "El campo email está en blanco.\n");
        correcto = false;
    } else {
        let ema_re = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
        if (!ema_re.exec(email.value)) {
            setError(email, "Cumpla con un formato valido.\n");
            correcto = false;
        } else {
            setSuccess(email);
        }
    }
}

/***** INICIO MAPA*****/



function initMap() {
    var Barbería = { lat: 40.4412286, lng: -3.6974367 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: Barbería,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: Barbería,
        map: map,
        title: 'Barbería ByAlex'
    });

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var calculateRoute = function () {
        var start = document.getElementById('start').value;
        var end = Barbería;
        var request = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        };
        directionsService.route(request, function (result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            } else {
                alert('Error: No se encontraron resultados para la ruta.\nPor favor intenta nuevamente');

            }
        });
    };

    document.getElementById('routeBtn').addEventListener('click', calculateRoute);
}

document.addEventListener('DOMContentLoaded', function () {
    initMap();
});

}
