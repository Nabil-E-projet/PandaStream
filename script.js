/* =====================================================
   PANDA STREAM PREMIUM V2 - LOGIC
   ===================================================== */

const episodes = [
    { num: 1, title: "Cruauté", url: "https://video.sibnet.ru/shell.php?videoid=4668241" },
    { num: 2, title: "Le formateur Sakonji Urokodaki", url: "https://video.sibnet.ru/shell.php?videoid=4668280" },
    { num: 3, title: "Sabito et Makomo", url: "https://video.sibnet.ru/shell.php?videoid=4668284" },
    { num: 4, title: "Sélection finale", url: "https://video.sibnet.ru/shell.php?videoid=4668287" },
    { num: 5, title: "Ma propre épée", url: "https://video.sibnet.ru/shell.php?videoid=4668289" },
    { num: 6, title: "Le démon des marécages", url: "https://video.sibnet.ru/shell.php?videoid=4668291" },
    { num: 7, title: "Le démon de Muzan Kibutsuji", url: "https://video.sibnet.ru/shell.php?videoid=4668293" },
    { num: 8, title: "L'odeur du sang enchanté", url: "https://video.sibnet.ru/shell.php?videoid=4668298" },
    { num: 9, title: "Le démon de la flèche et le démon de la balle", url: "https://video.sibnet.ru/shell.php?videoid=4668299" },
    { num: 10, title: "Ensemble pour toujours", url: "https://video.sibnet.ru/shell.php?videoid=4668304" },
    { num: 11, title: "Le démon du tambour Kyogai", url: "https://video.sibnet.ru/shell.php?videoid=4668308" },
    { num: 12, title: "Le sanglier berce la maison", url: "https://video.sibnet.ru/shell.php?videoid=4668313" },
    { num: 13, title: "Choses à faire pour l'extérieur", url: "https://video.sibnet.ru/shell.php?videoid=4668320" },
    { num: 14, title: "La maison où réside le démon", url: "https://video.sibnet.ru/shell.php?videoid=4668327" },
    { num: 15, title: "Le Mont Natagumo", url: "https://video.sibnet.ru/shell.php?videoid=4668332" },
    { num: 16, title: "Quelqu'un d'autre assume le relais", url: "https://video.sibnet.ru/shell.php?videoid=4668339" },
    { num: 17, title: "Tu dois maîtriser un seul coup", url: "https://video.sibnet.ru/shell.php?videoid=4668344" },
    { num: 18, title: "Un lien de frères et sœurs", url: "" },
    { num: 19, title: "Hinokami", url: "" },
    { num: 20, title: "Première réunion", url: "" },
    { num: 21, title: "Contre les règles du corps", url: "" },
    { num: 22, title: "Le maître du manoir", url: "" },
    { num: 23, title: "Le pilier de Hashira", url: "" },
    { num: 24, title: "Session de réhabilitation", url: "" },
    { num: 25, title: "Le bras droit du successeur", url: "" },
    { num: 26, title: "Une nouvelle mission", url: "" }
];

// Placeholder for thumbnails (using a reliable anime-style placeholder service or gradient)
const getThumbnailGradient = (num) => {
    // Generate a unique but stable gradient based on episode number
    const hue = (num * 137) % 360;
    return `linear-gradient(45deg, hsl(${hue}, 60%, 20%), hsl(${hue + 40}, 60%, 10%))`;
};

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const loadingGreeting = document.getElementById('loadingGreeting');
const navbar = document.getElementById('navbar');
const modeSwitch = document.getElementById('modeSwitch');
const streamingMode = document.getElementById('streamingMode');
const hrMode = document.getElementById('hrMode');
const episodesGrid = document.querySelector('.episodes-grid-v2');

// 0. Loading Screen Logic
// 0. Loading Screen Logic & Instant Greeting
const setGreeting = () => {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 5;
    const greetingText = isNight ? "Bonsoir Nisrine 🌸" : "Bonjour Nisrine 🌸";

    if (loadingGreeting) loadingGreeting.textContent = greetingText;

    const navGreeting = document.querySelector('.nav-greeting');
    if (navGreeting) navGreeting.textContent = greetingText.replace('🌸', '🐼');
};

// Run immediately (script is likely at end of body)
setGreeting();

const hideLoading = () => {
    if (loadingScreen.classList.contains('fade-out')) return;
    loadingScreen.classList.add('fade-out');
    document.body.style.overflow = 'auto';
};

// Hide when loaded OR after max 3s (fallback for Safari infinite load)
window.addEventListener('load', () => setTimeout(hideLoading, 1500));
setTimeout(hideLoading, 3000); // Safety net

// 1. Navbar Scroll Effect
const videoModal = document.getElementById('videoModal');
const modalClose = document.getElementById('modalClose');
const videoPlayer = document.getElementById('videoPlayer');
const episodeTitle = document.getElementById('episodeTitle');

// 1. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Generate Episode Cards V2
function generateEpisodeCards() {
    episodesGrid.innerHTML = episodes.map(ep => `
        <div class="episode-card-v2" onclick="openEpisode(${ep.num})">
            <div class="ep-img-container" style="width: 100%; height: 100%; position: relative; overflow: hidden;">
                <img src="./demon-slayer.jpg" class="ep-img" alt="Episode ${ep.num}">
                <div class="play-overlay">
                    <span>▶</span>
                </div>
            </div>
            <div class="ep-info">
                <span class="ep-num">ÉPISODE ${ep.num}</span>
                <h4 class="ep-title">${ep.title}</h4>
            </div>
        </div>
    `).join('');
}

// HR Content Data (Super Detailed & Explicit Syllabus)
const hrTopics = [
    {
        id: 'public-constitution',
        icon: '📜',
        title: 'Droit Public',
        summary: 'Constitution & Pouvoirs',
        content: `
            <h3>1. La Constitution Belge (1831)</h3>
            <p>Elle est la norme suprême. Elle fonde la Belgique en tant que monarchie constitutionnelle parlementaire.</p>
            <ul>
                <li><strong>Article 33</strong> : "Tous les pouvoirs émanent de la Nation." (Souveraineté nationale).</li>
                <li><strong>Titre II</strong> : Les droits fondamentaux (Liberté d'expression, de culte, de presse...). Ils sont inviolables.</li>
            </ul>

            <h3>2. La Séparation des Pouvoirs (Montesquieu)</h3>
            <ul>
                <li><strong>Législatif</strong> (Faire la loi) : Parlement Fédéral (Chambre + Sénat) et le Roi.</li>
                <li><strong>Exécutif</strong> (Appliquer la loi) : Le Roi et son Gouvernement.</li>
                <li><strong>Judiciaire</strong> (Trancher les litiges) : Cours et Tribunaux (Indépendants).</li>
            </ul>

            <h3>3. Le Fédéralisme Belge (1993)</h3>
            <p>La Belgique est un État fédéral complexe divisé en deux types d'entitées fédérées :</p>
            <ul>
                <li><strong>3 Communautés</strong> (Liées aux PERSONNES : Langue, Culture, Enseignement) : Française, Flamande, Germanophone.</li>
                <li><strong>3 Régions</strong> (Liées au SOL : Économie, Environnement, Transport) : Wallonne, Flamande, Bruxelles-Capitale.</li>
            </ul>
        `
    },
    {
        id: 'admin-responsabilite',
        icon: '⚖️',
        title: 'Resp. de l\'État',
        summary: 'Arrêt Flandria & Conditions',
        content: `
            <h3>1. Le Tournant : Arrêt Flandria (1920)</h3>
            <p>Avant 1920, l'État était "irresponsable" (Le Roi ne peut mal faire). La Cour de Cassation a renversé ce principe : l'État est responsable de ses fautes comme n'importe quel citoyen (sur base de l'art. 1382 du Code Civil).</p>

            <h3>2. Les 3 Conditions Cumulatives</h3>
            <div class="tip-box">Pour engager la responsabilité de l'État, il faut prouver :</div>
            <ul>
                <li><strong>1. La Faute</strong> : Un comportement qu'une autorité "normalement prudente et diligente" n'aurait pas eu (erreur, illégalité, négligence).</li>
                <li><strong>2. Le Dommage</strong> : Il doit être certain (pas hypothétique) et personnel (moral ou matériel).</li>
                <li><strong>3. Le Lien Causal</strong> : Sans la faute, le dommage ne se serait pas produit (Théorie de l'équivalence des conditions).</li>
            </ul>

            <h3>3. Cas Spéciaux</h3>
            <p><strong>Arrêt Anca</strong> : L'État peut même être responsable d'une faute commise par un magistrat (Pouvoir Judiciaire) !</p>
        `
    },
    {
        id: 'droit-admin',
        icon: '✍️',
        title: 'Droit Administratif',
        summary: 'AAU, Privilèges & Conseil d\'État',
        content: `
            <h3>1. L'Acte Administratif Unilatéral (AAU)</h3>
            <p>C'est l'outil principal de l'administration. Il est :</p>
            <ul>
                <li><strong>Décisoire</strong> : Il modifie l'ordonnancement juridique (crée des droits/obligations).</li>
                <li><strong>Unilatéral</strong> : Il s'impose sans le consentement du destinataire.</li>
            </ul>

            <h3>2. Les Privilèges de l'Administration</h3>
            <ul>
                <li><strong>Privilège du Préalable</strong> : L'acte est présumé légal. Le citoyen doit d'abord obéir, et contester ensuite.</li>
                <li><strong>Privilège de l'Exécution d'Office</strong> : L'administration peut utiliser la force pour faire exécuter un acte (ex: évacuation) sans passer par un juge, mais uniquement en cas d'urgence ou de loi spécifique.</li>
            </ul>
            
            <h3>3. Le Conseil d'État (CE)</h3>
            <p>La juridiction suprême administrative. Deux recours principaux :</p>
            <ul>
                <li><strong>Recours en Annulation</strong> : L'acte illégal disparaît rétroactivement (comme s'il n'avait jamais existé). Délai : 60 jours.</li>
                <li><strong>Recours en Suspension</strong> : Gel provisoire de l'acte. Il faut prouver l'<strong>Urgence</strong> (péril imminent) et un <strong>Moyen Sérieux</strong> (doute sur la légalité).</li>
            </ul>
        `
    },
    {
        id: 'droit-europeen',
        icon: '🇪🇺',
        title: 'Droit Européen',
        summary: 'Institutions & Sources',
        content: `
            <h3>1. Distinction Fondamentale</h3>
            <div class="tip-box">
                Ne pas confondre <strong>Conseil de l'Europe</strong> (CEDH, Strasbourg, Droits de l'Homme) et <strong>Union Européenne</strong> (Bruxelles, Éco/Pol).
            </div>

            <h3>2. Le Triangle Institutionnel de l'UE</h3>
            <ul>
                <li><strong>Commission Européenne</strong> (Bruxelles) : Représente l'intérêt général de l'UE. "Moteur" de l'intégration, elle a le monopole de l'initiative législative.</li>
                <li><strong>Conseil de l'UE</strong> (Bruxelles) : Représente les États membres (Ministres). Co-législateur.</li>
                <li><strong>Parlement Européen</strong> (Strasbourg/Bxl) : Représente les citoyens (Députés élus). Co-législateur et contrôle budgétaire.</li>
            </ul>

            <h3>3. Les Sources du Droit (Droit Dérivé)</h3>
            <ul>
                <li><strong>Le Règlement</strong> : Obligatoire dans tous ses éléments, directement applicable (effet immédiat). C'est une "Loi Européenne".</li>
                <li><strong>La Directive</strong> : Fixe un objectif à atteindre mais laisse le choix des moyens aux États (nécessite une transposition en droit national).</li>
            </ul>
        `
    },
    {
        id: 'science-po',
        icon: '🗳️',
        title: 'Science Po',
        summary: 'Clivages & Conjoncture',
        content: `
            <h3>1. Les Clivages de Stein Rokkan</h3>
            <p>La politique belge est structurée par 3 conflits historiques majeurs :</p>
            <ul>
                <li><strong>Église / État</strong> (Philosophique) : A donné naissance au monde Catholique vs Libéral/Socialiste. (Guerre scolaire).</li>
                <li><strong>Possédants / Travailleurs</strong> (Socio-économique) : Le clivage Gauche (PS/Vooruit) contre Droite (MR/N-VA). Redistributif vs Libéral.</li>
                <li><strong>Centre / Périphérie</strong> (Communautaire) : Le conflit Flamands vs Francophones. A mené au Fédéralisme.</li>
            </ul>

            <h3>2. Le Système Électoral</h3>
            <p>La Belgique utilise la <strong>Représentation Proportionnelle</strong> (Méthode D'Hondt).<br>
            Conséquence : Aucun parti n'a jamais la majorité absolue (50%+1), ce qui oblige à former des <strong>Coalitions</strong> (Gouvernements de compromis).</p>

            <h3>3. La Particratie</h3>
            <p>Le pouvoir réel en Belgique réside souvent chez les présidents de partis, qui décident des coalitions et des ministres, réduisant le rôle du Parlement.</p>
        `
    },
    {
        id: 'rh-public',
        icon: '👮',
        title: 'Management RH',
        summary: 'Statut vs Contrat',
        content: `
            <h3>1. La Dualité du Personnel</h3>
            <ul>
                <li><strong>Le Statutaire</strong> (Fonctionnaire) : Il est dans une situation légale et réglementaire. Il est "nommé" par un acte unilatéral. Son statut peut être modifié unilatéralement par l'autorité.</li>
                <li><strong>Le Contractuel</strong> : Il a signé un contrat de travail (Loi 1978). Sa situation est figée par le contrat.</li>
            </ul>

            <h3>2. Droits et Devoirs (Déontologie)</h3>
            <ul>
                <li><strong>Devoir de Neutralité</strong> : Traiter les usagers sans discrimination, quelles que soient leurs convictions.</li>
                <li><strong>Devoir de Réserve</strong> : Le fonctionnaire peut avoir des opinions politiques, mais doit être prudent dans leur expression publique pour ne pas entacher la confiance en l'administration.</li>
                <li><strong>Devoir d'Obéissance hiérarchique</strong> : Sauf si l'ordre est manifestement illégal.</li>
            </ul>

            <h3>3. Le Cycle de l'Évaluation</h3>
            <p>Pour les statutaires, l'évaluation est obligatoire (Arrêté Royal).</p>
            <ol>
                <li>Entretien de <strong>Planification</strong> (Fixer les objectifs).</li>
                <li>Entretien de <strong>Fonctionnement</strong> (Mi-parcours).</li>
                <li>Entretien d'<strong>Évaluation</strong> (Mention : Exceptionnel, Répond aux attentes, À améliorer, Insuffisant).</li>
            </ol>
            <div class="tip-box">2 évaluations "Insuffisant" consécutives peuvent mener au licenciement pour inaptitude professionnelle !</div>
        `
    }
];

// 3. Mode Toggle Logic
function toggleMode() {
    const isStreaming = !hrMode.classList.contains('hidden');

    if (isStreaming) {
        // Go to Streaming
        hrMode.classList.add('hidden');
        streamingMode.classList.remove('hidden');
        modeSwitch.querySelector('.switch-label').textContent = 'Mode Révision';
        modeSwitch.querySelector('.switch-icon').textContent = '🎓';
        window.scrollTo(0, 0);
    } else {
        // Go to HR
        streamingMode.classList.add('hidden');
        hrMode.classList.remove('hidden');
        modeSwitch.querySelector('.switch-label').textContent = 'Retour Streaming';
        modeSwitch.querySelector('.switch-icon').textContent = '🎬';
        window.scrollTo(0, 0);
    }
}

modeSwitch.addEventListener('click', toggleMode);

// 5. Generate HR Cards
function generateHRCards() {
    const hrGrid = document.querySelector('.hr-grid-v2');
    if (!hrGrid) return;

    hrGrid.innerHTML = hrTopics.map((topic, index) => `
        <article class="hr-card-v2" onclick="openHRModal('${topic.id}')" style="animation-delay: ${index * 100}ms; opacity: 0; animation: fadeUp 0.5s ease forwards ${index * 100}ms;">
            <div class="card-header">
                <span class="card-icon">${topic.icon}</span>
                <h4>${topic.title}</h4>
            </div>
            <div class="card-body">
                <p>${topic.summary}</p>
                <div class="read-more">CONSULTER &rarr;</div>
            </div>
        </article>
    `).join('');
}

// 6. HR Modal Logic
// 6. Holo-Reader Logic (New Interactive System)
const holoReader = document.getElementById('holoReader');
const readerTitle = document.getElementById('readerTitle');
const readerContent = document.getElementById('readerContent');

// Replaces openHRModal to use the new Reader
window.openHRModal = function (id) {
    const topic = hrTopics.find(t => t.id === id);
    if (!topic) return;

    readerTitle.textContent = "DOSSIER: " + topic.title;
    readerContent.innerHTML = topic.content;

    holoReader.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

window.closeHoloReader = function () {
    holoReader.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
};

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && holoReader.classList.contains('active')) {
        closeHoloReader();
    }
});

// 4. Video Modal Logic
window.openEpisode = function (num) {
    const ep = episodes.find(e => e.num === num);
    episodeTitle.textContent = `${ep.num}. ${ep.title}`;
    const videoContainer = document.querySelector('.modal-video-container');

    // Remove existing messages
    const existingMsg = document.getElementById('no-video-msg');
    if (existingMsg) existingMsg.remove();

    if (ep.url) {
        videoPlayer.style.display = 'block';
        videoPlayer.src = ep.url;
    } else {
        videoPlayer.style.display = 'none';
        videoPlayer.src = "";

        // Show funny message
        const msg = document.createElement('div');
        msg.id = 'no-video-msg';
        msg.style.cssText = `
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            padding: 2rem;
            background: #111;
        `;

        msg.innerHTML = `
            <div style="font-size: 4rem; margin-bottom: 1rem;">🐼</div>
            <p style="font-size: 1.2rem; line-height: 1.6; max-width: 600px;">
                "Déjà si t'as regardé tout ça wow mdrrrrr <br>
                dis le moi et je mets la suite de la saison et les autres saison si tu veux"
            </p>
        `;
        videoContainer.appendChild(msg);
    }

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop scrolling
};

modalClose.addEventListener('click', () => {
    videoModal.classList.remove('active');
    videoPlayer.src = ""; // Stop video
    document.body.style.overflow = '';
});

// Scroll to episodes from hero button
window.scrollToEpisodes = function () {
    document.getElementById('episodesSection').scrollIntoView({
        behavior: 'smooth'
    });
};

// Secret Shortcut (Ctrl+H)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'h') {
        e.preventDefault();
        toggleMode();
    }
    if (e.key === 'Escape') {
        videoModal.classList.remove('active');
        videoPlayer.src = "";
        document.body.style.overflow = '';
    }
});

// Init
generateEpisodeCards();
generateHRCards();
