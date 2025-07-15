const questionsData = [
    {
        id: 1,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q1.mp3?_=1",
        imgSrc: "src/assets/data/audio/test_4_audio/q1.png",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: true},
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 2,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q2.mp3?_=2",
        imgSrc: "src/assets/data/audio/test_4_audio/q2.png",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 3,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q3.mp3?_=3",
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
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q4.mp3?_=4",
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
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q5.mp3?_=5",
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
        id: 6,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q6.mp3?_=6",
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
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q7.mp3?_=7",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: true }
        ],
        points: 9,
    },
    {
        id: 8,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q8.mp3?_=8",
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
        id: 9,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q9.mp3?_=9",
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
        id: 10,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q10.mp3?_=10",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il aura la visite de sa famille.", isCorrect: false },
            { label: "B", text: "Il fera une compétition.", isCorrect: false },
            { label: "C", text: "Il pourra travailler au calme.", isCorrect: false },
            { label: "D", text: "Il sera en vacances.", isCorrect: true }
        ],
        points: 9,
    },
    {
        id: 11,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q11.mp3?_=11",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Pour un achat.", isCorrect: false },
            { label: "B", text: "Pour un envoi.", isCorrect: false },
            { label: "C", text: "Pour un renseignement.", isCorrect: true },
            { label: "D", text: "Pour une réclamation.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 12,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q12.mp3?_=12",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Avoir une aide financière.", isCorrect: false },
            { label: "B", text: "Obtenir un logement.", isCorrect: true },
            { label: "C", text: "Participer à un échange.", isCorrect: false },
            { label: "D", text: "S’inscrire à un cours.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 13,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q13.mp3?_=13",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "S’entretenir avec un enseignant.", isCorrect: true },
            { label: "B", text: "Assister à un colloque.", isCorrect: false },
            { label: "C", text: "S’inscrire à l’université.", isCorrect: false },
            { label: "D", text: "Suivre un stage.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 14,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q14.mp3?_=14",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Leur client.", isCorrect: false },
            { label: "B", text: "Leur collègue.", isCorrect: true },
            { label: "C", text: "Leur directeur.", isCorrect: false },
            { label: "D", text: "Leur professeur.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 15,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q15.mp3?_=15",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il n’aime pas l’œuvre de ce peintre.", isCorrect: false },
            { label: "B", text: "La présentation des tableaux lui a déplu.", isCorrect: false },
            { label: "C", text: "Il a trouvé qu’il avait trop de visiteurs.", isCorrect: true },
            { label: "D", text: "Il s’est ennuyé en faisant la queue.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 16,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q16.mp3?_=16",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Aller chez Anne pendant ses congés.", isCorrect: false },
            { label: "B", text: "Passer le mois de juillet à Montpellier.", isCorrect: true },
            { label: "C", text: "Prêter son appartement à son amie.", isCorrect: false },
            { label: "D", text: "Visiter des logements en centre-ville.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 17,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q17.mp3?_=17",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle aurait aimé faire du tourisme.", isCorrect: true },
            { label: "B", text: "Elle aurait préféré se coucher tôt.", isCorrect: false },
            { label: "C", text: "Elle espérait avoir plus d’interlocuteurs.", isCorrect: false },
            { label: "D", text: "Elle s’attendait à un accueil plus favorable.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 18,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q18.mp3?_=18",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Parce qu’elle trouve ça trop bruyant.", isCorrect: false },
            { label: "B", text: "Parce que c’est inadapté à ses besoins.", isCorrect: true },
            { label: "C", text: "Parce que ça consomme trop d’eau.", isCorrect: false },
            { label: "D", text: "Parce que ses enfants font la vaisselle.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 19,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q19.mp3?_=19",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Encourager la mobilité des étudiants.", isCorrect: false },
            { label: "B", text: "Favoriser l’intégration des étrangers.", isCorrect: true },
            { label: "C", text: "Mettre en relation des francophones.", isCorrect: false },
            { label: "D", text: "Offrir des emplois aux mères de famille.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 20,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q20.mp3?_=20",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il a associé le tourisme et le shopping.", isCorrect: false },
            { label: "B", text: "Il est accessible la journée entière.", isCorrect: false },
            { label: "C", text: "Il regroupe les personnes âgées.", isCorrect: false },
            { label: "D", text: "Il s’adresse aux acheteurs à Noël.", isCorrect: true }
        ],
        points: 21,
    },
    {
        id: 21,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q21.mp3?_=21",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Des habitants ont voté pour un maire écologique.", isCorrect: false },
            { label: "B", text: "Les écologistes refusent la construction d’une autoroute.", isCorrect: true },
            { label: "C", text: "Le ministère des Transports veut faire construire une autoroute.", isCorrect: false },
            { label: "D", text: "Un maire propose d’ouvrir une réserve naturelle.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 22,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q22.mp3?_=22",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La formation professionnelle des jeunes.", isCorrect: false },
            { label: "B", text: "L’absence de vérification des sources.", isCorrect: true },
            { label: "C", text: "Le recours systématique aux technologies.", isCorrect: false },
            { label: "D", text: "Les mensonges de certains collègues.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 23,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q23.mp3?_=23",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Parce qu’elle a toujours très faim.", isCorrect: false },
            { label: "B", text: "Parce qu’elle surmenée et stressée.", isCorrect: false },
            { label: "C", text: "Parce qu’elle souffre et qu’elle est fatiguée.", isCorrect: true },
            { label: "D", text: "Parce qu’elle veut perdre du poids.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 24,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q24.mp3?_=24",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "D’une collection de haute couture.", isCorrect: false },
            { label: "B", text: "D’une exposition de peinture.", isCorrect: false },
            { label: "C", text: "D’une sélection de films.", isCorrect: true },
            { label: "D", text: "D’une tournée de chanteurs.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 25,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q25.mp3?_=25",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il a répondu à une demande de ses patients.", isCorrect: false },
            { label: "B", text: "Il consacre son temps à son nouveau métier.", isCorrect: false },
            { label: "C", text: "Il s’est remis en question suite à un échec.", isCorrect: false },
            { label: "D", text: "Il veut éviter toute publicité personnelle.", isCorrect: true }
        ],
        points: 21,
    },
    {
        id: 26,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q26.mp3?_=26",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il avait du mal à accepter ses choix.", isCorrect: true },
            { label: "B", text: "Il essayait souvent de rivaliser avec elle.", isCorrect: false },
            { label: "C", text: "Il était attentif à ses centres d’intérêt.", isCorrect: false },
            { label: "D", text: "Il lui interdisait les activités intellectuelles.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 27,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q27.mp3?_=27",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La création d’un livre pour enfant de qualité est un travail d’équipe.", isCorrect: true },
            { label: "B", text: "Les enfants préfèrent les livres illustrés en trois dimensions.", isCorrect: false },
            { label: "C", text: "Pour faire un bon livre, l’auteur doit réaliser lui-même les illustrations.", isCorrect: false },
            { label: "D", text: "Un livre pour enfant doit comporter le moins de texte possible.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 28,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q28.mp3?_=28",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Des besoins énergétiques des jeunes.", isCorrect: false },
            { label: "B", text: "Des bons réflexes pour les repas.", isCorrect: false },
            { label: "C", text: "Des comportements alimentaires.", isCorrect: true },
            { label: "D", text: "Des conseils de préparation culinaire.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 29,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q29.mp3?_=29",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Jouer aux cartes.", isCorrect: false },
            { label: "B", text: "Aller se promener.", isCorrect: true},
            { label: "C", text: "Regarder la télévision.", isCorrect: false },
            { label: "D", text: "Visiter la région.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 30,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q30.mp3?_=30",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L’absence de formation sur l’élaboration d’un budget.", isCorrect: true },
            { label: "B", text: "Le désintérêt des jeunes pour les questions financières.", isCorrect: false },
            { label: "C", text: "Le manque de cours d’économie à l’université.", isCorrect: false },
            { label: "D", text: "Le peu d’informations des banques sur les crédits.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 31,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q31.mp3?_=31",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elles on été revendues.", isCorrect: true },
            { label: "B", text: "Elles seront abandonnées.", isCorrect: false },
            { label: "C", text: "Elles sont stockées à l'étranger.", isCorrect: false },
            { label: "D", text: "Elles vont être falsifiées.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 32,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q32.mp3?_=32",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "En écoutant les gens dans la sphère privée.", isCorrect: false },
            { label: "B", text: "En employant des technologies innovantes.", isCorrect: false },
            { label: "C", text: "En interrogeant des personnes cultivées.", isCorrect: false },
            { label: "D", text: "En observant divers types d’interlocuteurs.", isCorrect: true }
        ],
        points: 26,
    },
    {
        id: 33,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q33.mp3?_=33",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L’humour : elle met en scène des produits ménagers.", isCorrect: false },
            { label: "B", text: "La provocation : elle présente des tableaux scandaleux.", isCorrect: false },
            { label: "C", text: "La répétition : elle montre des toiles absolument identiques.", isCorrect: false },
            { label: "D", text: "Le paradoxe : elle expose une absence d’œuvres.", isCorrect: true }
        ],
        points: 26,
    },
    {
        id: 34,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q34.mp3?_=34",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il adhère au choix de la méthodologie retenue.", isCorrect: false },
            { label: "B", text: "Il approuve toutes les conclusions présentées.", isCorrect: false },
            { label: "C", text: "Il contenste le professionnalisme des sondeurs.", isCorrect: false },
            { label: "D", text: "Il met en doute l'interprétation des résultats.", isCorrect: true }
        ],
        points: 26,
    },
    {
        id: 35,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q35.mp3?_=35",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "C'est un exemple de réussite par le sport.", isCorrect: false },
            { label: "B", text: "C'est un modèle rare de mixité culturelle.", isCorrect: false },
            { label: "C", text: "C'est un symbole fort de cette province.", isCorrect: true },
            { label: "D", text: "C'est un référence pour son style de jeu.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 36,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q36.mp3?_=36",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De sa propre personnalité.", isCorrect: true },
            { label: "B", text: "D'un ouvrage scientifique", isCorrect: false },
            { label: "C", text: "D'une action humanitaire.", isCorrect: false },
            { label: "D", text: "D'une période de sa vie.", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 37,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q37.mp3?_=37",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Que les œuvres d’art y soient dégradées.", isCorrect: false },
            { label: "B", text: "Que leur taux de fréquentation chute.", isCorrect: false },
            { label: "C", text: "Qu’ils deviennent des espaces désuets.", isCorrect: false },
            { label: "D", text: "Qu’ils soient détournés de leur objectif.", isCorrect: true }
        ],
        points: 33,
    },
    {
        id: 38,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q38.mp3?_=38",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Améliorer la présentation des produits", isCorrect: false },
            { label: "B", text: "Augmenter le nombre de clients", isCorrect: false },
            { label: "C", text: "Multiplier les points de vente", isCorrect: false },
            { label: "D", text: "Maintenir des tarifs compétitifs.", isCorrect: true }
        ],
        points: 33,
    },
    {
        id: 39,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-4-%E2%80%93-Q39.mp3?_=39",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle tend à devenir une forme d'expression spécifique.", isCorrect: false },
            { label: "B", text: "Elle reste cantonnée aux frontières du continent africain.", isCorrect: false },
            { label: "C", text: "Elle réunit plusieurs générations au sein d'un même lectorat.", isCorrect: false },
            { label: "D", text: "Elle soutient la popularité du français auprès des enfants.", isCorrect: true }
        ],
        points: 33,
    }
];

export default questionsData;