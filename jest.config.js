module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testTimeout: 10000,
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
