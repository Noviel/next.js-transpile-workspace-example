const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withWorkspaceTranspile = require("./plugins/transpile-workspace-modules");

module.exports = withPlugins([withTypescript, withWorkspaceTranspile]);
