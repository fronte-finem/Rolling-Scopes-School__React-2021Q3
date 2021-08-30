## Task: [React. Router][task]

Что должно быть сделано:

1) Создать отдельную ветку для этого задания из ветки с заданием `React. API` (https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-api.md)
  - [x] done
2) Добавить на страницу header с навигацией.
  - Навигация должна включать ссылки: Home(url: '/'), About(url: '/about').
    - [x] done
  - Создать страницу About(заглушка, пустая страница с каким-нибудь текстом)
    - [x] done
  - Показывать страницу с поиском(сделана в предыдущем задании) если url `/`, страницу About если url `/about`.
    - [x] done
  - Ссылка в навигации должна визуально выделяться, если пользователь находится на странице, которой эта ссылка соответствует.
    - [x] done
  - Переход между Home и About выполняется с анимацией (можно использовать: http://reactcommunity.org/react-transition-group/css-transition)
    - [x] done
3) Создать 404 страницу, которая будет показываться, если пользователь ввел url, для которого у нас нет инструкций.(Например: '/test-url', '/ab/cd', '/aboutA' etc.)
   - [x] done
4) Создать страницу Details(url: '/details/${id}')
  - Страница отображает детальную информацию об одном из элементов в списке на главной странице(выводим все данные, что знаем в любом формате)
    - [x] done
  - Чтобы попасть на данную страницу, нужно нажать на элемент в списке на главной странице
    - [x] done
  - При перезагрузке страницы данные не должны теряться
    - [x] done

### Оценка

- Задание будет оцениваться ментором в сентябре. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).
  - [x] [Pull Request][pull]
  - [x] [Deploy][deploy]

1) Webpack, eslint, prettier, scripts - **0.5 балла**
2) 2 + 3 + 4 - **14.5 баллов**
Если хоть один из пунктов не выполнен, то задание оценивается в **0 баллов**.

[prev]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-api.md
[task]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-routing.md
[pull]: https://github.com/fronte-finem/React-RSSchool-2021q3/pull/4
[deploy]: https://fronte-finem.netlify.app/react-routing/
[api]: https://anilist.gitbook.io/anilist-apiv2-docs/
