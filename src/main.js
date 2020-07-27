"use strict";

// Шаблоны для отрисовки.
const createMenuTemplate = () => {
    return (
        `<section class="control__btn-wrap">
        <input
          type="radio"
          name="control"
          id="control__new-task"
          class="control__input visually-hidden"
        />
        <label for="control__new-task" class="control__label control__label--new-task"
          >+ ADD NEW TASK</label
        >
        <input
          type="radio"
          name="control"
          id="control__task"
          class="control__input visually-hidden"
          checked
        />
        <label for="control__task" class="control__label">TASKS</label>
        <input
          type="radio"
          name="control"
          id="control__statistic"
          class="control__input visually-hidden"
        />
        <label for="control__statistic" class="control__label"
          >STATISTICS</label
        >
      </section>`
    );
};

const createFilterTemplate = () => {
    return (
        `<section class="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__all" class="filter__label">
          All <span class="filter__all-count">13</span></label
        >
        <input
          type="radio"
          id="filter__overdue"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__overdue" class="filter__label"
          >Overdue <span class="filter__overdue-count">0</span></label
        >
        <input
          type="radio"
          id="filter__today"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__today" class="filter__label"
          >Today <span class="filter__today-count">0</span></label
        >
        <input
          type="radio"
          id="filter__favorites"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__favorites" class="filter__label"
          >Favorites <span class="filter__favorites-count">1</span></label
        >
        <input
          type="radio"
          id="filter__repeating"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__repeating" class="filter__label"
          >Repeating <span class="filter__repeating-count">1</span></label
        >
        <input
          type="radio"
          id="filter__archive"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__archive" class="filter__label"
          >Archive <span class="filter__archive-count">115</span></label
        >
      </section>`
    );
};

const createButtonTemplate = () => {
    return (
        `<button class="load-more" type="button">load more</button>`
    );
};

const createCardTemplate = () => {
    return (
        `<article class="card card--blue">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example task with custom color.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">16:15</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>`
    );
};

const createSortTemplate = () => {
    return (
        `<div class="board__filter-list">
        <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
        <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
        <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
      </div>`
    );
};

const createBorderTemplate = () => {
  return(
    `<section class="board container">
    <div class="board__tasks"></div>
    </section>`
  );
};


/**
    * Функция отрисовки.
    * @param container - Контейнер, куда будет отрисован элемент.
    * @param template - Элемент, который будет отрисован.
    * @param place - Место, куда будет отрисован. По умолчанию: перед закрытием container. Можно посмотреть подсказку по insertAdjacentHTML.
    */
const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template);
};


// Запросы на получения нужного селектора и отрисовка элементов..
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
// Отрисовка основной части.
render(siteHeaderElement, createMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBorderTemplate());

// Получение основного элемента доски для последющей отрисовки. 
const siteBorderElement = siteMainElement.querySelector(`.board`);
render(siteBorderElement, createSortTemplate(), 'afterbegin');

// Получение элемента доски и отрисовка карточек.
const siteTaskBorderElement = siteBorderElement.querySelector(`.board__tasks`);
render(siteTaskBorderElement, createCardTemplate());
render(siteTaskBorderElement, createCardTemplate());
render(siteTaskBorderElement, createCardTemplate());
// Отрисовка кнопки.
render(siteTaskBorderElement, createButtonTemplate());