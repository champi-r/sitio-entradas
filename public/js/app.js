const eventos = [
    {
        "id": 1, "evento": "Daddy Yankee", "fecha" : ["10/10/2022", "11/10/2022"], "precio": 12000, "stock": 2
    },
    {
        "id": 2, "evento": "Babasonicos", "fecha" : ["15/05/2022", "16/05/2022"], "precio": 7800, "stock": 7
    },
    {
        "id": 3, "evento": "Dua Lipa", "fecha" : ["07/08/2022"], "precio": 14300, "stock": 3
    }
]

class Compra{
    constructor (idEvento, evento, fechaElegida, cantEntradas, precio) {
        this.idEvento = idEvento;
        this.evento = evento;
        this.fechaElegida = fechaElegida;
        this.cantEntradas = cantEntradas;
        this.precio = precio;
    }
}

let idEvento, fechaElegida, cantEntradas, nuevaCompra, textSearch ="";

let lista = listarEventos(eventos);

let confirmation = confirm('Confirmo que soy mayor de 18 años');
if(confirmation){
    idEvento = parseInt(prompt(`Seleccione el evento deseado\n${lista}`));
    idEvento = idEvento - 1; 
    fechaElegida = parseInt(prompt(`Seleccione fecha \n${listarFechasEvento(eventos, idEvento)} `));
    fechaElegida = eventos[idEvento].fecha[fechaElegida-1];
    cantEntradas = parseInt(prompt(`Seleccione cantidad de entradas (Máximo de 6 por persona) \n Valor $${eventos[idEvento].precio}`));
    while(cantEntradas > 6 ){
        cantEntradas = prompt("El máximo permitido por persona es de 6 entradas, por favor ingrese número menor");
    }
    while(cantEntradas > eventos[idEvento].stock){
        cantEntradas = prompt(`La cantidad ingresada no está disponible.\n Disponible actual = ${eventos[idEvento].stock}`);
    }
    const compra1 = new Compra(idEvento, eventos[idEvento].evento, fechaElegida, cantEntradas, eventos[idEvento].precio);
    total(compra1);

    // Código para cumplir requerimiento de uso de filter - Preentrega proyecto final
    nuevaCompra = confirm('¿Queres conocer otros eventos disponibles?');
    if(nuevaCompra){
        textSearch = prompt("Ingrese una palabra clave");
        let resultado = eventos.filter( (ev) => ev.evento.includes(textSearch));
        for (const result of resultado){
            alert(result.evento);
        }
    } 
} else{
    alert('No esta permitido la venta a menores de edad');
}

function listarEventos(eventos){
    let listado = "";
    eventos.forEach( (ev) => {
        let itemList = (ev.id + "-" + ev.evento + "\n");
        listado = listado + itemList;
    })
    return listado;
}

function listarFechasEvento(eventos, id){
    let listado = "";
    let i = 0;
    eventos[id].fecha.forEach( (fe) => {
        i=i+1;
        let itemList = (i + "-" + fe + "\n");
        listado = listado + itemList;
    })
    return listado
}

function total (x){
    let total = x.precio * x.cantEntradas;
    let aceptacion = confirm(`Evento: ${x.evento} \nFecha: ${x.fechaElegida} \nCantidad entradas: ${x.cantEntradas} \nValor Unidad: ${x.precio} \nTOTAL= ${total} \n¿Estas seguro?`);
    if(aceptacion){
        alert('Compra exitosa');
    } else {
        alert('Compra cancelada');
    }
}
