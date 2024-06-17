//Pagina de Talleres y Cursos 

function saludo(){
    let saludo = 'Bienvenido a Centro Holistico Maitreya';  
        alert("Bienvenido a Centro Holistico Maitreya");
}
saludo();


let question = prompt('Desea conocer nuestra agenda de Talleres? \n(S-si / N-no)');

while (question == 'S') {
    let answer = prompt('1- Registros Akashicos\n2-Terapia con Pendulo\n');
    if (answer == '1') {
        alert('Eligio Cursos de Registros Akashicos');
    } else if (answer == '2') {
        alert('Eligio Cursos de Terapia con Pendulo');
    } else {
        alert('Tipo de Curso inexistente');
    }
    question = prompt('Desea cambiar el tipo de curso? (S-si / N-no)');
}
//==================================== Precios segun curso elegido ===================================

let total = 0;

let registroA = prompt('Elija el tipo de registro:\n \n1 - Online\n2 - Presencial\n3 - Online y Presencial \n\n B / para volver al menu');

while (registroA != 'B') {
    switch (registroA) {
        case '1':
            alert('Su registro elegido vale $160 + IVA');
            sumatoriaCompra(160);
            break;
        case '2':
            alert('Su registro elegido vale $140 + IVA');
            sumatoriaCompra(140);
            break;
        case '3':
            alert('Su registro elegido vale $210 + IVA');
            sumatoriaCompra(110);
            break;
        default:
            alert('Registro Inexistente');
            break;

    }
    registroA = prompt('Elija el registro :\n \n1 - Online\n2 - Presencial\n3 - Online y Presencial \n\nB / para volver al menu');
}

alert('Total de su compra $' + total);

//================================ Total Compra ==========================================


function sumatoriaCompra(precio) {
    // Obtengo del IVA
    const iva = 0.21;

    // Calculo del IVA
    const ivaTotal = precio * iva;

    // Agrego el IVA al total
    total = total + precio + ivaTotal;
    
    // Muestro el resultado

    alert('Lleva gastado $' + total.toFixed(2));
}