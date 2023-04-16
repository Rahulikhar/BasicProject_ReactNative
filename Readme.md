For Font & icons link cmd
add one config.js file on project 

add fonts on android-app-src-main-asset-fonts

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ["./src/Assets/fonts/"],
};

run this command
npx react-native-asset