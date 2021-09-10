var cartaWiccano = {
    nome: "Wiccano",
    imagem: "https://64.media.tumblr.com/37a80617bd545d5febca71cd12a59bf9/50b7fa5c228e88b6-34/s500x750/4a39a0fce5ae0be6e60b524d7d49fae0f3b6836f.jpg",
    atributos: {
      ataque: 80,
      defesa: 70,
      magia: 90
    }
}
  
var cartaDS ={
    nome: "Doutor Estranho",
    imagem: "https://i.pinimg.com/originals/12/fc/1f/12fc1fcbd5276d61c5005f7f7c93f044.jpg",
    atributos: {
      ataque: 86,
      defesa: 78,
      magia: 90  
    }
  
}
  
var cartaVision ={
    nome: "Visão",
    imagem: "https://www.cabanadoleitor.com.br/wp-content/uploads/2018/09/vision-comic-cover-e1536927838260.jpg",
    atributos: {
      ataque: 88,
      defesa: 81,
      magia: 75  
    }
  
}
  
var cartaFeiticeira = {
    nome: "Feiticeira Escarlate",
    imagem: "https://upload.wikimedia.org/wikipedia/en/9/97/Scarlet_Witch.jpg",
    atributos:{
        ataque: 80,
        defesa: 80,
        magia: 95
    }
}
  
var cartaThor = {
    nome:"Thor",
    imagem: "https://i.pinimg.com/originals/b9/c9/01/b9c901e15b55d7c06fd183e244138fc5.jpg",
    atributos:{
      ataque: 88,
      defesa: 65,
      magia: 76
    }
}
  
var cartaCA = {
    nome:"Capitão América",
    imagem: "https://wallpapercave.com/wp/wp7117162.jpg",
    atributos:{
      ataque: 96,
      defesa: 85,
      magia: 0
    }
}

var cartaCM = {
    nome: "Capitã Marvel",
    imagem: "http://pm1.narvii.com/6891/ea312299bd1d3a35e8146409ed55c47a9d0f58car1-750-981v2_uhq.jpg",
    atributos: {
      ataque: 90,
      defesa: 80,
      magia: 87
    }
}
  
  
var cartaMaquina
var cartaJogador
var cartas = [cartaWiccano, cartaDS, cartaFeiticeira, cartaThor, cartaCA, cartaVision,cartaCM]
  
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}`

    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'

}
  
function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
        return radioAtributo[i].value
        }
    }
}
  
function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p'
    } 
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p'
    } 
    else {
        htmlResultado = '<p class="resultado-final">Empatou</p'
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina() 
}
  
function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
        
}

  