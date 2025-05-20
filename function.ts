function getLenght(val: string): string;
function getLenght(val: any[]): number;

function getLenght(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words `;
  }

  return val.length;
}

const numOfWord = getLenght("does this work?");

const numItems = getLenght(["Sport", "Cookies"]);
