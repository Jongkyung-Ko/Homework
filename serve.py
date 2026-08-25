#!/usr/bin/env python3
"""Serve this site the same way GitHub Pages does: http://localhost:8080/Homework/"""

from __future__ import annotations

import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
PREFIX = "/Homework"
PORT = int(os.environ.get("PORT", "8080"))


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        if self.path.split("?", 1)[0] in ("/", PREFIX):
            self.send_response(302)
            self.send_header("Location", PREFIX + "/")
            self.end_headers()
            return
        return super().do_GET()

    def translate_path(self, path: str) -> str:
        path = path.split("?", 1)[0]
        if path.startswith(PREFIX + "/") or path == PREFIX:
            path = path[len(PREFIX) :] or "/"
        return super().translate_path(path)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print(f"Homework site: http://localhost:{PORT}{PREFIX}/")
    server.serve_forever()
