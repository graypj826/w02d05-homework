console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  const $middleEarth = $('<section id="middleEarth"></section>');

  $('body').append($middleEarth);

  for (let i = 0; i < lands.length; i ++){
    const $article = $('<article/>');
    $article.attr('id', lands[i]);
    const $landHeader = $('<h1/>');
    $landHeader.text(lands[i]);
    $article.append($landHeader);
    $middleEarth.append($article);

  }

}

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.

  const $unorderedHobbits = $('<ul/>');
  $('#The-Shire').append($unorderedHobbits)  
  
  for (let i = 0; i < hobbits.length; i++){
    const $demHobbits = $('<li>');
    $demHobbits.text(hobbits[i]);
    $unorderedHobbits.append($demHobbits);
    $demHobbits.attr('id','hobbit');
}
};


// ============
// Chapter 3
// ============



const keepItSecretKeepItSafe = () => {

  const $theRing = $('<div id="theRing"/>');

  $("li:contains('Frodo')").append($theRing);

//$("li").first() works but not as stable as above
};


// ============
// Chapter 4
// ============

const makeBaddies = () => {

const $unorderedBaddies = $("<ul>");
$("#Mordor").append($unorderedBaddies)

for(let i = 0; i < baddies.length; i++){
  const $demBaddies = $("<li></li>")
  $demBaddies.text(baddies[i]);
  $unorderedBaddies.append($demBaddies);
  $demBaddies.attr('id','baddy');
}
};

// ============
// Chapter 5
// ============
const makeBuddies = () => {


const $aside = $('<aside></>');
$("#middleEarth").append($aside);

const $unorderedBuddies = $("<ul></>")
$aside.append($unorderedBuddies)

for(let i = 0; i < buddies.length; i++){
  const $demBuddies = $('<li>');
  $demBuddies.text(buddies[i]);
  $unorderedBuddies.append($demBuddies);
  $demBuddies.attr("class","buddy");
}
};

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  const $travelin = $("#The-Shire").find("ul")
  $("#Rivendell").append($travelin);

};

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  $("li:contains('Strider')").text('Aragorn');
};

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  const $theFellowshipDiv = $("<div id='the-fellowship'></div>")
  const $theFellowshipH1 = $("<h1> the fellowship </h1>")

  $("#middleEarth").append($theFellowshipDiv);

  $theFellowshipDiv.append($theFellowshipH1)
  
  const $hobbitsTravelin = $("#Rivendell").find("ul")
  $theFellowshipDiv.append($hobbitsTravelin);

  const $buddiesTravelin = $("aside").find("ul")
  $theFellowshipDiv.append($buddiesTravelin);

};

// ============
// Chapter 9
// ============
const theBalrog = () => {

  $("li:contains('Gandalf')").text('Gandalf the White');


  $("li:contains('Gandalf')").addClass("the-white");

};

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown

  alert("The Horn of Gondor Is Being Blown!")


  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  $("li:contains('Boromir')").addClass("dead");


  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

  $("li:contains('The Uruk-hai')").remove();

};

// ============
// Chapter 11
// ============

const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  const $frodoTravelin = $("li:contains('Frodo Baggins')")
  
  $("#Mordor").append($frodoTravelin);

  const $samTravelin = $('li:contains("Samwise \'Sam\' Gamgee")')

  $("#Mordor").append($samTravelin);

  // 2. add a div with an id of 'mount-doom' to Mordor

  const $mountDoom = $("<div id='mount-doom'></div>")
  
  $("#Mordor").append($mountDoom)

};

// ============
// Chapter 12
// ============
const weWantsIt = () => {

   const $gollumDiv = $("<div id='gollum'> Gollum </div>");

  $("#theRing").remove();

  $gollumDiv.attr("id", "theRing");
  
  $("#mount-doom").append($gollumDiv);
  
};

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

$("#theRing").remove();

  // 2. remove all the baddies from the DOM

$("#mordor ul").remove();

  // 3. Move all the hobbits back to the shire

// const $mordorHobbits =$("#Mordor #hobbit")

// $("#The-Shire").append($mordorHobbits)

const $hobbits =$("li#hobbit")

$("#The-Shire").append($hobbits)

};


// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
