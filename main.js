function converter() {
  let base = document.querySelector('select#temp1')
  let convert = document.querySelector('select#temp2')
  let val = document.querySelector('input#valor')
  let valor = Number(val.value)
  let campo = document.querySelector('div.campo')

  switch (base.value) {
    case 'op1':
      if (convert.value == 'ops3') {
        valor = valor * 1.8 + 32
        campo.innerHTML = `${valor} °F`
        console.log(valor)
      } else if (convert.value == 'ops2') {
        valor = valor + 273.15
        campo.innerHTML = `${valor} K`
        console.log(valor)
      }
      break

    case 'op3':
      if (convert.value == 'ops1') {
        valor = (valor - 32) / 1.8
        campo.innerHTML = `${valor} °C`
        console.log(valor)
      } else if (convert.value == 'ops2') {
        valor = (valor - 32) / 1.8 + 273.15
        campo.innerHTML = `${valor} K`
        console.log(valor)
      }
      break

    case 'op2':
      if (convert.value == 'ops3') {
        valor = (valor - 273.15) * 18 + 32
        campo.innerHTML = `${valor} °F`
        console.log(valor)
      } else if (convert.value == 'ops1') {
        valor = valor - 273.15
        campo.innerHTML = `${valor} °C`
        console.log(valor)
      }
      break

    default:
      campo.innerHTML = 'Opção não encontrada'
      break
  }
}
