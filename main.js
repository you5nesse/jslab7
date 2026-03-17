//Exercice 1.1
const fruits = ["pomme", "banane", "poire"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); 
fruits[1] = "kiwi";
console.log(fruits.length); 
//Exercice 1.2
fruits.push("mangue");
const last = fruits.pop();
fruits.unshift("fraise");
const first = fruits.shift();
const quelquesFruits = fruits.slice(0, 2);
fruits.splice(1, 1, "abricot");
console.log({ last, first, fruits, quelquesFruits });
//Exercice 1.3
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}
fruits.forEach(fruit => console.log(`Fruit: ${fruit}`));
//Exercice 1.4
const notes = [12, 8, 17, 5, 14, 19, 10];
const bonifiees = notes.map(n => Math.min(n + 1, 20));
const admissibles = notes.filter(n => n >= 10);
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const premiereFaible = notes.find(n => n < 10);
const aMentionTB = notes.some(n => n >= 18);
const toutesAdmissibles = notes.every(n => n >= 10);
console.log({ bonifiees, admissibles, moyenne, premiereFaible, aMentionTB, toutesAdmissibles });
//Exercice 1.5
const asc = [...notes].sort((a, b) => a - b);
const desc = [...notes].sort((a, b) => b - a);
console.log({ asc, desc });
//Exercice 2.1
const etudiant = {
  prenom: "Lina",
  nom: "Durand",
  age: 21,
  notes: [14, 16, 12],
  moyenne() {
    const s = this.notes.reduce((a, n) => a + n, 0);
    return s / this.notes.length;
  }
};
console.log(etudiant.prenom);
console.log(etudiant["nom"]);
console.log(etudiant.moyenne());
//Exercice 2.2
etudiant.age = 22;
etudiant.filiere = "Informatique"; // ajout
delete etudiant.filiere;            // suppression
console.log(Object.keys(etudiant)); // ["prenom", "nom", "age", "notes", "moyenne"]
//Exercice 2.3
const { prenom, nom, ville = "(inconnue)" } = etudiant;
console.log(`${prenom} ${nom} — ${ville}`);
//Exercice 2.4
const base = { a: 1, b: 2 };
const extension = { b: 3, c: 4 };
const fusion = { ...base, ...extension }; // { a:1, b:3, c:4 }

function pickAB({ a, b, ...reste }) {
  return { a, b, reste };
}
console.log(pickAB({ a: 1, b: 2, c: 3, d: 4 }));
//Exercice 2.5
const o = { x: 10, y: 20 };
console.log(Object.keys(o));   // ["x","y"]
console.log(Object.values(o)); // [10,20]
console.log(Object.entries(o));// [["x",10],["y",20]]
const cop = Object.assign({}, o, { y: 30 });
console.log(cop);
console.log(o.hasOwnProperty("x"));
