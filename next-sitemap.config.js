/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://siaki.co",
  generateRobotsTxt: true,
  autoLastmod: true,
}
