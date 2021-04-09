function triangle(number) {
  for (let idx = 1; idx <= number; idx++) {
    console.log(' '.repeat(number - idx) + '*'.repeat(idx));
  }
}

triangle(9);