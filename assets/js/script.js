const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');


const botResponses = {
    "coração": "O coração é um órgão muscular responsável por bombear o sangue através do sistema circulatório.",
    "osso": "Os principais ossos incluem o crânio, a coluna vertebral, as costelas e os ossos dos membros.",
    "fêmur": "O fêmur é o osso mais longo do corpo humano e está localizado na coxa.",
    "pulmão": "Os pulmões são os principais órgãos do sistema respiratório, responsáveis pela troca gasosa entre o ar e o sangue.",
    "estômago": "O estômago é um órgão digestivo que ajuda a quebrar os alimentos com o ácido gástrico.",
    "cérebro": "O cérebro é o órgão que controla a maioria das funções do corpo, incluindo o pensamento, a memória e o movimento.",
    "rins": "Os rins filtram o sangue, removendo resíduos e excesso de líquidos para formar a urina.",
    "intestino": "O intestino é responsável pela absorção de nutrientes e pela formação das fezes.",
    "pele": "A pele é o maior órgão do corpo humano, protegendo contra microrganismos e ajudando a regular a temperatura.",
    "fígado": "O fígado desempenha várias funções essenciais, como a produção de bile e a desintoxicação do sangue.",
    "pâncreas": "O pâncreas produz insulina, que regula os níveis de açúcar no sangue, além de outras enzimas digestivas.",
    "costela": "As costelas protegem os órgãos do tórax, como o coração e os pulmões.",
    "crânio": "O crânio é o conjunto de ossos que protege o cérebro.",
    "músculos": "Os músculos são tecidos que permitem o movimento do corpo ao se contraírem e relaxarem.",
    "artéria": "As artérias são vasos sanguíneos que transportam sangue rico em oxigênio do coração para o resto do corpo.",
    "veia": "As veias são vasos sanguíneos que transportam o sangue de volta ao coração.",
    "neurônio": "Os neurônios são células do sistema nervoso responsáveis pela transmissão de impulsos nervosos.",
    "sangue": "O sangue é um líquido vital que transporta oxigênio, nutrientes e resíduos pelo corpo.",
    "esôfago": "O esôfago é o tubo que transporta alimentos da boca ao estômago.",
    "baço": "O baço é responsável por filtrar o sangue e armazenar glóbulos vermelhos.",
    "útero": "O útero é o órgão reprodutor feminino onde o embrião se desenvolve durante a gestação.",
    "ovários": "Os ovários produzem óvulos e hormônios como estrogênio e progesterona.",
    "testículos": "Os testículos produzem espermatozoides e hormônios sexuais, como a testosterona.",
    "maior osso": "O fêmur é o maior osso do corpo humano.",
    "menor osso": "O estribo, localizado no ouvido médio, é o menor osso do corpo humano.",
    "maior órgão": "A pele é o maior órgão do corpo humano.",
    "menor órgão": "A glândula pineal é considerada um dos menores órgãos do corpo humano.",
    "função do coração": "O coração bombeia o sangue, levando oxigênio e nutrientes a todas as partes do corpo.",
    "função dos pulmões": "Os pulmões são responsáveis por realizar a troca de gases, absorvendo oxigênio e eliminando dióxido de carbono.",
    "função do fígado": "O fígado desintoxica substâncias nocivas, produz bile e armazena glicose.",
    "função dos rins": "Os rins filtram resíduos do sangue e regulam o equilíbrio de água e sais minerais no corpo.",
    "função do estômago": "O estômago secreta ácidos e enzimas para digerir os alimentos e prepara-os para a absorção no intestino.",
    "função do intestino delgado": "O intestino delgado é responsável pela maior parte da absorção de nutrientes dos alimentos.",
    "função do intestino grosso": "O intestino grosso absorve água e forma as fezes a partir dos resíduos da digestão.",
    "menor músculo": "O músculo estapédio, no ouvido médio, é o menor músculo do corpo humano.",
    "maior músculo": "O glúteo máximo é o maior músculo do corpo humano.",
    "glândulas salivares": "As glândulas salivares produzem saliva, que ajuda na digestão dos alimentos.",
    "função da medula espinhal": "A medula espinhal transmite impulsos nervosos entre o cérebro e o resto do corpo.",
    "função do crânio": "O crânio protege o cérebro de lesões.",
    "função dos leucócitos": "Os leucócitos, ou glóbulos brancos, são responsáveis pela defesa do corpo contra infecções.",
    "função das plaquetas": "As plaquetas ajudam na coagulação do sangue, impedindo hemorragias.",
    "função dos eritrócitos": "Os eritrócitos, ou glóbulos vermelhos, transportam oxigênio dos pulmões para o resto do corpo.",
    "função das válvulas cardíacas": "As válvulas cardíacas garantem que o sangue flua em uma única direção através do coração.",
    "função do pâncreas": "O pâncreas secreta insulina e outras enzimas digestivas.",
    "função do baço": "O baço remove células sanguíneas velhas e participa da resposta imune.",
    "função dos ovários": "Os ovários produzem óvulos e hormônios sexuais femininos.",
    "função dos testículos": "Os testículos produzem esperma e testosterona.",
    "função da hipófise": "A hipófise controla várias glândulas no corpo e regula funções vitais, como o crescimento e o metabolismo.",
    "função da tireoide": "A tireoide regula o metabolismo do corpo através da liberação de hormônios.",
    "função do apêndice": "O apêndice não tem uma função vital conhecida, mas pode estar envolvido no sistema imunológico.",
    "função do sistema digestivo": "O sistema digestivo é responsável pela digestão, absorção de nutrientes e eliminação de resíduos.",
    "função do sistema respiratório": "O sistema respiratório permite a troca de oxigênio e dióxido de carbono entre o corpo e o ambiente.",
    "função do sistema circulatório": "O sistema circulatório transporta sangue, oxigênio e nutrientes pelo corpo.",
    "função do sistema nervoso": "O sistema nervoso coordena as ações do corpo e processa informações sensoriais.",
    "função do sistema endócrino": "O sistema endócrino regula funções corporais através da secreção de hormônios.",
    "função do sistema linfático": "O sistema linfático remove resíduos do fluido corporal e auxilia o sistema imunológico.",
    "função do sistema excretor": "O sistema excretor remove resíduos e mantém o equilíbrio de água e sais no corpo.",
    "função do sistema esquelético": "O sistema esquelético suporta o corpo e protege os órgãos internos.",
    "função do sistema muscular": "O sistema muscular permite o movimento e ajuda a manter a postura.",
    "função da epiderme": "A epiderme protege o corpo contra agentes externos e desidratação.",
    "função da derme": "A derme fornece elasticidade à pele e abriga vasos sanguíneos e terminações nervosas.",
    "função dos bronquíolos": "Os bronquíolos conduzem o ar entre os brônquios e os alvéolos nos pulmões.",
    "função dos alvéolos": "Os alvéolos realizam a troca de oxigênio e dióxido de carbono com o sangue.",
    "função das cordas vocais": "As cordas vocais permitem a produção de som durante a fala.",
    "oi": "Oi! Que bom ver você por aqui! Como posso ajudar?",
    "olá": "Olá! Espero que esteja tendo um bom dia. O que você precisa?",
    "beleza": "Tudo tranquilo por aqui! E com você? Como posso ajudar?",
    "blz": "Beleza! Estou aqui para ajudar. O que você gostaria de saber?",
    "bom dia": "Bom dia! Como posso iluminar seu dia hoje?",
    "boa tarde": "Boa tarde! Como posso tornar sua tarde mais interessante?",
    "boa noite": "Boa noite! Estou aqui se precisar de algo antes de dormir.",
    "função do diafragma": "O diafragma é o principal músculo envolvido na respiração, ajudando na inspiração e expiração.",
    "função do sistema reprodutor": "O sistema reprodutor é responsável pela produção de gametas e pela reprodução.",
    "função do sistema imunológico": "O sistema imunológico protege o corpo contra infecções e doenças.",
    "função do sistema tegumentar": "O sistema tegumentar é responsável pela proteção do corpo e pela regulação da temperatura.",
    "tchau": "Tchau! Espero ter ajudado. Volte sempre!",
    "até logo": "Até logo! Tenha um ótimo dia!",
    "até mais": "Até mais! Fico à disposição!",
    "adeus": "Adeus! Cuide-se e até a próxima!",
    "valeu": "Valeu! Se precisar de algo, é só chamar!",
    "saudações": "Saudações! Como posso ajudar você hoje?",
    "e aí": "Oi! O que posso fazer por você?",
    "como vai": "Estou aqui para ajudar! O que você precisa?"
};

function getBotResponse(userText) {
    
    const cleanedText = userText.toLowerCase().trim();

    
    const foundKeywords = Object.keys(botResponses).filter(keyword => cleanedText.includes(keyword));

    
    if (foundKeywords.length > 0) {
       
        return botResponses[foundKeywords[foundKeywords.length - 1]];
    } else {
        return "Desculpe, não entendi. Você pode perguntar sobre o coração, pulmões, fígado, etc.";
    }
}

sendBtn.addEventListener('click', () => {
    const userText = userInput.value;
    if (userText) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user'); 
        userMessage.textContent = `Você: ${userText}`;
        chatBox.appendChild(userMessage);
        userInput.value = '';

        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot'); 
        botMessage.textContent = `Bot: ${getBotResponse(userText)}`;
        chatBox.appendChild(botMessage);

        
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});