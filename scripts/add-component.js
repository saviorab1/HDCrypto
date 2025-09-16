#!/usr/bin/env node

// Simple script to help add shadcn/ui components
// Usage: npm run add-component <component-name>

const componentName = process.argv[2];

if (!componentName) {
  console.log("Usage: npm run add-component <component-name>");
  console.log("Example: npm run add-component input");
  process.exit(1);
}

console.log(`To add the ${componentName} component, run:`);
console.log(`npx shadcn@latest add ${componentName}`);
console.log("");
console.log("Available components:");
console.log("- button (already added)");
console.log("- card (already added)");
console.log("- input");
console.log("- label");
console.log("- form");
console.log("- dialog");
console.log("- dropdown-menu");
console.log("- navigation-menu");
console.log("- table");
console.log("- badge");
console.log("- avatar");
console.log("- and many more...");
console.log("");
console.log("Visit https://ui.shadcn.com/docs/components for full list");
