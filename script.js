function frasesAleatorias () {
    let mensagem = document.getElementById("mensagem")
    const frases = [ "✨ Você é mais forte do que imagina.",
        "💥 Não desista agora, o seu melhor ainda está por vir!",
        "🌱 Cada dia é uma nova chance para recomeçar.",
        "🔥 Sua luz é única. Nunca deixe de brilhar!",
        "🌈 Depois da tempestade vem o arco-íris. Aguente firme!",
        "✨ Sua energia transforma o mundo ao seu redor.",
        "👏 Já parou pra pensar em tudo que superou até hoje? Incrível!",
        "🧘 Respire. Às vezes, tudo o que você precisa é de um respiro de fé.",
        "🌄 O recomeço começa agora — e você já deu o primeiro passo.",
        "🌟 Há algo incrível sendo preparado… só continue.",
        "🌺 Você tem algo especial que o mundo precisa — não esconda isso.",
        "✉️ Aviso do universo: “você vai vencer”.",
        "🕯️ Quando tudo parecer escuro, lembre-se: você é a luz."
    ]

    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    mensagem.textContent = frases[indiceAleatorio];
}
     let divInformacoes = document.querySelector(".inforCursosC")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    h2.className = "tituloCurso"
     p.className = "sobreCurso"

function audiovisual () {
    //   // Limpa o conteúdo anterior antes de adicionar novos elementos
    // divInformacoes.innerHTML = ""
   h2.textContent = "🎬 Audiovisual"
//    crases para escrever texto com muitiplas linhas
   p.textContent = "Aprenda a criar vídeos como um profissional! Explore técnicas de filmagem, edição, roteirização e produção para redes sociais, curtas, clipes e muito mais."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
    
}

function bateria () {
    h2.textContent = "🥁 Bateria"
    p.textContent = "Desperte o ritmo que há em você! Aprenda batidas, viradas e a coordenação essencial para dominar a bateria — do básico ao avançado."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function cavaquinho () {
    h2.textContent = "🎶 Cavaquinho"
    p.textContent = "Descubra a alma do samba e do chorinho! Aprenda acordes, batidas e solos no cavaquinho de forma prática e divertida."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function contrabaixo() {
    h2.textContent = "🎸 Contra Baixo"
    p.textContent = "A base de toda banda está em suas mãos! Aprenda a tocar contrabaixo com técnica, ritmo e groove — do rock ao jazz."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function canto() {
    h2.textContent = "🎤 Canto"
    p.textContent = "Use sua voz com confiança e técnica! Desenvolva afinação, respiração, projeção e interpretação vocal em aulas personalizadas."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function desenho() {
    h2.textContent = "✏️ Desenho"
    p.textContent = "Transforme traços em arte! Aprenda técnicas de sombreamento, proporção e perspectiva para desenhar rostos, objetos, cenários e muito mais."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function guitarra() {
    h2.textContent = "🎸 Guitarra"
    p.textContent = "Aprenda a dominar solos e riffs! Explore acordes, escalas e improvisos com aulas práticas em vários estilos musicais."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function musicaIfantil() {
    h2.textContent = "👧 Musicalização Infantil"
    p.textContent = "Uma jornada divertida e educativa pela música! Estimule a criatividade, coordenação e sensibilidade das crianças com jogos, instrumentos e atividades musicais."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function pandeiro() {
    h2.textContent = "🪘 Pandeiro"
    p.textContent = "O ritmo brasileiro na palma da mão! Aprenda técnicas de mão, levadas e batidas típicas do samba, choro, forró e muito mais."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function piano() {
    h2.textContent = "🎹 Piano"
    p.textContent = "Toque suas músicas favoritas com emoção e precisão! Aulas práticas de piano para iniciantes e intermediários com leitura musical e harmonia."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function pintura() {
    h2.textContent = "🖌️ Pintura em Tela"
    p.textContent = "Expresse suas emoções com cores e pincéis! Aprenda técnicas de pintura a óleo, acrílica, composição e teoria das cores em aulas práticas."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function teclado() {
    h2.textContent = "🎼 Teclado"
    p.textContent = "Toque com facilidade e criatividade! Aprenda acordes, melodias e acompanhamento no teclado, com foco em música popular e repertório variado."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function ukulele() {
    h2.textContent = "🌺 Ukulele"
    p.textContent = "Um instrumento pequeno, mas cheio de alegria! Aprenda acordes e músicas famosas com facilidade no ukulele, ideal para todas as idades."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function violao() {
    h2.textContent = "🎶 Violão"
    p.textContent = "Do primeiro acorde à sua primeira música! Curso completo de violão popular com cifras, batidas e ritmos brasileiros e internacionais."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function violino() {
    h2.textContent = "🎻 Violino"
    p.textContent = "Domine um dos instrumentos mais elegantes da música! Aprenda postura, afinação, arco e leitura musical para tocar peças clássicas e modernas."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function teatro() {
    h2.textContent = "🎭 Teatro"
    p.textContent = "Solte a voz, o corpo e a criatividade no palco! Aulas práticas de interpretação, expressão corporal, improviso e construção de personagens."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}

function idiomas() {
    h2.textContent = "📚 Inglês e Espanhol"
    p.textContent = "Amplie seus horizontes com novos idiomas! Aprenda inglês e espanhol com foco em conversação, gramática e situações do dia a dia."
    divInformacoes.appendChild(h2)
    divInformacoes.appendChild(p)
   
}





