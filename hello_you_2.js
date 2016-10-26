// write a function that prints out "Hello world" in case no argument is being passed in

function hello(name) {
  if (!name) {
    var name = "world";
  }
  console.log("Hello, " + name + "!");
};

hello();
