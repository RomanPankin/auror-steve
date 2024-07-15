# Auror Algorithm Assessment

This is a quick coding exercise to help us understand how you approach a simple programming problem. Provide a simple, readable, but fully correct solution to the following spec:

We'd like you to implement a string interpolation algorithm. It's likely going to be used to format simple messages to be sent to users. It should take a string and a dictionary of values. It will return the input string, but with the dictionary values subsituted into the [] delimited tokens. The algorithm should also treat double brackets as an escape sequence, in case the user wants to include brackets in the output string.

## Submitting

You can submit your code in any language you like. We have provided some example test cases in both C# and Javascript to help explain the functionality of the algorithm. You are welcome to leverage any libraries or features that are built-in to your language of choice, but please avoid the use of third-party libraries (such as underscore in JS)

You must submit your answer as a secret gist. Gists allow for multiple files. **Please do not comment on the gist you are reading right now**, or in any other way make your answer public. **Do not fork this gist, as that will share your answer with other candidates**

Timing: We've tried to keep the exercise small enough to complete in an evening, but we realize everyone's schedule is different. We hope to hear back from you within a few days and you're welcome to send us an email if you have any questions or concerns.

## Example test cases

C#:

```

    // values from the dictionary get substituted into square brackets
    Assert.Equal("Hello Jim", Interpolate("Hello [name]", new Dictionary<string, string>{{"name", "Jim"}}));
    // escape the square brackets by doubling them:
    Assert.Equal("Hello Jim [author]", Interpolate("Hello [name] [[author]]", new Dictionary<string, string>{{"name", "Jim"}}));
```

JS:

```
test('replace a name', () => {
    expect(interpolate('Hello [name]', { 'name': 'Jim' })).toBe('Hello Jim');
});
test('don\'t replace a value when the brackets are escaped', () => {
    expect(interpolate('Hello [name] [[author]]', { 'name': 'Jim' })).toBe('Hello Jim [author]');
});
```

## How to launch

1. Prepare your environment

```
npm install
```

2. Execute unit-tests

```
npm run test
```

<img width="437" alt="image" src="https://github.com/user-attachments/assets/3e832127-7a74-413e-81d2-22c71b50d3ff">

