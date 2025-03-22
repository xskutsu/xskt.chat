# xskt.chat

A "bring your own token" chat interface for LLMs.

# Credits

xskt.chat is heavily inspired by [t3.chat](https://t3.chat/), but does not use any of its code or assets.

xskt.chat may become obsolete if t3.chat ever offers a free "bring your own token" feature.

Some icons from [game-icons.net](https://game-icons.net/).

# License

xskt.chat is licensed under [AGPL-3.0-or-later](https://www.gnu.org/licenses/agpl-3.0.html).

# Requirements

- Node.js (version >= 20.x)

- pnpm (version 9.x)

# Instructions

0. Install pnpm. (If you haven't already.)

```bash
npm install -g pnpm
```

1. Clone the repository from GitHub.

```bash
git clone https://github.com/xskutsu/xskt.chat.git
cd xskt.chat
```

2. Install dependencies

```bash
pnpm install
```

3. Build xskt.chat with esbuild.

```bash
pnpm run build
```

4. Serve xskt.chat locally.

```bash
pnpm run serve
```

You should now be able to access xskt.chat at [localhost:8000](http://localhost:8000/). Yay!