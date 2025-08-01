
//CRIANDO FUNÇÃO
function carregamentoCalc() {

  //PEGANDO ELEMENTOS HTML
  const display = document.querySelector('.display')
  const botoes = document.querySelectorAll('button')

  //CRIANDO VARIÁVEIS MAIS TARDE UTILIZÁVEIS
  let numeroAnterior = ''
  let operador = ''
  let esperandoNovoNumero = false

  //INICIANDO EVENTO DE CLICK PARA CADA BOTÃO
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const valor = botao.textContent  // PEGA O TEXTO DO BOTÃO

      //CONDIÇÃO: SE CLICOU NÚMERO OU PONTO
      if (!isNaN(valor) || valor === '.') {
        
        //CONDIÇÃO: SE ESTÁ ESPERANDO NOVO NÚMERO, SUBSTITUI O DISPLAY
        if (esperandoNovoNumero) {
          display.textContent = valor
          esperandoNovoNumero = false
        } else {
          display.textContent += valor
        }
      }

      //CONDIÇÃO: SE CLICOU NO C, LIMPA TUDO
      else if (valor === 'C') {
        display.textContent = ''
        numeroAnterior = ''
        operador = ''
        esperandoNovoNumero = false
      }

      //CONDIÇÃO: SE CLICOU NO =
      else if (valor === '=') {
        if (numeroAnterior !== '' && operador !== '') {
          const numeroAtual = parseFloat(display.textContent)
          const resultado = calcular(numeroAnterior, numeroAtual, operador)
          numeroAnterior = ''
          operador = ''
          display.textContent = resultado
        }
      }

      //CONDIÇÃO: SE CLICOU EM OPERADOR
      else {
        numeroAnterior = parseFloat(display.textContent)
        operador = valor
        esperandoNovoNumero = true
      }
    })
  })

  // FUNÇÃO QUE FAZ O CÁLCULO
  function calcular(num1, num2, op) {
    switch (op) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Erro'
      default:
        return 0
    }
  }
}

carregamentoCalc()
