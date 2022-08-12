const fs = require("fs");

const msg = fs.readFileSync(".git/COMMIT_EDITMSG", "utf-8").trim();

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log("git commit fromat need check");
  console.error(`please need suggest fromat`);
} else {
  console.log("git commit checked");
}
