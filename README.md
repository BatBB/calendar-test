# CalendarBlock

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Task

Средствами Angular реализовать компонент для SPA приложение формирующего отбражение строковых блоков в виде календарного дня, либо последовательности чисел.

Структура компонента состоит из блоков равным одному календарному дню (либо числу).

Взаимодействие с блоком (днем или числом):
 • Добавление блока (дня или числа) наведением мышкой на его нижнюю часть появляется «+»

Основные параметры:
 • Последовательность блоков = последовательности календарных дней (чисел)

Пример:
У нас есть последовательность чисел от 1 до 10. Если последовательность соблюдена, то у нас отображаются 10 пронумерованных блоков (как дни на картинке) друг за другом. Если последовательность не соблюдена, к примеру, пропущены числа 2 и 6, то мы должны используя кнопку "+" между блоками добавить их. То есть добавить пропущенный нумерованный блок 2 между 1 и 3 блоком и нумерованный блок 6 между 5 и 7 блоком.
