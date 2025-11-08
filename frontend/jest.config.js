export default {
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)"  // tells Jest to process axios
  ],
  testEnvironment: "jsdom",
};
