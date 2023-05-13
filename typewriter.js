const sentence = "hello there from lighthouse labs";

const typewriter = function() {
  for (const char of sentence) {
    process.stdout.write(char);
    setTimeout(() => typewriter, 50);
  }
  process.stdout.write("\n");
};

typewriter();