await Deno.writeTextFile("test.txt", "Hola desde deno");

const contenido = await Deno.readTextFile("./test.txt");

console.log(contenido);
