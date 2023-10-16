/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://clubtal.dev",
  generateRobotsTxt: true,
  autoLastmod: true,
}
