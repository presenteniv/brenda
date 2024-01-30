document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const colors = ['#aeeeee', '#ffcccb', '#ffb6c1', '#ff6347', '#7b68ee', '#d3d3d3']; // Cores do plano de fundo
    const letterColors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff', '#800080', '#008000', '#000080']; // Cores para as letras
    let index = 0;

    setInterval(function() {
        body.style.backgroundColor = colors[index];
        
        // Muda a cor de cada letra individualmente
        document.querySelectorAll('.letter').forEach(function(letter, i) {
            letter.style.color = letterColors[(index + i) % letterColors.length];
        });

        index = (index + 1) % colors.length;
    }, 3000); // Muda a cor a cada 2 segundos
});
