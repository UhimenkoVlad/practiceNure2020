### Этот проект был создан для тренировки и пока лишь умеет выводить всплывающее окно с Вашей надписью

## Инструкция для запуска

Шаг 1: Подкачайте нужные библиотеки, используя Ваш менедджер пакетов. К примеру, для Node.js это будет команда "npm i"

Шаг 2: Запустите скрипт "startWebpack" в файлике package.json

Шаг 3: В папке src найдите файл index.html и откройте его, используяя удобный для Вас браузер

Шаг 4: Порадуйтесь! Вы успешно запустили проект. Удачного хакинга :)

## Немного углубимся внутрь 

Данный проект написан с помощью React.js (подробнее что это такое здесь https://ru.reactjs.org/)

React код преобразуется в чистый js, используя Babel (https://babeljs.io/)

Webpack помогает собрать весь js код от Babel в один файлик, размещенный в dist/main.js (Что такое webpack: https://webpack.js.org/;с помощью чего я настраивал babel и Webpack для react: https://habr.com/ru/company/ruvds/blog/436886/)

И наконец Gulp (https://gulpjs.com/). Он мне нужен был, чтобы собрать все свои js файлы в один файл(путь: src/dest/src.min.js). Тоже самое я сделал для css файлов
