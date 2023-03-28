module.exports = {
  "**/*.{js,ts,jsx,tsx}": (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(" --file ")}`,
};