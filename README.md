# TypeScript Learning Journey

A structured, hands-on repository documenting my progression through TypeScript fundamentals — from type basics to object-oriented patterns and generics. Each file is a focused, self-contained example targeting a single concept.

## Table of Contents

### 1. Fundamentals
- [Type Inference and Type Annotations](src/someBasics/TypeOfInferanceAndTypeOfAnnotations.ts)
- [Primitive and Reference Types](src/someBasics/PrimitiveAndReference.ts)
- [any, unknown, string](src/someBasics/AnyUknownString.ts)
- [Arrays](src/someBasics/Arrays.ts)
- [Tuples](src/someBasics/Tuple.ts)
- [Enums](src/someBasics/enum.ts)
- [Interfaces](src/someBasics/Interface.ts)

### 2. Functions
- [Functions Basics](src/Functions/Functions.ts)
- [Types of Functions](src/Functions/TypesOfFunctions.ts)
- [Optional Parameters](src/Functions/optionalParameter.ts)
- [Default Parameters](src/Functions/DefaultParameter.ts)
- [Rest Parameters](src/Functions/restParameter.ts)
- [Function Overloading](src/Functions/functionOverloading.ts)

### 3. Classes and Objects
- [Constructors](src/ClassesAndObject/constructor.ts)
- [The `this` Keyword](src/ClassesAndObject/ThisKeyword.ts)
- [Access Modifiers](src/ClassesAndObject/AccessModifiers.ts)
- [Getters and Setters](src/ClassesAndObject/GetterAndSetter.ts)
- [Static Members](src/ClassesAndObject/Statis.ts)

### 4. Generics
- [Generics](src/someBasics/generics.ts)

## About This Repository

This repository serves as a personal reference and learning log while working through TypeScript. Topics are organized to reflect a logical learning progression: type system fundamentals first, followed by functions, then object-oriented concepts, and finally generics.

Each file contains isolated, runnable examples with comments explaining the concept being demonstrated. The goal is depth over breadth — understanding *why* a feature exists and when to use it, not just its syntax.

## Project Structure

```
src/
├── someBasics/
│   ├── TypeOfInferanceAndTypeOfAnnotations.ts
│   ├── PrimitiveAndReference.ts
│   ├── AnyUknownString.ts
│   ├── Arrays.ts
│   ├── Tuple.ts
│   ├── enum.ts
│   ├── Interface.ts
│   └── generics.ts
├── Functions/
│   ├── Functions.ts
│   ├── TypesOfFunctions.ts
│   ├── optionalParameter.ts
│   ├── DefaultParameter.ts
│   ├── restParameter.ts
│   └── functionOverloading.ts
└── ClassesAndObject/
    ├── constructor.ts
    ├── ThisKeyword.ts
    ├── AccessModifiers.ts
    ├── GetterAndSetter.ts
    └── Statis.ts
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- TypeScript installed globally or as a dev dependency

### Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

### Running a File

```bash
npx ts-node src/someBasics/Arrays.ts
```

Or compile and run with the TypeScript compiler directly:

```bash
tsc src/someBasics/Arrays.ts
node src/someBasics/Arrays.js
```

## Topics Covered

| Category | Concepts |
|----------|----------|
| Fundamentals | Type inference, type annotations, primitive vs reference types, `any`/`unknown`, arrays, tuples, enums, interfaces |
| Functions | Function types, optional and default parameters, rest parameters, function overloading |
| Classes and Objects | Constructors, `this` keyword, access modifiers, getters/setters, static members |
| Generics | Generic types and functions |


## Author

Maintained by Brijnandan11 as part of an ongoing backend and TypeScript learning roadmap.