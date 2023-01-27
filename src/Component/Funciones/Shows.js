

    const recitales = [
    {
        artista: "Wos",
        descripcion: "Con un cierre de año espectacular agotando cuatro funciones en el mítico Estadio OBRAS, WOS anuncia la primera fecha del 2022 en la ciudad de  Mar del Plata. El próximo jueves 27 de enero en el Polideportivo de Mar Del Plata, WOS hará la presentación oficial de su exitoso disco, Oscuro Éxtasis.El show en vivo cuenta con una intervención artística única, representando parte de la simbología encriptada en las letras de su más reciente trabajo discográfico Oscuro Éxtasis, y una puesta de primer nivel.La banda que lo acompaña está formada por los mejores exponentes de la escena actual: Tomás Sainz en batería, Fran Azorai en teclados, Natasha Iurcovich en bajo y Facundo Yalve(Evlay Beats) en guitarra."
    },
    {
        artista: "Divididos",
        descripcion: "¡Divididos arranca los festejos de sus 35 años en el Polideportivo de Mar del Plata! El 29 de enero La Aplanadora vuelve a la Ciudad Feliz. Será el comienzo de un año de festejos que los llevará nuevamente a los grandes estadios de fútbol, con su esperado regreso a Vélez previsto para el 13 de mayo."
    },
    {
        artista: "Lollapalozza",
        descripcion: "Tras haber dado a conocer una grilla impresionante y llena de artistas que vienen por primera vez a Argentina, Lollapalooza demostró una vez más por qué es el evento musical más esperado del calendario. Ahora, revela su lineup por día y da comienzo a la venta de los diarios."
    }
    
];
function Shows () {
    return(
        text(recitales[1].descripcion)
    );
};

export default Shows;

