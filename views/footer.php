        <div id="settings_popover" class="hidden">
            <h3>⚙️ Einstellungen</h3>
            <form id="settings_form">
                <div class="setting-group">
                    <label for="text-font">Text-Schriftart:</label>
                    <select id="text-font">
                        <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Segoe UI</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="'Times New Roman', Times, serif">Times New Roman</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
                    </select>
                </div>
                <div class="setting-group">
                    <label for="code-font">Code-Schriftart:</label>
                    <select id="code-font">
                        <option value="monospace">Standard Monospace</option>
                        <option value="'Courier New', Courier, monospace">Courier New</option>
                        <option value="Consolas, monospace">Consolas</option>
                        <option value="'Fira Code', monospace">Fira Code</option>
                    </select>
                </div>
                <div class="setting-group">
                    <label for="font-size">Schriftgröße: <span id="font-size-val">16px</span></label>
                    <input type="range" id="font-size" min="12" max="24" value="16">
                </div>
                <div class="setting-group">
                    <label for="accent-color">Akzentfarbe:</label>
                    <div style="display:flex; gap:8px; align-items:center;">
                        <input type="color" id="accent-color" value="#f7df1e" style="width:40px;height:32px;padding:2px;cursor:pointer;">
                        <button type="button" id="reset-accent" style="flex:1;font-size:0.8rem;padding:6px 8px;">Zurücksetzen</button>
                    </div>
                </div>
                <div class="setting-group">
                    <label for="bg-color">Hintergrundfarbe:</label>
                    <div style="display:flex; gap:8px; align-items:center;">
                        <input type="color" id="bg-color" value="#1e1e1e" style="width:40px;height:32px;padding:2px;cursor:pointer;">
                        <button type="button" id="reset-bg" style="flex:1;font-size:0.8rem;padding:6px 8px;">Zurücksetzen</button>
                    </div>
                </div>
                <div class="setting-group">
                    <label>
                        <input type="checkbox" id="reduce-motion" style="margin-right:6px;">
                        Animationen reduzieren
                    </label>
                </div>
                <div style="display:flex;gap:8px;margin-top:15px;">
                    <button type="button" id="reset-all-settings" style="flex:1;font-size:0.85rem;">Alles zurücksetzen</button>
                    <button type="button" id="close-settings" class="cta-primary" style="flex:1;">Schließen</button>
                </div>
            </form>
        </div>

        <div id="open-link-popover" class="hidden">
            <h3>🔗 Link öffnen</h3>
            <p id="open-link-url" style="word-break:break-all;color:#aaa;font-size:0.85rem;margin:0 0 15px;"></p>
            <div class="setting-group">
                <label for="open-link-count">Wie oft öffnen?</label>
                <input type="number" id="open-link-count" min="1" max="20" value="1" style="background:#1e1e1e;color:white;border:1px solid #555;padding:8px;border-radius:4px;font-family:inherit;">
            </div>
            <div class="setting-group">
                <label>
                    <input type="checkbox" id="open-link-newtab" checked style="margin-right:6px;">
                    In neuem Tab öffnen
                </label>
            </div>
            <div style="display:flex;gap:8px;margin-top:15px;">
                <button type="button" id="open-link-cancel" style="flex:1;">Abbrechen</button>
                <button type="button" id="open-link-confirm" class="cta-primary" style="flex:1;">Öffnen</button>
            </div>
        </div>
    </main>

    <script src="/assets/script.js"></script>
</body>
</html>
