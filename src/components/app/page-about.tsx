import React from 'react';
import classes from './page-about.module.pcss';

export function About() {
  return (
    <div className={classes.pageAbout}>
      <div>
        <h2 className={classes.title}>Task</h2>
        <div className={classes.task}>
          <ol>
            <li>
              Создать отдельную ветку для этого задания из ветки с заданием{' '}
              <code>React. API</code> (
              <a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-api.md">
                https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-api.md
              </a>
              )
            </li>
            <li>
              Добавить на страницу header с навигацией.
              <ul>
                <li>
                  Навигация должна включать ссылки: Home(url: &apos;/&apos;),
                  About(url: &apos;/about&apos;).
                </li>
                <li>
                  Создать страницу About(заглушка, пустая страница с
                  каким-нибудь текстом)
                </li>
                <li>
                  Показывать страницу с поиском(сделана в предыдущем задании)
                  если url <code>/</code>, страницу About если url{' '}
                  <code>/about</code>.
                </li>
                <li>
                  Ссылка в навигации должна визуально выделяться, если
                  пользователь находится на странице, которой эта ссылка
                  соответствует.
                </li>
                <li>
                  Переход между Home и About выполняется с анимацией (можно
                  использовать:
                  <a
                    href="http://reactcommunity.org/react-transition-group/css-transition"
                    rel="nofollow">
                    http://reactcommunity.org/react-transition-group/css-transition
                  </a>
                  )
                </li>
              </ul>
            </li>
            <li>
              Создать 404 страницу, которая будет показываться, если
              пользователь ввел url, для которого у нас нет
              инструкций.(Например: &apos;/test-url&apos;, &apos;/ab/cd&apos;,
              &apos;/aboutA&apos; etc.)
            </li>
            <li>
              Создать страницу Details(url: &apos;/details/&lt;id&gt;&apos;)
              <ul>
                <li>
                  Страница отображает детальную информацию об одном из элементов
                  в списке на главной странице(выводим все данные, что знаем в
                  любом формате)
                </li>
                <li>
                  Чтобы попасть на данную страницу, нужно нажать на элемент в
                  списке на главной странице
                </li>
                <li>При перезагрузке страницы данные не должны теряться</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
