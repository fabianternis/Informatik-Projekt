<?php require_once __DIR__ . '/header.php'; ?>

<div class="page-view">
    <section id="playground">
        <h2>Developer Playground</h2>

        <p class="section-intro">Schreibe deinen eigenen JavaScript-Code und führe ihn im Browser aus.</p>

        <!-- Erfüllt Kriterium: Trennstrich <hr> -->
        <hr style="border: 1px solid #333; margin: 30px 0;">

        <div class="playground-editor-wrapper">
            <textarea id="playground-code" spellcheck="false" placeholder="// Schreibe JavaScript hier...&#10;console.log('Hallo vom Playground!');"></textarea>
        </div>
        
        <div style="margin-top: 15px; display: flex; gap: 10px;">
            <button id="run-code-btn" class="cta-primary" style="flex: 1; padding: 12px; font-size: 1.1rem;">▶ Code ausführen</button>
        </div>

        <div class="playground-output-wrapper">
            <h4>Console Output:</h4>
            <pre id="playground-out"></pre>
        </div>

        <hr style="border: 1px solid #333; margin: 40px 0;">

        <h3>Tipps & Tricks</h3>
        <!-- Erfüllt Kriterium: Sortierte Liste (nummeriert) -->
        <ol class="styled-list">
            <li>Nutze <code>console.log()</code>, um Werte auszugeben.</li>
            <li>Schreibe <code>confetti()</code> in den Editor und führe es aus!</li>
            <li>Sammle die Easter Eggs oder erstelle eigene Funktionen.</li>
        </ol>

        <div style="text-align: center; margin-top: 20px;">
            <button id="confetti-btn" class="cta-secondary" style="font-size: 0.9rem; padding: 8px 16px;">
                Manueller Confetti Button
            </button>
        </div>
    </section>
</div>

<?php require_once __DIR__ . '/footer.php'; ?>
