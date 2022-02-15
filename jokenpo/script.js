const opcao1 = document.querySelector(".opcao1")
const opcao2 = document.querySelector(".opcao2")

const resultado = document.querySelector(".resultado")

let jogador1 = document.querySelector(".jogador1")
let jogador2 = document.querySelector(".jogador2")

opcao1.addEventListener('change', function(){
  if(this.value == "Papel"){
    jogador1.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Paper_sheet.jpg/200px-Paper_sheet.jpg');
    jogador1.classList.remove("Pedra");
    jogador1.classList.remove("Tesoura");
    jogador1.classList.add("Papel");
  }else if(this.value == "Tesoura"){
    jogador1.setAttribute('src', 'https://7106.cdn.simplo7.net/static/7106/sku/acessorios-tesoura-grande-mundial-profissional-aco-inox-costura--p-1622655868602.png');
    jogador1.classList.remove("Pedra");
    jogador1.classList.remove("Papel");
    jogador1.classList.add("Tesoura");
  }else{
    jogador1.setAttribute('src', 'https://a-static.mlcdn.com.br/1500x1500/pedra-grande-fibrart/minhacozinhanova2/007168pg02/79bef7574f37f5e545e132be024819dd.jpg')
    jogador1.classList.remove("Papel");
    jogador1.classList.remove("Tesoura");
    jogador1.classList.add("Pedra");
  }
  return this.value
});

opcao2.addEventListener('change', function(){
  if(this.value == "Papel"){
    jogador2.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Paper_sheet.jpg/200px-Paper_sheet.jpg');
    jogador2.classList.remove("Pedra");
    jogador2.classList.remove("Tesoura");
    jogador2.classList.add("Papel");
  }else if(this.value == "Tesoura"){
    jogador2.setAttribute('src', 'https://7106.cdn.simplo7.net/static/7106/sku/acessorios-tesoura-grande-mundial-profissional-aco-inox-costura--p-1622655868602.png');
    jogador2.classList.remove("Pedra");
    jogador2.classList.remove("Papel");
    jogador2.classList.add("Tesoura");
  }else{
    jogador2.setAttribute('src', 'https://a-static.mlcdn.com.br/1500x1500/pedra-grande-fibrart/minhacozinhanova2/007168pg02/79bef7574f37f5e545e132be024819dd.jpg')
    jogador2.classList.remove("Papel");
    jogador2.classList.remove("Tesoura");
    jogador2.classList.add("Pedra");
  }
  return this.value
});

function jogo(){
   if((jogador1.classList.contains("Pedra")) && (jogador2.classList.contains("Tesoura"))){
    resultado.innerHTML = "Jogador 1 venceu"
   }else if((jogador1.classList.contains("Tesoura")) && (jogador2.classList.contains('Pedra'))){
    resultado.innerHTML = "Jogador 2 venceu"
   }else if((jogador1.classList.contains("Tesoura")) && (jogador2.classList.contains("Papel"))){
    resultado.innerHTML = "Jogador 1 venceu"
   }else if((jogador1.classList.contains("Papel")) && (jogador2.classList.contains("Tesoura"))){
    resultado.innerHTML = "Jogador 2 venceu"
   }else if((jogador1.classList.contains("Papel")) && (jogador2.classList.contains("Pedra"))){
    resultado.innerHTML = "Jogador 1 venceu"
   }else if((jogador1.classList.contains("Pedra")) && (jogador2.classList.contains("Papel"))){
    resultado.innerHTML = "Jogador 2 venceu"
   }else{
    resultado.innerHTML = "EMPATE"
   }
 }