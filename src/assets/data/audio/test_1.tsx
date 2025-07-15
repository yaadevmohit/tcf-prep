const questions = [
    {
        id: 1,
        audioSrc: "",
        imgSrc: "",
        options: {
            A: "A",
            B: "B",
            C: "C",
            D: "D"
        },
        correctOption: "B"
    },
    {
        id: 2,
        audioSrc: "",
        imgSrc: "",
        options: {
            A: "A",
            B: "B",
            C: "C",
            D: "D"
        },
        correctOption: "D"
    },
    {
        id: 3,
        audioSrc: "",
        options: {
            A: "A",
            B: "B",
            C: "C",
            D: "D"
        },
        correctOption: "C"
    },
    {
        id: 4,
        audioSrc: "",
        options: {
            A: "A",
            B: "B",
            C: "C",
            D: "D"
        },
        correctOption: "C"
    },
    {
        id: 5,
        audioSrc: "",
        options: {
            A: "A",
            B: "B",
            C: "C",
            D: "D"
        },
        correctOption: "B"
    },
    {
        id: 6,
        audioSrc: "",
        options: {
            A: "A",
            B: "B",
            C: "C",
            D: "D"
        },
        correctOption: "A"
    },
    {
        id: 7,
        audioSrc: "",
        options: {
            A: "A",
            B: "B",
            C: "C",
            D: "D"
        },
        correctOption: "A"
    },
    {
        id: 8,
        audioSrc: "",
        options: {
            A: "A",
            B: "B",
            C: "C",
            D: "D"
        },
        correctOption: "A"
    },
     {
        id: 9,
        audioSrc: "",
        options: {
            A: "Acheter des médicaments.",
            B: "Envoyer une lettre.",
            C: "Prendre un transport.", 
            D: "Voir un film."
        },
        correctOption: "B" 
    },
    {
        id: 10,
        audioSrc: "",
        options: {
            A: "D'arriver en retard.",
            B: "D'avoir une mauvaise note.",
            C: "De manquer de temps.",
            D: "De tomber malade."
        },
        correctOption: "B" // Updated from 'B' (original)
    },
    {
        id: 11,
        audioSrc: "",
        options: {
            A: "La communication avec ses clients.",
            B: "La recherche d'un nouveau travail.",
            C: "L'achat d'un nouveau téléphone fixe.",
            D: "L'utilisation de son ordinateur portable."
        },
        correctOption: "A" 
    },
    {
        id: 12,
        audioSrc: "",
        options: {
            A: "De cinéma.",
            B: "De lecture.",
            C: "De musique.",
            D: "De théâtre."
        },
        correctOption: "A" // Updated from 'A' (original)
    },
    {
        id: 13,
        audioSrc: "",
        options: {
            A: "Pour annuler un achat.",
            B: "Pour modifier une commande.",
            C: "Pour réclamer un paquet.",
            D: "Pour retourner un colis."
        },
        correctOption: "B" // Updated from 'A' to 'B'
    },
    {
        id: 14,
        audioSrc: "",
        options: {
            A: "L'annulation d'un cours.",
            B: "Le retard d'un professeur.",
            C: "Les horaires d'un examen", // Randomly generated
            D: "Un changement de salle."
        },
        correctOption: "A" // Updated from 'A' (original)
    },
    {
        id: 15,
        audioSrc: "",
        options: {
            A: "Elle passe ses congés dans la région.",
            B: "Elle réside là depuis son enfance.",
            C: "Elle travaille dans le tourisme local.",
            D: "Elle vient participer à un concours."
        },
        correctOption: "A" // Updated from 'A' (original)
    },
    {
        id: 16,
        audioSrc: "",
        options: {
            A: "La répartition des horaires.",
            B: "Le contact avec les élèves.",
            C: "Les activités pédagogiques.",
            D: "L'organisation des leçons."
        },
        correctOption: "B" // Updated from 'A' to 'B'
    },
    {
        id: 17,
        audioSrc: "",
        options: {
            A: "Confirmer la date d'un entretien d'embauche.",
            B: "Se renseigner sur les conditions de travail.",
            C: "S'informer sur une formation professionnelle.",
            D: "Vérifier si un courrier est bien arrivé."
        },
        correctOption: "D" // Updated from 'A' to 'D'
    },
    {
        id: 18,
        audioSrc: "",
        options: {
            A: "Le prix élevé des produits.",
            B: "Les délais pour être livrée.",
            C: "Les difficultés en cas d'échange.",
            D: "Les tailles de vêtements différentes."
        },
        correctOption: "C" // Updated from 'A' to 'C'
    },
    {
        id: 19,
        audioSrc: "",
        options: {
            A: "Les conditions de recrutement sont plus difficiles aujourd'hui.",
            B: "Les étudiants ignorent le fonctionnement de l'entreprise.",
            C: "La formation est insuffisante.", // Randomly generated
            D: "Les patrons actuels ont un degré d'exigence trop élevé."
        },
        correctOption: "A" // Updated from 'A' (original)
    },
    {
        id: 20,
        audioSrc: "",
        options: {
            A: "D'acheter un roman.",
            B: "D'attendre son collègue.",
            C: "De réserver un livre.",
            D: "De revenir le lendemain."
        },
        correctOption: "C" // Updated from 'C' (original)
    },
    {
        id: 21,
        audioSrc: "",
        options: {
            A: "Il fait plus beau qu'hier.",
            B: "Il fait plus mauvais qu'hier.",
            C: "Il pleut plus qu'hier.",
            D: "Il y a moins de soleil qu'hier."
        },
        correctOption: "A" // Updated from 'A' (original)
    },
    {
        id: 22,
        audioSrc: "",
        options: {
            A: "La diffusion d'une langue qui exprime les nuances des sentiments.",
            B: "La multiplication des actions pour la défense des droits de l'homme.",
            C: "La promotion d'un moyen d'échanges entre les différentes nationalités.",
            D: "La reconnaissance d'un patrimoine culturel unique par sa richesse."
        },
        correctOption: "C" // Updated from 'A' to 'C'
    },
    {
        id: 23,
        audioSrc: "",
        options: {
            A: "Elles entrent dans la vie active avant les jeunes garçons.",
            B: "Elles se rebellent très vite face à l'autorité familiale au quotidien.",
            C: "Elles sont en désaccord avec leurs parents au sujet de leurs études.",
            D: "Elles sont mieux préparées aux tâches de tous les jours."
        },
        correctOption: "B" // Updated from 'A' (original)
    },
    {
        id: 24,
        audioSrc: "",
        options: {
            A: "Découvrir une région de France.",
            B: "Partir vivre sur la Côte d'Azur.",
            C: "Visiter la capitale.", // Randomly generated
            D: "Rendre visite à un ami français."
        },
        correctOption: "A" // Updated from 'A' to 'C'
    },
    {
        id: 25,
        audioSrc: "",
        options: {
            A: "Pour conserver le poisson.",
            B: "Pour ranger leur matériel.",
            C: "Pour se réchauffer.",
            D: "Pour se reposer."
        },
        correctOption: "C" // Updated from 'C' (original)
    },
    {
        id: 26,
        audioSrc: "",
        options: {
            A: "Elle a arrêté d'exercer sa profession.",
            B: "Elle a décidé d'enrichir son curriculum vitae.",
            C: "Elle a obtenu un congé de longue durée.",
            D: "Elle a réduit son nombre d'heures de travail."
        },
        correctOption: "A" // Updated from 'A' to 'D'
    },
    {
        id: 27,
        audioSrc: "",
        options: {
            A: "Le jeu de l'acteur.",
            B: "Les dialogues.",
            C: "La musique.",
            D: "Le scénario.."
        },
        correctOption: "C" // Updated from 'A' to 'D'
    },
    {
        id: 28,
        audioSrc: "",
        options: {
            A: "Elle a gardé des enfants dans une famille britannique.",
            B: "Elle a passé son enfance dans un pays étranger.",
            C: "Elle a suivi des études dans un lycée bilingue.",
            D: "Elle a travaillé avec une institutrice américaine."
        },
        correctOption: "D" 
    },
    {
        id: 29,
        audioSrc: "",
        options: {
            A: "D'un appel à projets imaginaires.",
            B: "D'un examen de fin d'études.",
            C: "D'une présentation publique.", // Randomly generated
            D: "D'une rénovation d'un monument."
        },
        correctOption: "A" // Updated from 'A' (original)
    },
    {
        id: 30,
        audioSrc: "",
        options: {
            A: "L'attitude des touristes accélère sa dégradation.",
            B: "Le financement des travaux d'entretien est menacé.",
            C: "Les autorités restaurent actuellement les vestiges.",
            D: "L'intérêt pour l'architecture des lieux est en déclin."
        },
        correctOption: "A" // Updated from 'A' (original)
    },
    {
        id: 31,
        audioSrc: "",
        options: {
            A: "C'est un temps de découverte et l'humanité.",
            B: "C'est une occasion de dépenser son énergie.",
            C: "C'est une opportunité d'apprécier la solitude.",
            D: "C'est une possibilité quotidienne d'évasion."
        },
        correctOption: "A" // Updated from 'A' to 'C'
    },
    {
        id: 32,
        audioSrc: "",
        options: {
            A: "C'est la reproduction d'un café du siècle dernier.",
            B: "Il contient un dépôt-vente de meubles design.",
            C: "C'est à la fois un restaurant et une galerie d'art.",
            D: "Il y organise un festival de musique électronique."
        },
        correctOption: "C" // Updated from 'A' to 'C'
    },
    {
        id: 33,
        audioSrc: "",
        options: {
            A: "À comparer les étapes du clonage naturel et artificiel.",
            B: "À observer l'effet des activités humaines sur la nature.",
            C: "orienter la recherche en prenant la nature comme modèle.",
            D: "À sensibiliser les hommes à respecter leur milieu naturel."
        },
        correctOption: "C" // Updated from 'A' to 'D'
    },
    {
        id: 34,
        audioSrc: "",
        options: {
            A: "Ils consomment plus que la jeune génération.",
            B: "Ils dépensent beaucoup pour leur santé.",
            C: "Ils s'intéressent aux nouvelles technologies.", // Randomly generated
            D: "Ils sont à l'origine de créations d'emplois."
        },
        correctOption: "D" // Updated from 'A' to 'D'
    },
    {
        id: 35,
        audioSrc: "",
        options: {
            A: "Ils dégagent une odeur agréable.",
            B: "Ils ont des résultats spectaculaires.",
            C: "Ils ont l'avantage d'être peu chers.",
            D: "Ils répondent à ses convictions."
        },
        correctOption: "D" // Updated from 'A' to 'C'
    },
    {
        id: 36,
        audioSrc: "",
        options: {
            A: "C'est aux parents de choisir pour leurs enfants.",
            B: "Il faut l'étendre à toutes les générations.",
            C: "Le dispositif fonctionne bien tel qu'il est.",
            D: "L'État doit l'imposer à la population."
        },
        correctOption: "C" // Updated from 'A' (original)
    },
    {
        id: 37,
        audioSrc: "",
        options: {
            A: "La relation liant Camille Claudel et Rodin.",
            B: "La richesse du musée Auguste Rodin.",
            C: "Les difficultés rencontrées par Rodin.",
            D: "Les sources d'inspiration de Rodin."
        },
        correctOption: "A" // Updated from 'A' to 'B'
    },
    {
        id: 38,
        audioSrc: "",
        options: {
            A: "Elles demandent un nouveau statut juridique.",
            B: "Elles exigent des garanties réelles et tangibles.",
            C: "Elles mettent en doute la viabilité du projet.",
            D: "Elles veulent que les terres restent intactes."
        },
        correctOption: "D" // Updated from 'B' to 'D'
    },
    {
        id: 39,
        audioSrc: "",
        options: {
            A: "Elle est régie par des normes internationales strictes.",
            B: "Elle est réputée sans danger pour le milieu naturel.",
            C: "Elle est très coûteuse.", // Randomly generated
            D: "Les sociétés de production en exagèrent la rentabilité."
        },
        correctOption: "D" // Updated from 'A' to 'B'
    }
];


// Add audio links to questions
const audioLinks = [
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q1.mp3?_=1",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q2.mp3?_=2",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q3.mp3?_=3",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q4.mp3?_=4",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q5.mp3?_=5",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q6.mp3?_=6",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q7.mp3?_=7",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q8.mp3?_=8",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q9.mp3?_=9",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q10.mp3?_=10",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q11.mp3?_=11",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q12.mp3?_=12",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q13.mp3?_=13",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q14.mp3?_=14",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q15.mp3?_=15",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q16.mp3?_=16",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q17.mp3?_=17",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q18.mp3?_=18",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q19.mp3?_=19",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q20.mp3?_=20",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q21.mp3?_=21",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q22.mp3?_=22",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q23.mp3?_=23",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q24.mp3?_=24",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q25.mp3?_=25",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q26.mp3?_=26",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q27.mp3?_=27",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q28.mp3?_=28",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q29.mp3?_=29",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q30.mp3?_=30",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q31.mp3?_=31",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q32.mp3?_=32",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q33.mp3?_=33",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q34.mp3?_=34",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q35.mp3?_=35",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q36.mp3?_=36",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q37.mp3?_=37",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q38.mp3?_=38",
    "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q39.mp3?_=39"
];

// Assign each audio link to the corresponding question
questions.forEach((q, i) => {
    q.audioSrc = audioLinks[i] || "";
});

const updatedQuestions = [
    {
        id: 1,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q1.mp3?_=1",
        imgSrc: "src/assets/data/audio/test_1_audio/q1.png",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: true },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 2,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q2.mp3?_=2",
        imgSrc: "src/assets/data/audio/test_1_audio/q2.png",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: true }
        ],
        points: 3,
    },
    {
        id: 3,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q3.mp3?_=3",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: true },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 4,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q4.mp3?_=4",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: true },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 5,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q5.mp3?_=5",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: true },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 6,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q6.mp3?_=6",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 7,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q7.mp3?_=7",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 8,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q8.mp3?_=8",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 9,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q9.mp3?_=9",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Acheter des médicaments.", isCorrect: false },
            { label: "B", text: "Envoyer une lettre.", isCorrect: true },
            { label: "C", text: "Prendre un transport.", isCorrect: false },
            { label: "D", text: "Voir un film.", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 10,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q10.mp3?_=10",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "D'arriver en retard.", isCorrect: false },
            { label: "B", text: "D'avoir une mauvaise note.", isCorrect: true },
            { label: "C", text: "De manquer de temps.", isCorrect: false },
            { label: "D", text: "De tomber malade.", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 11,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q11.mp3?_=11",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La communication avec ses clients.", isCorrect: true },
            { label: "B", text: "La recherche d'un nouveau travail.", isCorrect: false },
            { label: "C", text: "L'achat d'un nouveau téléphone fixe.", isCorrect: false },
            { label: "D", text: "L'utilisation de son ordinateur portable.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 12,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q12.mp3?_=12",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De cinéma.", isCorrect: true },
            { label: "B", text: "De lecture.", isCorrect: false },
            { label: "C", text: "De musique.", isCorrect: false },
            { label: "D", text: "De théâtre.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 13,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q13.mp3?_=13",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Pour annuler un achat.", isCorrect: false },
            { label: "B", text: "Pour modifier une commande.", isCorrect: true },
            { label: "C", text: "Pour réclamer un paquet.", isCorrect: false },
            { label: "D", text: "Pour retourner un colis.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 14,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q14.mp3?_=14",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L'annulation d'un cours.", isCorrect: true },
            { label: "B", text: "Le retard d'un professeur.", isCorrect: false },
            { label: "C", text: "Les horaires d'un examen", isCorrect: false },
            { label: "D", text: "Un changement de salle.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 15,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q15.mp3?_=15",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle passe ses congés dans la région.", isCorrect: true },
            { label: "B", text: "Elle réside là depuis son enfance.", isCorrect: false },
            { label: "C", text: "Elle travaille dans le tourisme local.", isCorrect: false },
            { label: "D", text: "Elle vient participer à un concours.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 16,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q16.mp3?_=16",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La répartition des horaires.", isCorrect: false },
            { label: "B", text: "Le contact avec les élèves.", isCorrect: true },
            { label: "C", text: "Les activités pédagogiques.", isCorrect: false },
            { label: "D", text: "L'organisation des leçons.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 17,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q17.mp3?_=17",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Confirmer la date d'un entretien d'embauche.", isCorrect: false },
            { label: "B", text: "Se renseigner sur les conditions de travail.", isCorrect: false },
            { label: "C", text: "S'informer sur une formation professionnelle.", isCorrect: false },
            { label: "D", text: "Vérifier si un courrier est bien arrivé.", isCorrect: true }
        ],
        points: 15,
    },
    {
        id: 18,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q18.mp3?_=18",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Le prix élevé des produits.", isCorrect: false },
            { label: "B", text: "Les délais pour être livrée.", isCorrect: false },
            { label: "C", text: "Les difficultés en cas d'échange.", isCorrect: true },
            { label: "D", text: "Les tailles de vêtements différentes.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 19,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q19.mp3?_=19",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Les conditions de recrutement sont plus difficiles aujourd'hui.", isCorrect: true },
            { label: "B", text: "Les étudiants ignorent le fonctionnement de l'entreprise.", isCorrect: false },
            { label: "C", text: "La formation est insuffisante.", isCorrect: false },
            { label: "D", text: "Les patrons actuels ont un degré d'exigence trop élevé.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 20,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q20.mp3?_=20",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "D'acheter un roman.", isCorrect: false },
            { label: "B", text: "D'attendre son collègue.", isCorrect: false },
            { label: "C", text: "De réserver un livre.", isCorrect: true },
            { label: "D", text: "De revenir le lendemain.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 21,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q21.mp3?_=21",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il fait plus beau qu'hier.", isCorrect: true },
            { label: "B", text: "Il fait plus mauvais qu'hier.", isCorrect: false },
            { label: "C", text: "Il pleut plus qu'hier.", isCorrect: false },
            { label: "D", text: "Il y a moins de soleil qu'hier.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 22,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q22.mp3?_=22",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La diffusion d'une langue qui exprime les nuances des sentiments.", isCorrect: false },
            { label: "B", text: "La multiplication des actions pour la défense des droits de l'homme.", isCorrect: false },
            { label: "C", text: "La promotion d'un moyen d'échanges entre les différentes nationalités.", isCorrect: true },
            { label: "D", text: "La reconnaissance d'un patrimoine culturel unique par sa richesse.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 23,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q23.mp3?_=23",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elles entrent dans la vie active avant les jeunes garçons.", isCorrect: false },
            { label: "B", text: "Elles se rebellent très vite face à l'autorité familiale au quotidien.", isCorrect: true },
            { label: "C", text: "Elles sont en désaccord avec leurs parents au sujet de leurs études.", isCorrect: false },
            { label: "D", text: "Elles sont mieux préparées aux tâches de tous les jours.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 24,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q24.mp3?_=24",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Découvrir une région de France.", isCorrect: true },
            { label: "B", text: "Partir vivre sur la Côte d'Azur.", isCorrect: false },
            { label: "C", text: "Visiter la capitale.", isCorrect: false },
            { label: "D", text: "Rendre visite à un ami français.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 25,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q25.mp3?_=25",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Pour conserver le poisson.", isCorrect: false },
            { label: "B", text: "Pour ranger leur matériel.", isCorrect: false },
            { label: "C", text: "Pour se réchauffer.", isCorrect: true },
            { label: "D", text: "Pour se reposer.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 26,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q26.mp3?_=26",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle a arrêté d'exercer sa profession.", isCorrect: true },
            { label: "B", text: "Elle a décidé d'enrichir son curriculum vitae.", isCorrect: false },
            { label: "C", text: "Elle a obtenu un congé de longue durée.", isCorrect: false },
            { label: "D", text: "Elle a réduit son nombre d'heures de travail.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 27,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q27.mp3?_=27",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Le jeu de l'acteur.", isCorrect: false },
            { label: "B", text: "Les dialogues.", isCorrect: false },
            { label: "C", text: "La musique.", isCorrect: true },
            { label: "D", text: "Le scénario..", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 28,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q28.mp3?_=28",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle a gardé des enfants dans une famille britannique.", isCorrect: false },
            { label: "B", text: "Elle a passé son enfance dans un pays étranger.", isCorrect: false },
            { label: "C", text: "Elle a suivi des études dans un lycée bilingue.", isCorrect: false },
            { label: "D", text: "Elle a travaillé avec une institutrice américaine.", isCorrect: true }
        ],
        points: 21,
    },
    {
        id: 29,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q29.mp3?_=29",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "D'un appel à projets imaginaires.", isCorrect: true },
            { label: "B", text: "D'un examen de fin d'études.", isCorrect: false },
            { label: "C", text: "D'une présentation publique.", isCorrect: false },
            { label: "D", text: "D'une rénovation d'un monument.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 30,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q30.mp3?_=30",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L'attitude des touristes accélère sa dégradation.", isCorrect: true },
            { label: "B", text: "Le financement des travaux d'entretien est menacé.", isCorrect: false },
            { label: "C", text: "Les autorités restaurent actuellement les vestiges.", isCorrect: false },
            { label: "D", text: "L'intérêt pour l'architecture des lieux est en déclin.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 31,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q31.mp3?_=31",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "C'est un temps de découverte et l'humanité.", isCorrect: true },
            { label: "B", text: "C'est une occasion de dépenser son énergie.", isCorrect: false },
            { label: "C", text: "C'est une opportunité d'apprécier la solitude.", isCorrect: false },
            { label: "D", text: "C'est une possibilité quotidienne d'évasion.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 32,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q32.mp3?_=32",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "C'est la reproduction d'un café du siècle dernier.", isCorrect: false },
            { label: "B", text: "Il contient un dépôt-vente de meubles design.", isCorrect: false },
            { label: "C", text: "C'est à la fois un restaurant et une galerie d'art.", isCorrect: true },
            { label: "D", text: "Il y organise un festival de musique électronique.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 33,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q33.mp3?_=33",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "À comparer les étapes du clonage naturel et artificiel.", isCorrect: false },
            { label: "B", text: "À observer l'effet des activités humaines sur la nature.", isCorrect: false },
            { label: "C", text: "À orienter la recherche en prenant la nature comme modèle.", isCorrect: true },
            { label: "D", text: "À sensibiliser les hommes à respecter leur milieu naturel.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 34,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q34.mp3?_=34",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Ils consomment plus que la jeune génération.", isCorrect: false },
            { label: "B", text: "Ils dépensent beaucoup pour leur santé.", isCorrect: false },
            { label: "C", text: "Ils s'intéressent aux nouvelles technologies.", isCorrect: false },
            { label: "D", text: "Ils sont à l'origine de créations d'emplois.", isCorrect: true }
        ],
        points: 26,
    },
    {
        id: 35,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q35.mp3?_=35",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Ils dégagent une odeur agréable.", isCorrect: false },
            { label: "B", text: "Ils ont des résultats spectaculaires.", isCorrect: false },
            { label: "C", text: "Ils ont l'avantage d'être peu chers.", isCorrect: false },
            { label: "D", text: "Ils répondent à ses convictions.", isCorrect: true }
        ],
        points: 26,
    },
    {
        id: 36,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q36.mp3?_=36",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "C'est aux parents de choisir pour leurs enfants.", isCorrect: false },
            { label: "B", text: "Il faut l'étendre à toutes les générations.", isCorrect: false },
            { label: "C", text: "Le dispositif fonctionne bien tel qu'il est.", isCorrect: true },
            { label: "D", text: "L'État doit l'imposer à la population.", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 37,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q37.mp3?_=37",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La relation liant Camille Claudel et Rodin.", isCorrect: true },
            { label: "B", text: "La richesse du musée Auguste Rodin.", isCorrect: false },
            { label: "C", text: "Les difficultés rencontrées par Rodin.", isCorrect: false },
            { label: "D", text: "Les sources d'inspiration de Rodin.", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 38,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q38.mp3?_=38",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elles demandent un nouveau statut juridique.", isCorrect: false },
            { label: "B", text: "Elles exigent des garanties réelles et tangibles.", isCorrect: true },
            { label: "C", text: "Elles mettent en doute la viabilité du projet.", isCorrect: false },
            { label: "D", text: "Elles veulent que les terres restent intactes.", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 39,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-1-%E2%80%93-Q39.mp3?_=39",
        imgSrc: "",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle est régie par des normes internationales strictes.", isCorrect: false },
            { label: "B", text: "Elle est réputée sans danger pour le milieu naturel.", isCorrect: false },
            { label: "C", text: "Elle est très coûteuse.", isCorrect: false },
            { label: "D", text: "Les sociétés de production en exagèrent la rentabilité.", isCorrect: true }
        ],
        points: 33,
    }
];

export default updatedQuestions