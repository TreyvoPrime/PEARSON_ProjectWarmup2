
function describeRoom(room) {
    if (room === "hallway") {
        return "You are in a long, dimly lit hallway.";
    } 
    else if (room === "kitchen") {
        return "You are standing in a dusty, abandoned kitchen.";
    } 
    else if (room === "storage") {
        return "You are inside a cramped storage room filled with boxes.";
    } 
    else {
        return "This room feels unfamiliar and unsettling.";
    }
}

console.log(describeRoom("hallway"));
console.log(describeRoom("kitchen"));
console.log(describeRoom("storage"));

const exampleNode = {
    image: "./images/hallway.jpg",
    text: "You are in the hallway of a spooky house. There are skeleton remnants of what has happened here.",
    choices: ["Go to the kitchen","Climb to the attic","Enter the storage room"]
};

console.log(exampleNode.image);
console.log(exampleNode.text);
console.log(exampleNode.choices);

const storageNode = {
    image: "./images/storage.jpg",
    text: "You are in a dark storage room filled with old furniture and dust.",
    choices: ["Return to the hallway" ]
};

const atticNode = {
    image: "./images/attic_stairs.webp",
    text: "You are at the attic stairs. The wooden floor creaks beneath your feet.",
    choices: ["Go back downstairs"]
};

const kitchenNode = {
    image: "./images/kitchen.webp",
    text: "You are in the kitchen. Rusted utensils and broken cabinets surround you.",
    choices: ["Return to the hallway"]
};

const storyNodes = [
    exampleNode,
    storageNode,
    atticNode,
    kitchenNode
];

const img = document.getElementById("images");
const scene = document.getElementById("scene");

function displayNode(index) {
    const node = storyNodes[index];

    img.src = node.image;
    scene.textContent = node.text;
}

displayNode(0);  
