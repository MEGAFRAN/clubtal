module.exports = {
  "**/*.{js,ts,jsx,tsx,scss}": (filenames) => [
    `next lint --fix --file=${filenames.join(",")}`,
    "npm run lint:scss:fix",
    "npm run lint",
    "prettier --write --ignore-path .gitignore .",
    "npm run test",
  ],
}
