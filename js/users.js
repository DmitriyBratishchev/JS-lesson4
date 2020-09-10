"use strict";

function authenticationUser() {
  let enterLogin = prompt("Введите логин, регистр важен:", "Login");
  let enterPassword = prompt("Введите пароль:", "Password");

  for (let key in listUsers) {
    let person = listUsers[key];
    if (
      enterLogin === person.userLogin &&
      enterPassword === person.userPassword
    ) {
      alert("Здравствуйте, " + person.userName + "!");
      var User = true;
      break;
    }
  }

  if (!User) {
    alert("Вы не зарегестрированны. Возможно вы не учли регистр.");
  }
}

function authenticationUserBrother() {
  let enterLogin = prompt("Введите логин, регистр важен:", "Login");
  let enterPassword = prompt("Введите пароль:", "Password");

  const user = listUsers.find((item) => {
    let result =
      item.userLogin === enterLogin && item.userPassword === enterPassword;
    console.log("result = " + result);
    return result;
  });

  if (user === undefined) {
    alert("Wrong Username or Password");
  } else {
    alert("Здравствуйте, " + user.userName + "!");
  }
}

let listUsers = [
  {
    userName: "Ольга",
    userLogin: "Olga",
    userPassword: "11",
  },
  {
    userName: "Борис",
    userLogin: "Boris",
    userPassword: "22",
  },
  {
    userName: "Виктория",
    userLogin: "Vika",
    userPassword: "33",
  },
  {
    userName: "Дмитрий",
    userLogin: "dima",
    userPassword: "44",
  },
];

for(let value of listUsers){
  console.log(value);
}
