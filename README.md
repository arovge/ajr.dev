# ajr.dev
This project is my personal site! It's built using GatsbyJS.

### Installation
The project needs to be cloned and the node modules need to be installed.

``` bash
$ git clone https://github.com/austinrovge/ajr.dev.git
$ cd ajr.dev
$ yarn
```

### Development

##### GitHub API Key
Before doing any development, you'll need to make a personal access token from GitHub and add it to a file named `.env` in the project root directory.

[Here's steps from GitHub on generating your own personal access token.](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) The token you generate doesn't need to have any extra permissions in order to talk to the GitHub GraphQL API.

Make sure you don't commit the access token to a project repository or share it anywhere else.

The `.env` file should define an evironment variable called `GITHUB_PERSONAL_ACCESS_TOKEN` equal to the value of the token generated above.

Example:

```
GITHUB_PERSONAL_ACCESS_TOKEN=12345
```

Hopefully the access token from GitHub will be more complex than the combination on your luggage.

##### Development

Gatsby will build a development version of the site and serve the files out by running:

``` bash
$ yarn start
```

##### Production

A production build can be created and served on port 9000 using:

```bash
$ yarn build
$ yarn serve
```

### Future Development
Below are some rough ideas for the future of this project.

* Projects Page
  * Support for my other webapps running on ajr.dev
  * Filtering projects
* Photography Page
  * Album support
  * Dynamic sizes
* Experience Page
  * More positions
  * Links/images
