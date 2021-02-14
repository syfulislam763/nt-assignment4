const firstClassInput = document.getElementById('firstClassInput');
const economyInput = document.getElementById('economyInput');
const subTotal = document.getElementById('subtotal');
const vat = document.getElementById('vat');
const total = document.getElementById('total');
let firstClassTicketQuantity = 0;
let economyTicketQuantity = 0;
const firstClassTicketPrice = 150;
const economyTicketPrice = 100;


function ticketCostDetails(){
    let subTotalCost = (firstClassTicketQuantity*firstClassTicketPrice)+(economyTicketQuantity*economyTicketPrice);
    let charge = subTotalCost*.1;// charge 10% from subtotal cost
    let totalCost = subTotalCost+charge;
    subTotal.innerText = subTotalCost;
    vat.innerText = charge;
    total.innerText = totalCost;
}



function handleFirstClassTicketPrice(n){
    if(!(n==-1&&firstClassTicketQuantity<=0)){
        firstClassTicketQuantity+=n;
    }
    firstClassInput.value = firstClassTicketQuantity;
    ticketCostDetails();
}

function handleEconomyTicketPrice(n){
    if(!(n===-1&&economyTicketQuantity<=0)){
        economyTicketQuantity+=n;
    }
    economyInput.value = economyTicketQuantity;
    ticketCostDetails();
}


function buyTicket(){
    if(firstClassTicketQuantity>0 || economyTicketQuantity>0){
        alert('Successfully booked your ticket sir');
        reset();
    }else{
        alert('Sorry sir, your ticket quantity is 0');
    }
}


function reset() {
    firstClassTicketQuantity = 0;
    economyTicketQuantity = 0;
    firstClassInput.value = 0;
    economyInput.value = 0;
    ticketCostDetails();
}