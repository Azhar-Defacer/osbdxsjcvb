export default function handler(req, res) {
  const data = `#!/bin/bash

set -e

export GITHUB_SOURCE="v1.2.0"
export SCRIPT_RELEASE="v1.2.0"
export GITHUB_BASE_URL="https://raw.githubusercontent.com/pterodactyl-installer/pterodactyl-installer"

LOG_PATH="/var/log/pterodactyl-installer.log"

if ! [ -x "$(command -v curl)" ]; then
  echo "* curl is required in order for this script to work."
  echo "* install using apt or yum"
  exit 1
fi

echo "Pterodactyl Installer Loaded..."
`;

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Disposition", "inline; filename=installer.sh");
  res.status(200).send(data);
}
