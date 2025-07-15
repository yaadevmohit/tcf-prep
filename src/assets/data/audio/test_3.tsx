const questionData = [
    {
        id: 1,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q1.mp3?_=1",
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
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q2.mp3?_=2",
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
        id: 3,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q3.mp3?_=3",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: true },
            { label: "C", text: "", isCorrect: false},
            { label: "D", text: "", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 4,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q4.mp3?_=4",
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
        id: 5,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q5.mp3?_=5",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: true},
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 6,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q6.mp3?_=6",
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
        id: 7,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q7.mp3?_=7",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "", isCorrect: true},
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 8,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q8.mp3?_=8",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "À la piscine.", isCorrect: true },
            { label: "B", text: "À la poste.", isCorrect: false },
            { label: "C", text: "Au cinéma.", isCorrect: false },
            { label: "D", text: "Au marché.", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 9,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q9.mp3?_=9",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Acheter un magazine.", isCorrect: false },
            { label: "B", text: "Choisir un sport.", isCorrect: true },
            { label: "C", text: "Trouver un logement.", isCorrect: false },
            { label: "D", text: "Visiter un quartier.", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 10,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q10.mp3?_=10",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il accepte la proposition de son ami.", isCorrect: true },
            { label: "B", text: "Il offre son aide à son ami.", isCorrect: false },
            { label: "C", text: "Il prpose une sortie à son ami.", isCorrect: false },
            { label: "D", text: "Il refuse l'invitation de son ami.", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 11,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q11.mp3?_=11",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle a besoin de réparations urgentes.", isCorrect: false },
            { label: "B", text: "Elle est localisée loin des commerces.", isCorrect: false },
            { label: "C", text: "Elle est située dans une rue bruyante.", isCorrect: true},
            { label: "D", text: "Elle possède un garage trop étroit.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 12,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q12.mp3?_=12",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il a été très agréablement surpris.", isCorrect: true },
            { label: "B", text: "Il préfère attendre pour se prononcer.", isCorrect: false },
            { label: "C", text: "Il aurait aimé se mettre déjà au travail", isCorrect: false },
            { label: "D", text: "Il a trouvé son supérieur peu disponible.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 13,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q13.mp3?_=13",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Inviter des amis chez elles.", isCorrect: false },
            { label: "B", text: "Rendre visite à un ami", isCorrect: false },
            { label: "C", text: "Faire des courses", isCorrect: false },
            { label: "D", text: "Manger en plein air.", isCorrect: true }
        ],
        points: 15,
    },
    {
        id: 14,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q14.mp3?_=14",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle n'existe plus depuis un moment.", isCorrect: true },
            { label: "B", text: "Il n'est pas dans la bonne rue.", isCorrect: false },
            { label: "C", text: "Il s'est trompé d'adresse et de nom.", isCorrect: false },
            { label: "D", text: "Le passant ignore où elle se trouve.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 15,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q15.mp3?_=15",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Pour conseiller un livre", isCorrect: false },
            { label: "B", text: "Pour discuter d'écologie.", isCorrect: false },
            { label: "C", text: "Pour parler de sa ville.", isCorrect: true },
            { label: "D", text: "Pour raconter un voyage.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 16,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q16.mp3?_=16",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "À quel moment il pourra poser des congés.", isCorrect: true },
            { label: "B", text: "Dans quelle ville il devra partir en mission.", isCorrect: false },
            { label: "C", text: "Qui sera de permanence au mois d’août.", isCorrect: false },
            { label: "D", text: "S’il sera autorisé à suivre un stage en été.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 17,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q17.mp3?_=17",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Pour retirer le chéquier arrivé une semaine avant.", isCorrect: false },
            { label: "B", text: "Pour vérifier le renouvellement de son chéquier.", isCorrect: false },
            { label: "C", text: "Pour savoir quand il aura son carnet de chèques.", isCorrect: true},
            { label: "D", text: "Pour corriger l’orthographe de son nom sur son chéquier.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 18,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q18.mp3?_=18",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Pour confirmer un rendez-vous.", isCorrect: false },
            { label: "B", text: "Pour demander un entretien.", isCorrect: false },
            { label: "C", text: "Pour prposer un service.", isCorrect: true},
            { label: "D", text: "Pour signaler un retard.", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 19,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q19.mp3?_=19",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il dînera au restaurant", isCorrect: false },
            { label: "B", text: "Il ira au cinéma.", isCorrect: false },
            { label: "C", text: "Il restera chez lui.", isCorrect: false },
            { label: "D", text: "Il se rendra au théâtre.", isCorrect: true }
        ],
        points: 15,
    },
    {
        id: 20,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q20.mp3?_=20",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Les jouets éloignent ses enfants de leurs camarades de classe.", isCorrect: false },
            { label: "B", text: "Les derniers jeux offerts à ses enfants sont décevants.", isCorrect: false },
            { label: "C", text: "Ses enfants jouent beaucoup et travaillent moins à l’école.", isCorrect: false },
            { label: "D", text: "Un de ses enfants a du mal à respecter les règles du jeu.", isCorrect: true }
        ],
        points: 21,
    },
    {
        id: 21,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q21.mp3?_=21",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De changer leurs pneus.", isCorrect: false },
            { label: "B", text: "De réviser leur voiture.", isCorrect: false },
            { label: "C", text: "De se montrer prudent.", isCorrect: true },
            { label: "D", text: "De suivre une formation", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 22,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q22.mp3?_=22",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La chute de la production de miel", isCorrect: false },
            { label: "B", text: "La diminution du nombre d'apiculteurs.", isCorrect: false },
            { label: "C", text: "La mutation de l'habitat des abeilles.", isCorrect: true },
            { label: "D", text: "Les menaces d'attaques d'essaims en ville", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 23,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q23.mp3?_=23",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La créativité", isCorrect: false },
            { label: "B", text: "La disponibilité", isCorrect: false },
            { label: "C", text: "La mobilité.", isCorrect: true },
            { label: "D", text: "La persuasion", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 24,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q24.mp3?_=24",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il intéresse très peu les vacanciers.", isCorrect: false },
            { label: "B", text: "Il offre des services de qualité supérieure.", isCorrect: true },
            { label: "C", text: "Il permet le développement compagnes.", isCorrect: false },
            { label: "D", text: "Il souffre d’une augmentation des tarifs.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 25,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q25.mp3?_=25",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle a d’abord une vocation caritative.", isCorrect: true },
            { label: "B", text: "Elle concerne une seule branche d’activité.", isCorrect: false },
            { label: "C", text: "Elle est issue d’une initiative régionale.", isCorrect: false },
            { label: "D", text: "Elle permet la réduction du gaspillage.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 26,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q26.mp3?_=26",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il faut obtenir l’accord de la famille.", isCorrect: false },
            { label: "B", text: "Il faut prouver la nécessité de la démarche.", isCorrect: true },
            { label: "C", text: "Il y a de nombreux documents à rassembler.", isCorrect: false },
            { label: "D", text: "Il y a des frais de procédure élevés.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 27,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q27.mp3?_=27",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il trouve que cela lui coûte trop cher.", isCorrect: false },
            { label: "B", text: "Il pense que cela ne lui est plus utile.", isCorrect: false },
            { label: "C", text: "Il trouve que l’augmentation est injustifiée.", isCorrect: false },
            { label: "D", text: "Il pense qu’il aurait dû être prévenu.", isCorrect: true }
        ],
        points: 21,
    },
    {
        id: 28,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q28.mp3?_=28",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Les critères de sélection sont particulièrement stricts.", isCorrect: true },
            { label: "B", text: "Les diplômes sont tous obtenus avec une mention.", isCorrect: false },
            { label: "C", text: "Les enseignants sont recrutés dans le monde entier.", isCorrect: false },
            { label: "D", text: "Les étudiants sont inscrits à des cours particuliers.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 29,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q29.mp3?_=29",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De maigrir plus rapidement.", isCorrect: true },
            { label: "B", text: "De manger sans compter.", isCorrect: false },
            { label: "C", text: "De s’entraîner moins souvent.", isCorrect: false },
            { label: "D", text: "De vivre plus longtemps.", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 30,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q30.mp3?_=30",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Aujourd’hui, être à la mode est une préoccupation superficielle.", isCorrect: false },
            { label: "B", text: "Il faut porter des vêtements adaptés à toutes circonstances.", isCorrect: false },
            { label: "C", text: "La société actuelle donne trop de place a l’apparence.", isCorrect: false },
            { label: "D", text: "La tenue vestimentaire influence l’état psychologique.", isCorrect: true }
        ],
        points: 26,
    },
    {
        id: 31,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q31.mp3?_=31",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Ils habitent plus longtemps en location.", isCorrect: false },
            { label: "B", text: "Ils perçoivent un salaire plus élevé.", isCorrect: false },
            { label: "C", text: "Ils s’investissent dans des associations.", isCorrect: false },
            { label: "D", text: "Ils sont tentés par les dépenses.", isCorrect: true}
        ],
        points: 26,
    },
    {
        id: 32,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q32.mp3?_=32",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Des prédispositions pour les professions techniques.", isCorrect: false },
            { label: "B", text: "L’aspect magique de la métamorphose de la matière.", isCorrect: true },
            { label: "C", text: "Le désintérêt pour les métiers soi-disant intellectuels.", isCorrect: false },
            { label: "D", text: "Une rémunération à la hauteur du talent de chacun.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 33,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q33.mp3?_=33",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Donner des conseils de préparation.", isCorrect: true },
            { label: "B", text: "Éviter de faire attendre les acheteurs.", isCorrect: false },
            { label: "C", text: "Faire connaître des aliments oubliés.", isCorrect: false },
            { label: "D", text: "Respecter le goût des consommateurs.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 34,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q34.mp3?_=34",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La publicité diffusée par les entreprises.", isCorrect: false },
            { label: "B", text: "L’attirance pour des produits innovants.", isCorrect: false },
            { label: "C", text: "Le besoin de ressembler aux autres.", isCorrect: true },
            { label: "D", text: "L’imitation des attitudes des adultes.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 35,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q35.mp3?_=35",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La qualité croissante des résultats.", isCorrect: true },
            { label: "B", text: "Les aménagements hydrauliques.", isCorrect: false },
            { label: "C", text: "L’expérience de ses collègues.", isCorrect: false },
            { label: "D", text: "L’importance de pieds de vigne.", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 36,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q36.mp3?_=36",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Un cours de musique sensorielle.", isCorrect: false },
            { label: "B", text: "Une école de danse pluridisciplinaire.", isCorrect: true },
            { label: "C", text: "Un emploi de professeur vacataire.", isCorrect: false },
            { label: "D", text: "Un stage de gymnastiques rythmiques.", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 37,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q37.mp3?_=37",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De la mise en vente libre de jouets sans contrôle sanitaire.", isCorrect: true},
            { label: "B", text: "De la tendance des adultes à s’approprier les jouets des enfants.", isCorrect: false },
            { label: "C", text: "De l’intérêt croissant suscité par les jouets tout au long de l’année.", isCorrect: false },
            { label: "D", text: "Du niveau de toxicité maximal toléré dans la fabrication des jouets.", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 38,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q38.mp3?_=38",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle est trop éloignée des orientations politiques actuelles.", isCorrect: true },
            { label: "B", text: "Elle fait référence à des événements historiques douloureux.", isCorrect: false },
            { label: "C", text: "Elle fait ressurgir des rivalités ou des antagonismes oubliés.", isCorrect: false },
            { label: "D", text: "Elle remet en cause la domination faite de certains pays.", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 39,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-3-%E2%80%93-Q39.mp3?_=39",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Acheter des livres sur le bonheur rend heureux.", isCorrect: false },
            { label: "B", text: "Chacun de nous est prédisposé au bonheur.", isCorrect: false },
            { label: "C", text: "Des cours de bonheur s’imposent dès l’enfance.", isCorrect: false },
            { label: "D", text: "L’accès au bonheur nécessite du travail.", isCorrect: true }
        ],
        points: 33,
    }
]

export default questionData;