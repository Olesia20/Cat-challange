function animal() {
  let animalFirst = prompt("Name your favorite animal");
  let animalSecond = prompt(
    "Remember another animal that you also like, but a little less than the previous one."
  );
  let animalThree = prompt(
    "Finally, name a third animal that also attracts you, although less than the two you mentioned above"
  );
  let fullAimals =
    " Test three favorite animals. First animal- " +
    animalFirst +
    " -This is your perception of yourself through the eyes of other people. That is, how do you think your surroundings see you. Second animal- " +
    animalSecond +
    " -This is how others really see you, what they really like about you and what they don't like. Third animal- " +
    animalThree +
    " -This is who you really are 😃 👋 Thank you for viewing the page and good mood 💙💛";
  let h3 = document.querySelector("h3");
  h3.innerHTML = fullAimals;
}

let testButton = document.querySelector(".test");
testButton.addEventListener("click", animal);
