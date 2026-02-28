let cliente = { 
nombre: "Alessandro",
dinero: 100,
hambre:100
};
function ordenarComidaAlessandro(){
cliente.hambre -= 40;
console.log("tu hambre ha sido saciada, ahora tienes " + cliente.hambre + "de hambre");
};
function pagarAlessandro(){
cliente.dinero -=30;
console.log("has pagado por la comida, ahora tienes "+ cliente.dinero + " de dinero");
};
function mostrarEstadoAlessandro(){
console.log("tienes " + cliente.hambre + "y tienes " + cliente.dinero + " de dinero");

};
