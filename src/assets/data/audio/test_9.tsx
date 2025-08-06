// const correctAnswers = [
//     "B", "A", "A", "A", "D", "C", "A", "C", "B", "C", "B", "A", "A", "D", "C", "C", "D", "B", "D", "A", "D", "D", "D", "B", "A", "A", "A", "A", "C", "B", "A", "B", "D", "D", "D", "D", "C", "A", "C"
// ];

// const audioSources = [
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q1.mp3?_=1",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q2.mp3?_=2",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q3.mp3?_=3",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q4.mp3?_=4",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q5.mp3?_=5",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q6.mp3?_=6",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q7.mp3?_=7",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q8.mp3?_=8",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q9.mp3?_=9",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q10.mp3?_=10",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q11.mp3?_=11",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q12.mp3?_=12",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q13.mp3?_=13",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q14.mp3?_=14",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q15.mp3?_=15",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q16.mp3?_=16",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q17.mp3?_=17",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q18.mp3?_=18",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q19.mp3?_=19",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q20.mp3?_=20",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q21.mp3?_=21",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q22.mp3?_=22",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q23.mp3?_=23",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q24.mp3?_=24",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q25.mp3?_=25",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q26.mp3?_=26",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q27.mp3?_=27",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q28.mp3?_=28",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q29.mp3?_=29",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q30.mp3?_=30",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q31.mp3?_=31",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q32.mp3?_=32",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q33.mp3?_=33",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q34.mp3?_=34",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q35.mp3?_=35",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q36.mp3?_=36",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q37.mp3?_=37",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q38.mp3?_=38",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q39.mp3?_=39"
// ]

export const metaData = {
    title: "Test 9",
    testType: "audio",
    description: "Test 9 audio questions for TCF Canada",
    totalQuestions: 39,
    totalPoints: 699,
    duration: 35,
};

const questionsData = [
    {
        id: 1,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q1.mp3?_=1",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: true },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3
    },
    {
        id: 2,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q2.mp3?_=2",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3
    },
    {
        id: 3,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q3.mp3?_=3",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3
    },
    {
        id: 4,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q4.mp3?_=4",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3
    },
    {
        id: 5,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q5.mp3?_=5",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: true }
        ],
        points: 9
    },
    {
        id: 6,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q6.mp3?_=6",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: true },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9
    },
    {
        id: 7,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q7.mp3?_=7",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9
    },
    {
        id: 8,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q8.mp3?_=8",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: true },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9
    },
    {
        id: 9,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q9.mp3?_=9",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: true },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9
    },
    {
        id: 10,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q10.mp3?_=10",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: true },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9
    },
    {
        id: 11,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q11.mp3?_=11",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle doit laisser un message.", isCorrect: false },
            { label: "B", text: "Elle doit rappeler plus tard.", isCorrect: true },
            { label: "C", text: "Elle doit renvoyer son CV.", isCorrect: false },
            { label: "D", text: "Elle doit revenir à 14h.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 12,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q12.mp3?_=12",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "S’entretenir avec un enseignant.", isCorrect: true },
            { label: "B", text: "Assister à un colloque.", isCorrect: false },
            { label: "C", text: "S’inscrire à l’université.", isCorrect: false },
            { label: "D", text: "Suivre un stage.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 13,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q13.mp3?_=13",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle passe ses congés dans la région.", isCorrect: true },
            { label: "B", text: "Elle réside là depuis son enfance.", isCorrect: false },
            { label: "C", text: "Elle travaille dans le tourisme local.", isCorrect: false },
            { label: "D", text: "Elle vient participer à un concours.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 14,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q14.mp3?_=14",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Une chambre d’hôtel.", isCorrect: false },
            { label: "B", text: "Une maison individuelle.", isCorrect: false },
            { label: "C", text: "Un grand appartement.", isCorrect: false },
            { label: "D", text: "Un studio en ville.", isCorrect: true }
        ],
        points: 15
    },
    {
        id: 15,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q15.mp3?_=15",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle aime être en altitude.", isCorrect: false },
            { label: "B", text: "Elle désire accompagner un ami.", isCorrect: false },
            { label: "C", text: "Elle fait confiance à son guide.", isCorrect: true },
            { label: "D", text: "Elle veut prendre des risques.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 16,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q16.mp3?_=16",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Un employé d’agence de voyages.", isCorrect: false },
            { label: "B", text: "Un patron de restaurant.", isCorrect: false },
            { label: "C", text: "Un propriétaire d’appartement.", isCorrect: true },
            { label: "D", text: "Un réceptionniste d’hôtel.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 17,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q17.mp3?_=17",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Devoir annuler son voyage.", isCorrect: false },
            { label: "B", text: "Devoir visiter les musées.", isCorrect: false },
            { label: "C", text: "Devoir écourter leur séjour.", isCorrect: false },
            { label: "D", text: "Devoir partir en voiture.", isCorrect: true }
        ],
        points: 15
    },
    {
        id: 18,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q18.mp3?_=18",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Parce qu’elle trouve ça trop bruyant.", isCorrect: false },
            { label: "B", text: "Parce que c’est inadapté à ses besoins.", isCorrect: true },
            { label: "C", text: "Parce que ça consomme trop d’eau.", isCorrect: false },
            { label: "D", text: "Parce que ses enfants font la vaisselle.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 19,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q19.mp3?_=19",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elles ont assisté à un concert.", isCorrect: false },
            { label: "B", text: "Elles ont lu le même livre.", isCorrect: false },
            { label: "C", text: "Elles ont rencontré une célébrité.", isCorrect: false },
            { label: "D", text: "Elles ont vu un film au cinéma.", isCorrect: true }
        ],
        points: 15
    },
    {
        id: 20,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q20.mp3?_=20",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il est possible qu’il soit renvoyé.", isCorrect: true },
            { label: "B", text: "Il est renvoyé définitivement.", isCorrect: false },
            { label: "C", text: "Il va commencer sa période d’essai.", isCorrect: false },
            { label: "D", text: "Il va être embauché définitivement.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 21,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q21.mp3?_=21",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle organise des fêtes au village.", isCorrect: false },
            { label: "B", text: "Elle travaille chez un fleuriste.", isCorrect: false },
            { label: "C", text: "Elle se marie le lendemain.", isCorrect: false },
            { label: "D", text: "Elle travaille dans un restaurant.", isCorrect: true }
        ],
        points: 21
    },
    {
        id: 22,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q22.mp3?_=22",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle déteste les bains de mer.", isCorrect: false },
            { label: "B", text: "Elle développe des allergies cutanées.", isCorrect: false },
            { label: "C", text: "Elle est angoissée par le risque de se noyer.", isCorrect: false },
            { label: "D", text: "Elle est terrorisée par les animaux aquatiques.", isCorrect: true }
        ],
        points: 21
    },
    {
        id: 23,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q23.mp3?_=23",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Pour comprendre la société.", isCorrect: false },
            { label: "B", text: "Pour enrichir sa culture.", isCorrect: false },
            { label: "C", text: "Pour passer le temps.", isCorrect: false },
            { label: "D", text: "Pour plonger dans l’imaginaire.", isCorrect: true }
        ],
        points: 21
    },
    {
        id: 24,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q24.mp3?_=24",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle a été habituée très tôt par ses parents écoutés des œuvres pour violoncelle.", isCorrect: false },
            { label: "B", text: "Elle a été impressionnée par le son des cordes qu’on peut faire vibrer longtemps.", isCorrect: true },
            { label: "C", text: "Elle a privilégié un instrument qu’elle pouvait transporter plus facilement qu’un piano.", isCorrect: false },
            { label: "D", text: "Elle a rencontré des amis musiciens de ses parents qui l’ont convaincue.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 25,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q25.mp3?_=25",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Parce que la consommation dépend avant tout du pouvoir d’achat.", isCorrect: true },
            { label: "B", text: "Parce que la création d’emploi restera rare dans ce secteur d’activité.", isCorrect: false },
            { label: "C", text: "Parce que les commerces font des bénéfices sur les ventes en semaine.", isCorrect: false },
            { label: "D", text: "Parce que les Français ne sont pas habitués à consommer le dimanche.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 26,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q26.mp3?_=26",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Avoir la liberté d’être son propre patron.", isCorrect: true },
            { label: "B", text: "Innover dans le domaine informatique.", isCorrect: false },
            { label: "C", text: "Mener un projet aux États-Unis.", isCorrect: false },
            { label: "D", text: "Mieux réussir que ses parents.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 27,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q27.mp3?_=27",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il diminue les efforts de ceux qui le suivent.", isCorrect: true },
            { label: "B", text: "Il est le seul à connaître la direction à prendre.", isCorrect: false },
            { label: "C", text: "Il guide ses congénères en cas de tempête.", isCorrect: false },
            { label: "D", text: "Il protège les plus faibles durant la migration.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 28,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q28.mp3?_=28",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elles ont la notion du temps chronologique.", isCorrect: true },
            { label: "B", text: "Elles redoutent de s’approcher des humains.", isCorrect: false },
            { label: "C", text: "Elles sont attirées par la lumière du soleil.", isCorrect: false },
            { label: "D", text: "Elles sont un cas à part chez les animaux.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 29,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q29.mp3?_=29",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Annoncer la diffusion exceptionnelle, en direct, d’un festival de musique.", isCorrect: false },
            { label: "B", text: "Dire pourquoi des journalistes et des techniciens ont cessé le travail.", isCorrect: false },
            { label: "C", text: "Expliquer pourquoi on attend de la musique au lieu des programmes habituels.", isCorrect: true },
            { label: "D", text: "Rappeler les changements de programme dus à la nouvelle grille horaire.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 30,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q30.mp3?_=30",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Un groupe de centres d’appels téléphoniques.", isCorrect: false },
            { label: "B", text: "Un service de livraison express du courrier.", isCorrect: true },
            { label: "C", text: "Un spécialiste de la création de sites internet.", isCorrect: false },
            { label: "D", text: "Un fournisseur pour la restauration à domicile.", isCorrect: false }
        ],
        points: 26
    },
    {
        id: 31,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q31.mp3?_=31",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elles ont été revendues.", isCorrect: true },
            { label: "B", text: "Elles seront abandonnées.", isCorrect: false },
            { label: "C", text: "Elles sont stockées à l’étranger.", isCorrect: false },
            { label: "D", text: "Elles vont être falsifiées.", isCorrect: false }
        ],
        points: 26
    },
    {
        id: 32,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q32.mp3?_=32",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Les jeunes chefs d’entreprises.", isCorrect: false },
            { label: "B", text: "Les responsables de petites entreprises.", isCorrect: true },
            { label: "C", text: "Les directeurs d’entreprises publiques.", isCorrect: false },
            { label: "D", text: "Les sociétés des secteurs tertiaires.", isCorrect: false }
        ],
        points: 26
    },
    {
        id: 33,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q33.mp3?_=33",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Comme la possibilité de s’évader dans d’autres vies.", isCorrect: false },
            { label: "B", text: "Comme la réalisation d’un rêve d’enfance.", isCorrect: false },
            { label: "C", text: "Comme le moyen d’être le centre de l’attention.", isCorrect: false },
            { label: "D", text: "Comme le reflet d’un caractère authentique.", isCorrect: true }
        ],
        points: 26
    },
    {
        id: 34,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q34.mp3?_=34",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Ils concernent des investissements à long terme.", isCorrect: false },
            { label: "B", text: "Ils impliquent des associations à but non lucratif.", isCorrect: false },
            { label: "C", text: "Ils offrent des opportunités de bénéfices élevés.", isCorrect: false },
            { label: "D", text: "Ils prennent en considération le facteur social.", isCorrect: true }
        ],
        points: 26
    },
    {
        id: 35,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q35.mp3?_=35",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L’action politique doit s’appuyer sur les conclusions scientifiques.", isCorrect: false },
            { label: "B", text: "La criminalité est en baisse dans les agglomérations modernes.", isCorrect: false },
            { label: "C", text: "La croissance urbaine est un danger pour l’écologie.", isCorrect: false },
            { label: "D", text: "La violence est indépendante de la densité humaine.", isCorrect: true }
        ],
        points: 26
    },
    {
        id: 36,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q36.mp3?_=36",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elles réapprennent certains gestes.", isCorrect: false },
            { label: "B", text: "Elles rencontrent d’autres joueurs.", isCorrect: false },
            { label: "C", text: "Elles se réintègrent à la communauté.", isCorrect: false },
            { label: "D", text: "Elles stimulent leurs facultés cérébrales.", isCorrect: true }
        ],
        points: 33
    },
    {
        id: 37,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q37.mp3?_=37",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Une diminution de la longueur des entretiens.", isCorrect: false },
            { label: "B", text: "Une meilleure diffusion des offres d’emploi.", isCorrect: false },
            { label: "C", text: "Une plus grande équité entre les candidats.", isCorrect: true },
            { label: "D", text: "Une protection accrue des données personnelles.", isCorrect: false }
        ],
        points: 33
    },
    {
        id: 38,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q38.mp3?_=38",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Comme un prétexte pour éviter de traiter les questions significatives.", isCorrect: true },
            { label: "B", text: "Comme une occasion de commenter ce qui ne va pas dans notre société.", isCorrect: false },
            { label: "C", text: "Comme un moyen de sensibiliser le public aux problèmes des individus.", isCorrect: false },
            { label: "D", text: "Comme une façon de distraire les individus de leurs petits soucis quotidiens.", isCorrect: false }
        ],
        points: 33
    },
    {
        id: 39,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-9-%E2%80%93-Q39.mp3?_=39",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Un désir d’enfance satisfait spontanément.", isCorrect: false },
            { label: "B", text: "Un moyen de devenir rapidement célèbre.", isCorrect: false },
            { label: "C", text: "Un souhait de ses parents qu’il a assumé.", isCorrect: true },
            { label: "D", text: "Une passion née du hasard de rencontres.", isCorrect: false }
        ],
        points: 33
    }
];

export default questionsData;
