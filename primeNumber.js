// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

const checkPrimeNumber = (num) => {
  let factorials = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factorials++;
    }
    console.log(factorials);
  }
  let result =
    factorials === 2
      ? "Provided number is a Prime number"
      : "Provided number is not a Prime";
  return result;
};

checkPrimeNumber(7);
