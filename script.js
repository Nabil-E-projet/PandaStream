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
window.addEventListener('load', () => {
    // Determine Greeting based on time
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 5;
    const greetingText = isNight ? "Bonsoir Nisrine 🌸" : "Bonjour Nisrine 🌸";

    if (loadingGreeting) {
        loadingGreeting.textContent = greetingText;
    }

    // Also update navbar greeting
    const navGreeting = document.querySelector('.nav-greeting');
    if (navGreeting) {
        navGreeting.textContent = greetingText.replace('🌸', '🐼'); // Keep panda in navbar
    }

    // Minimum display time for the pretty animation (2s)
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        // Enable scrolling after load
        document.body.style.overflow = 'auto';
    }, 2000);
});

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
                <img src="demon-slayer.jpg" class="ep-img" alt="Episode ${ep.num}">
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

// HR Content Data (Comprehensive 6-Module Syllabus)
const hrTopics = [
    {
        id: 'public-constitution',
        icon: '📜',
        title: 'Droit Public',
        summary: 'Constitution & Pouvoirs',
        content: `
            <h3>1. La Constitution (1831)</h3>
            <p>Norme suprême. Organise l'État et garantit les libertés (Titre II).</p>
            <ul>
                <li><strong>Séparation des Pouvoirs</strong> : Législatif (Parlement), Exécutif (Gouv), Judiciaire (Tribunaux).</li>
                <li><strong>État Fédéral</strong> : 3 Régions (Territoire), 3 Communautés (Personnes).</li>
            </ul>

            <h3>2. Organisation des Pouvoirs Publics</h3>
            <ul>
                <li><strong>Le Roi</strong> : Chef de l'État, irresponsable (seing ministériel obligatoire).</li>
                <li><strong>Gouvernement</strong> : Responsable devant la Chambre (Motion de méfiance).</li>
            </ul>
        `
    },
    {
        id: 'admin-responsabilite',
        icon: '⚖️',
        title: 'Resp. de l\'État',
        summary: 'Flandria & Anca',
        content: `
            <h3>1. Principe Général</h3>
            <p>Depuis l'<strong>Arrêt Flandria (1920)</strong>, l'État est responsable de ses fautes comme tout citoyen (Art. 1382 CC).</p>

            <h3>2. Les 3 Conditions</h3>
            <ul>
                <li><strong>Faute</strong> : Erreur de conduite ou illégalité (ex: acte annulé par le CE).</li>
                <li><strong>Dommage</strong> : Matériel ou moral.</li>
                <li><strong>Lien Causal</strong>.</li>
            </ul>
            
            <h3>3. Responsabilité du Judiciaire</h3>
            <p><strong>Arrêt Anca</strong> : L'État est responsable des fautes des magistrats (si autorité de chose jugée n'est pas remise en cause).</p>
        `
    },
    {
        id: 'droit-admin',
        icon: '✍️',
        title: 'Droit Administratif',
        summary: 'Actes & Contentieux',
        content: `
            <h3>1. L'Acte Administratif (AAU)</h3>
            <p>Acte décisoire et unilatéral. Bénéficie du <strong>Privilège du Préalable</strong> (présumé légal tant que non annulé).</p>

            <h3>2. Le Conseil d'État (CE)</h3>
            <ul>
                <li><strong>Annulation</strong> : Rétroactive (Erga Omnes). Pour excès de pouvoir.</li>
                <li><strong>Suspension</strong> : Urgence + Préjudice grave et difficilement réparable.</li>
            </ul>
            
            <h3>3. Principes Généraux (PGD)</h3>
            <p>Bonne administration, Motif, Audition, Impartialité.</p>
        `
    },
    {
        id: 'droit-europeen',
        icon: '🇪🇺',
        title: 'Droit Européen',
        summary: 'Institutions & Primauté',
        content: `
            <h3>1. Institutions UE</h3>
            <ul>
                <li><strong>Commission</strong> : Moteur, propose les lois, gardienne des traités.</li>
                <li><strong>Conseil (Ministres)</strong> : Décide/Vote (souvent avec le Parlement).</li>
                <li><strong>Parlement</strong> : Élu, co-législateur.</li>
                <li><strong>CJUE</strong> : Assure le respect du droit.</li>
            </ul>

            <h3>2. Principes Clés</h3>
            <ul>
                <li><strong>Primauté</strong> (Arrêt Le Ski) : Le droit UE prime sur TOUT droit national (même Constitution).</li>
                <li><strong>Effet Direct</strong> : Invocable par les citoyens devant leur juge.</li>
            </ul>
        `
    },
    {
        id: 'science-po',
        icon: '�',
        title: 'Science Po',
        summary: 'Conjoncture & Partis',
        content: `
            <h3>1. Clivages (Rokkan)</h3>
            <ul>
                <li><strong>Église / État</strong> (Piliers catho vs laïques)</li>
                <li><strong>Possédants / Travailleurs</strong> (Gauche / Droite)</li>
                <li><strong>Centre / Périphérie</strong> (Communautaire FL/FR)</li>
            </ul>

            <h3>2. Système Électoral</h3>
            <p>Proportionnelle (Méthode D'Hondt). Favorise le multipartisme et les coalitions.</p>

            <h3>3. Conjoncture</h3>
            <p>Analyse des rapports de force (Vivaldi, Arizona, montées des extrêmes).</p>
        `
    },
    {
        id: 'rh-public',
        icon: '👮',
        title: 'Management RH',
        summary: 'Fonction Publique',
        content: `
            <h3>1. Statut vs Contrat</h3>
            <ul>
                <li><strong>Statut</strong> : Unilatéral, nommé, carrière stable.</li>
                <li><strong>Contrat</strong> : Relation bilatérale (Loi 1978).</li>
            </ul>

            <h3>2. Droits & Devoirs</h3>
            <ul>
                <li><strong>Neutralité</strong> : Traitement égal des usagers.</li>
                <li><strong>Devoir de réserve</strong> : Prudence dans l'expression des opinions.</li>
            </ul>

            <h3>3. Carrière</h3>
            <p>Recrutement via <strong>SELOR</strong>. Cycle d'évaluation (Planification -> Entretien -> Mention).</p>
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

    hrGrid.innerHTML = hrTopics.map(topic => `
        <article class="hr-card-v2" onclick="openHRModal('${topic.id}')">
            <div class="card-header">
                <span class="card-icon">${topic.icon}</span>
                <h4>${topic.title}</h4>
            </div>
            <div class="card-body">
                <p style="color: #94a3b8; margin-bottom: 1rem;">${topic.summary}</p>
                <span class="read-more">Voir la fiche &rarr;</span>
            </div>
        </article>
    `).join('');
}

// 6. HR Modal Logic
const hrModal = document.getElementById('hrModal');
const hrModalClose = document.getElementById('hrModalClose');
const hrModalTitle = document.getElementById('hrModalTitle');
const hrModalIcon = document.getElementById('hrModalIcon');
const hrModalBody = document.getElementById('hrModalBody');

window.openHRModal = function (id) {
    const topic = hrTopics.find(t => t.id === id);
    if (!topic) return;

    hrModalTitle.textContent = topic.title;
    hrModalIcon.textContent = topic.icon;
    hrModalBody.innerHTML = topic.content;

    hrModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

if (hrModalClose) {
    hrModalClose.addEventListener('click', () => {
        hrModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

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
