// Função para converter números romanos em números arábicos
function converterNumeroRomano(numeroRomano) {
  const valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let resultado = 0;
  let anterior = 0;

  const numeroRomanoUpper = numeroRomano.toUpperCase();
    for (let i = numeroRomanoUpper.length - 1; i >= 0; i--) {
    const valorAtual = valores[numeroRomanoUpper[i]];
      if (valorAtual >= anterior) {
        resultado += valorAtual;
      } else {
        resultado -= valorAtual;
      }
      anterior = valorAtual;
  }
  return resultado;
}

// Função para converter números árabicos em números romanos
function converterNumeroArabico(numeroArabico) {
  const valores = [
    { numero: 1000, romano: "M" },
    { numero: 900, romano: "CM" },
    { numero: 500, romano: "D" },
    { numero: 400, romano: "CD" },
    { numero: 100, romano: "C" },
    { numero: 90, romano: "XC" },
    { numero: 50, romano: "L" },
    { numero: 40, romano: "XL" },
    { numero: 10, romano: "X" },
    { numero: 9, romano: "IX" },
    { numero: 5, romano: "V" },
    { numero: 4, romano: "IV" },
    { numero: 1, romano: "I" }
  ];

  let resultado = "";
  let numeroRestante = numeroArabico;

  for (let i = 0; i < valores.length; i++) {
    const { numero, romano } = valores[i];

    while (numeroRestante >= numero) {
      resultado += romano;
      numeroRestante -= numero;
    }
  }

  return resultado;
}

// Função para lidar com o evento de clique no botão "Converter"
function converter() {
  const selectNumeroDe = document.getElementById("selectNumeroDe");
  const selectNumeroPara = document.getElementById("selectNumeroPara");
  const inputNumero = document.getElementById("inputNumero");
  const resultadoText = document.getElementById("real-value-text");

  const numero = inputNumero.value;
  let resultado;

  if (selectNumeroDe.value === "IVXM Numero Romano" && selectNumeroPara.value === "0123 Numero Arabico") {
    resultado = converterNumeroRomano(numero);
  } else {
    resultado = converterNumeroArabico(numero);
  }

  resultadoText.textContent = resultado;
}

// Evento de clique no botão "Converter"
const converterButton = document.getElementById("converterButton");
converterButton.addEventListener("click", converter);