import { interpolate, InterpolateData } from "./interpolate";

describe("interpolate", () => {
  test("test cases", () => {
    const testCases: {
      input: string;
      data: InterpolateData;
      expected: string;
    }[] = [
      { input: null as string, data: {}, expected: null as string },
      { input: "", data: {}, expected: "" },
      { input: "[name]", data: null as InterpolateData, expected: "" },
      { input: "[name]", data: { name: "Jim" }, expected: "Jim" },
      {
        input: "[name]",
        data: {},
        expected: "",
      },
      {
        input: "[name] [name]",
        data: { name: "Jim" },
        expected: "Jim Jim",
      },
      {
        input: "[name] [value]",
        data: { name: "Jim", value: 10 },
        expected: "Jim 10",
      },
      {
        input: "[name] [surname]",
        data: { name: "Jim", surname: "Peterson" },
        expected: "Jim Peterson",
      },
      { input: "[[name]]", data: { name: "Jim" }, expected: "[name]" },
      { input: "Hello [name]", data: { name: "Jim" }, expected: "Hello Jim" },
      {
        input: "Hello [name] [[author]]",
        data: { name: "Jim" },
        expected: "Hello Jim [author]",
      },
      {
        input: "Hello [name] [[author]]",
        data: { name: "Jim", author: "Should be ignored" },
        expected: "Hello Jim [author]",
      },
      {
        input: "Before [name] [[author]] After",
        data: { name: "Jim" },
        expected: "Before Jim [author] After",
      },
    ];

    testCases.forEach((testCase) => {
      expect(interpolate(testCase.input, testCase.data)).toBe(
        testCase.expected
      );
    });
  });
});
