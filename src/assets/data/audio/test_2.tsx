const questionData = [
    {
        id: 1,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q1.mp3?_=1",
        imgSrc: "src/assets/data/audio/test_2_audio/q1.png",
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
        id: 2,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q2.mp3?_=2",
        imgSrc: "src/assets/data/audio/test_2_audio/q2.png",
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
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q3.mp3?_=3",
        imgSrc: "src/assets/data/audio/test_2_audio/q3.png",
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
        id: 4,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q4.mp3?_=4",
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
        id: 5,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q5.mp3?_=5",
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
        id: 6,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q6.mp3?_=6",
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
        id: 7,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q7.mp3?_=7",
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
        id: 8,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q8.mp3?_=8",
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
        id: 9,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q9.mp3?_=9",
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
        id: 10,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q10.mp3?_=10",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Écrire.", isCorrect: false },
            { label: "B", text: "Téléphoner.", isCorrect: true },
            { label: "C", text: "Lire.", isCorrect: false },
            { label: "D", text: "Écouter.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 11,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q11.mp3?_=11",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Il eut un accident sur la route.", isCorrect: false },
            { label: "B", text: "Il fait une chute à la montagne", isCorrect: false },
            { label: "C", text: "Il est tombé dans son esclaier", isCorrect: true },
            { label: "D", text: "Il s'est battu avec un ami.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 12,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q12.mp3?_=12",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De faire des rencontres", isCorrect: false },
            { label: "B", text: "De manger gratuitement", isCorrect: false },
            { label: "C", text: "De trouver un travail", isCorrect: false },
            { label: "D", text: "De vivre chez quelqu'un", isCorrect: true }
        ],
        points: 3,
    },
    {
        id: 13,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q13.mp3?_=13",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De l'actualité européene.", isCorrect: false },
            { label: "B", text: "De dernier film qu'elles ont vu", isCorrect: true },
            { label: "C", text: "D'un trafic de documents.", isCorrect: false },
            { label: "D", text: "D'un vieil ami commun", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 14,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q14.mp3?_=14",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Conseiller les parents en matière d'alimentation", isCorrect: false },
            { label: "B", text: "Créer l'occasion de se retrouver en famille.", isCorrect: true },
            { label: "C", text: "Découvrir des recettes de grand-mère", isCorrect: false },
            { label: "D", text: "Ressembler des enfants du monde entier.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 15,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q15.mp3?_=15",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Féliciter les acteurs dans leur loge.", isCorrect: false },
            { label: "B", text: "Remettre un vêtement du vesiaire.", isCorrect: true },
            { label: "C", text: "Retourner à la salle de spectacle", isCorrect: false },
            { label: "D", text: "S'informer sur la programmation", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 16,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q16.mp3?_=16",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "D'essayer un vêtement près du corps.", isCorrect: true },
            { label: "B", text: "De changer la taille de l'article choisi", isCorrect: false },
            { label: "C", text: "De choisir une tenue multicolore", isCorrect: false },
            { label: "D", text: "De compléter son achat avec un pull.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 17,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q17.mp3?_=17",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "À un couturier.", isCorrect: false },
            { label: "B", text: "À un jardinier.", isCorrect: false },
            { label: "C", text: "À un traiteur.", isCorrect: false },
            { label: "D", text: "À un décorateur.", isCorrect: true}
        ],
        points: 3,
    },
    {
        id: 18,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q18.mp3?_=18",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De déjeuner ensemble.", isCorrect: true },
            { label: "B", text: "De faire une soirée.", isCorrect: false },
            { label: "C", text: "De participer à un jeu.", isCorrect: false },
            { label: "D", text: "De rencontrer un invité.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 19,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q19.mp3?_=19",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Avoir de l’expérience dans la vente.", isCorrect: false },
            { label: "B", text: "Habiter près de Sainton-les-Tonges.", isCorrect: false },
            { label: "C", text: "Pratiquer régulièrement un sport.", isCorrect: true},
            { label: "D", text: "Savoir gérer un site internet.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 20,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q20.mp3?_=20",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La circulation routière est coupée.", isCorrect: true },
            { label: "B", text: "La commande s'est perdue", isCorrect: false },
            { label: "C", text: "Le transporteur est en grève.", isCorrect: false },
            { label: "D", text: "Les marchandises ont été volées.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 21,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q21.mp3?_=21",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Interviewer un réalisateur.", isCorrect: false },
            { label: "B", text: "Participer à un festival", isCorrect: false },
            { label: "C", text: "Tourner un film.", isCorrect: true },
            { label: "D", text: "Visiter des studios de cinéma.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 22,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q22.mp3?_=22",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Visiter des studios de cinéma.", isCorrect: false },
            { label: "B", text: "Lui apporter un livre.", isCorrect: false },
            { label: "C", text: "Lui présenter son travail.", isCorrect: true },
            { label: "D", text: "Lui proposer une interview.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 23,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q23.mp3?_=23",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Ils déplorent un manque d’information.", isCorrect: true },
            { label: "B", text: "Ils refusent de participer à la collecte.", isCorrect: false },
            { label: "C", text: "Ils s’inquiètent de la sécurité sanitaire.", isCorrect: false },
            { label: "D", text: "Ils souhaitent rencontrer des soignants.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 24,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q24.mp3?_=24",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La voiture est interdite en centre-ville.", isCorrect: false },
            { label: "B", text: "Le sens de la circulation été modifié.", isCorrect: false },
            { label: "C", text: "Le stationnement est devenu payant.", isCorrect: true },
            { label: "D", text: "Les embouteillages sont fréquents.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 25,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q25.mp3?_=25",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L’organisation d’ateliers vidéo.", isCorrect: false },
            { label: "B", text: "La présence de réalisateurs étrangers.", isCorrect: false },
            { label: "C", text: "La projection de documentaire.", isCorrect: false },
            { label: "D", text: "La variété de la programmation.", isCorrect: true }
        ],
        points: 3,
    },
    {
        id: 26,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q26.mp3?_=26",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La recherche d’un appartement est rapide.", isCorrect: true },
            { label: "B", text: "Le système de la colocation est encouragé.", isCorrect: false },
            { label: "C", text: "Les habitations proposées sont de qualité.", isCorrect: false },
            { label: "D", text: "Les logements sont bon marché en banlieue.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 27,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q27.mp3?_=27",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Parce qu’elles étaient difficiles à mettre en œuvre.", isCorrect: false },
            { label: "B", text: "Parce qu’elles ignoraient la particularité des contextes.", isCorrect: false },
            { label: "C", text: "Parce qu’elles avaient lieu tôt dans l’année scolaire.", isCorrect: true },
            { label: "D", text: "Parce qu’elles proposaient des exercices complexes.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 28,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q28.mp3?_=28",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L’état actuel de la biodiversité.", isCorrect: true},
            { label: "B", text: "L’existence de plantes menaçantes.", isCorrect: false },
            { label: "C", text: "La découverte de nouvelles espèces menacées.", isCorrect: false },
            { label: "D", text: "Le rôle de l’ONU dans la préservation des espèces.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 29,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q29.mp3?_=29",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "D’apprendre à élaborer des itinéraires de visites.", isCorrect: false },
            { label: "B", text: "D’expérimenter une manière différente de voyager.", isCorrect: true },
            { label: "C", text: "De découvrir des adresses d’hôpital à l’étranger.", isCorrect: false },
            { label: "D", text: "De participer à des actions de solidarité internationale.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 30,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q30.mp3?_=30",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "À classer les établissements selon un taux de performance.", isCorrect: false },
            { label: "B", text: "À communiquer sur les progrès de l’élève dans chaque matière.", isCorrect: false },
            { label: "C", text: "À créer une échelle lisible de classification des élèves.", isCorrect: true },
            { label: "D", text: "À susciter chez l’élève l’envie de devenir le meilleur de la classe.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 31,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q31.mp3?_=31",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De la législation en vigueur.", isCorrect: false },
            { label: "B", text: "De la paye des employés.", isCorrect: false },
            { label: "C", text: "Du bon vouloir du client.", isCorrect: true },
            { label: "D", text: "Du type d’établissement.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 32,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q32.mp3?_=32",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Elle concerne de moins en moins d’articles.", isCorrect: false },
            { label: "B", text: "Elle est maîtrisée grâce aux contrôles.", isCorrect: false },
            { label: "C", text: "Elle met en danger le marché du travail.", isCorrect: true },
            { label: "D", text: "Elle se concentre sur des objets précieux.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 33,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q33.mp3?_=33",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "La télévision touche des droits importants sur les compétitions.", isCorrect: false },
            { label: "B", text: "Les comportements machistes perdurent dans l’univers sportif.", isCorrect: true },
            { label: "C", text: "Les fédérations sont souvent impliquées dans des scandales.", isCorrect: false },
            { label: "D", text: "Les grandes équipes concentrent la majorité des financements.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 34,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q34.mp3?_=34",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Un aménagement territorial en fonction des données météorologiques.", isCorrect: true },
            { label: "B", text: "Un programme de réduction des différentes sources de pollution.", isCorrect: false },
            { label: "C", text: "Une analyse comparative entre les modes de vie citadins et ruraux.", isCorrect: false },
            { label: "D", text: "Une proposition de prévention renforcée des grands cataclysmes.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 35,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q35.mp3?_=35",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De l’absurdité qu’il y a valorisé leur manque de culture scientifique.", isCorrect: true },
            { label: "B", text: "De la nécessité de mieux défendre les acquis de la culture classique.", isCorrect: false },
            { label: "C", text: "Du besoin qu’ont les mathématiciens d’avoir une culture générale.", isCorrect: false },
            { label: "D", text: "Du refus des valeurs humanistes par les milieux scientifiques.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 36,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q36.mp3?_=36",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "Ses créations sont très romantiques.", isCorrect: false },
            { label: "B", text: "Ses décors sont créés par des artistes américains.", isCorrect: false },
            { label: "C", text: "Ses membres sont d’origines variées.", isCorrect: false },
            { label: "D", text: "Ses spectacles sont donnés dans des sites insolites.", isCorrect: true }
        ],
        points: 3,
    },
    {
        id: 37,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q37.mp3?_=37",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De consulter un médecin psychothérapeute.", isCorrect: false },
            { label: "B", text: "D’attendre que le temps ait fait son œuvre.", isCorrect: true },
            { label: "C", text: "De prescrire un traitement médicamenteux.", isCorrect: false },
            { label: "D", text: "D’informer les utilisateurs sur leurs dangers.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 38,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q38.mp3?_=38",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "De la tranquillité et de l’intimité.", isCorrect: true },
            { label: "B", text: "Des facilités de réservation.", isCorrect: false },
            { label: "C", text: "Un contrat privilégié avec son hôte.", isCorrect: false },
            { label: "D", text: "Un tarif intéressant toute l’année.", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 39,
        audioSrc: "https://examens.preptcfcanada.com/wp-content/uploads/2022/04/Test-2-%E2%80%93-Q39.mp3?_=39",
        question: "écoutez l'extrait sonore et la question. Choisissez la bonne réponse.",
        options: [
            { label: "A", text: "L’absence de temps morts.", isCorrect: false },
            { label: "B", text: "L’ennui des distractions.", isCorrect: false },
            { label: "C", text: "L’insuffisance de repos.", isCorrect: true },
            { label: "D", text: "Le manque d’action.", isCorrect: false }
        ],
        points: 3,
    }
];

export default questionData;