var attemp = +prompt("Necha marta urinib kormoqchisiz? min:1.      max:10.");
var colors = [
  "red",
  "blue",
  "white",
  "yellow",
  "green",
  "gray",
  "gold",
  "orange",
];


if (attemp > 0 && attemp <= 10) {
  alert("O`yinni boshlashingiz mumkin. Omad");
  var i = 1;
  var getanswer = ""
  while (attemp >= i) {
    var random = Math.floor(Math.random() * (colors.length));
    var color = colors[random];
    console.log(color.toLocaleLowerCase());
    if (attemp == i) {
      getanswer = "oxirgi urunish"
    } else {
      getanswer = `urunishingiz : ${i}`
    }
    var answ = prompt(`Rangni kiriting!  ${getanswer}`).toLocaleLowerCase();


    if (answ === color.toLocaleLowerCase()) {
      alert("Siz yutdingiz 😎");
      break;
    } else {
      alert("Topa olmadingiz 😕 ");
    }
    i++;
  }
} else {
  alert(
    "Urinishlaringizni boshqattan kiriting. "
  );
}
