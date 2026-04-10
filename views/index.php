<?php require_once __DIR__ . '/header.php'; ?>

<div class="page-view">
    <section id="hero">
        <div class="hero-content">
            <h1>JavaScript</h1>
            <h3>
                <div class="interactivity-text">Interaktivität</div> für das Web
            </h3>
            <div class="cta-container">
                <a href="/functions" class="cta-primary">Funktionen</a>
                <a href="/#tutorials" class="cta-secondary">Tutorials</a>
            </div>
        </div>
    </section>

    <section id="functions">
        <h2>Einige Funktionen</h2>
        <p class="section-intro">Ein kurzer Vorgeschmack. Die volle Liste findest du auf der separaten Funktionen-Seite.</p>
        <table>
            <thead>
                <tr>
                    <th>Funktion</th>
                    <th>Beschreibung</th>
                    <th>Demo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>alert()</code></td>
                    <td>Zeigt ein einfaches Informationsfenster an.</td>
                    <td><button onclick="openInPlayground('alert(\'Hallo Welt!\');')">Im Playground testen</button></td>
                </tr>
                <tr>
                    <td><code>prompt()</code></td>
                    <td>Öffnet ein Eingabefeld für den Nutzer.</td>
                    <td><button onclick="openInPlayground('let username = prompt(\'Dein Name:\');\nconsole.log(\'Hallo \' + username);')">Im Playground testen</button></td>
                </tr>
                <tr>
                    <td><code>console.log()</code></td>
                    <td>Gibt Daten in der Konsole aus. <br><small>(Auch: <code>.warn()</code>, <code>.error()</code>)</small></td>
                    <td><button onclick="openInPlayground('console.log(\'Log-Eintrag!\');\nconsole.warn(\'Warnung!\');')">Im Playground testen</button></td>
                </tr>
                <tr>
                    <td><code>Math.random()</code></td>
                    <td>Erzeugt eine zufällige Zahl zwischen 0 und 1.</td>
                    <td><button onclick="openInPlayground('let rnd = Math.random();\nconsole.log(\'Zufallszahl: \' + rnd);')">Im Playground testen</button></td>
                </tr>
                <tr>
                    <td><code>setTimeout()</code></td>
                    <td>Führt Code nach einer bestimmten Wartezeit (in MS) aus.</td>
                    <td><button onclick="openInPlayground('console.log(\'Warte 2 Sekunden...\');\nsetTimeout(() => {\n  console.log(\'Zeit ist um!\');\n}, 2000);')">Im Playground testen</button></td>
                </tr>
                <tr>
                    <td><code>Array.map()</code></td>
                    <td>Wendet eine Funktion auf alle Elemente eines Arrays an.</td>
                    <td><button onclick="openInPlayground('const nummern = [1, 2, 3];\nconst verdoppelt = nummern.map(n => n * 2);\nconsole.log(verdoppelt);')">Im Playground testen</button></td>
                </tr>
                <tr>
                    <td><code>document.getElementById()</code></td>
                    <td>Sucht ein HTML-Element anhand seiner ID.</td>
                    <td><button onclick="openInPlayground('const el = document.getElementById(\'confetti-btn\');\nif(el) console.log(el.innerText);')">Im Playground testen</button></td>
                </tr>
            </tbody>
        </table>
        <div style="text-align: center; margin-top: 30px;">
            <a href="/functions" class="cta-primary" style="font-size: 1.1rem;">Zu allen weiteren Funktionen</a>
        </div>
    </section>

    <section id="tutorials">
        <h2>Tutorials</h2>
        <p class="section-intro">Eine Auswahl an Video-Tutorials und Lernressourcen für den Einstieg in JavaScript.</p>

        <div class="tutorial-scroll">
            <div class="tutorial-card">
                <div class="tutorial-meta">
                    <span class="badge badge-en">🇬🇧 Englisch</span>
                    <span class="badge badge-duration">⏱ 12 Std.</span>
                </div>
                <h3>JavaScript Full Course for free</h3>
                <p>Ein umfassender Vollkurs für Einsteiger – von den Grundlagen bis zu fortgeschrittenen Konzepten wie DOM-Manipulation, Events und asynchronem JavaScript.</p>
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/lfmg-EJ8gm4" title="JavaScript Full Course for free" allowfullscreen loading="lazy"></iframe>
                </div>
            </div>

            <div class="tutorial-card">
                <div class="tutorial-meta">
                    <span class="badge badge-de">🇩🇪 Deutsch</span>
                    <span class="badge badge-duration">⏱ 1,5 Std.</span>
                </div>
                <h3>JavaScript Tutorial – Kompletter Einsteigerkurs</h3>
                <p>Deutschsprachiger Einsteigerkurs: Variablen, Datentypen, Funktionen, Schleifen und mehr – ideal für absolute Anfänger.</p>
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/1y0X1s4csWI" title="JavaScript Tutorial - Kompletter Einsteigerkurs" allowfullscreen loading="lazy"></iframe>
                </div>
            </div>

            <div class="tutorial-card">
                <div class="tutorial-meta">
                    <span class="badge badge-en">🇬🇧 Englisch</span>
                    <span class="badge badge-duration">⏱ 1,25 Std.</span>
                </div>
                <h3>Learn JavaScript in 60 Minutes</h3>
                <p>Kompakter Schnellkurs für Einsteiger – alle wichtigen Konzepte in unter 90 Minuten, mit praktischen Beispielen.</p>
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/voLJ3CmaM1s" title="Learn JavaScript in 60 Minutes" allowfullscreen loading="lazy"></iframe>
                </div>
            </div>
        </div>

        <div class="tutorial-links">
            <p>Weitere Lernressourcen:</p>
            <a href="https://www.w3schools.com/js/" class="resource-link">
                <span>📖</span> W3Schools – JavaScript Tutorial
            </a>
        </div>
    </section>

    <section id="typescript">
        <h2>TypeScript</h2>
        <div class="ts-intro">
            <a href="https://www.typescriptlang.org/" class="ts-logo-link">
                <img src="/assets/img/javascript-logo-svgrepo-com.svg" alt="JavaScript Logo" class="js-logo-img">
                <img src="/assets/img/typescript-logo-svgrepo-com.svg" alt="TypeScript Logo" class="ts-logo-img">
            </a>
            <div class="ts-content">
                <p>
                    <strong>TypeScript</strong> ist eine von Microsoft entwickelte Programmiersprache, die auf JavaScript aufbaut und es um <em>statische Typisierung</em> erweitert. TypeScript-Code wird zu normalem JavaScript kompiliert und läuft damit in jedem Browser und jeder JS-Umgebung.
                </p>
                <h3>Warum TypeScript?</h3>
                <ul>
                    <li><strong>Typsicherheit:</strong> Fehler werden bereits beim Schreiben des Codes erkannt, nicht erst zur Laufzeit.</li>
                    <li><strong>Bessere IDE-Unterstützung:</strong> Autovervollständigung, Refactoring und Fehlererkennung funktionieren zuverlässiger.</li>
                    <li><strong>Skalierbarkeit:</strong> Besonders bei großen Projekten und Teams sorgt TypeScript für klareren, wartbaren Code.</li>
                    <li><strong>Kompatibilität:</strong> Jeder gültige JavaScript-Code ist auch gültiger TypeScript-Code – der Einstieg ist fließend.</li>
                </ul>
                <h3>JavaScript vs. TypeScript</h3>
                <div class="code-compare">
                    <div>
                        <p class="code-label">JavaScript</p>
                        <pre><code>function greet(name) {
  return "Hallo, " + name;
}

greet(42); // kein Fehler!</code></pre>
                    </div>
                    <div>
                        <p class="code-label">TypeScript</p>
                        <pre><code>function greet(name: string): string {
  return "Hallo, " + name;
}

greet(42); // ❌ Fehler: number ≠ string</code></pre>
                    </div>
                </div>
                <h3>Schnellstart</h3>
                <pre><code># TypeScript global installieren
npm install -g typescript

# .ts-Datei kompilieren
tsc meinSkript.ts

# Ergebnis: meinSkript.js</code></pre>
                <p>Mehr Infos auf <a href="https://www.typescriptlang.org/">typescriptlang.org</a>.</p>
            </div>
        </div>
    </section>

    <section id="anderes">
        <h2>Anderes &amp; Ressourcen</h2>
        <p class="section-intro">Nützliche Links, Tools und Communities rund um JavaScript.</p>
        <div class="resource-grid">
            <a href="https://js.org/" class="resource-card">
                <span class="resource-icon">🌐</span>
                <div>
                    <strong>JS.org</strong>
                    <p>Kostenlose js.org-Subdomains für JavaScript-Projekte auf GitHub Pages.</p>
                </div>
            </a>
            <a href="https://developer.mozilla.org/de/docs/Web/JavaScript" class="resource-card">
                <span class="resource-icon">📚</span>
                <div>
                    <strong>MDN Web Docs</strong>
                    <p>Die offizielle Referenz für JavaScript, HTML und CSS – von Mozilla.</p>
                </div>
            </a>
            <a href="https://javascript.info/" class="resource-card">
                <span class="resource-icon">📖</span>
                <div>
                    <strong>javascript.info</strong>
                    <p>Modernes JavaScript-Tutorial – von den Grundlagen bis zu fortgeschrittenen Themen.</p>
                </div>
            </a>
            <a href="https://nodejs.org/" class="resource-card">
                <span class="resource-icon">⚙️</span>
                <div>
                    <strong>Node.js</strong>
                    <p>JavaScript auf dem Server – die Laufzeitumgebung für serverseitiges JS.</p>
                </div>
            </a>
            <a href="https://www.npmjs.com/" class="resource-card">
                <span class="resource-icon">📦</span>
                <div>
                    <strong>npm</strong>
                    <p>Der größte Paketmanager für JavaScript mit über 2 Millionen Paketen.</p>
                </div>
            </a>
            <a href="https://github.com/topics/javascript" class="resource-card">
                <span class="resource-icon">🐙</span>
                <div>
                    <strong>GitHub – JavaScript</strong>
                    <p>Open-Source-JavaScript-Projekte entdecken und zur Community beitragen.</p>
                </div>
            </a>
        </div>
    </section>
</div>

<?php require_once __DIR__ . '/footer.php'; ?>
