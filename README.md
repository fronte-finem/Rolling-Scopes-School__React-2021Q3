## Task: [React. Redux][task]

Что должно быть сделано:

1) Создать отдельную ветку для этого задания из ветки с заданием [React-Router][prev]
   - [x] done
2) Установить redux и redux-dev-tools(redux-dev-tools должны быть только в dev сборке)
   - [x] done
3) Сконфигурировать store, и добавить Provider в index.(j|t)sx
   - [x] done
     - для конфигурирования использовал [configureStore][store] из пакета `reduxjs/toolkit`
4) Переместить всю работу с api и данными в redux. Т.е. данные больше не запрашиваются напрямую в компоненте, запрашиваем данные через Actions, и храним в store. В компоненту данные так же попадают из store.
   - [x] done
     - для организации работы с поисковыми-переменными применил [createSlice][slice] из пакета `reduxjs/toolkit`
     - для организации запроса данных использовал [createApi][api-slice] из пакета `reduxjs/toolkit/query`

**!! Перед выполнением задания ознакомьтесь с тем как устроен поток данных в redux, а так же что такое Store, reducer, Action and dispatch !!**

### Оценка

- Задание будет оцениваться ментором в сентябре. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).
  - [x] [Pull Request][pull]
  - [x] [Deploy][deploy]

1) Webpack, eslint, prettier, scripts - **0.5 балла**
2) 2 + 3 + 4 - **14.5 баллов**
Если хоть один из пунктов не выполнен, то задание оценивается в **0 баллов**.

[prev]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-routing.md
[task]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-redux.md
[pull]: https://github.com/fronte-finem/React-RSSchool-2021q3/pull/5
[deploy]: https://fronte-finem.netlify.app/react-redux/
[api]: https://anilist.gitbook.io/anilist-apiv2-docs/

[store]: https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-the-redux-store
[slice]: https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-slice-reducers-and-actions
[api-slice]: https://redux-toolkit.js.org/rtk-query/overview#create-an-api-slice
