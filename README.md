## Task: [React. Testing][task]

Что должно быть сделано:

1) Создать отдельную ветку для этого задания из ветки с заданием [React-Redux][prev]
   - [x] done
2) Добавить скрипты в package.json для запуска тестов и для запуска тестов с coverage (ex: `npm run test`, `npm run test:coverage`)
   - [x] done
     - для запуска тестов: `npm run test`
     - для запуска тестов с coverage: `npm run test:cover`
3) Покрыть проект юнит тестами минимум на 60% (т.е. результат npm run `test:coverage` показывает не менее 60% по всем показателям)
   - [x] done
   <details>
     <summary><b>Coverage Report: (<i>click to expand</i>)</b></summary>

   ```text
    > npm test:cover

    -------------------------------------|---------|----------|---------|---------|-------------------
    File                                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
    -------------------------------------|---------|----------|---------|---------|-------------------
    All files                            |   98.09 |    94.88 |   96.89 |   98.15 |
    src                                  |     100 |      100 |     100 |     100 |
    env.ts                               |     100 |      100 |     100 |     100 |
    src/components/app                   |     100 |      100 |     100 |     100 |
    app.tsx                              |     100 |      100 |     100 |     100 |
    main.tsx                             |     100 |      100 |     100 |     100 |
    nav.tsx                              |     100 |      100 |     100 |     100 |
    routes-config.ts                     |     100 |      100 |     100 |     100 |
    test-routes-config.tsx               |     100 |      100 |     100 |     100 |
    src/components/page-404              |     100 |      100 |     100 |     100 |
    page-404.tsx                         |     100 |      100 |     100 |     100 |
    src/components/page-about            |     100 |      100 |     100 |     100 |
    page-about.tsx                       |     100 |      100 |     100 |     100 |
    src/components/page-details          |     100 |      100 |     100 |     100 |
    banner.tsx                           |     100 |      100 |     100 |     100 |
    characters.tsx                       |     100 |      100 |     100 |     100 |
    cover.tsx                            |     100 |      100 |     100 |     100 |
    description.tsx                      |     100 |      100 |     100 |     100 |
    header.tsx                           |     100 |      100 |     100 |     100 |
    media.tsx                            |     100 |      100 |     100 |     100 |
    page-details.tsx                     |     100 |      100 |     100 |     100 |
    trailer.tsx                          |     100 |      100 |     100 |     100 |
    src/components/page-home             |     100 |      100 |     100 |     100 |
    page-home.tsx                        |     100 |      100 |     100 |     100 |
    src/components/page-home/card        |     100 |      100 |     100 |     100 |
    card.tsx                             |     100 |      100 |     100 |     100 |
    cover.tsx                            |     100 |      100 |     100 |     100 |
    title.tsx                            |     100 |      100 |     100 |     100 |
    src/components/page-home/cards       |     100 |      100 |     100 |     100 |
    cards.tsx                            |     100 |      100 |     100 |     100 |
    src/components/page-home/order-by    |     100 |      100 |     100 |     100 |
    get-config.ts                        |     100 |      100 |     100 |     100 |
    order-by-group.tsx                   |     100 |      100 |     100 |     100 |
    order-by.tsx                         |     100 |      100 |     100 |     100 |
    order-state.ts                       |     100 |      100 |     100 |     100 |
    orders-config.ts                     |     100 |      100 |     100 |     100 |
    src/components/page-home/paginator   |     100 |      100 |     100 |     100 |
    button.tsx                           |     100 |      100 |     100 |     100 |
    input-page.tsx                       |     100 |      100 |     100 |     100 |
    paginator.tsx                        |     100 |      100 |     100 |     100 |
    results.tsx                          |     100 |      100 |     100 |     100 |
    selector.tsx                         |     100 |      100 |     100 |     100 |
    utils.ts                             |     100 |      100 |     100 |     100 |
    src/components/page-home/search-bar  |     100 |      100 |     100 |     100 |
    search-bar.tsx                       |     100 |      100 |     100 |     100 |
    src/components/page-test             |     100 |      100 |     100 |     100 |
    page-test.tsx                        |     100 |      100 |     100 |     100 |
    src/components/shared/error-info     |     100 |      100 |     100 |     100 |
    client-error-info.tsx                |     100 |      100 |     100 |     100 |
    error-info.tsx                       |     100 |      100 |     100 |     100 |
    src/components/shared/format         |     100 |      100 |     100 |     100 |
    format.tsx                           |     100 |      100 |     100 |     100 |
    src/components/shared/genres         |     100 |      100 |     100 |     100 |
    genres.tsx                           |     100 |      100 |     100 |     100 |
    src/components/shared/info           |     100 |      100 |     100 |     100 |
    info.tsx                             |     100 |      100 |     100 |     100 |
    src/components/shared/loader         |     100 |      100 |     100 |     100 |
    full-loader.tsx                      |     100 |      100 |     100 |     100 |
    loader.tsx                           |     100 |      100 |     100 |     100 |
    src/components/shared/stats          |     100 |      100 |     100 |     100 |
    stats.tsx                            |     100 |      100 |     100 |     100 |
    src/components/shared/status         |     100 |      100 |     100 |     100 |
    status.tsx                           |     100 |      100 |     100 |     100 |
    src/components/shared/svg            |     100 |      100 |     100 |     100 |
    sprites.tsx                          |     100 |      100 |     100 |     100 |
    svg.tsx                              |     100 |      100 |     100 |     100 |
    src/services/anilist-api             |     100 |      100 |     100 |     100 |
    anilist-api.ts                       |     100 |      100 |     100 |     100 |
    src/services/anilist-api/generated   |     100 |      100 |     100 |     100 |
    schema-types.ts                      |     100 |      100 |     100 |     100 |
    src/services/anilist-api/queries     |   85.07 |    70.31 |   78.57 |   86.15 |
    details-query.graphql                |   85.29 |    68.75 |   78.57 |   86.36 | 8-16,47-48
    search-query.graphql                 |   84.85 |    71.88 |   78.57 |   85.94 | 8-16,47-48
    src/shared                           |     100 |      100 |     100 |     100 |
    country-code.ts                      |     100 |      100 |     100 |     100 |
    dom-utils.ts                         |     100 |      100 |     100 |     100 |
    maybe.ts                             |     100 |      100 |     100 |     100 |
    src/store                            |     100 |      100 |     100 |     100 |
    hooks.ts                             |     100 |      100 |     100 |     100 |
    store.ts                             |     100 |      100 |     100 |     100 |
    src/store/slices                     |     100 |      100 |     100 |     100 |
    search-vars.ts                       |     100 |      100 |     100 |     100 |
    -------------------------------------|---------|----------|---------|---------|-------------------
   ```
   </details>

- Для тестирования используем связки `jest + enzyme` или `jest + react-testing-library`.
  - [x] done
    - `jest`
    - `@testing-library/jest-dom`
    - `@testing-library/react`
    - `@testing-library/react-hooks`
    - `msw` ([mocking api-requests][msw])

### Оценка

- Задание будет оцениваться ментором в сентябре. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).
  - [x] [Pull Request][pull]

1) Webpack, eslint, prettier, scripts - **0.5 балла**
2) 2 + 3 + 4 - **14.5 баллов**
Если хоть один из пунктов не выполнен, то задание оценивается в **0 баллов**.

[prev]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-redux.md
[task]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-testing.md
[pull]: https://github.com/fronte-finem/React-RSSchool-2021q3/pull/6
[deploy]: https://fronte-finem.netlify.app/react-redux/
[api]: https://anilist.gitbook.io/anilist-apiv2-docs/

[msw]: https://mswjs.io/docs/
