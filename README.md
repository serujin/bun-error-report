# bun-error-report

To reproduce the issue:

```bash
git clone https://github.com/serujin/bun-error-report.git

cd bun-error-report

bun install

bun build --target=bun --production --outdir=dist ./index.ts
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
