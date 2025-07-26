// 1️⃣ Seleciona todos os elementos <li> dentro da <ul>
// Ou seja, todos os cursos exibidos na lista
const cursos = document.querySelectorAll('ul li');

// 2️⃣ Seleciona a div onde as informações serão exibidas
// Essa div deve estar no seu HTML com id="informacaoCurso"
const caixaInfo = document.getElementById('informacaoCurso');

// 3️⃣ Criamos um "objeto" com as informações de cada curso
// A chave (por exemplo, 'canto') tem que ser igual ao id do <li>
// O valor é a descrição que será exibida na tela
const informacoes = {
  audiovisual: "🎬 Curso de Audiovisual: Aprenda gravação, edição e produção de vídeos.",
  bateria: "🥁 Curso de Bateria: Ritmos, técnicas com baquetas e prática musical.",
  cavaquinho: "🎶 Curso de Cavaquinho: Toque sambas, pagodes e músicas brasileiras.",
  contrabaixo: "🎸 Curso de Contra Baixo: Aprenda a tocar com groove e acompanhar bandas.",
  canto: "🎤 Curso de Canto: Técnica vocal, respiração, afinação e interpretação.",
  desenho: "✏️ Curso de Desenho: Técnicas de traço, sombreamento e criatividade.",
  guitarra: "🎸 Curso de Guitarra: Acordes, solos, rock, pop e muito mais.",
  musicalizacao: "👧 Curso de Musicalização Infantil: Iniciação musical divertida para crianças.",
  pandeiro: "🪘 Curso de Pandeiro: Ritmos brasileiros como samba, choro e forró.",
  piano: "🎹 Curso de Piano: Teoria, prática e leitura musical.",
  pintura: "🖌️ Curso de Pintura em Tela: Técnicas de cores, formas e composição artística.",
  teclado: "🎼 Curso de Teclado: Harmonia, escalas e repertório.",
  ukulele: "🌺 Curso de Ukulele: Acordes simples para tocar músicas animadas.",
  violao: "🎶 Curso de Violão: Iniciação e prática com diversos estilos.",
  violino: "🎻 Curso de Violino: Postura, afinação e repertório clássico.",
  teatro: "🎭 Curso de Teatro: Expressão corporal, improviso e atuação.",
  idiomas: "📚 Curso de Inglês e Espanhol: Conversação, gramática e cultura."
};

// 4️⃣ Agora adicionamos um "ouvinte de clique" para cada curso da lista
// Isso quer dizer: quando o usuário clicar em algum <li>, algo vai acontecer
cursos.forEach(curso => {

  // Adiciona o evento de clique
  curso.addEventListener('click', () => {

    // Pega o id do <li> que foi clicado
    // Exemplo: se o <li id="canto"> for clicado, id será "canto"
    const id = curso.id;

    // Usa o id para buscar o texto correspondente no objeto 'informacoes'
    const texto = informacoes[id];

    // Verifica se encontrou algum texto
    if (texto) {
      // Mostra o texto dentro da caixa
      // Altera o conteúdo da <div id="informacaoCurso"> para o texto desejado
      caixaInfo.textContent = texto;

      // Mostra a caixa (ela começa escondida com display: none)
      caixaInfo.style.display = 'block';
    } else {
      // Se o ID não estiver no objeto, não mostra nada
      caixaInfo.textContent = "";
      caixaInfo.style.display = 'none';
    }
  });

});
