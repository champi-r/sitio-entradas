const eventos = [
    {
        "id": 1,
        "evento": "Wisin y Yandel",
        "fecha": ["12/06/2022"],
        "entrada": [
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

function Compra (event, cantTk, tot){
    this.event = event;
    this.cantTk = cantTk;
    this.tot = tot;
}

const cargoServicio = 250;

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

const buttonReset = document.getElementById('button-reset');
buttonReset.addEventListener("click", resetInputs);

const buttonConfirm = document.getElementById('button-confirm');

const allInputs = document.querySelectorAll('.election-ubication td input');
const totalTickets = document.querySelector('.total-tickets .price span');
const totalService = document.querySelector('.total-service .price span');
const totalPrice = document.querySelector('.total-price .price span');
let precioTot = 0;
let cantEntradas = 0;

function calculoTotal() {
    precioTot = 0;
    cantEntradas = 0;
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value != 0) {
            precioTot += allInputs[i].value * eventos[0].entrada[i].precio;
            cantEntradas += parseInt(allInputs[i].value);
        }
    }
    maxTickets(cantEntradas);
    maxValueInputs();
    totalTickets.innerText = precioTot;
    totalService.innerText = cantEntradas * cargoServicio;
    totalPrice.innerText = precioTot + (cantEntradas * cargoServicio);
    if(cantEntradas==0){
        buttonConfirm.classList.add('disabled');
    } else if(cantEntradas>6){
        buttonConfirm.classList.add('disabled');
        inputCampo.addEventListener("click", toastMessage);
        inputCampoVr.addEventListener("click", toastMessage);
        inputPpref.addEventListener("click", toastMessage);
        inputPbaj.addEventListener("click", toastMessage);
        inputPpaltC.addEventListener("click", toastMessage);
        inputPpaltL.addEventListener("click", toastMessage);
    } else{
        buttonConfirm.classList.remove('disabled');
        inputCampo.removeEventListener("click", toastMessage);
        inputCampoVr.removeEventListener("click", toastMessage);
        inputPpref.removeEventListener("click", toastMessage);
        inputPbaj.removeEventListener("click", toastMessage);
        inputPpaltC.removeEventListener("click", toastMessage);
        inputPpaltL.removeEventListener("click", toastMessage);
    }
}

function resetInputs(){
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value='';
        allInputs[i].disabled=false;
    }
    totalTickets.innerText = '';
    totalService.innerText = '';
    totalPrice.innerText = '';
}

function maxValueInputs(){
    for (let i = 0; i < allInputs.length; i++) {
        if(parseFloat(allInputs[i].value) > 6){
            allInputs[i].value = 6;
        }
        
    }
}

function maxTickets(tk){
    if(tk>=6){
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value == 0) {
                allInputs[i].disabled=true;
            } 
        }
    } else if (tk<6){
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value == 0) {
                allInputs[i].disabled=false;
            }  
        }
    }
}

const toastMessage = () => {
    Toastify({
        text: "Entradas máximas superadas",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #FA8007, #CABA15)",
        } 
        }).showToast();
}

buttonConfirm.addEventListener("click",confirmSweet = () => {
    const buyConfirm = new Compra (eventos[0].evento, cantEntradas,parseInt(totalPrice.innerText));
    console.log(buyConfirm);
    const {event, cantTk, tot} = buyConfirm;
    Swal.fire(
        `${event}`,
        `${cantTk} entradas por un total de ${tot}`,
        'success'
      )
})