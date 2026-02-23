function calcularPostura() {
    const totalAves = document.getElementById('totalAves').value;
    const ovosColhidos = document.getElementById('ovosColhidos').value;
    const container = document.getElementById('resultadoContainer');
    const valorDisplay = document.getElementById('valorTaxa');
    const mensagem = document.getElementById('statusMensagem');

    if (totalAves > 0 && ovosColhidos !== "") {
        const taxa = (ovosColhidos / totalAves) * 100;
        
        container.classList.remove('hidden', 'status-bom', 'status-alerta', 'status-critico');
        valorDisplay.innerText = taxa.toFixed(1) + "%";

        if (taxa >= 85) {
            container.classList.add('status-bom');
            mensagem.innerText = "Produção excelente!";
        } else if (taxa >= 75) {
            container.classList.add('status-alerta');
            mensagem.innerText = "Atenção: Queda leve na produção.";
        } else {
            container.classList.add('status-critico');
            mensagem.innerText = "Alerta: Verifique a saúde das aves!";
        }
    } else {
        alert("Por favor, preencha os valores corretamente.");
    }
}