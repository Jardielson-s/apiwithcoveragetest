/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/main/',
        '/config/',
        'app.ts',
        'server.ts',
        'module.ts',
        'enum.ts',
        'interface.ts',
        'dto.ts',
        'schema.ts',
        'database.ts',
        'decorator.ts',
    ],
    modulePathIgnorePatterns: [],
    watchPathIgnorePatterns: ['node_modules'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    ci: true,
    testMatch: ['**/__tests__/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[t]s?(x)'],
    collectCoverageFrom: [
        '**/src/**',
        // '!**/node_modules/**',
        // '!**/coverage/**',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
}
