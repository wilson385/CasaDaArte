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