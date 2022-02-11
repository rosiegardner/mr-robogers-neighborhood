// Business Logic

function roboBeepBoop(roboInput) {
  let roboOutput = [];
  for (let index = 0; index <= roboInput; index++) {
    if (index.toString().includes("1")) {
      roboOutput.push("Beep!");
    }
     else if (index.toString().includes("2")) {
      roboOutput.push("Boop!");
    }
     else if (index.toString().includes("3")) {
      roboOutput.push("Won't you be my neighbor?");
    } else {
      roboOutput.push(" " + index);
    }
  }
  return roboOutput;
}
     
roboBeepBoop[0,1,2,3,4,5];



  // function roboBeepBoop(roboInput) {
  //   let roboOutput = [];
  //   for (let i = 0; i <= roboInput; i++) {
  //     if (i.toString().includes(1)); {
  //       roboOutput.push("Beep!");
  //     } 
  //     if (i.toString().includes(2)); {
  //       roboOutput.push("Boop!");
  //     } 
  //     if (i.toString().includes(3)); {
  //       roboOutput.push("Won't you be my neighbor?");
  //     }
  //     }
  //     return roboOutput;
  //   }
