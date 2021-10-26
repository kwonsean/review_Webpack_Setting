//node.js환경이기 때문에 module.exports, require를 이용한다.
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, options) => { 
  return{
    entry:'./src/main.js', // webpack의 진입점 설정 (객체로 만들면 여러개의 진입점을 만들 수 있다.)
    output:{
      // 두개 모두 생략 가능하다. 
      // path:'', 
      // filename:''
      publicPath: '/'
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html' // 가져올 html 경로
      })
    ]
  }
}  