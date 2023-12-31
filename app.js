const Bill_amount = document.querySelector("#bill_amount");
const cash_given = document.querySelector("#cash_given");
const check_button = document.querySelector("#check_button");
const msg = document.querySelector("#error_msg");
const no_of_Notes = document.querySelectorAll(".no_of_notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

check_button.addEventListener("click", () => {
  hideMessage();
  if (Bill_amount.value > 0) {
    if ( parseInt(cash_given.value)>= parseInt (Bill_amount.value)) {
      const amountToBeReturned = cash_given.value - Bill_amount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    no_of_Notes[i].innerText = numberofNotes;
  }
}

function hideMessage() {
  msg.style.display = "none";
}

function showMessage(message) {
    msg.style.display = "block";
  console.log(msg);
  msg.innerText = message;
}
