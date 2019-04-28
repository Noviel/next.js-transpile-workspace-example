# Next.js transpile monorepo problem

## Problem

In development mode: dynamic `import()` is not updated until Next.js server is restarted.

## Reproduction

1. `yarn next`
1. Change `packages/shared/dynamic.ts`
1. Nothing changes
