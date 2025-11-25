Widget UI — Setup & Development Guide

1) Install dependencies:
npm install

2) Build the production bundle:
npm run build

Vite will compile the project and create the final file inside the dist/ folder.
This file (for example: dist/listkit-mcp-widgets.es.js) is the one used by the MCP server.

3) Run the local development server http://127.0.0.1:4444:
npm run serve

4) Expose the dev server using Cloudflare Tunnel (optional):
cloudflared tunnel run --token <YOUR_TUNNEL_TOKEN>

This makes your local server accessible from a public domain.

*************************
npm run serve
cloudflared tunnel run --token <YOUR_TUNNEL_TOKEN>
*************************
