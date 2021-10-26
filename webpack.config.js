//node.js환경이기 때문에 module.exports, require를 이용한다.
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => { 
  return{
    entry:'./src/main.js', // webpack의 진입점 설정 (객체로 만들면 여러개의 진입점을 만들 수 있다.)
    output:{
      // 두개 모두 생략 가능하다. 
      // path:'', 
      // filename:''
      publicPath: '/',
      clean: true
    },
    module:{
      rules:[
        {
          test: /\.js$/,  // 정규식으로 js파일을 찾는다.
          exclude: /node_modules/, // node_modules폴더에 있는 js파일은 건드리지 않는다. 
          use: 'babel-loader' // 찾은 js 파일을 바벨 로더를 이용하여 바벨을 돌린다. 
        },
        {
          test: /\.s?css$/,
          use:[
            'style-loader',
            'css-loader', // css 확인 및 해석
            'postcss-loader', // 공급업체 접두사 붙이기 (-webkit-)
            'sass-loader' // 먼저 sass 문법인지 확인 및 해석
          ]
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html' // 가져올 html 경로
      }),
      new CopyPlugin({
        patterns: [
          {from: 'static'}
        ]
      })
    ]
  }
}  