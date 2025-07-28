// const correctAnswers = [
//   'D', 'C', 'C', 'A', 'C', 'C', 'C', 'B', 'A', 'A',
//   'D', 'A', 'B', 'A', 'D', 'A', 'D', 'C', 'A', 'A',
//   'B', 'C', 'A', 'B', 'C', 'A', 'C', 'D', 'D', 'B',
//   'A', 'A', 'C', 'B', 'D', 'A', 'A', 'D', 'D'
// ];

// const audioLinks = [
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q1.mp3?_=1",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q2.mp3?_=2",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q3.mp3?_=3",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q4.mp3?_=4",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q5.mp3?_=5",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q6.mp3?_=6",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q7.mp3?_=7",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q8.mp3?_=8",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q9.mp3?_=9",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q10.mp3?_=10",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q11.mp3?_=11",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q12.mp3?_=12",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q13.mp3?_=13",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q14.mp3?_=14",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q15.mp3?_=15",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q16.mp3?_=16",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q17.mp3?_=17",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q18.mp3?_=18",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q19.mp3?_=19",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q20.mp3?_=20",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q21.mp3?_=21",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q22.mp3?_=22",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q23.mp3?_=23",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q24.mp3?_=24",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q25.mp3?_=25",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q26.mp3?_=26",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q27.mp3?_=27",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q28.mp3?_=28",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q29.mp3?_=29",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q30.mp3?_=30",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q31.mp3?_=31",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q32.mp3?_=32",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q33.mp3?_=33",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q34.mp3?_=34",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q35.mp3?_=35",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q36.mp3?_=36",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q37.mp3?_=37",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q38.mp3?_=38",
//     "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q39.mp3?_=39"
// ]

const questionsData = [
    {
        id: 1,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q1.mp3?_=1",
        imgSrc: "src/assets/data/audio/test_8_audio/q1.png",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: true }
        ],
        points: 3
    },
    {
        id: 2,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q2.mp3?_=2",
        imgSrc: "src/assets/data/audio/test_8_audio/q2.png",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: true },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3
    },
    {
        id: 3,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q3.mp3?_=3",
        imgSrc: "src/assets/data/audio/test_8_audio/q3.png",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: true },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3
    },
    {
        id: 4,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q4.mp3?_=4",
        imgSrc: "src/assets/data/audio/test_8_audio/q4.png",
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
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q5.mp3?_=5",
        imgSrc: "src/assets/data/audio/test_8_audio/q5.png",
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
        id: 6,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q6.mp3?_=6",
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
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q7.mp3?_=7",
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
        id: 8,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q8.mp3?_=8",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        contextText: "quand est-ce que tu dois aller à la préfecture ? A. J'ai consulté mon calendrier hier soir. B. J'ai eu un rendez-vous pour demain matin. C. J'ai répondu à son courrier aujourd'hui. D. J'ai voyagé avec lui la semaine dernière. J'ai dit dit",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: true },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9
    },
    {
        id: 9,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q9.mp3?_=9",
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
        id: 10,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q10.mp3?_=10",
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
        id: 11,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q11.mp3?_=11",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        contextText: "Pierre, tu travailles la semaine prochaine ? Non, on descend avec les enfants dans notre maison de campagne, dans le sud. Tu as de la chance de te reposer un peu. Oui, et je vais enfin pouvoir jouer au tennis. Que fera Pierre, la semaine prochaine ?",
        options: [
            { label: "A", text: "Il aura la visite de sa famille", isCorrect: false },
            { label: "B", text: "Il fera une compétition", isCorrect: false },
            { label: "C", text: "Il fera.....", isCorrect: false },
            { label: "D", text: "Il sera en vacances.", isCorrect: true }
        ],
        points: 15
    },
    {
        id: 12,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q12.mp3?_=12",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        contextText: "Monsieur s'il vous plaît. Oui. Moi aussi j'aime beaucoup ce groupe. Mais vous gêniez tous les voyageurs en l'écoutant si fort. Le train est un lieu public et tout le monde n'a pas envie d'écouter votre musique et certains aimeraient bien dormir. Ah ça vous dérange ? Excusez-moi, je ne pensais pas que c'était si fort. Avec les écouteurs on ne se rend pas compte. Attendez un instant. C'est mieux comme ça ? Que fais-le je nomme ?",
        options: [
            { label: "A", text: "Il baisse le volume", isCorrect: true },
            { label: "B", text: "Il change de wagon.", isCorrect: false },
            { label: "C", text: "Il éteint son appareil.", isCorrect: false },
            { label: "D", text: "Il met un casque.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 13,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q13.mp3?_=13",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Aller au 2e étage.", isCorrect: false },
            { label: "B", text: "Monter à pied.", isCorrect: true },
            { label: "C", text: "Prendre l'ascenseur.", isCorrect: false },
            { label: "D", text: "Passer par la cafétéria.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 14,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q14.mp3?_=14",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        contextText: 
            `Alors Pierre, qu'est-ce que tu as décidé ? Tu vas accepter cette offre d'emploi ?
            Ah non, j'ai déjà refusé. Honnêtement, je préfère continuer à chercher.
            Je pense que tu fais une bêtise. C'est très bien payé et puis les horaires te conviennent, non ?
            Oui, mais ce n'est pas une raison pour accepter le poste. Ce qui est important pour moi, c'est le travail lui-même et de ce point de vue, le poste ne m'attire pas.
            J'espère que tu ne vas pas regretter ta décision.
            Pourquoi Pierre, refusent-il ce poste ?
            `,
        options: [
            { label: "A", text: "La mission est sans intérêt.", isCorrect: true },
            { label: "B", text: "La société est loin de chez lui.", isCorrect: false },
            { label: "C", text: "Le contrat est temporaire.", isCorrect: false },
            { label: "D", text: "Le salaire est insuffisant.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 15,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q15.mp3?_=15",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle a cessé son téléphone.", isCorrect: false },
            { label: "B", text: "Elle a raté un appel important.", isCorrect: false },
            { label: "C", text: "Elle n'a pas été invitée à un anniversaire.", isCorrect: false },
            { label: "D", text: "Elle n'a pas eu l'appel espéré.", isCorrect: true }
        ],
        points: 15
    },
    {
        id: 16,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q16.mp3?_=16",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il aura lieu plus tard dans le semestre.", isCorrect: true },
            { label: "B", text: "Il évaluera le chapitre des maladies.", isCorrect: false },
            { label: "C", text: "na", isCorrect: false },
            { label: "D", text: "Il sera corrigé par un enseignant extérieur.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 17,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q17.mp3?_=17",
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
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q18.mp3?_=18",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Le prix élevé des produits.", isCorrect: false },
            { label: "B", text: "Les délais pour être livrée.", isCorrect: false },
            { label: "C", text: "Les difficultés en cas d'échange.", isCorrect: true },
            { label: "D", text: "Les tailles de vêtements différentes.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 19,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q19.mp3?_=19",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Le recrutement se fonde sur l'expérience.", isCorrect: true },
            { label: "B", text: "Les salaires à l'embauche sont très élevés.", isCorrect: false },
            { label: "C", text: "L'évolution professionnelle est très lente.", isCorrect: false },
            { label: "D", text: "L'obtention d'un premier emploi est aisée.", isCorrect: false }
        ],
        points: 15
    },
    {
        id: 20,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q20.mp3?_=20",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il fait plus beau qu'hier.", isCorrect: true },
            { label: "B", text: "Il fait plus mauvais qu'hier.", isCorrect: false },
            { label: "C", text: "Il pleut plus qu'hier.", isCorrect: false },
            { label: "D", text: "Il y a moins de soleil qu'hier.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 21,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q21.mp3?_=21",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Des habitants ont voté pour un maire écologiste.", isCorrect: false },
            { label: "B", text: "Les écologistes refusent la construction d'une autoroute.", isCorrect: true },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "Un maire propose d'ouvrir une réserve naturelle.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 22,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q22.mp3?_=22",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        contextText: `
        Voici l'initiative originale d'une société spécialisée dans les cours de bricolage, 
        et qui accueille les femmes jeunes ou moins jeunes, mariées, divorcées, célibataires, étudiantes ou même retraitées. 
        Celles qui s'inscrivent n'ont qu'un désir, ne plus se sentir démuni face à une chasse d'eau qui fuit. 
        Marie-Hélène a assisté au cours du samedi matin, le B à bas de la plomberie. Le plus dur au départ, 
        c'est le vocabulaire. T'es flon, jouin, si je fonds, une langue étrangère pour Marie-Hélène qui 
        nous explique sa motivation. Pour être plus indépendante et savoir changer un joint, 
        éventuellement, des robinets. Est-ce que c'est rassurant qu'il n'y ait que des femmes ? Peut-être. 
        Parce qu'on se dit que les hommes risqueraient de se moquer de nous. C'est plus... oui, rassurant.
        Pour quelle raison Marie-Hélène fréquente-t-elle les cours de bricolage ?
        `,
        options: [
            { label: "A", text: "Pour apprendre les termes spécifiques de la plomberie.", isCorrect: false },
            { label: "B", text: "Pour économiser les frais d'un dépannage par un artisan.", isCorrect: false },
            { label: "C", text: "Pour être autonome face aux petits travaux de la maison", isCorrect: true },
            { label: "D", text: "Pour rencontrer d'autres femmes ayant le même passion.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 23,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q23.mp3?_=23",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        contextText: `
            Bonjour, ravi de vous retrouver dans « Grand bien vous face ». 
            La pauvreté dans le monde recule, la démocratie avance, 
            la couche de zone se reconstitue, ou encore le monde n'a jamais connu 
            aussi peu de violence. Ce matin, nous recevons un rameur à contre-courant de certaines i
            dées reçues. Le spécialiste en psychologie positive, Jacques Le Comte, nous donne à voir 
            ce matin une humanité en progrès, en s'appuyant sur une série de chiffres, de statistiques et 
            de rapports internationaux fiables. Jacques Le Comte nous invite à regarder notre monde avec 
            un optimisme réaliste, il appelle ça l'optiréalisme, loin des discours catastrophistes des prophètes de malheur.
            Que propose cet emmission?
            `,
        options: [
            { label: "A", text: "Un point de vue sur la situation mondiale aujourd'hui.", isCorrect: true },
            { label: "B", text: "Une analyse de l'actualité économique dans le monde", isCorrect: false },
            { label: "C", text: "Une critique des conséquences de la mondialisation.", isCorrect: false },
            { label: "D", text: "Une réflexion sur les relations politiques mondiales.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 24,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q24.mp3?_=24",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De disposer d'une petite surface.", isCorrect: false },
            { label: "B", text: "De partager sa salle de bain.", isCorrect: true },
            { label: "C", text: "De payer un loyer excessif.", isCorrect: false },
            { label: "D", text: "De prendre ses repas seule.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 25,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q25.mp3?_=25",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle a changé de cursus universitaire.", isCorrect: false },
            { label: "B", text: "Elle rencontré des gens étonnants.", isCorrect: false },
            { label: "C", text: "Elle a suivi des enseignements variés.", isCorrect: true },
            { label: "D", text: "Elle a trouvé le niveau des cours facile.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 26,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q26.mp3?_=26",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Avoir la liberté d'être son propre patron.", isCorrect: true },
            { label: "B", text: "Innover dans le domaine informatique.", isCorrect: false },
            { label: "C", text: "na", isCorrect: false },
            { label: "D", text: "Mieux réussir que ses parents.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 27,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q27.mp3?_=27",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Des besoins énergétiques des jeunes.", isCorrect: false },
            { label: "B", text: "Des bons réflexes pour les repas.", isCorrect: false },
            { label: "C", text: "Des comportements alimentaires.", isCorrect: true },
            { label: "D", text: "Des conseils de préparation culinaire.", isCorrect: false }
        ],
        points: 21
    },
    {
        id: 28,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q28.mp3?_=28",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De devenir entrepreneur en créant son entreprise.", isCorrect: false },
            { label: "B", text: "De s'informer sur les secteurs porteurs d'emplois.", isCorrect: false },
            { label: "C", text: "De suivre une formation diplômante à l'université.", isCorrect: false },
            { label: "D", text: "D'élargir sa recherche d'emploi à d'autres domaines.", isCorrect: true }
        ],
        points: 21
    },
    {
        id: 29,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q29.mp3?_=29",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L'absence d'éléments ornementaux.", isCorrect: false },
            { label: "B", text: "La limitation du nombre d'étages.", isCorrect: false },
            { label: "C", text: "Le respect d'obligations légales.", isCorrect: false },
            { label: "D", text: "L'utilisation d'un matériau unique.", isCorrect: true }
        ],
        points: 21
    },
    {
        id: 30,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q30.mp3?_=30",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Un groupe de centres d'appels téléphoniques.", isCorrect: false },
            { label: "B", text: "Un service de livraison express du courrier.", isCorrect: true },
            { label: "C", text: "Un spécialiste de la création de sites internet.", isCorrect: false },
            { label: "D", text: "Un fournisseur pour la restauration à domicile.", isCorrect: false }
        ],
        points: 26
    },
    {
        id: 31,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q31.mp3?_=31",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "C'est un temps de découverte et l'humanité.", isCorrect: true },
            { label: "B", text: "C'est une occasion de dépenser son énergie.", isCorrect: false },
            { label: "C", text: "na", isCorrect: false },
            { label: "D", text: "C'est une possibilité quotidienne d'évasion.", isCorrect: false }
        ],
        points: 26
    },
    {
        id: 32,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q32.mp3?_=32",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elles appuient leur gestion sur la concertation.", isCorrect: true },
            { label: "B", text: "Elles garantissent des évolutions de carrière.", isCorrect: false },
            { label: "C", text: "Elles œuvrent dans des secteurs traditionnels.", isCorrect: false },
            { label: "D", text: "Elles s’engagent dans des projets audacieux.", isCorrect: false }
        ],
        points: 26
    },
    {
        id: 33,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q33.mp3?_=33",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La conférence qui a eu lieu est uniquement symbolique.", isCorrect: false },
            { label: "B", text: "La secrétaire d’État a fait part de son pessimisme.", isCorrect: false },
            { label: "C", text: "Les discussions s’annoncent longues et difficiles.", isCorrect: true },
            { label: "D", text: "Tous les points de l’accord ont déjà été traités sans succès.", isCorrect: false }
        ],
        points: 26
    },
    {
        id: 34,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q34.mp3?_=34",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Durcir les normes appliquées à la fabrication de voitures.", isCorrect: false },
            { label: "B", text: "Inciter les usagers à pratiquer d’autres modes de déplacement.", isCorrect: true },
            { label: "C", text: "Pousser les industriels à employer des technologies innovantes.", isCorrect: false },
            { label: "D", text: "Rendre obligatoire l’utilisation de carburants propres.", isCorrect: false }
        ],
        points: 26
    },
    {
        id: 35,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q35.mp3?_=35",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Animer des ateliers d’écriture thématiques.", isCorrect: false },
            { label: "B", text: "Faire connaître de jeunes philosophes talentueux.", isCorrect: false },
            { label: "C", text: "Organiser des lecteurs pendant les repas de midi.", isCorrect: false },
            { label: "D", text: "Trouver des solutions aux difficultés quotidiennes.", isCorrect: true }
        ],
        points: 26
    },
    {
        id: 36,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q36.mp3?_=36",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Favoriser la visibilité des ouvrages peu accessibles.", isCorrect: true },
            { label: "B", text: "Intervenir dans le choix des publications à venir.", isCorrect: false },
            { label: "C", text: "na", isCorrect: false },
            { label: "D", text: "Soutenir les petits éditeurs et leurs parutions.", isCorrect: false }
        ],
        points: 33
    },
    {
        id: 37,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q37.mp3?_=37",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        contextText: "Camille Claudel restera pour la postérité une élève de Rodin, elle est exposée dans le musée Auguste Rodin, elle elle connue comme telle, elle a beaucoup reçu de Rodin mais elle s'en est servi pour créer une oeuvre totalement différente, on connaît évidemment la fameuse phrase, je lui ai montré où trouver de l'or mais l'or qu'elle trouvait bien à elle, c'est très flagrant, quand on compare plusieurs oeuvres, à côté du penseur qui est, c'est vrai, une puissance ramassée, tout en musclet, qui dégage une force presque brute, l'homme penché lui est construit comme presque un arbre dont on voit les nervures, dont on saisit les muscles, les les l'attitude et presque plus la pensée que chez le penseur.",
        options: [
            { label: "A", text: "La relation liant Camille Claudel et Rodin.", isCorrect: true },
            { label: "B", text: "La richesse du musée Auguste Rodin.", isCorrect: false },
            { label: "C", text: "Les difficultés rencontrées par Rodin.", isCorrect: false },
            { label: "D", text: "Les sources d’inspiration de Rodin.", isCorrect: false }
        ],
        points: 33
    },
    {
        id: 38,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q38.mp3?_=38",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        contextText: "Les pays européens sont presque tous d'excellent élèves de l'écologie. «Bah c'est une bonne nouvelle, s'interroge le Figaro. Pas si sûr. L'Europe, dit Gérard Dupuis, dans Libération, ne paraît vertueuse que parce que son double décimètre était truqué. Les quotas de Roger de CO2, fixés à l'avance, ont été calculés de manière à ne pas trop effaroucher les industriels. Du coup, il ne servait à rien. Mais, reconnaît Gérard Dupuis, il serait tout aussi erroné, à l'inverse, d'avoir des exigences drastiques mais irréalistes. Les industriels savent d'ailleurs agiter un épouvantail efficace. La méthode la plus simple pour arriver à une absence complète de pollution, c'est de fermer une usine et de la délocaliser sous d'autres oeux. Ce n'est pas toujours une menace en l'air. D'après le journaliste, en quoi les bons résultats européens en matière d'écologie sont-ils contestables ?",
        options: [
            { label: "A", text: "Ils font l’objet de manipulations douteuses par les pollueurs.", isCorrect: false },
            { label: "B", text: "Ils répondent à des critères insuffisamment exigeants.", isCorrect: false },
            { label: "C", text: "Ils sont destinés à justifier les politiques économiques.", isCorrect: false },
            { label: "D", text: "Ils sont publiés par des organismes liés aux entreprises.", isCorrect: true }
        ],
        points: 33
    },
    {
        id: 39,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-8-%E2%80%93-Q39.mp3?_=39",
        contextText: "Est-ce qu'on peut ne pas aimer un film quand on a une comédienne aussi extraordinaire que Karine Viard ? J'aime aussi beaucoup cette comédienne qui joue sa mère. Le carré de fer est tellement extraordinaire que dans les scènes de radio, elle est formidable tout le temps, à chaque séquence. Et en même temps, je trouve que le film, c'est philogue, c'est-à-dire cette histoire de recherche de la mère. C'est vraiment... je n'ai pas été très passionné, c'est dommage, parce que Pino avait fait des courts-métrages de grande qualité. Je trouve qu'on ne retrouve pas dans son court-métrage l'originalité qu'ils avaient dans les courts-métrages. Là, on est vraiment dans une histoire encore une fois, une sorte de réalisme à la française, elle va retrouver la famille, les scènes de bon lieu et tout ça. On est dans une sorte de naturalisme, un peu... vraiment sans relief. Pourquoi le locuteur nu en style son appréciation du film ?",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La réalisation est trop extravagante.", isCorrect: false },
            { label: "B", text: "L’actrice principale est omniprésente.", isCorrect: false },
            { label: "C", text: "Le montage manque de cohérence.", isCorrect: false },
            { label: "D", text: "Le scénario manque de singularité.", isCorrect: true }
        ],
        points: 33
    }
]
export default questionsData;
