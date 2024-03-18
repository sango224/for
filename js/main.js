for (var i = 0; i < 5; i++) {
  console.log("ループ" + i + "回目");
}

var items = ["ねこ", "いぬ", "さる"];
for (index in items) {
  console.log(items[index]);
}

var teachers = [
  { name: "山田", age: 25, subject: "国語" },
  { name: "田中", age: 30, subject: "数学" },
  { name: "小林", age: 26, subject: "社会" },
];

for (const teacher of teachers) {
  console.log(`教師名: ${teacher.name}、教科: ${teacher.subject}`);
}
