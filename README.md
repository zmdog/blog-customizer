# Проектная работа: Вёрстка проекта
тест
## Шаг первый. Изучаем имеющиеся компоненты

[Макет проекта](https://www.figma.com/file/FEeiiGLOsE7ktXbPpBxYoD/Custom-dropdown?type=design&node-id=0%3A1&mode=design&t=eXRJnWC6Xsuw0qR4-1)

Для запуска Storybook выполните:

```
npm run storybook
```

Для запуска линтера для стилей выполните:

```
npm run stylelint
```

Для запуска линтера выполните:

```
npm run lint
```

Для запуска форматтера выполните:

```
npm run format
```

### Функциональные требования

- При нажатии на «стрелку» открывается сайдбар с настройками, при повторном нажатии или клике вне сайдбар закрывается.
- При изменении настроек в сайдбаре они не применяются сразу.
- После нажатия на «применить» стили применяются к статье.
- При нажатии «сбросить» настройки в форме сбрасываются на начальные, которые были при открытии страницы, и стили применяются к статье.
- Настройки устанавливаются через CSS-переменные, которые уже есть в стилях и установлены в коде в дефолтные значения.

## Шаг второй. Реализация формы

Продумайте следующие моменты, прежде чем приступать к коду: 

- как будет организована композиция,
- где вы будете хранить состояние,
- как передавать данные между формой и страницей.

Затем реализуйте механику открытия-закрытия панели с формой, после этого можно будет временно зафиксировать ее пропсом для удобства реализации.

После этого реализуйте форму из имеющихся компонент согласно макету.


## Шаг третий. Обеспечьте передачу данных между формой и страницей

Реализуйте по отдельности сохранение состояния страницы и состояние формы. Обеспечьте применение нового состояния после нажатия на «применить».