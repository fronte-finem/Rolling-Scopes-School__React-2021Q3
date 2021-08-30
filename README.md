## Task: [React. Components][task]

Что должно быть сделано:

1) Создать отдельную ветку для этого задания
   - [x] done
2) Настроить webpack. Использование create-react-app запрещено. Можно использовать любую другую тулу для сборки(vite, rollup, esbuild)
   - [x] webpack
3) Добавить скрипт для prod/dev сборки(в prod должна быть минификация, source-maps и другие оптимизации)
   - [x] `package.json` + `webpack.config.ts`:
     - dev: `npm run dev` (Dev-Server + React-Refresh + Source-Maps)
     - prod: `npm run prod` (Split-Chunks + Css-Minimizer + Image-Minimizer + Source-Maps)
4) Настроить eslint(airbnb или строже), prettier так, чтобы проект не собирался при наличие ошибок.
   - [x] `airbnb-typescript` + `prettier`
   - [x] ESLint-Webpack-Plugin
5) Создать пустой React App и отрисовать следующее на главной странице:
   - Search Bar.
     - [x] done
   - Cards. Чем больше деталей на карточке, тем лучше.
     - [x] done
       - data samples: [Heroes VII - Wiki][wiki]
       - images: [Heroes VII - Official Blog][mmh7]

- Все логические части должны быть вынесены в отдельные компоненты.
  - [x] done
- Компоненты не должны содержать никакой логики, не должно быть запросов к API и роутинга. Просто dumb components.
  - [x] done

### Оценка

- Задание будет оцениваться ментором в сентябре. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).
  - [x] [Pull Request][pull]
  - [x] [Deploy][deploy]

1) Webpack(или vite, rollup, esbuild) + scripts - **4 балла**
2) eslint, prettier - **2 балла**
3) React App + компоненты - **9 баллов**

Если хоть один из пунктов не выполнен, то задание оценивается в **0 баллов**.

[task]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-components.md
[wiki]: https://mightandmagic.fandom.com/wiki/Category:Heroes_VII_creatures
[mmh7]: https://mmh7.ubi.com/en/blog
[pull]: https://github.com/fronte-finem/React-RSSchool-2021q3/pull/1
[pull]: https://fronte-finem.netlify.app/react-components/
[deploy]: https://fronte-finem.netlify.app/react-components/
