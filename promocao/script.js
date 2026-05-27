function verificarPromocao(){
    //Variável dia
    let dia=document.getElementById("dia").value

    //Variável resultado
    let resultado=document.getElementById("resultado");

    //Deixa tudo minúsculo
    dia=dia.toLowerCase();

    //Estrutura switch-case
    switch(dia){
        case "segunda":
            resultado.innerHTML="Pizza em dobro";
            break;
        case "terça":
            resultado.innerHTML="Refrigerante grátis";
            break;
        case "quarta":
            resultado.innerHTML="Teste de springlock gratuito";
            break;
        case "quinta":
            resultado.innerHTML="Rosquinhas do Homer por R$1,99";
            break;
        case "sexta":
            resultado.innerHTML="Chopp de vinho em dobro";
            break;
        case "sábado":
            resultado.innerHTML="Passeio na Fazbearfrights";
            break;
        case "domingo":
            resultado.innerHTML="Partida de DBD contra slugging Blight";
            break;
        default:
            resultado.innerHTML="Dia inválido"
    }

}