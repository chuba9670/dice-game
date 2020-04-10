//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг харуулах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

//Програм эхлэхэд бэлтгэе
window.document.getElementById("score-0").textContent = "0 ";
window.document.getElementById("score-1").textContent = "0 ";
document.getElementById("current-0").textContent = "0 ";
document.getElementById("current-1").textContent = "0 ";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//shoog shideh event listener

document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 dotorh sanamsargui toog gargaj awna
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // shoonii zurgiig gargaj irne
  diceDom.style.display = "block";
  //buusan sanamsargui toond hargalzah shoonii zurgiig gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";
  // buusan too n 1 ylgaatai bol current deer nemne
  if (diceNumber !== 1) {
    //1 ees ylgaatai too buulaa, tuhain toog toglogchid nemj ogno
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 tei tentsu bwl nogoo toglogch ruu shiljine current 0 bolno
    //tuhain toglolton deer tsugluulsan onoo 0 bolno current n
    document.getElementById("current-" + activePlayer).textContent = "0";
    roundScore = 0;
    // herew toglogch ni 0 bwl toglogchiig 1 bolgo
    // ugui bol 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    //ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
  }
});
