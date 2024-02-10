document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const colors = ['#aeeeee', '#ffcccb', '#ffb6c1', '#ff6347', '#7b68ee', '#d3d3d3'];
    const letterColors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff', '#800080', '#008000', '#000080'];
    let index = 0;

    setInterval(function() {
        body.style.backgroundColor = colors[index];

        document.querySelectorAll('.letter').forEach(function(letter, i) {
            letter.style.color = letterColors[(index + i) % letterColors.length];
        });

        index = (index + 1) % colors.length;
    }, 3000);

    // Função para verificar o número de estrelas
    function verificarEstrelas() {
        var numeroEstrelas = document.getElementById('starsInput').value;
        numeroEstrelas = parseInt(numeroEstrelas);

        if (numeroEstrelas === 134) {
            document.getElementById('resultado').innerHTML = '<img src="imagem-sucesso.jpeg" alt="easter egg"><p>entãokkkkk, primeiramente eu ia te dar isso daí e a jarra, mas eu achei mt exagerado e que não fazia mt sentido, então fiquei pra mim e nem sei oq vou fazer com isso! alem disso acho q deve ter sido chato contar todas essas estrelas!! "Essa última parte to escrevendo dia 10/02/24 as 00:12, terminei de montar a jarra e fazer o recadinho só agora, deu um trabalho do cacetekkkkkkk enfim, espero que tu tenha gostado do presente, e espero que tu tenha chego nessa parte aquikkkkkkkkk</p>';
        } else {
            document.getElementById('resultado').innerHTML = '<p>passou perto!</p>';
        }
    }
    verificarButton.addEventListener('click', verificarEstrelas);
    verificarButton.addEventListener('touchstart', verificarEstrelas);
    verificarButton.addEventListener('touchend', function(event) {
        // Impedir o comportamento padrão do evento touchend
        event.preventDefault();
        // Chamar a função verificarEstrelas
        verificarEstrelas();
    });
});
