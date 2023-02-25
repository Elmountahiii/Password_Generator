const BigR = [1, 3, 5, 7, 9, 11];

const LittleR = BigR.map((item) => {
  return item - 1;
});

console.log(`this is bigR : ${BigR}`);

console.log(`this is little R : ${LittleR}`);
