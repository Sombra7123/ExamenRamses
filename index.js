
const botoes = document.querySelectorAll(".botoes .botao")
console.log(botoes)

botoes.forEach((item, indice) => {
  item.addEventListener("click", () => {
    desselecionarBotao()
    desselecionarPersonagem()

    item.classList.add("selecionado")
    personagens[indice].classList.add("selecionado")
    /*prompt("Quieres escuchar la voz de el personage?");
    if (prompt==si)
    {
      
    }*/
  })
})

const personagens = document.querySelectorAll(".personagem")
function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  )
  personagemSelecionado.classList.remove("selecionado")
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado")
  botaoSelecionado.classList.remove("selecionado")
}
