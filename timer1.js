// Goal: make timer that will take any number of args (numbers) and the alarm will beep after that many seconds
// edge case: no numbers provided: no beep, end immediately
// edge case: input is negative number: ignore / skip
// edge case: input is not a number: ignore / skip

// outline: create for loop to loop through args (any amount), 
// set timers based on time given in seconds (x1000)
// check for invalid inputs before beeping

const timeList = process.argv.slice(2);

for (const time of timeList) {

  const timeInSeconds = parseInt(time) * 1000;


  if (typeof timeInSeconds !== "number" || isNaN(timeInSeconds) || timeInSeconds <= 0) { // !timeInSeconds would ALSO work (solution from @Will Wadman)
  continue;
  }

    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, timeInSeconds);
    
}



// still reads numbers in string quotation as numbers