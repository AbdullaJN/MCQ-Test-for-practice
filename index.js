document.querySelectorAll(".question").forEach((questionBlock) => {
  const correct = questionBlock.dataset.correct;

  questionBlock.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      // Prevent multiple selections
      if (questionBlock.classList.contains("answered")) return;
      questionBlock.classList.add("answered");

      const selectedOpt = option.dataset.opt;

      if (selectedOpt === correct) {
        option.classList.add("correct");
      } else {
        option.classList.add("wrong");
      }

      // Optional: disable further clicking
      questionBlock.querySelectorAll("li").forEach((opt) => {
        opt.style.pointerEvents = "none";
      });
    });
  });
});
