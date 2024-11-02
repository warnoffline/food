# Food-Client

## Задание

Выбрать тему проекта (Food Client). В рамках ДЗ 3 нужно реализовать: 
- Сетап проекта
- Страницу списка сущностей проекта
- Страницу отображения одной сущности
- Роутинг
- Стили, написанные на css-modules с использованием scss
Запросы к API должны осуществляться с помощью библиотеки axios.

**Требования:** 

- Реализован сетап проекта с подключенным линтером, алиасами
- В проекте соблюдена структура
- Реализована страница списка сущностей с получением данных из API
- Добавлена страница одной сущности с получением данных из API
- Подключен роутинг
- Стили переписаны на css-modules с использованием scss, переменные вынесены в отдельный файл

## Описание

Сайт написан на `Vite React TypeScript`. Использован `react-router-dom` для роутинга, `MobX` в качестве state-manager'а и реализации запросов к API. Также для реализации запросов была использована библиотека `axios`. Для облегчения написания стилей использован препроцессор `sass/scss`.

### Функционал

- Реализована страница со списком сущностей (рецептов) проекта с пагинацией. 

- Реализована страница отоборжаения одной сущности.

- Реализована страница и функционал избранных блюд.

## Локальный запуск

### Предварительные ребования

Перед началом убедитесь, что у вас установлены следующие инструменты:

- [Node.js](https://nodejs.org/en)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Установка репозитория

Скопируйте и запустите команды в директории, откуда вы планируете запустить проект.

```bash
git clone https://github.com/warnoffline/food-client
cd food-client
```

### Запуск локального dev-сервера

Для установки зависимостей: 

```bash
yarn
```

Для запуска локального сервера: 

```bash
yarn dev
```

Данная команда запустит локальный сервер `localhost` на `5173` порте

### Запуск локального сервера через Docker

В терминале выполнить следующую команду: 

```bash
docker-compose up
```

После этого запустится локальный сервер `localhost` на `5173` порте