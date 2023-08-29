/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://jojobon.com",
  generateRobotsTxt: true,
  autoLastmod: true,
}
