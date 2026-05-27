function verificarReserva(){
    //Variável
    let horario=document.getElementById("horario").value
    
    //Resultado
    let resultado=document.getElementById("resultado");

    //Estrutura de decisão
    if (horario >= 18 && horario <= 23){
        resultado.innerHTML="Reserva disponível";
    }else{
        resultado.innerHTML="Restaurante fechado";
    }
}