export const metaData = {
    title: "Reading Test 1",
    description: "Ce test évalue votre capacité à comprendre des informations orales en français.",
    duration: 60, // duration in minutes
    totalQuestions: 39,
};

const questionsData = [
    {
        id: 1,
        contextText:
            `Maman,
            §Je fais mes devoirs de mathématiques chez Louise. Je rentre à 21 heures. Bises et à ce soir.
            Patrick`,
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
        contextText:
            `**ATTENTION**
            §Cette semaine,  l'accueil de l'université est fermé lundi toute la journée et vendredi après-midi.`,
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
            §C'est d'accord, RV avec les copines chez-moi le 30 avril pour déjeuner.
            §Bisous,
            §Yvette`,
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
            `Nous informons notre aimable clientèle que nous sommes actuellement en vacances jusqu'au dimanche 1er septembre. Nous aurons le plaisir de vous retrouver à partir du 2. Le magasin ouvrira comme tous les lundis à 11h.
             §Bonne vacances à tous!`,
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
            §Je t'écris du Canada. J'ai rencontré un étudiant mexicain. Je suis contente de parler ma langue avec lui, car l'Espagne me manque beaucoup ! En juin, nous suivons ensemble une formation en Italie. Je t'appelle bientôt.
            §Bisous,
            §**Lucie**`,
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
            `Nous avons prévue quelques réparations dans l'appartement à la fin de la semaine. Veuillez nous excuser pour le bruit.
            §^^M. et. Mme Garnier 7 avenue du Général Leclerc Appt. 307^^`,
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
        contextText: `**Chère Cathy**,
            §Après six mois de travaux, Pierre et moi avons quitté la maison de ses parents et nous sommes enfin installés chez nous ! Nous fêtons l'évènement le dimanche 23 juin à partir de 19h 30.
            §J'espère que tu pourras venir.
            §**Lésa**`,
        question: "Qu'est-ce que Lésa va fêter?",
        options: [
            { label: "A", text: "La retraite de ses parents", isCorrect: false },
            { label: "B", text: "Son anniversaire de mariage", isCorrect: false },
            { label: "C", text: "Un nouveau logement", isCorrect: true },
            { label: "D", text: "Une création d'entreprise", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 8,
        contextText:
            `**Un poste est libre dans votre association ?**
            §Le site www.place-publique.fr vous propose de publier une annonce. Envoyez-vous la description du poste, le salaire et vos coordonnées. Votre annonce sera visible pendant un mois.`,
        question: "Que peuvent faire les associations sur ce site Internet?",
        options: [
            { label: "A", text: "Offrir des emplois", isCorrect: true },
            { label: "B", text: "Participer à un forum", isCorrect: false },
            { label: "C", text: "Présenter leur action", isCorrect: false },
            { label: "D", text: "Trouver de l'argent", isCorrect: false }
        ],
        points:9,
    },
    {
        id: 9,
        contextText:
            `Madame,
            §Nous avons bien reçu votre demande de remboursement pour un billet de train (voyage professionnel).
            Vous nous avez envoyé le ticket de carte bancaire, mais nous avons aussi besoin d'une attestation de votre
            employeur. Merci de nous l'adresser par courrier postal ou sous format électronique.
            §Cordialement,
            §Le service financier`,
        question: "Quel document doit fournir la femme?",
        options: [
            { label: "A", text: "Un document professionnel", isCorrect: true },
            { label: "B", text: "Un titre de transport", isCorrect: false },
            { label: "C", text: "Une envelope timbrée", isCorrect: false },
            { label: "D", text: "Une somme d'argent", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 10,
        contextText:
            `**Semaine du 6 au 10 septembre**
            §Le restaurant universitaire vous propose des recettes régionales variées au tarif normal.
            §Rendez-vous de 11h15 à 13h dans la salle du premier étage.
            §Bon appétit !`,
        question: "Que propose le restaurant du 6 au 10 septembre?",
        options: [
            { label: "A", text: "Des cours de cuisine", isCorrect: false },
            { label: "B", text: "Des menus différents", isCorrect: true },
            { label: "C", text: "Des plats à emporter", isCorrect: false },
            { label: "D", text: "Des tickets bon marché", isCorrect: false }
        ],
        points: 9,
    },
    {
        id: 11,
        contextText:
            `**Vous voulez faire connaître votre entreprise?**
            §Nous vous proposons de très bons prix pour mettre
            une annonce sur notre site Internet. Envoyez-nous votre texte, nous vous
            contacterons pour vous informer sur nos prix.`,
        question: "Que propose cette annonce aux entreprises?",
        options: [
            { label: "A", text: "Un service de création de site", isCorrect: false },
            { label: "B", text: "Une aide informatique rapide", isCorrect: false },
            { label: "C", text: "Une formation sur Internet", isCorrect: false },
            { label: "D", text: "Une publicité à fabile coût", isCorrect: true }
        ],
        points: 15,
    },
    {
        id: 12,
        contextText: `
            La librairie des Orgues à Paris a récolté 9000 euros de ses clients afin de financer son déménagement. 
            Un résultat inespéré qui a permis à la librairie de s'agrandir. Lors de l'inauguration, la libraire a 
            offert un verre à ses généreux donateurs. En fonction du montant de leur participation, ils ont reçu un 
            livre de leur choix ou ont obtenu le statut de client d'or, signifié par une plaque à leur nom sur le mobilier 
            de la librairie.`,
        question: "Pourquoi la librairie a-t-elle récolté de l'argent?",
        englishTranslation: `The Orgues bookshop in Paris raised €9,000 from its customers to finance its move. 
            This unexpected result enabled the bookshop to expand. At the opening ceremony, the bookseller 
            offered a drink to its generous donors. Depending on the amount they contributed, they received a 
            book of their choice or were given gold customer status, signified by a plaque with their name on the bookshop's furniture.`,
        options: [
            { label: "A", text: "Pour acheter des meubles de bibliothèque", isCorrect: false },
            { label: "B", text: "Pour organiser un concours de lecture", isCorrect: false },
            { label: "C", text: "Pour ouvrir un salon de thé littéraire", isCorrect: false },
            { label: "D", text: "Pour s’installer dans un local plus vaste", isCorrect: true }
        ],
        points: 15,
    },
    {
        id: 13,
        contextText: `
            **Madame Guilbert,**
            §L'imprimante de mon bureau ne fonctionne pas. Mes consultations commencent demain à 14h.
            Pourriez-vous commander rapidement du papier et de l'encre, s'il vous plaît?
            §Merci d'avance.
            §Docteur Philippe`,
        question: "Que doit faire Madame Guilbert?",
        options: [
            { label: "A", text: "Acheter du matériel", isCorrect: true },
            { label: "B", text: "Appeler un réparateur", isCorrect: false },
            { label: "C", text: "Imprimer un document", isCorrect: false },
            { label: "D", text: "Noter un rendez-vous", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 14,
        contextText: `
            **Cher Paul,**
            §Je suis désolée de t'avoir laissé sans nouvelle. 
            Je pensais t'écrire de Fès, mais notre séjour ne s'est 
            pas déroulé comme nous l'espérions. Nous avons passé trois 
            nuits supplémentaires à Tanger à cause d'un problème technique 
            sur une de nos lignes touristiques. Nous avons aussi annulé le 
            rendez-vous prévu aujourd'hui avec notre client de Casablanca, 
            car nous avons dû nous rendre à Marrakech pour régler les frais 
            occasionnés par cet incident. Nous rentrons demain à Paris.
            §Bises
            §**Mathilde**`,
        question: "Dans quelle ville se trouve Mathilde d'après cette lettre?",
        options: [
            { label: "A", text: "Fès", isCorrect: false },
            { label: "B", text: "Casablanca", isCorrect: false },
            { label: "C", text: "Marrakech", isCorrect: true },
            { label: "D", text: "Tanger", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 15,
        contextText: 
            `Olivier Pollet, co-fondateur d'Escursia, veut développer 
            le tourisme scientifique. C'est un tourisme permettant de 
            découvrir et d'apprendre sur la nature, la faune et la flore, 
            ou cours de treks ou de randonnées guidées par des accompagnateurs 
            scientifiques professionnels désirant faire partager leurs connaissances. 
            Ces séjours sont ouverts à tous les publics et pour y prendre part, il ne 
            faut pas nécessairement disposer d'une excellente le sens de l'observation.
            condition physique, il faut juste une pointe de curiosité et le sens de l'observation.`,
        question: `Quelle est la particularité du tourisme scientifique?`,
        options: [
            { label: "A", text: "Il fait observer la nature de façon différente", isCorrect: true },
            { label: "B", text: "Il aide au développement de la recherche", isCorrect: false },
            { label: "C", text: "Il nécessite un bon entrainement sportif", isCorrect: false },
            { label: "D", text: "Il s’adresse à des spécialistes passionnés", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 16,
        contextText:
            `Les gardes-chasse d'Orly ont lancé une campagne de capture des lapins vivant sur l'aéroport, 
            afin de les expatrier vers le sud de la France, dont la faune et la flore ont été 
            dévastées par les grands incendies de l'été dernier. Le lapin élevé au kérosène va donc 
            se refaire une santé auprès des romarins et des thyms de Provence. On connait des 
            riverains qui aimeraient bien être des petits lapins !`,
        englishTranslation: `The Orly airport gamekeepers have launched a campaign to capture the rabbits living on the airport grounds,
            in order to expatriate them to the south of France, where the fauna and flora were
            devastated by the major fires of last summer. The rabbit raised on kerosene will therefore
            regain its health among the rosemary and thyme of Provence. We know of some residents who would
            love to be little rabbits!`,
        question: "Qu'est-il arrivé aux lapins de l'aéroport d'Orly?",
        options: [
            { label: "A", text: "On les a tués afin de les manger", isCorrect: false },
            { label: "B", text: "On les a attrapés et emmenés ailleurs", isCorrect: true },
            { label: "C", text: "On les a chassés de l’aéroport", isCorrect: false },
            { label: "D", text: "On les a soignés et relâchés", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 17,
        contextText:`Il y a beaucoup d'avantages démontrés par les faits à choisir la Suisse pour y effectuer ses études ou une partie de celles-ci. La qualité de vie, celle des formations dispensées même si elles sont souvent chères, la situation géographique et l'ouverture internationale du pays... Du côté des défauts, mentionnons le fait que toutes les filières et formations ne sont pas représentées, ce qui est le cas dans la plupart des petits pays.`,
        englishTranslation: `There are many proven advantages to choosing Switzerland for your studies or part of them. The quality of life, the quality of the courses offered even if they are often expensive, the geographical location and the international openness of the country... On the downside, it should be noted that not all fields and courses are represented, which is the case in most small countries.`,
        question: "Quel avantage présente l'enseignement supérieur en Suisse?",
        keywords: [
            { word: "enseignement supérieur", translation: "higher education" },
            { word: "avantage", translation: "advantage" },
            { word: "Suisse", translation: "Switzerland" },
            { word: "démontrés", translation: "proven" },
            { word: "effectuer", translation: "to carry out/undertake" },
            { word: "dispensées", translation: "provided/delivered" },
            { word: "filières", translation: "fields/majors" }
        ],
        options: [
            { label: "A", text: "Le choix des matières est vaste", isCorrect: false },
            { label: "B", text: "Le nombre d’étudiants est limité", isCorrect: false },
            { label: "C", text: "Le prix des études est peu élevé", isCorrect: false },
            { label: "D", text: "L’enseignement est d’un bon niveau", isCorrect: true }
        ],
        points: 15,
    },
    {
        id: 18,
        contextText:`
            On croyait leur métier en voie de disparition et pourtant le nombre de secrétaires a doublé en vingt ans. Ceux qui avaient dit que l'informatique les remplacerait se sont trompés. Au contraire, elles n'ont jamais été aussi recherchées. Leurs tâches classiques ont tendance à diminuer au profit de nouvelles responsabilités. Elles sont de moins en moins rattachées à une seule personne, mais à une équipe. Toutefois, malgré l'importance qu'elles ont prise, elles souffrent toujours d'un certain manque de reconnaissance`,
        question: "Aujourd'hui, quel est l'inconvénient du métier de secrétaire ?",
        options: [
            { label: "A", text: "La quantité de travail est importante", isCorrect: false },
            { label: "B", text: "Le rôle est peu valorisé", isCorrect: true },
            { label: "C", text: "Les postes sont supprimés", isCorrect: false },
            { label: "D", text: "Les tâches sont limitées", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 19,
        contextText:`L'anglais est arrivé au vingtième siècle, à la première place du palmarès des langues internationales. Près de la moitié de l'humanité est concernée par cette langue, car elle est quasi obligatoire dans de nombreux secteurs d'activité. Pourtant, cette situation a des limites et l'anglais devra faire face à la progression d'autres langues dans les années à venir. Les raisons sont la montée en puissance économique et industrielle de grands pays émergents, le voisins.
            développement d'échanges régionaux et ceux entre pays`,
        question: "Que dit-on de la langue anglaise dans cet article?",
        options: [
            { label: "A", text: "Elle doit devenir la langue de l’administration publique", isCorrect: false },
            { label: "B", text: "Elle peut perdre son statut de langue dominante", isCorrect: true },
            { label: "C", text: "Elle restera la langue privilégiée dans le commerce", isCorrect: false },
            { label: "D", text: "Elle restera la langue privilégiée dans le commerce", isCorrect: false }
        ],
        points: 15,
    },
    {
        id: 20,
        contextText:`**Job d'été, la première expérience**
            §Quand une entreprise fait appel pour la première fois à un jeune, elle n'a pas d'attente vis-à-vis de ses compétences professionnelles, c'est donc sur son comportement que vont se porter ses critères d'évaluation. Même saisonnier. II faut montrer qu'on a vraiment envie de décrocher un job. Les jeunes sans expérience ont tout intérêt à parler de leur passion et à démontrer leur motivation. Pour un important.
            employeur, c'est ce qui reste souvent le critère le plus`,
        question: "Selon l'article, que faut-il faire pour trouver un job d'été ?",
        options: [
            { label: "A", text: "Exposer l’ensemble de ses qualités professionnelles", isCorrect: false },
            { label: "B", text: "Faire la preuve de son désir de travailler", isCorrect: true },
            { label: "C", text: "Parler avec enthousiasme de ses projets de formation", isCorrect: false },
            { label: "D", text: "Parler des emplois qu’on a déjà occupés", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 21,
        contextText:`Le jour viendra où un fonds de pension ou un groupe alimentaire mondial investira dans l'entreprise d'un cuisinier reconnu pour orchestrer son développement international. Bien sûr, on ne peut qu'avoir de la nostalgie pour les temps héroïques ou une bande de copains inventait les codes de la nouvelle cuisine. Aujourd'hui, n'importe quel jeune cuisinier est prêt à payer très cher pour le privilège d'un stage de six mois chez un « Grand chef ». II rentabilisera vite cet Investissement en s'autoproclamant élève de, car les valeur.
            marques des grands chefs ne cessent de prendre de la`,
        question: "Qu'apprend-on sur les grands chefs ?",
        options: [
            { label: "A", text: "Leur conception de la cuisine est passée de mode", isCorrect: false },
            { label: "B", text: "Leur créativité leur assure une célébrité mondiale", isCorrect: false },
            { label: "C", text: "Leur nom s’est transformé en label de prestige", isCorrect: true },
            { label: "D", text: "Leurs établissements sont cotes en bourse", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 22,
        contextText:`Non, Maupassant n'est pas qu'un écrivain pour cours de français. Comme tout bon auteur culte, ses thématiques sont percutantes, grinçantes, toujours d'actualité. Et tellement vraies dans le fond: hypocrisie de la bourgeoisie, monde paysan décrit sans artifice, rapports humains aliénés par le contexte social et culturel... Du pain bénit pour les auteurs de << Chez Maupassant », une collection de huit téléfilms tirés des contes et nouvelles du grand Guy.`,
        question: "Que présente l'auteur de l'article?",
        options: [
            { label: "A", text: "Des adaptations télévisées de Maupassant", isCorrect: true },
            { label: "B", text: "Des programmes d’études littéraires", isCorrect: false },
            { label: "C", text: "Une exposition consacrée à Maupassant", isCorrect: false },
            { label: "D", text: "Un ouvrage critique récemment paru", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 23,
        contextText:`Elle devait être démolie et un nouveau lieu de culte reconstruit à l'arrière de l'église actuelle, le long du boulevard. Le projet, qui prévoyait la restructuration complète de l'îlot avec la création de logements sociaux, ne verra finalement pas le jour. La Ville et le diocèse ont pris la décision de conserver l'église Sainte-Madeleine considérant avec certains experts que sa démolition aurait causé la perte regrettable d'un élément important du patrimoine nantais. Des travaux d'urgence vont être réalisés avant le lancement d'un véritable programme de restauration et de mise en valeur du bâtiment.`,
        question: "Selon cet article, quelle décision a été prise ?",
        options: [
            { label: "A", text: "Bâtir une église identique dans le quartier", isCorrect: false },
            { label: "B", text: "Débuter le réaménagement du boulevard", isCorrect: false },
            { label: "C", text: "Entreprendre une rénovation du lieu", isCorrect: true },
            { label: "D", text: "Réhabiliter les logements sociaux existants", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 24,
        contextText:`L'insecte pourrait devenir une solution économique à notre appétit de protéines. Vous attrapez trots grillons déshydratés et les enfournez dans votre bouche: vous voilà mangeur d'insectes. Vous contribuez à la préservation des ressources. En effet, il faut 10 kg de céréales pour produire 1 kg de bœuf ou 9 kg d'insectes. La demande mondiale de protéines va doubler et les insectes, c'est riche en protéines. Depuis l'an dernier, la communauté européenne subventionne les projets de recherche dans ce secteur. Les grands groupes alimentaires s'intéressent au sujet, mais attendent que les citoyens soient psychologiquement prêts.`,
        question: "Qu'apprend-on sur la production d'insectes?",
        options: [
            { label: "A", text: "C’est une réponse à des besoins alimentaires accrus", isCorrect: true },
            { label: "B", text: "Des recherches remettent en cause l’intérêt nutritif", isCorrect: false },
            { label: "C", text: "Elle s’avère moins rentable que les cultures de céréales", isCorrect: false },
            { label: "D", text: "Les citoyens exigent des garanties sanitaires", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 25,
        contextText:`Ces dernières années, les nouvelles versions de films à succès se sont multipliées et ce mouvement ne semble pas près de s'arrêter, comme si l'industrie cinématographique ne parvenait plus à inventer de nouvelles histoires, de nouveaux concepts qui pourraient éveiller la curiosité d'un large public. Pourtant, de nouvelles idées, de nouvelles sensibilités, il y en aura toujours, encore faut-il qu'elles trouvent un relais financier pour voir le jour. Et l'industrie cinématographique hésite à investir dans du neuf, alors elle se tourne vers les valeurs sûres des succès passés`,
        question: "Quelle constatation ce journaliste fait il sur le cinéma contemporain?",
        options: [
            { label: "A", text: "Les producteurs évitent de prendre des risques", isCorrect: true },
            { label: "B", text: "Les réalisateurs sont à la recherche d’idées neuves", isCorrect: false },
            { label: "C", text: "Les scénaristes font preuve d’une imagination limitée", isCorrect: false },
            { label: "D", text: "Les spectateurs privilégient les créations classiques", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 26,
        contextText:`Le droit à l'oubli sur internet est fondamental. Aujourd'hui, internet nous expose à des risques, en mettant a portée d'institutions ou d'entreprises des informations personnelles que nous avons oubliées ou que nous souhaitons oublier. Or l'oubli, autant que la mémoire, est essentiel à l'humain pour être capable d'agir et de fonctionner dans le présent. Un spécialiste de la question propose une solution. Si les gens ont envie de sauvegarder des informations les concernant, ils y attacheront une date d'expiration. Les citoyens doivent choisir eux-mêmes ce qui de leurs informations personnelles, sera retenu ou effacé, cela ne doit pas résulter du choix de grosses sociétés ou de gouvernements.`,
        question: "Pourquoi le droit à l'oubli sur internet est-il important?",
        options: [
            { label: "A", text: "Pour aider à faire le deuil du passé", isCorrect: false },
            { label: "B", text: "Pour alléger le stockage des données", isCorrect: false },
            { label: "C", text: "Pour faire obstacle aux multinationales", isCorrect: false },
            { label: "D", text: "Pour rester maitre de sa vie privée", isCorrect: true }
        ],
        points: 21,
    },
    {
        id: 27,
        contextText:`Une étude récente révèle que la concentration de déchets plastiques flottant à la surface du pacifique nord a été multipliée par cent en quarante ans. Ce constat, émis par les pêcheurs en haute mer, est alarmant, car cette pollution a des conséquences écologiques. La gigantesque plaque de déchets flottant sur l'océan pacifique, épais par endroits de plusieurs y dizaines de mètres, constitue un milieu favorable à la reproduction d'une espèce d'araignée d'eau. Cet insecte est en train de se multiplier dans le pacifique nord. Si la densité des plastiques continue à augmenter, certaines espèces pourraient continuer à se multiplier, risquant de déséquilibrer l'écosystème du Pacifique`,
        question: "Quel danger représente ces déchets?",
        options: [
            { label: "A", text: "Un obstacle pour les bateaux de pêche.", isCorrect: false },
            { label: "B", text: "Un réchauffement dramatique des eaux.", isCorrect: false },
            { label: "C", text: "Un risque d’intoxication des populations du Pacifique.", isCorrect: false },
            { label: "D", text: "Une diminution de la diversité de la faune océanique.", isCorrect: true }
        ],
        points: 21,
    },
    {
        id: 28,
        contextText:`Les jeunes du lycée professionnel hötelier Paul-Valéry ont des idées. Afin de pallier la faiblesse des moyens de l'Education nationale pour financer leurs voyages d'études, ils n'arrêtent pas de mobiliser les bonnes volontés à coups d'initiatives originales et qui font mouche. Après l'exemple donné par les terminales de restauration qui proposent un repas tout citron pour un voyage d'études à Barcelone, c'est au tour des élèves de 2nde de battre le rappel. Ceux-ci bénéficieront des retombées d'un vide grenier, organisé par le Lions club, pour boucler le budget de leur voyage d'études en Corse à la rentrée`,
        question: "Quel est l'objectif des élèves de 2nde?",
        options: [
            { label: "A", text: "Élaborer le budget de leur voyage à Barcelone", isCorrect: false },
            { label: "B", text: "Gagner de l’argent pour payer leur séjour", isCorrect: true },
            { label: "C", text: "Montrer aux autres classes leurs talents culinaires", isCorrect: false },
            { label: "D", text: "Soutenir le futur projet des élèves de terminale", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 29,
        contextText:`Les gens empilaient les objets dans les chariots de métal, avec frénésie. Ils avaient des visages sérieux, contractés, et leurs (paupières battaient de façon anormalement lente. Les femmes tendaient les mains vers les étals. On aurait dit que les gens ne savaient plus ce qu'ils faisaient. Comment l'auraient-ils su? Ce n'étaient pas eux qui saisissaient la marchandise. C'est la marchandise qui se collait d'elle-même à leurs mains, elle entrait directement dans les caddies. La nourriture n'était plus que des formes, études couleurs. Les yeux dévoraient les couleurs rouge, blanche, verte, orange, les yeux avaient faim de sphères et de pyramides, faim de plastiques lisses et de capsules de fer-blanc`,
        question: "Dans cet extrait, qu'apprend-on sur les acheteurs?",
        options: [
            { label: "A", text: "Ils donnent l’impression de vénérer les produits", isCorrect: false },
            { label: "B", text: "Ils ont l’air éblouis par le gigantisme des magasins", isCorrect: false },
            { label: "C", text: "Ils paraissent manipulés par une force supérieure", isCorrect: true },
            { label: "D", text: "Ils semblent perdus dans le labyrinthe des rayons", isCorrect: false }
        ],
        points: 21,
    },
    {
        id: 30,
        contextText:`Ne pas assez dormir plusieurs nuits de suite perturbe, tout le monde s'en rend compte. Ce qui est moins visible, c'est comment cela affecte notre santé. (...) Des scientifiques ont montré que le manque de sommeil modifiait l'intensité de l'activité de plus de 700 gènes, parmi eux ceux liés au stress et à la lutte contre les maladies. Mais ils ne peuvent encore dire si ces modifications des gènes sont une réponse de court terme et sans danger à un sommeil de mauvaise qualité, un signe d'adaptation du corps à la privation de sommeil, ou un danger potentiel pour la santé`,
        question: "Qu'est-ce que les scientifiques ont découvert concernant le manque de sommeil?",
        options: [
            { label: "A", text: "La gestion du stress est difficile", isCorrect: false },
            { label: "B", text: "La santé est mise en péril", isCorrect: false },
            { label: "C", text: "Le corps est moins réactif", isCorrect: false },
            { label: "D", text: "Le système génétique est affecté", isCorrect: true }
        ],
        points: 26,
    },
    {
        id: 31,
        contextText:`Solitude, conflit avec les parents, difficultés scolaires... Les adolescents peuvent se confier sur des sites spécialisés où leur parole sera prise en compte. Fil Santé jeune a vu ses visites augmenter de 313 % ces dernières années. De l'autre côté de l'écran, animateurs et psychologues s'efforcent de maintenir le contact et de prolonger la discussion.
            §L'entreprise est délicate puisque les regards et les gestes ne peuvent être pris en compte par le professionnel, Le réconfort naît aussi, et peut-être avant tout, des autres internautes qui vivent une situation similaire.`,
        question: "À quelle difficulté se heurtent les spécialistes?",
        options: [
            { label: "A", text: "L’absence totale des signes visuels du langage", isCorrect: false },
            { label: "B", text: "L’opposition des familles à leurs interventions", isCorrect: false },
            { label: "C", text: "La nécessité de modérer le ton des échanges", isCorrect: true },
            { label: "D", text: "Les nombreuses remarques des participants", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 32,
        contextText:`
            Méthode originale, la psychologie narrative propose les clés d'un nouvel art de vivre pour renoncer définitivernent aux comportements susceptibles de brider notre propension au bonheur Cette pratique, loin de vanter le bienfait de vaines chimères, repose sur une prise de conscience: celle que le monde tel que je le pense n'est pas tel que je le vis. Le travestissement de la réalité est incessant. Il y a d'un côté la réalité des faits, et de l'autre, ma représentation, explique Yves Alexandre Thalmann. Avec notre cerveau, nous passons notre temps à organiser les liens de cause à effet de façon à ce que ça prenne une signification à nos yeux. Or, selon le psychologue, la manière dont nous appréhendons les choses determine davantage notre qualité de vie que les événements eux-mêmes. À ce titre, nos représentations mentales ont donc la capacité de nous procurer une vie plus agréable.`,
        question: "Comment la perception des événements permet-elle d'accéder au bonheur?",
        options: [
            { label: "A", text: "Si on les prend en compte avec lucidité", isCorrect: false },
            { label: "B", text: "Si on les remodèle à travers l’Imagination", isCorrect: false },
            { label: "C", text: "Si on modifie la façon dont on les perçoit", isCorrect: true },
            { label: "D", text: "Si on recherche leur signification profonde", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 33,
        contextText:`§**<< Le Fait du Roi >>** §**un roman d'A. Thonon.**
            §C'est l'histoire d'un homme qui prend l'identité d'un autre, mort, en se glissant dans sa peau, dans sa vie, dans sa maison... Rien ne sert de raconter l'intrigue de ce roman tant elle est simple et sans surprise. L'écriture de l'auteur reste cependant toujours aussi piquante et agréable à lire. Le héros principal, quant à lui, est dépeint avec une certaine profondeur.`,
        question: "Sur quel point porte la critique négative faute à ce livre ?",
        options: [
            { label: "A", text: "La description du personnage", isCorrect: false },
            { label: "B", text: "La longueur du texte", isCorrect: false },
            { label: "C", text: "La qualité de l’écriture", isCorrect: false },
            { label: "D", text: "Le déroulement des événements", isCorrect: true }
        ],
        points: 26,
    },
    {
        id: 34,
        contextText:`Monsieur et Madame Martin n'ont pas un emploi du temps également captivant. Quand Monsieur se rend au travail. Madame manie l'aspirateur. Quand il est au bureau, elle achète des surgelés au supermarché. Quand il se cale devant la télé, l'épouse modèle se colle aux fourneaux. Une illustration exhumée d'un manuel des années 1950? Non, les images d'un exercice pour une classe de CP afin de comprendre la simultanéité en étudiant les moments de la journée d'une famille. Quand Virginie Sassoon est tombée sur ce document ultra-stéréotypé dans le classeur de sa fille, cette maman est tombée des nues. Cette fiche dévoile une forme de violence symbolique qui persiste dans notre société et qui relève selon moi, de la responsabilité collective. >`,
        question: "Pourquoi Virginie Sassoon est-elle choquée par les exercices proposés dans la classe de sa fille?",
        options: [
            { label: "A", text: "Ils correspondent à des programmes scolaires obsolètes", isCorrect: false },
            { label: "B", text: "Ils méconnaissent l’existence des familles recomposées", isCorrect: false },
            { label: "C", text: "Ils présentent un partage sexiste des tâches dans le couple", isCorrect: true },
            { label: "D", text: "Ils se moquent du quotidien des personnes sans emploi", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 35,
        contextText:`Des chercheurs mettent en doute l'idée répandue, que la langue que nous parlons influence notre façon de penser. Ils présentent une recherche sur l'ordre des mots dans la phrase: Sujet, Verbe, Objet pour certaines langues: Sujet, Objet, Verbe pour d'autres. Leurs 40 sujets, locuteurs d'anglais, d'espagnol, de mandarin, de turc, ont décrit des séquences vidéo dans leur langue d'abord, puis en utilisant des gestes. Si les descriptions verbales différaient dans l'ordre des mots selon les langues, les descriptions faites avec les mains reprenaient toutes le même ordre (sujet, objet, verbe), suivant celui des langues des signes inventées par des locuteurs sourds`,
        question: "Quel est le résultat de lexpérience présentée dans cet article?",
        options: [
            { label: "A", text: "Les gestes révèleraient systématiquement la langue maternelle des locuteurs", isCorrect: false },
            { label: "B", text: "Il existerait un ordre universel de la pensée, indépendant de l’ordre linguistique", isCorrect: true },
            { label: "C", text: "Il y aurait autant de façons de penser que de structures de langue différentes", isCorrect: false },
            { label: "D", text: "Les structures des langues seraient dépendantes de notre expérience du monde", isCorrect: false }
        ],
        points: 26,
    },
    {
        id: 36,
        contextText:`Sexistes, les jeux vidéo? Peut-être que oui, peut être que non. En tout cas, à parcourir les allées de la Paris Games Week, l'œil avisé aura lui-même bien du mal à trouver un personnage principal féminin de jeu vidéo. Il y a bien la célébrissime Lara Croft du jeu vidéo Tomb Raider, aux attributs particulièrement imposants, conçus presque sur mesure plaire à masculins. Pour le reste, circulez, il n'y a -presque rien d'autre à voir, si l'on balaye d'un coup de manette de jeu, au mieux, les princesses à sauver, au pire, les call-girls de mafioso. Pourtant, l'industrie du jeu vidéo a pris conscience ces dernières années du potentiel du marché des joueuses`,
        question: "Quel constat est dressé sur les jeux vidéo?",
        options: [
            { label: "A", text: "La quasi-absence d’héroïnes", isCorrect: true },
            { label: "B", text: "L’appel constant à la violence", isCorrect: false },
            { label: "C", text: "L’atténuation des clichés", isCorrect: false },
            { label: "D", text: "L’uniformité des scénarios", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 37,
        contextText:`Les technologies de l'information et de la communication (TIC) sont de plus en plus utilisées et adoptées de façon variable par les établissements d'enseignement supérieur à travers le monde. Les TIC apparaissent autant comme une prestation en présence sur le campus que comme un enseignement ouvert et à distance. Les actions de l'UNESCO se concentrent sur l'aide aux États membres afin de développer des politiques durables dans le domaine des TIC dans l'enseignement supérieur. Les plans d'action et les investissements positifs en matière de TIC sont clairement bénéfiques pour les institutions d'enseignement supérieur (IES), meute si les TIC n'ont pas remplacé les modes d'apprentissage ou d'enseignement classiques telles que les salles de classe`,
        question: "Pourquoi peut-on dire que l'UNESCO est active dans le domaine des TIC?",
        options: [
            { label: "A", text: "Parce qu’elle finance les programmes de développement des TIC", isCorrect: true },
            { label: "B", text: "Parce qu’elle organise des débats entre États membres sur les TIC", isCorrect: false },
            { label: "C", text: "Parce qu’elle sensibilise les établissements d’enseignement aux TIC", isCorrect: false },
            { label: "D", text: "Parce qu’elle habilite des formateurs à l’utilisation des TIC", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 38,
        contextText:`Travailler avec son mari ou son petit ami, sa sœur ou sa mère n'est pas une punition pour tout le monde! Pour certains, c'est même la condition du bien être professionnel. Si cette idée évoquait jadis une petite entreprise conservatrice, transmise de père en fils, aujourd'hui, travailler en famille relève de réalités très différentes. Critères retenus confiance, valeurs et goûts communs et surtout, besoin de réaliser ses projets plutôt que ceux des autres. Depuis toujours, la majorité des entreprises en France, toutes tailles confondues, sont familiales; et de plus en plus de créations sont le fait de femmes. Ce sont d'ailleurs des entreprises où l'on vit mieux et qui durent plus longtemps que les autres. Aujourd'hui, la création d'une entreprise est plus souvent motivée par le désir d'assurer un travail à ses enfants ou d'échapper à des structures jugées déshumanisantes.`,
        question: "Que permet la structure d'entreprise présentée ?",
        options: [
            { label: "A", text: "De concrétiser des objectifs personnels", isCorrect: true },
            { label: "B", text: "De fonctionner dans un cadre innovant", isCorrect: false },
            { label: "C", text: "De limiter la répartition des gains", isCorrect: false },
            { label: "D", text: "De renforcer les liens entre les générations", isCorrect: false }
        ],
        points: 33,
    },
    {
        id: 39,
        contextText:`Le contrôle, en toute matière, aboutit à pervertir l'action.... Dès qu'une action est soumise à un contrôle, le but profond de celui qui agit n'est plus l'action, mais la prévision du contrôle, la mise en échec des moyens de contrôle. Le contrôle des études n'est qu'un cas particulier et une démonstration éclatante de cette observation très générale. Le diplôme donne à la société un fantôme de garantie, et aux diplómés des fantômes de droits. Le diplômé passe officiellement pour détenir un savoir: il garde toute sa vie ce brevet d'une science momentanée. C'est pour accéder au diplôme qu'on a vu se substituer à la lecture des auteurs, l'usage des résumés, des manuels, des recueils de questions et de réponses toutes faites et autres abominations.`,
        question: "Que soutient l'auteur de ce texte à propos du contrôle?",
        options: [
            { label: "A", text: "Il contribue à améliorer les méthodes d’apprentissage", isCorrect: false },
            { label: "B", text: "Il est indispensable pour accéder au monde professionnel", isCorrect: false },
            { label: "C", text: "Il permet de certifier les compétences réelles d’un candidat", isCorrect: false },
            { label: "D", text: "Il perturbe le processus d’acquisition des connaissances", isCorrect: true }
        ],
        points: 33,
    },

]

export default questionsData;
