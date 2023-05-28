// webpack.development.config.js
const path = require("path");

module.exports = {
    entry: {
      main: "./src/client/js/main.js",
      videoPlayer: "./src/client/js/videoPlayer.js",
    },

    // plugings: {
    //   new MiniCssExtractPlugin({
    //     filename: "css/styles.css",
    //   }),
    // },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "assets"),
        clean: true,
    },
  };
//   var config = {
//     entry: './main.js',

//   };

//   module.exports = {
//     mode: 'production',
//   };
  

//   module.exports = {
//     mode: 'none',
//   };

// module.exports = (env, argv) => {
//     if (argv.mode === 'development') {
//       config.devtool = 'source-map';
//     }
  
//     if (argv.mode === 'production') {
//       //...
//     }
  
//     return config;
//   };