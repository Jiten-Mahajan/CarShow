#!/usr/bin/env bash
set -euo pipefail

# Prefer the local Node 20 LTS install when it exists, since Expo SDK 56
# is not happy on Node 26 in this environment.
NODE20="$HOME/.nvm/versions/node/v20.20.2/bin/node"

if [ -x "$NODE20" ]; then
  exec "$NODE20" "$@"
fi

exec node "$@"
