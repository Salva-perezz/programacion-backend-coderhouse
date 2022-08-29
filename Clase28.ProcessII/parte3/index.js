const { exec, execFile, spawn } = require("child_process");

/*
exec("ls -lh", (error, stdout, stderr) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  if (stderr) {
    console.error("Stderr", stderr);
  }

  console.log("Stdout", stdout);
});

execFile(__dirname + "/file.sh", (error, stdout, stderr) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  if (stderr) {
    console.error("Stderr", stderr);
  }

  console.log("Stdout", stdout);
});

const child = spawn("find", ["."]);

child.stdout.on("data", (data) => {
  console.log("stdout", data);
});

child.stderr.on("data", (data) => {
  console.log("stderr", data);
});

child.on("error", (error) => {
  console.error("Error", error);
});

child.on("close", (code) => {
  console.log("Child process exited with code", code);
});
*/

const globalScope = "globals";

function logear(string) {
  const upperScope = "hols";
  if (string) {
    const scopeIf = "if";
    console.log(string);
  }

  console.log(scopeIf);
}

console.log(string);
