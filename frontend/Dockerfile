FROM oven/bun:slim

WORKDIR /app

COPY frontend/package.json ./
COPY frontend/bun.lockb ./
COPY frontend/. ./

RUN bun install --frozen-lockfile

CMD bun run start