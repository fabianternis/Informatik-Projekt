<?php
// Global data & Configuration
$allFunctions = [
    [ "title" => "String.prototype.toUpperCase()", "desc" => "Wandelt einen String in Großbuchstaben um.", "code" => "let str = 'hallo';\nconsole.log(str.toUpperCase());" ],
    [ "title" => "String.prototype.toLowerCase()", "desc" => "Wandelt einen String in Kleinbuchstaben um.", "code" => "let str = 'WELT';\nconsole.log(str.toLowerCase());" ],
    [ "title" => "String.prototype.includes()", "desc" => "Prüft, ob ein Teilstring enthalten ist.", "code" => "let txt = 'JS ist super!';\nconsole.log(txt.includes('super'));" ],
    [ "title" => "String.prototype.split()", "desc" => "Zerteilt einen String in ein Array.", "code" => "let list = 'Apfel,Birne,Banane';\nconsole.log(list.split(','));" ],
    [ "title" => "Array.prototype.push()", "desc" => "Fügt ein Element am Ende des Arrays an.", "code" => "let arr = [1, 2];\narr.push(3);\nconsole.log(arr);" ],
    [ "title" => "Array.prototype.pop()", "desc" => "Entfernt das letzte Element aus einem Array.", "code" => "let arr = [1, 2, 3];\narr.pop();\nconsole.log(arr);" ],
    [ "title" => "Array.prototype.filter()", "desc" => "Filtert Array-Elemente nach einer Bedingung.", "code" => "let nums = [1, 5, 10, 15];\nlet big = nums.filter(n => n > 5);\nconsole.log(big);" ],
    [ "title" => "Array.prototype.reduce()", "desc" => "Reduziert das Array auf einen einzigen Wert.", "code" => "let nums = [1, 2, 3, 4];\nlet sum = nums.reduce((a, b) => a + b, 0);\nconsole.log(sum);" ],
    [ "title" => "Math.round()", "desc" => "Rundet eine Zahl auf die nächste Ganzzahl.", "code" => "console.log(Math.round(4.7));\nconsole.log(Math.round(4.3));" ],
    [ "title" => "Math.floor()", "desc" => "Rundet eine Zahl immer ab.", "code" => "console.log(Math.floor(4.9));" ],
    [ "title" => "Math.ceil()", "desc" => "Rundet eine Zahl immer auf.", "code" => "console.log(Math.ceil(4.1));" ],
    [ "title" => "Object.keys()", "desc" => "Gibt alle Schlüsselnamen eines Objekts als Array zurück.", "code" => "let user = {name: 'Anna', age: 20};\nconsole.log(Object.keys(user));" ],
    [ "title" => "Object.values()", "desc" => "Gibt alle Werte eines Objekts als Array zurück.", "code" => "let user = {name: 'Anna', age: 20};\nconsole.log(Object.values(user));" ],
    [ "title" => "JSON.stringify()", "desc" => "Wandelt ein JS-Objekt in einen JSON-String um.", "code" => "let obj = { x: 5, y: 6 };\nconsole.log(JSON.stringify(obj));" ],
    [ "title" => "JSON.parse()", "desc" => "Wandelt einen JSON-String in ein JS-Objekt um.", "code" => "let json = '{\"z\": 10}';\nlet obj = JSON.parse(json);\nconsole.log(obj.z);" ],
    [ "title" => "setInterval()", "desc" => "Wiederholt Code in einem bestimmten Intervall.", "code" => "let i = 0;\nlet id = setInterval(() => {\n  console.log('Tick', ++i);\n  if(i >= 3) clearInterval(id);\n}, 500);" ],
    [ "title" => "fetch()", "desc" => "Lädt Daten von einer API/URL (Netzwerkanfrage).", "code" => "fetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(res => res.json())\n  .then(data => console.log(data));" ]
];

function escapeJS($code) {
    return htmlspecialchars(str_replace(["'", "\n"], ["\\'", "\\n"], $code), ENT_QUOTES, 'UTF-8');
}
