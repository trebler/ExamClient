const { EnvironmentPlugin } = require('webpack');
const GitRevisionWebpackPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionWebpackPlugin();

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new EnvironmentPlugin({
        GIT_VERSION: gitRevisionPlugin.version(),
        GIT_COMMIT_HASH: gitRevisionPlugin.commithash(),
        GIT_BRANCH: gitRevisionPlugin.branch()
      })
    ]
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = 'ФФ1 Экзамен';
            return args;
        })
}
};