// ticket calculation
function getTicket(ticket, isIncrease) {
  const ticketInput = document.getElementById(ticket + "-amount");
  const ticketCount = parseInt(ticketInput.value);

  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }

  ticketInput.value = ticketNewCount;

  let ticketCountTotal = ticketNewCount;
  if (ticket == "firstClass") {
    ticketCountTotal = ticketNewCount * 150;
  }
  if (ticket == "economyClass") {
    ticketCountTotal = ticketNewCount * 100;
  }

  totalCalculations();
}
// ticket calculation end!

// subtotal, tax, total calculations
function totalCalculations() {
  // subtotal
  const firstClassAmount = getInputValue("firstClass");
  const economyClassAmount = getInputValue("economyClass");

  const totalPrice = firstClassAmount * 150 + economyClassAmount * 100;
  document.getElementById("total-amount").innerText = "$" + totalPrice;

  // tax
  const tax = totalPrice * 0.1;
  document.getElementById("tax").innerText = "$" + tax;

  // grand total
  const grandTotal = totalPrice + tax;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}
function getInputValue(ticket) {
  const ticketInput = document.getElementById(ticket + "-amount");
  const ticketAmount = parseInt(ticketInput.value);
  return ticketAmount;
}

// book btn
const bookBtn = document.getElementById("book-btn");
bookBtn.addEventListener("click", function () {
  const bookingArea = document.getElementById("booking-page");
  bookingArea.style.display = "none";

  const anotherArea = document.getElementById("another-page");
  anotherArea.style.display = "block";
});
