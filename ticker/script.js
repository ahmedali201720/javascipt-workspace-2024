(function () {
  const ticket_list_js = document.getElementById("ticket_list_js");
  if (ticket_list_js) {
    const initialWidth = ticket_list_js.scrollWidth;
    const initialPosition = ticket_list_js.getBoundingClientRect().left;
    let index = initialPosition + initialWidth;
    setInterval(() => {
      ticket_list_js.style.transform =
        "translateX(" +
        (ticket_list_js.getBoundingClientRect().left - 1) +
        "px" +
        ")";
      index--;
      if (index === 0) {
        ticket_list_js.style.transform = "translateX(100%)";
        index = initialPosition + initialWidth;
      }
    }, 10);
  }
})();
