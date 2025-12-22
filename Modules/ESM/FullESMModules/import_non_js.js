import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };

console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
