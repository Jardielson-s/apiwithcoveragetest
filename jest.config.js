/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    coveragePathIgnorePatterns: ['node_modules'],
    modulePathIgnorePatterns: [],
    watchPathIgnorePatterns: ['node_modules'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    ci: true,
    testMatch: ['**/__tests__/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[j]s?(x)'],
}
