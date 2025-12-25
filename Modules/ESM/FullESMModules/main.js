import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";

// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";

import randomSquare from "./modules/square.js";

import { default as randomSquare } from "./modules/square.js";

import { Square } from "./modules/square.js";

const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);

const square2 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square2.draw();
square2.reportArea();
square2.reportPerimeter();

const squareBtn = document.querySelector(".square");
