// jest.config.js
module.exports = {
    verbose: true,
    // this is needed by the unit tests for some reason.
    testURL: "http://localhost:8000/",

   // where to put the code coverage reports.
   "coverageDirectory": "./tests/coverage",

   "coveragePathIgnorePatterns": [
      "./jest",
    ]
};
