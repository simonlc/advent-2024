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
  const totalDistance = list1.reduce((acc, item1, index) => {
    const item2 = list2[index];
    return acc + Math.abs(item1 - item2);
  }, 0);
  console.log(totalDistance);
} catch (err) {
  console.log(err);
}
