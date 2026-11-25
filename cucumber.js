module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    requireModule: ["tsx/cjs"],
    require: ["Stepdefinition/**/*.ts"],
    format: ["progress", "html:reports/cucumber-report.html"]
  }
};
