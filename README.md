# Next.js transpile monorepo problem

## Project setup

- Yarn workspaces
- TypeScript
- [next-transpile-modules](https://github.com/martpie/next-transpile-modules)

## Problem

In development mode: dynamic `import()` is not updated until Next.js server is restarted.

## Reproduction

1. `yarn next`
1. Change `packages/shared/dynamic.ts`
1. Nothing changes
