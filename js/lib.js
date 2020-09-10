'use strict'

// Запрашивает, обрабатывает, возвращает число или null.
function getNum_or_null(text, byDefault = 0) {
  while (true) {
    var num = prompt(text, byDefault);
    if (num === null) {
      return num;
    }
    num = num.replace(/\s/g, "");
    if (num === "") {
      alert("Вы ничего не ввели");
    } else if (isNaN(Number(num))) {
      alert("Числа вводим цифрами )");
    } else {
      return +num;
    }
  }
}

const Months = ['января','февраля', 'марта', 'апреля', 'мая', 'июня',
                'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

const Days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']                

const hourEndings = {
  lastNum1: '',
  lastNum234: 'а',
  lastNumOther: 'ов',
}

const msEndings = {
  lastNum1: 'а',
  lastNum234: 'ы',
  lastNumOther: '',
}

function getEnding(num, typeEndings) {
  let ending = num.toString().substr(-1);
  if (num === 11 || num === 12 || num === 13 || num === 14) {
    return typeEndings.lastNumOther;
  } else if(ending === '2' || ending === '3' || ending === '4') {
    return typeEndings.lastNum234;
  }else if(ending === '1'){
    return typeEndings.lastNum1;
  } else {
    return typeEndings.lastNumOther;
  }
}