import { createContext } from 'react'

export const dictionaries = {
  en: {
    USER_NAME: 'user name',
    MAIN_MENU: 'Main menu',
    DELETE: 'Delete',
    COUNTER: 'Counter',
    FILTERS: 'Filters',
    ARTICLES: 'Articles',
    COMMENTS: 'Comments',
    SELECT_ARTICLE: 'Please select an article',
    LOADING: 'Loading...',
    HIDE_COMMENTS: 'Hide comments',
    SHOW_COMMENTS: 'Show comments',
    SELECT_FIRST_DAY: 'Please select the first day',
    SELECT_LAST_DAY: 'Please select the last day',
    SELECTED_FROM: 'Selected from ',
    SELECTED_TO: ' to ',
    INCREASE: 'Increase',
    USER: 'User',
    COMMENT: 'Comment'
  },
  ru: {
    USER_NAME: 'Имя пользователя',
    MAIN_MENU: 'Главное меню',
    DELETE: 'Удалить',
    COUNTER: 'Счетчик',
    FILTERS: 'Фильтры',
    ARTICLES: 'Статьи',
    COMMENTS: 'Комментарии',
    SELECT_ARTICLE: 'Пожалуйста, выберите статью',
    LOADING: 'Загружается...',
    HIDE_COMMENTS: 'Скрыть комментарии',
    SHOW_COMMENTS: 'Показать комментарии',
    SELECT_FIRST_DAY: 'Выберите первый день',
    SELECT_LAST_DAY: 'Выберите последний день',
    SELECTED_FROM: 'Выбрано с ',
    SELECTED_TO: ' по ',
    INCREASE: 'Увеличить',
    USER: 'Пользователь',
    COMMENT: 'Комментарий'
  }
}

const { Provider, Consumer } = createContext({
  dictionary: dictionaries.ru
})

export { Provider, Consumer }
