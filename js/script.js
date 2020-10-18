/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const adv = document.querySelectorAll(".promo__adv img");
  const poster = document.querySelector(".promo__bg");
  const genre = poster.querySelector(".promo__genre ");
  const movieList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector("form.add");
  const addInput = addForm.querySelector(".adding__input");
  const checkbox = addForm.querySelector('[type="checkbox"]');

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
      "Джентельмени",
      "Зеленая миля",
    ],
  };

  adv.forEach((item) => {
    item.remove();
  });
  genre.textContent = "драма";
  poster.style.backgroundImage = "url('img/bg.jpg')";

  movieList.innerHTML = "";

  movieDB.movies.sort();

  movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
       <li class="promo__interactive-item">${i + 1} ${film}
       <div class="delete"></div>
        </li>
    `;
  });
});

//console.log(document.body.parentElement);

// const button = document.querySelector(".promo__menu-item ");
// button.addEventListener("click", () => {
//   console.log("click");
//   ("click");
// });

const first = { a: "VETAL", c: "hhh" };
const second = { b: "Shuplat" };
console.log(Object.assign(first, second));
