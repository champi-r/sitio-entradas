const eventos = [
    {
        "id": 1,
        "evento": "Wisin y Yandel",
        "fecha": ["12/06/2022"],
        "entrada":[
            { "sector": "campo", "precio": 14000, "stock": 10 },
            { "sector": "campo-vr", "precio": 11000, "stock": 10 },
            { "sector": "ppref", "precio": 9000, "stock": 10 },
            { "sector": "pbaj", "precio": 7500, "stock": 10 },
            { "sector": "palt-c", "precio": 6000, "stock": 10 },
            { "sector": "palt-l", "precio": 5500, "stock": 10 }
        ]
    },
    {
        "id": 2, "evento": "Babasonicos", "fecha": ["15/05/2022", "16/05/2022"], "precio": 7800, "stock": 7
    },
    {
        "id": 3, "evento": "Dua Lipa", "fecha": ["07/08/2022"], "precio": 14300, "stock": 3
    }
]


const inputCampo = document.getElementById('campo');
inputCampo.addEventListener("change", calculoTotal);

const inputCampoVr = document.getElementById('campo-vr');
inputCampoVr.addEventListener("change", calculoTotal);

const inputPpref = document.getElementById('ppref');
inputPpref.addEventListener("change", calculoTotal);

const inputPbaj = document.getElementById('pbaj');
inputPbaj.addEventListener("change", calculoTotal);

const inputPpaltC = document.getElementById('palt-c');
inputPpaltC.addEventListener("change", calculoTotal);

const inputPpaltL = document.getElementById('palt-l');
inputPpaltL.addEventListener("change", calculoTotal);

let precioTot=0;
let cantEntradas=0;

function calculoTotal(){
    precioTot=0;
    cantEntradas=0;
    const allInputs = document.querySelectorAll('.election-ubication td input');
    for (let i=0; i<allInputs.length; i++){
        if(allInputs[i].value != 0){
            precioTot = precioTot + allInputs[i].value * eventos[0].entrada[i].precio;
            cantEntradas = cantEntradas + parseInt(allInputs[i].value);
        }

    }
    console.log(precioTot);
    console.log(cantEntradas);
}