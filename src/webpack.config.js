const config = {
  entry: "src/index.js", 
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  }
}

module.exports = config