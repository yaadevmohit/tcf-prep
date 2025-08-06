export const metaData = {
    title: "Reading Test 1",
    description: "Ce test évalue votre capacité à comprendre des informations orales en français.",
    duration: 60, // duration in minutes
    totalQuestions: 39,
};

const questionsData = [
    {
        id: 1,
        imgSrc: "src/assets/data/reading/test_1/images/q1.png",
        question: "Qu'est-ce que Patrick fait chez Louise?",
        options: [
            { label: "A", text: "Il dort", isCorrect: false },
            { label: "B", text: "Il travaille", isCorrect: true },
            { label: "C", text: "Il joue", isCorrect: false },
            { label: "D", text: "Il mange", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 2,
        imgSrc: "src/assets/data/reading/test_1/images/q2.png",
        question: "À quoi sert cette affiche?",
        options: [
            { label: "A", text: "Annoncer un changement", isCorrect: true },
            { label: "B", text: "Décrire un endroit", isCorrect: false },
            { label: "C", text: "Donner un rendez-vous", isCorrect: false },
            { label: "D", text: "Organiser une réunion", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 3,
        contextText:
                    `Alen, bonjour,
                    C'est d'accord, RV avec les
                    copines chez-moi le 30 avril
                    pour déjeuner.
                    Bisous,
                    Yvette`,
        question: "Quelles sont les relations entre Aline et Yvette?",
        options: [
            { label: "A", text: "Professionnelles", isCorrect: false },
            { label: "B", text: "Familliales", isCorrect: false },
            { label: "C", text: "Amicales", isCorrect: true },
            { label: "D", text: "Commerciales", isCorrect: false }
        ],
        points: 3,
    },
    {
        id: 4,
        contextText:
                    `Nous informons notre aimable clientèle
                    que nous sommes actuellement en 
                    vacances jusqu'au dimanche 1er 
                    septembre. Nous aurons le plaisir de vous 
                    retrouver à partir du 2. Le magasin ouvrira 
                    comme tous les lundis à 11h.
                    
                    Bonne vacances à tous!`,
        question: "Qu'apprend-on sur le magasin?",
        options: [
            { label: "A", text: "Il va avoir de nouveaux horaires.", isCorrect: false },
            { label: "B", text: "Il va changer de propriétaire.", isCorrect: false },
            { label: "C", text: "Il va déménager en septembre", isCorrect: false },
            { label: "D", text: "Il va fermer pendant l'été.", isCorrect: true }
        ],
        points: 3,
    },
    {
        id: 5,
        contextText:
                    `**Salut Paul,**
                    Je t'écris du Canada. J'ai rencontré un
                    étudiant mexicain. Je suis contente de parler
                    ma langue avec lui, car l'Espagne me manque
                    beaucoup ! En juin, nous suivons ensemble
                    une formation en Italie. Je t'appelle bientôt.
                    Bisous,
                    **Lucie**`,
        question: "Quelle est la nationalité de Lucie?",
        options: [
            { label: "A", text: "Canadienne", isCorrect: false },
            { label: "B", text: "Espagnole", isCorrect: true },
            { label: "C", text: "Italienne", isCorrect: false },
            { label: "D", text: "Mexicaine", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 6,
        contextText:
                    `Nous avons prévue quelques
                    réparations dans l'appartement à
                    la fin de la semaine. Veuillez nous
                    excuser pour le bruit.

                    ^^M. et. Mme Garnier 7 avenue du Général Leclerc Appt. 307^^`,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 7,
        imgSrc: "src/assets/data/audio/test_5_audio/q7.png",
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 8,
        imgSrc: "src/assets/data/audio/test_5_audio/q8.png",
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points:9,
    },
    {
        id: 9,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 10,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 11,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 12,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 13,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 14,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 15,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 16,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 17,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 18,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 19,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 20,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 21,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 22,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 23,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 24,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 25,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 26,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 27,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 28,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 29,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 30,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 31,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 32,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 33,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 34,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 35,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 36,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 37,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 38,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 39,
        question: "",
        options: [
            { label: "A", text: "", isCorrect: false },
            { label: "B", text: "", isCorrect: false },
            { label: "C", text: "", isCorrect: false },
            { label: "D", text: "", isCorrect: false }
        ],
        points: 33,
    },

]

export default questionsData;
