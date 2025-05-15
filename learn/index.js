console.log("lets start");

let rectangle = {
  length: 4,
  breadth: 3,
  draw: function () {
    console.log("dear lord");
  },
  // draw() {
  //   console.log("dear lord");
  // }
};

//factory function

function create_rect() {
  return rectangle = {
    length: 4,
    breadth: 3,
    draw: function () {
      console.log("dear lord");
    }
  };
  
}
