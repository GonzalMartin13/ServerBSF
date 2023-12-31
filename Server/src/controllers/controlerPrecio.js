const axios = require("axios");

const contolerPrecio = async (origen, destino, volumen, peso, servicios) => {

/*     if (!origen || !destino) {
        return "Los parámetros origen y destino son obligatorios";
    }

    if (!peso || peso === 0 || !volumen || volumen === 0) {
        return "Los parámetros peso y volumen son obligatorios y deben ser mayores que 0";
    } */
    try {
        const { data } = await axios(`https://provincias.onrender.com/provincias/${origen}`);
        const provinciaEncontrada = data.distanciaEntreProvincias.find(
            provincia => provincia.provincia.toLowerCase() === destino.toLowerCase()
        );
        let precioXkm = 0;

        if (origen === destino) {
            precioXkm = 275;
        } else if (!provinciaEncontrada) {
            return "No se pudo calcular la distancia entre destinos";
        }else if (provinciaEncontrada.distancia <= 250) {
            precioXkm = 300;
        }else {
            precioXkm = provinciaEncontrada.distancia;
        }

        console.log(precioXkm, volumen, peso)
        let pesoVolumetrico = (volumen / 500)
        let precioFinal =((precioXkm + pesoVolumetrico )* 1.1);
        console.log(pesoVolumetrico)

        precioFinal = servicios.reduce((acumulador, servicio) => {
            switch (servicio.toLowerCase()) {
                case "embalaje":
                    return acumulador * 1.2;
                case "express":
                    return acumulador * 1.3;
                case "fragil":
                    return acumulador * 1.1;
                default:
                    return acumulador;
            }
        }, precioFinal);

        return Math.floor(precioFinal);
    } catch (error) {
        console.error("Error al calcular el precio:", error.message);
        return "Hubo un error al calcular el precio";
}
};

module.exports = contolerPrecio;
