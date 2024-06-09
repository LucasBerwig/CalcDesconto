document.getElementById("descontoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 

    const nomeProduto = document.getElementById("nomeProduto").value;
    const valorOriginal = parseFloat(document.getElementById("valorOriginal").value);
    const percentualDesconto = parseFloat(document.getElementById("percentualDesconto").value);

   
    if (isNaN(valorOriginal) || isNaN(percentualDesconto) || percentualDesconto < 0 || percentualDesconto > 100) {
        alert("Por favor, insira valores válidos e certifique-se de que o percentual de desconto esteja entre 0 e 100.");
        return;
    }

    const valorDesconto = (valorOriginal * percentualDesconto) / 100;
    const valorFinal = valorOriginal - valorDesconto;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Nome do Produto: ${nomeProduto}</p>
        <p>Valor do Desconto: R$ ${valorDesconto.toFixed(2)}</p>
        <p>Valor Final do Produto: R$ ${valorFinal.toFixed(2)}</p>
    `;

    document.getElementById("reiniciar").style.display = "block";
});

document.getElementById("reiniciar").addEventListener("click", function() {
    document.getElementById("descontoForm").reset();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("reiniciar").style.display = "none";
});