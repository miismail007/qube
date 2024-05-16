const ordinalNumbers: Array<string> = [];

for (let i = 1; i <= 31; i++) {
  let suffix = "th";
  if (i % 10 === 1 && i !== 11) {
    suffix = "st";
  } else if (i % 10 === 2 && i !== 12) {
    suffix = "nd";
  } else if (i % 10 === 3 && i !== 13) {
    suffix = "rd";
  }
  ordinalNumbers.push(`${i}${suffix}`);
}

export function generateRandomDecimal() {
    let randomDecimal = Math.random() * 9 + 1;
    return parseFloat(randomDecimal.toFixed(2));
}

function returnlength(type:string) {
  if(type === "chars"){
    return 4
  }else if(type === "alphaNumeric"){
    return 6
  }else{
    return 3
  }
}

export function generateRandom(type: string) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let number = "0123456789"
    let result = '';
    for (let i = 0; i < returnlength(type); i++) {
        if(type === 'chars'){
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }else if(type === 'alphaNumeric'){
            result += alphaNumeric.charAt(Math.floor(Math.random() * alphaNumeric.length));
        }else{
          result += number.charAt(Math.floor(Math.random() * number.length));
        }
      
    }
    return result;
}

export function getRandomStatus(statuses: Array<string>) {
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}
export function getRandomDate() {
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ]
    const randomMonthIndex = Math.floor(Math.random() * months.length);
    const randomDateIndex = Math.floor(Math.random() * ordinalNumbers.length);
    return `${ordinalNumbers[randomDateIndex]} ${months[randomMonthIndex]}`;
}