import { getAll, getById } from "./cosas";

function main() {
  console.log("Todas las cosas:");
  console.log(getAll());

  console.log("Cosa con id 2:");
  console.log(getById(2));
}

main();

