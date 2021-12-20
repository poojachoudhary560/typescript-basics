# Typescript

## Typescript adds

- Types
- Next-gen javascript features(compiled down for older browsers)
- Non-JS features like Interfaces or Generics
- Meta-programming features like Decorators
- Rich Configuration Options

Note: TypeScript's type system only helps you during development (i.e before the code gets compiled).

JS is dynamically typed. It is possible to have a variable that is a number then later we cahanged it to string type.
TS is statically typed. That is we define the types of valriables and parameters during development. They don't suddenly change during runtime.
Key Difference: JS uses dynamic types (resolved at runtime), TS uses static types (set during development)

## Core Types

- number
- string
- boolean
- object
- Array
- Tuple
- Enum
- Any

Note: In TS, functions and variables are allowed to have undefined as return type (In functions use void).
let someValue: undefined

```
function printResult(num: number): undefined {
    console.log('Result is: '+num);
    return;
}
```
