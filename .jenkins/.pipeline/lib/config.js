"use strict";
const options = require("pipeline-cli").Util.parseArguments();
const changeId = options.pr; //aka pull-request
const version = "1.0.0";
const name = "jenkins";

const phases = {
  build: {
    namespace: "devex-bcgov-dap-tools",
    name: `${name}`,
    phase: "build",
    changeId: changeId,
    suffix: `-build-${changeId}`,
    instance: `${name}-build-${changeId}`,
    version: `${version}-${changeId}`,
    tag: `build-${version}-${changeId}`
  },
  dev: {
    namespace: "devex-bcgov-dap-tools",
    name: `${name}`,
    phase: "dev",
    changeId: changeId,
    suffix: `-dev-${changeId}`,
    instance: `${name}-dev-${changeId}`,
    version: `${version}-${changeId}`,
    tag: `dev-${version}-${changeId}`
  },
  prod: {
    namespace: "devex-bcgov-dap-tools",
    name: `${name}`,
    phase: "prod",
    changeId: changeId,
    suffix: `-prod`,
    instance: `${name}-prod`,
    version: `${version}`,
    tag: `prod-${version}`
  }
};

// This callback forces the node process to exit as failure.
process.on("unhandledRejection", reason => {
  console.log(reason);
  process.exit(1);
});

module.exports = exports = { phases, options };
