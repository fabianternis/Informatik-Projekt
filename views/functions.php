<?php require_once __DIR__ . '/header.php'; ?>

<div class="page-view">
    <section id="functions-extended">
        <h2>Alle Funktionen</h2>
        <p class="section-intro">Hier ist die komplette Liste an wichtigen JavaScript Funktionen. Serverseitig mit PHP gerendert!</p>
        <table>
            <thead>
                <tr>
                    <th>Funktion / Methode</th>
                    <th>Beschreibung</th>
                    <th>Demo</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($allFunctions as $fn): ?>
                <tr>
                    <td><code><?= htmlspecialchars($fn['title']) ?></code></td>
                    <td><?= htmlspecialchars($fn['desc']) ?></td>
                    <td>
                        <button onclick="openInPlayground('<?= escapeJS($fn['code']) ?>')">Im Playground testen</button>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </section>
</div>

<?php require_once __DIR__ . '/footer.php'; ?>
