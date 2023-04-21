module.exports = {
  "**/*.{js,ts,jsx,tsx,scss}": (filenames) => `next lint --fix --file=${filenames.join(",")}`,
}
