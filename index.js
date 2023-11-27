import { differenceInSeconds } from 'date-fns';
import inquirer from 'inquirer';
const response = await inquirer.prompt({
    type: "number",
    name: "userinput",
    message: "Enter the amount of sec",
    validate: (input) => {
        if (isNaN(input)) {
            return "Enter a number";
        }
        else if (input > 60) {
            return "second must be in 60";
        }
        else {
            return true;
        }
    }
});
let val = response.userinput;
console.log(val);
let input = response.userinput;
function starttime(val) {
    const time = new Date().setSeconds(new Date().getSeconds() + val);
    const intervaltime = new Date(time);
    setInterval(() => {
        const currentTime = new Date();
        const timediff = differenceInSeconds(intervaltime, currentTime);
        if (timediff <= 0) {
            console.log("Timer has expired");
        }
        const minute = Math.floor((timediff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timediff % 60);
        console.log(`${minute}: ${seconds}`);
    }, 1000);
}
starttime(input);
