module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: {
    REACT_APP_CCM_API: String(process.env.REACT_APP_CCM_API || ''),
  },
};
