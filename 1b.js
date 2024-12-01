import fs from "node:fs/promises";

try {
  const data = await fs.readFile("1-input.txt", { encoding: "utf8" });
  const list1 = [];
  const list2 = [];
  data.split("\n").forEach((line) => {
    const [first, second] = line.split("   ");
    if (first && second) {
      list1.push(first);
      list2.push(second);
    }
  });
  list1.sort();
  list2.sort();
  const totalSimilarity = list1.reduce((acc, item1, index) => {
    const count = list2.filter((item) => item === item1).length;
    return acc + item1 * count;
  }, 0);
  console.log(totalSimilarity);
} catch (err) {
  console.log(err);
}
