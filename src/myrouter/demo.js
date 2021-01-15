function demo(a, b) {
  change(a, b);

  return {
    a,
    b,
  };
}

function change(a, b) {
  a.name = "11";
  b.name = "222";
}

const { a, b } = demo(
  { name: "hah" },
  {
    name: "xixi",
  }
);

console.log(a, b);
