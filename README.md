# ajr.dev

This is my personal website. It's built using Zola and served with Cloudflare Pages.

### Development

The project needs to be cloned the repository and have node module downloaded:

```bash
$ git clone https://github.com/austinrovge/ajr.dev.git
$ cd ajr.dev
$ zola serve
```

This will build the project and serve the `public` folder out of port `1111`.


### Deployment

Currently the project is deployed with Cloudflare Pages. A development site is created for each pull request and the production site is updated when that pull request is merged into `main`.
