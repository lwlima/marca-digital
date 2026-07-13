#!/bin/sh
set -e

# Remove stale Astro dev lock from previous container runs.
# Without this, a recycled PID inside Docker can block `astro dev`.
rm -f .astro/dev.json .astro/dev.log

npm ci
exec npm run dev -- --host 0.0.0.0
