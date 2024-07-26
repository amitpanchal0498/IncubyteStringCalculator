class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/,
      numString = numbers;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      delimiter = new RegExp(parts[0].substring(2));
      numString = parts[1];
    }

    const numArray = numString.split(delimiter);
    const negatives = [];
    const total = numArray.reduce((sum, num) => {
      if (!num) return sum;
      const n = parseInt(num);
      if (n < 0) negatives.push(n);
      return sum + n;
    }, 0);

    if (negatives.length)
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);

    return total;
  }
}

const calculator = new StringCalculator();
console.log(calculator.add(""));
console.log(calculator.add("1"));
console.log(calculator.add("1,5"));
console.log(calculator.add("1\n2,3"));
console.log(calculator.add("//;\n1;2"));

module.exports = StringCalculator;
