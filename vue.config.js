module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/upload/website/' : '/',
  devServer:{
    host: '0.0.0.0',
  }
}