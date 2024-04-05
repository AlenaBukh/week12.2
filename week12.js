//Задание 1
//Выведите в консоль количество символов в тексте.

/*const resultOne = document.querySelector("#resultOne");
const str =
  "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.";
const textlength = str.length;

const make1 = () => {
  resultOne.textContent = textlength;
  console.log(`1. Количество символов в тексте: ${textlength}`);
};
make1();

//Задание 2
//Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.

const resultTwo = document.querySelector("#resultTwo");
const result = str.replace(/;/g, ";\n");

const make2 = () => {
  resultTwo.textContent = result;
  console.log(`2. Текст с переносами строк: \\n ${result}`);
};
make2();

console.log(`3. Текст с удалёнными пробелами: ${substring}`);

//Задание 4
//Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.
const resultFour = document.querySelector("#resultFour");

const newText = result.substring(28, 50);
const make4 = () => {
  resultFour.textContent = newText;
  console.log(`4. Извлечение подстроки: ${newText}`);
};
make4();

console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`
);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

//Задание 12
//Объедините строки str1 и str2. Добавьте слушатель события на кнопку "Задание 12" и выведите результат на экран.

const buttonTwelve = document.querySelector(".b-12");
const resultTwelve = document.querySelector("#resultTwelve");

const makeTwelve = () => {
  const str1 = "Hello, ";
  const str2 = "World!";
  const strTwo = str1 + str2;
  resultTwelve.textContent = strTwo;
};

//Добавьте слушатель события
buttonTwelve.addEventListener("click", makeTwelve);

//Задание 14
//Приведите строку str к нижнему регистру. Добавьте слушатель события на кнопку "Задание 14" и выведите результат на экран.

const buttonFourteen = document.querySelector(".b-14");
const resultFourteen = document.querySelector("#resultFourteen");

const makeFourteen = () => {
  const str = "JavaScript";
  const strLower = str.toLowerCase();
  resultFourteen.textContent = strLower;
};

//Добавьте слушатель события
buttonFourteen.addEventListener("click", makeFourteen);

//Задание 15
//Приведите строку str к верхнему регистру. Добавьте слушатель события на кнопку "Задание 15" и выведите результат на экран.

const buttonFifteen = document.querySelector(".b-15");
const resultFifteen = document.querySelector("#resultFifteen");

const makeFifteen = () => {
  const str = "JavaScript";
  const strUpper = str.toUpperCase();
  resultFifteen.textContent = strUpper;
};

//Добавьте слушатель события
buttonFifteen.addEventListener("click", makeFifteen);

//Задание 16
//Получите подстроку из строки str, начиная с индекса 3 и до конца строки. Добавьте слушатель события на кнопку "Задание 16" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSixteen = document.querySelector(".b-16");
const resultSixteen = document.querySelector("#resultSixteen");

const makeSixteen = () => {
  const str = "JavaScript";
  const strSub = str.substring(3);
  resultSixteen.textContent = strSub;
};

//Добавьте слушатель события
buttonSixteen.addEventListener("click", makeSixteen);

//Задание 18
//Замените все вхождения подстроки 'world' на 'JavaScript' в строке str. Добавьте слушатель события на кнопку "Задание 18" и выведите результат на экран.
//Подсказка: Для замены подстрок в строке используйте метод replace()
const buttonEighteen = document.querySelector(".b-18");
const resultEighteen = document.querySelector("#resultEighteen");

const makeEighteen = () => {
  const str = "Hello, world!";
  const strRepl = str.replace("world", "JavaScript");
  resultEighteen.textContent = strRepl;
};

//Добавьте слушатель события
buttonEighteen.addEventListener("click", makeEighteen);

//Задание 19
//Получите подстроку из строки str, начиная с индекса 7 и длиной 6 символов. Добавьте слушатель события на кнопку "Задание 19" и выведите результат на экран.

const buttonNineteen = document.querySelector(".b-19");
const resultNineteen = document.querySelector("#resultNineteen");

const makeNineteen = () => {
  const str = "Hello, world!";
  const strSub = str.substr(7, 6);
  resultNineteen.textContent = strSub;
};

//Добавьте слушатель события
buttonNineteen.addEventListener("click", makeNineteen);

console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \\n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`
);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);*/

const text = `у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.`;

console.log(`1. Количество символов в тексте: ${text.length}`);

const result = text.replace(/;/g, ";\n");
console.log(`2. Текст с переносами строк: \\n ${result}`);

const substring = result.replace(/\s/g, "");
console.log(`3. Текст с удалёнными пробелами: ${substring}`);

const newText = result.substring(28, 50);
console.log(`4. Извлечение подстроки: ${newText}`);

const replacedText = newText.replace(/клён/g, "дубе");
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

const replacedText3 = result.replace(/клён/g, "дуб");
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`
);

const index = text.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);

let modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
