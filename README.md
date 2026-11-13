 O Futuro da IA

Jogo narrativo interativo em que você decide o futuro da inteligência artificial no ano de 2039, ao comandar o PROJETO ORÁCULO — o primeiro sistema de IA geral do mundo. Ao longo de 3 etapas, suas escolhas traçam um entre 5 finais possíveis.

## Estrutura de arquivos

- **index.html** — página única com as 4 telas (início, jogo, reação e final). Carrega `perguntas.js` e depois `script.js`.
- **perguntas.js** — dados do jogo: as 3 etapas (cena, pergunta, opções com consequências) e os 5 finais. Arquivo "clássico" (sem module/import), para abrir direto pelo navegador.
- **script.js** — toda a lógica do jogo (renderização, escolhas, cálculo do final, transições). Roda após o carregamento do DOM.
- **style.css** — visual futurista e escuro, responsivo, com respeito a `prefers-reduced-motion`.
- **README.md** — este arquivo.

## Como rodar

Não precisa de instalação nem de servidor. Basta abrir o arquivo `index.html` diretamente no navegador (duplo clique, ou `File > Abrir arquivo`). Funciona 100% offline.

## Adicionando novas etapas ou finais

1. Em `perguntas.js`, adicione um novo objeto ao array `ETAPAS` seguindo o mesmo formato (id, titulo, cena, pergunta, opcoes com texto/detalhe/reacao/controle/autonomia).
2. Crie um novo final no objeto/array `FINAIS` (id, titulo, selo, texto, cor).
3. Atualize a função `calcularFinal()` em `script.js` para mapear a nova combinação de pontuação ao novo final.
4. Pronto! As alterações já aparecem ao recarregar a página.

## Tecnologias

HTML5, CSS3 e JavaScript puros — sem frameworks, sem bibliotecas, sem dependências externas.
