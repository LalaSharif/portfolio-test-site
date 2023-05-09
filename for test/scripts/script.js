document.addEventListener("DOMContentLoaded", () => {
  addLangActive(".lang", ".active");
});

function addLangActive(triggersSelectors, activeClass) {
  const trigger = document.querySelector(triggersSelectors);
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
}
