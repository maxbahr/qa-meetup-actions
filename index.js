const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('name');
  console.log(`Hello, ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}
