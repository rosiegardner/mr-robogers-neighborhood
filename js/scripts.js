  function roboBeepBoop(roboInput) {
  let roboOutput = [];
  for (let index = 0; index <= roboInput; index++) {
    if (index.toString().includes("3")) {
      roboOutput.push("Won't you be my neighbor?");
    }
     else if (index.toString().includes("2")) {
      roboOutput.push("Boop!");
    }
     else if (index.toString().includes("1")) {
      roboOutput.push("Beep!");
    } 
    else {
      roboOutput.push(" " + index);
    }
  }
  return roboOutput;
}

$(document).ready(function() {
  $("form#robo-Rogers").submit(function(event) {
    event.preventDefault();
    const roboInput = $("#text-passage").val();
    const roboOutput = roboBeepBoop(roboInput);
    $("#roboger-Output").html(roboOutput);
    $("#roboOutput-hidden").show(roboOutput);
  });
});