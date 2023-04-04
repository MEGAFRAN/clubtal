module.exports = {
  "**/*.{js,ts,jsx,tsx}": (filenames) => `next lint --fix --file=${filenames.join(",")}`,
}
