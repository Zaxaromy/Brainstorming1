function buttonOnClick() {
  document.addEventListener("DOMContentLoaded", function () {
    const buttonStates: Map<string, boolean> = new Map();

    const buttons = document.querySelectorAll(".color-button");

    buttons.forEach((button) => {
      const buttonId = button.getAttribute("id") || "";

      buttonStates.set(buttonId, false);

      button.addEventListener("click", () => {
        const currentState = buttonStates.get(buttonId) || false;
        buttonStates.set(buttonId, !currentState);

        if (!currentState) {
          button.classList.add("clicked");
        } else {
          button.classList.remove("clicked");
        }
      });
    });
  });
}

export default buttonOnClick;
