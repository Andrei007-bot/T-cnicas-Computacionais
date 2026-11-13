
/* =====================================================
   O FUTURO DA IA
   Jogo interativo de escolhas
   ===================================================== */


/* =====================================================
   1. HISTÓRIA, PERGUNTAS E ALTERNATIVAS
   ===================================================== */

const perguntas = [

    // CAPÍTULO 01

    {
        capitulo: "CAPÍTULO 01",

        titulo: "O preço do progresso",

        simbolo: "01",

        contexto:
            "É 2042. A IA Íris passou a ajudar em pesquisas, transportes e serviços públicos. Para ficar mais eficiente, ela pede acesso a grandes conjuntos de dados da população. Parte do Conselho acredita que isso pode resolver problemas históricos; outra parte teme que a privacidade desapareça. Você representa a sociedade nessa decisão.",

        pergunta:
            "Como os dados das pessoas devem ser utilizados?",

        alternativas: [

            {
                titulo: "Transparência e consentimento",

                descricao:
                    "A Íris só poderá usar dados com autorização clara, explicando como cada informação será utilizada.",

                feedback:
                    "A população recebe mais controle sobre suas informações. O desenvolvimento pode ser um pouco mais lento, mas a confiança no projeto aumenta.",

                impacto: {
                    confianca: 2,
                    inclusao: 0,
                    autonomia: 0,
                    governanca: 1
                }
            },

            {
                titulo: "Progresso em primeiro lugar",

                descricao:
                    "Liberar uma grande quantidade de dados para acelerar o treinamento e ampliar rapidamente as capacidades da IA.",

                feedback:
                    "A Íris evolui rapidamente e encontra novas soluções. Porém, a falta de limites claros provoca preocupação sobre a privacidade e quem controla as informações.",

                impacto: {
                    confianca: -1,
                    inclusao: 1,
                    autonomia: 2,
                    governanca: -1
                }
            },

            {
                titulo: "Privacidade como regra",

                descricao:
                    "Proibir o uso de dados pessoais por padrão e exigir auditorias públicas antes de qualquer exceção.",

                feedback:
                    "O Conselho estabelece limites rigorosos e fortalece a proteção individual. A inovação continua, mas precisa seguir regras e avaliações mais cuidadosas.",

                impacto: {
                    confianca: 2,
                    inclusao: 0,
                    autonomia: -1,
                    governanca: 2
                }
            }

        ]
    },


    // CAPÍTULO 02

    {
        capitulo: "CAPÍTULO 02",

        titulo: "Quem terá acesso ao futuro?",

        simbolo: "02",

        contexto:
            "Meses depois, a Íris apresenta avanços na educação e na saúde. Ela pode ajudar professores a preparar aulas acessíveis e apoiar equipes médicas. Mas os recursos são limitados: algumas regiões têm internet rápida e equipamentos modernos, enquanto outras ainda não possuem o básico. O Conselho precisa decidir como distribuir os benefícios.",

        pergunta:
            "Qual deve ser a prioridade na distribuição dessas tecnologias?",

        alternativas: [

            {
                titulo: "Começar por quem ficou para trás",

                descricao:
                    "Levar infraestrutura, formação e ferramentas acessíveis às comunidades com menos recursos.",

                feedback:
                    "Regiões historicamente esquecidas começam a participar da transformação. Os resultados levam tempo, mas mais pessoas ganham oportunidades reais.",

                impacto: {
                    confianca: 1,
                    inclusao: 2,
                    autonomia: 0,
                    governanca: 1
                }
            },

            {
                titulo: "Acelerar onde já existe estrutura",

                descricao:
                    "Concentrar os recursos nas cidades mais preparadas para obter resultados rápidos e financiar a expansão futura.",

                feedback:
                    "Os primeiros resultados aparecem depressa nos grandes centros. Ainda assim, a diferença entre regiões pode aumentar se a expansão não acontecer como prometido.",

                impacto: {
                    confianca: 0,
                    inclusao: -1,
                    autonomia: 2,
                    governanca: 0
                }
            },

            {
                titulo: "Distribuição com critérios públicos",

                descricao:
                    "Criar um plano nacional com metas transparentes, fiscalização e participação das comunidades.",

                feedback:
                    "A distribuição passa a seguir critérios conhecidos pela população. O processo exige diálogo e fiscalização, mas torna mais difícil deixar grupos de fora.",

                impacto: {
                    confianca: 1,
                    inclusao: 2,
                    autonomia: -1,
                    governanca: 2
                }
            }

        ]
    },


    // CAPÍTULO 03

    {
        capitulo: "CAPÍTULO 03",

        titulo: "A decisão final",

        simbolo: "03",

        contexto:
            "A Íris agora participa de decisões complexas. Ela consegue analisar cenários em segundos, mas nenhuma tecnologia é livre de erros ou de vieses. Uma última proposta está sobre a mesa: definir quanto poder a IA terá e quem será responsável quando uma decisão afetar a vida das pessoas.",

        pergunta:
            "Quem deve ter a palavra final nas decisões que afetam a sociedade?",

        alternativas: [

            {
                titulo: "A IA decide com autonomia",

                descricao:
                    "Permitir que a Íris tome decisões rapidamente, com intervenção humana apenas em situações excepcionais.",

                feedback:
                    "As decisões ficam mais rápidas e a Íris ganha grande autonomia. Ao mesmo tempo, a sociedade terá menos oportunidades de questionar decisões importantes.",

                impacto: {
                    confianca: -1,
                    inclusao: 0,
                    autonomia: 2,
                    governanca: -2
                }
            },

            {
                titulo: "A IA recomenda, humanos decidem",

                descricao:
                    "Usar a análise da Íris como apoio, mantendo pessoas responsáveis pela decisão final.",

                feedback:
                    "A tecnologia contribui com velocidade e análise, mas a responsabilidade continua humana. A supervisão exige preparo e atenção constantes.",

                impacto: {
                    confianca: 1,
                    inclusao: 0,
                    autonomia: -1,
                    governanca: 2
                }
            },

            {
                titulo: "Um conselho com participação pública",

                descricao:
                    "Criar um conselho independente, com especialistas e representantes da sociedade, para revisar decisões e regras da IA.",

                feedback:
                    "A população ganha voz na fiscalização da Íris. As decisões podem levar mais tempo, mas diferentes perspectivas ajudam a identificar riscos e injustiças.",

                impacto: {
                    confianca: 1,
                    inclusao: 1,
                    autonomia: -1,
                    governanca: 1
                }
            }

        ]
    }

];


/* =====================================================
   2. FINAIS POSSÍVEIS
   ===================================================== */

const finais = {

    colaborativo: {

        titulo: "Um futuro construído em conjunto",

        texto:
            "A humanidade escolheu desenvolver a inteligência artificial com diálogo, responsabilidade e oportunidades mais amplas. A Íris se tornou uma parceira importante, mas seus rumos continuam sendo debatidos e acompanhados pelas pessoas. Não é um futuro sem desafios: é um futuro em que ninguém precisa abrir mão da própria voz para participar do progresso.",

        reflexao:
            "A tecnologia pode ampliar nossas possibilidades, mas é a sociedade que precisa decidir quais valores não podem ser deixados para trás."

    },


    acelerado: {

        titulo: "O futuro em velocidade máxima",

        texto:
            "A busca por inovação colocou a Íris no centro de muitas decisões. Descobertas importantes surgiram e vários processos ficaram mais rápidos. Porém, os mecanismos de controle não acompanharam o mesmo ritmo. Agora, a sociedade precisa encontrar formas de garantir que eficiência não signifique falta de responsabilidade.",

        reflexao:
            "Progresso não é medido apenas pela velocidade com que chegamos ao futuro, mas também por quem consegue chegar junto."

    },


    controlado: {

        titulo: "Um futuro sob vigilância constante",

        texto:
            "A sociedade criou regras fortes para limitar os riscos da Íris. A privacidade e a fiscalização ganharam prioridade, mas tantas barreiras também reduziram a capacidade de experimentar e inovar. O próximo desafio será encontrar um equilíbrio entre proteção e descoberta.",

        reflexao:
            "Proteger as pessoas é essencial. Também é importante garantir que o medo não impeça soluções que poderiam melhorar vidas."

    },


    incerto: {

        titulo: "Um futuro ainda em disputa",

        texto:
            "Suas escolhas produziram avanços e dúvidas. Algumas áreas receberam novas oportunidades, enquanto outras continuam tentando acompanhar as mudanças. A Íris segue presente, mas a sociedade ainda precisa definir melhor seus limites e responsabilidades. A história não terminou: as próximas decisões também estarão nas mãos das pessoas.",

        reflexao:
            "O futuro da inteligência artificial não depende de uma única decisão. Ele é construído, revisto e questionado todos os dias."

    }

};


/* =====================================================
   3. INICIALIZAÇÃO DO JOGO
   ===================================================== */

function iniciarAplicacao() {

    console.log("Carregando O Futuro da IA...");


    // ELEMENTOS DAS TELAS

    const introScreen = document.getElementById("intro-screen");

    const gameScreen = document.getElementById("game-screen");

    const endingScreen = document.getElementById("ending-screen");


    // BOTÕES

    const startButton = document.getElementById("start-button");

    const restartButton = document.getElementById("restart-button");

    const continueButton = document.getElementById("continue-button");


    // ELEMENTOS DO CAPÍTULO

    const chapterLabel = document.getElementById("chapter-label");

    const chapterTitle = document.getElementById("chapter-title");

    const decisionCount = document.getElementById("decision-count");

    const progressTrack = document.getElementById("progress-track");

    const progressFill = document.getElementById("progress-fill");

    const storySymbolText = document.getElementById("story-symbol-text");

    const storyText = document.getElementById("story-text");

    const questionTitle = document.getElementById("question-title");

    const choicesContainer = document.getElementById("choices-container");


    // CONSEQUÊNCIAS

    const feedbackPanel = document.getElementById("feedback-panel");

    const feedbackText = document.getElementById("feedback-text");


    // RESULTADO FINAL

    const endingTitle = document.getElementById("ending-title");

    const endingText = document.getElementById("ending-text");

    const endingReflection = document.getElementById("ending-reflection");

    const scoreList = document.getElementById("score-list");


    /* =====================================================
       4. VERIFICAÇÃO DOS ELEMENTOS HTML
       ===================================================== */

    const elementosObrigatorios = {

        "intro-screen": introScreen,

        "game-screen": gameScreen,

        "ending-screen": endingScreen,

        "start-button": startButton,

        "restart-button": restartButton,

        "continue-button": continueButton,

        "chapter-label": chapterLabel,

        "chapter-title": chapterTitle,

        "decision-count": decisionCount,

        "progress-track": progressTrack,

        "progress-fill": progressFill,

        "story-symbol-text": storySymbolText,

        "story-text": storyText,

        "question-title": questionTitle,

        "choices-container": choicesContainer,

        "feedback-panel": feedbackPanel,

        "feedback-text": feedbackText,

        "ending-title": endingTitle,

        "ending-text": endingText,

        "ending-reflection": endingReflection,

        "score-list": scoreList

    };


    const elementosAusentes = Object.entries(elementosObrigatorios)
        .filter(([nome, elemento]) => !elemento)
        .map(([nome]) => nome);


    if (elementosAusentes.length > 0) {

        console.error(
            "Erro: os seguintes elementos não foram encontrados no HTML:",
            elementosAusentes
        );

        return;

    }


    if (!Array.isArray(perguntas) || perguntas.length === 0) {

        console.error("Erro: a história não foi carregada corretamente.");

        return;

    }


    console.log("Elementos HTML encontrados com sucesso!");


    /* =====================================================
       5. VARIÁVEIS DO JOGO
       ===================================================== */

    let etapaAtual = 0;

    let respostaSelecionada = false;


    function criarIndicadores() {

        return {

            confianca: 0,

            inclusao: 0,

            autonomia: 0,

            governanca: 0

        };

    }


    let indicadores = criarIndicadores();


    const nomesIndicadores = {

        confianca: "Confiança pública",

        inclusao: "Inclusão",

        autonomia: "Autonomia da IA",

        governanca: "Supervisão e regras"

    };


    /* =====================================================
       6. CONTROLE DAS TELAS
       ===================================================== */

    function mostrarTela(telaAtiva) {

        introScreen.hidden = telaAtiva !== introScreen;

        gameScreen.hidden = telaAtiva !== gameScreen;

        endingScreen.hidden = telaAtiva !== endingScreen;

    }


    /* =====================================================
       7. INICIAR OU REINICIAR
       ===================================================== */

    function iniciarJogo() {

        console.log("Iniciando a história...");


        etapaAtual = 0;

        indicadores = criarIndicadores();

        respostaSelecionada = false;


        mostrarTela(gameScreen);

        mostrarEtapa();


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }


    /* =====================================================
       8. MOSTRAR O CAPÍTULO ATUAL
       ===================================================== */

    function mostrarEtapa() {

        const etapa = perguntas[etapaAtual];


        if (!etapa) {

            mostrarFinal();

            return;

        }


        // TÍTULOS

        chapterLabel.textContent = etapa.capitulo;

        chapterTitle.textContent = etapa.titulo;

        storySymbolText.textContent = etapa.simbolo;

        storyText.textContent = etapa.contexto;

        questionTitle.textContent = etapa.pergunta;


        // NÚMERO DA DECISÃO

        decisionCount.replaceChildren();


        decisionCount.appendChild(

            document.createTextNode(

                `DECISÃO 0${etapaAtual + 1} `

            )

        );


        const total = document.createElement("span");

        total.textContent = `/ 0${perguntas.length}`;

        decisionCount.appendChild(total);


        // PROGRESSO

        const progresso =

            (etapaAtual / perguntas.length) * 100;


        progressFill.style.width = `${progresso}%`;


        progressTrack.setAttribute(

            "aria-valuenow",

            String(etapaAtual)

        );


        // ESCONDER CONSEQUÊNCIA ANTERIOR

        feedbackPanel.hidden = true;

        respostaSelecionada = false;


        // TEXTO DO BOTÃO CONTINUAR

        const ultimoCapitulo =

            etapaAtual === perguntas.length - 1;


        continueButton.replaceChildren();


        continueButton.appendChild(

            document.createTextNode(

                ultimoCapitulo

                    ? "Ver meu resultado "

                    : "Continuar "

            )

        );


        const seta = document.createElement("span");

        seta.textContent = "→";

        seta.setAttribute("aria-hidden", "true");

        continueButton.appendChild(seta);


        // CARREGAR ALTERNATIVAS

        renderizarAlternativas(etapa.alternativas);

    }


    /* =====================================================
       9. CRIAR AS ALTERNATIVAS
       ===================================================== */

    function renderizarAlternativas(alternativas) {

        choicesContainer.replaceChildren();


        alternativas.forEach((alternativa, indice) => {


            // BOTÃO

            const botao = document.createElement("button");

            botao.type = "button";

            botao.className = "choice-card";

            botao.setAttribute("aria-pressed", "false");


            // LETRA

            const letra = document.createElement("span");

            letra.className = "choice-letter";

            letra.textContent = String.fromCharCode(65 + indice);


            // CONTEÚDO

            const conteudo = document.createElement("span");

            conteudo.className = "choice-copy";


            // TÍTULO

            const titulo = document.createElement("strong");

            titulo.className = "choice-title";

            titulo.textContent = alternativa.titulo;


            // DESCRIÇÃO

            const descricao = document.createElement("span");

            descricao.className = "choice-description";

            descricao.textContent = alternativa.descricao;


            // SETA

            const seta = document.createElement("span");

            seta.className = "choice-arrow";

            seta.textContent = "↗";

            seta.setAttribute("aria-hidden", "true");


            // ORGANIZAR ELEMENTOS

            conteudo.append(titulo, descricao);

            botao.append(letra, conteudo, seta);


            // EVENTO DE CLIQUE

            botao.addEventListener("click", function () {

                selecionarAlternativa(indice, botao);

            });


            // ADICIONAR AO HTML

            choicesContainer.appendChild(botao);

        });


        console.log("Alternativas carregadas!");

    }


    /* =====================================================
       10. PROCESSAR A ESCOLHA
       ===================================================== */

    function selecionarAlternativa(indice, botaoSelecionado) {

        // IMPEDIR MAIS DE UMA ESCOLHA

        if (respostaSelecionada) {

            return;

        }


        const etapa = perguntas[etapaAtual];

        const alternativa = etapa.alternativas[indice];


        if (!alternativa || !alternativa.impacto) {

            console.error("Erro ao carregar a alternativa.");

            return;

        }


        respostaSelecionada = true;


        // SOMAR OS PONTOS DOS INDICADORES

        Object.entries(alternativa.impacto).forEach(

            ([indicador, valor]) => {


                if (

                    Object.prototype.hasOwnProperty.call(

                        indicadores,

                        indicador

                    ) && Number.isFinite(valor)

                ) {

                    indicadores[indicador] += valor;

                }

            }

        );


        // BLOQUEAR OS OUTROS BOTÕES

        const todosBotoes =

            choicesContainer.querySelectorAll(".choice-card");


        todosBotoes.forEach((botao) => {

            botao.disabled = true;


            const selecionado = botao === botaoSelecionado;


            botao.classList.toggle(

                "is-selected",

                selecionado

            );


            botao.classList.toggle(

                "is-muted",

                !selecionado

            );


            botao.setAttribute(

                "aria-pressed",

                String(selecionado)

            );

        });


        // MOSTRAR CONSEQUÊNCIA

        feedbackText.textContent = alternativa.feedback;

        feedbackPanel.hidden = false;


        console.log("Escolha registrada!");

        console.log("Indicadores atuais:", indicadores);


        feedbackPanel.scrollIntoView({

            behavior: "smooth",

            block: "nearest"

        });

    }


    /* =====================================================
       11. DETERMINAR O FINAL
       ===================================================== */

    function determinarFinal() {

        const confianca = indicadores.confianca;

        const inclusao = indicadores.inclusao;

        const autonomia = indicadores.autonomia;

        const governanca = indicadores.governanca;


        // FINAL: FUTURO ACELERADO

        if (

            autonomia >= 3 &&

            governanca <= 0

        ) {

            return finais.acelerado;

        }


        // FINAL: FUTURO CONTROLADO

        if (

            governanca >= 5 &&

            autonomia <= -2

        ) {

            return finais.controlado;

        }


        // FINAL: FUTURO COLABORATIVO

        if (

            confianca >= 3 &&

            inclusao >= 2 &&

            governanca >= 3

        ) {

            return finais.colaborativo;

        }


        // FINAL: FUTURO INCERTO

        return finais.incerto;

    }


    /* =====================================================
       12. MOSTRAR INDICADORES FINAIS
       ===================================================== */

    function renderizarIndicadores() {

        scoreList.replaceChildren();


        Object.entries(indicadores).forEach(

            ([chave, valor]) => {


                // LINHA

                const linha = document.createElement("div");

                linha.className = "score-row";


                // PARTE SUPERIOR

                const topo = document.createElement("div");

                topo.className = "score-topline";


                // NOME

                const nome = document.createElement("span");

                nome.textContent = nomesIndicadores[chave];


                // PONTUAÇÃO

                const pontuacao = document.createElement("strong");

                pontuacao.textContent =

                    valor > 0

                        ? `+${valor}`

                        : String(valor);


                // BARRA DE PROGRESSO

                const trilho = document.createElement("div");

                trilho.className = "score-track";


                const barra = document.createElement("div");

                barra.className = "score-fill";


                // CALCULAR LARGURA ENTRE 0 E 100%

                const largura = Math.max(

                    0,

                    Math.min(

                        100,

                        ((valor + 3) / 9) * 100

                    )

                );


                barra.style.width = `${largura}%`;


                // ORGANIZAR

                topo.append(nome, pontuacao);

                trilho.appendChild(barra);

                linha.append(topo, trilho);

                scoreList.appendChild(linha);

            }

        );

    }


    /* =====================================================
       13. MOSTRAR RESULTADO FINAL
       ===================================================== */

    function mostrarFinal() {

        const resultado = determinarFinal();


        // TÍTULO E TEXTO

        endingTitle.textContent = resultado.titulo;

        endingText.textContent = resultado.texto;

        endingReflection.textContent = resultado.reflexao;


        // INDICADORES

        renderizarIndicadores();


        // CONCLUIR PROGRESSO

        progressFill.style.width = "100%";


        progressTrack.setAttribute(

            "aria-valuenow",

            String(perguntas.length)

        );


        // MOSTRAR TELA FINAL

        mostrarTela(endingScreen);


        console.log("Jogo concluído!");

        console.log("Resultado:", resultado.titulo);

        console.log("Pontuação final:", indicadores);


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }


    /* =====================================================
       14. IR PARA O PRÓXIMO CAPÍTULO
       ===================================================== */

    function continuar() {

        // NÃO AVANÇAR SEM ESCOLHER

        if (!respostaSelecionada) {

            return;

        }


        etapaAtual++;


        // VERIFICAR SE CHEGOU AO FINAL

        if (etapaAtual >= perguntas.length) {

            mostrarFinal();

        } else {

            mostrarEtapa();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

    }


    /* =====================================================
       15. CONFIGURAR OS EVENTOS DOS BOTÕES
       ===================================================== */

    startButton.addEventListener("click", iniciarJogo);

    restartButton.addEventListener("click", iniciarJogo);

    continueButton.addEventListener("click", continuar);


    console.log("Todos os botões foram configurados!");

    console.log("Jogo pronto para começar!");

}


/* =====================================================
   16. CARREGAR O JOGO DEPOIS DO HTML
   ===================================================== */

// Este trecho garante que o HTML esteja carregado
// antes de procurar os botões e outros elementos.

if (document.readyState === "loading") {

    document.addEventListener(

        "DOMContentLoaded",

        iniciarAplicacao,

        { once: true }

    );

} else {

    iniciarAplicacao();

}
