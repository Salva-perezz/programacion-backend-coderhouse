console.log(Deno.args);

const envVariable = Deno.env.get("HOME");

console.log(envVariable);
