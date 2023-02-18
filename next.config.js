const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  swcMinify: false,
  trailingSlash: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  env: {
    REACT_APP_CCM_API: String(process.env.REACT_APP_CCM_API || ''),
  },
};
