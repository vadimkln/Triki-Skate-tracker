# Triki Skate

Сайт для датчика Triki на скейті: 3D-повтор трюків, розпізнавання, статистика сесії.
Працює в браузері Bluefy на iPhone або в Chrome/Edge на комп'ютері.

## Структура
- `index.html`, `css/app.css` — розмітка і стилі
- `js/main.js` — запуск, з'єднує модулі
- `js/ble.js` — підключення до Triki по Bluetooth
- `js/sensor.js` — розбір пакетів, осі дошки, орієнтація, калібрування
- `js/tricks.js` — пошук і розпізнавання трюків
- `js/session.js` — сесія, статистика, історія
- `js/scene.js` — 3D-сцена, фізика (гравітація, тверда підлога), повтор трюку
- `js/board.js`, `js/textures.js` — модель дошки й текстури асфальту
- `js/ui.js`, `js/gps.js`, `js/demo.js`, `js/math.js`, `js/util.js`
- `vendor/` — three.js r160 (без CDN)
- `models/` — сюди можна покласти свою модель `board.glb`

## Оновлення на GitHub Pages
Upload files → перетягни вміст цієї папки (разом із підпапками) → Commit.
