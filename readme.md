# AWS SDK for JavaScript sample app

Demonstrating the TypeScript compilation time of AWS SDK for JavaScript v2 and v3.
Using a set of 17 clients representing a hypothetical user application.

## Compilation

v3 compiles faster than v2.

```
time npx tsc index-v2.ts
       10.32 real        15.96 user         1.14 sys
time npx tsc index-v3.ts
        6.23 real         9.88 user         0.64 sys
```


## Bundling

v3 bundles to a smaller size than v2.

```
npx esbuild index-v2.ts --bundle --outdir=dist --platform=node

  dist/index-v2.js  19.5mb ⚠️

⚡ Done in 199ms
npx esbuild index-v3.ts --bundle --outdir=dist --platform=node

  dist/index-v3.js  6.9mb ⚠️

⚡ Done in 271ms
```


## Execution

```
make run
```

In the contrived sample, v3 is faster than v2. However, I am not
posting numbers here to avoid presenting this as a benchmark.

