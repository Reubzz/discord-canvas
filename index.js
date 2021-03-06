const Canvas = require("canvas");
// Register Bold font
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
// Register KeepCalm font
Canvas.registerFont(`${__dirname}/assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });
// Register BigBOBY Demo Regular Font
Canvas.registerFont(`${__dirname}/assets/fonts/BigBOBYDemoRegular.ttf`, { family: "BigBOBY" })
// Register Awesome Possum Font
Canvas.registerFont(`${__dirname}/assets/fonts/Awesome-Possum-Demo.otf`, { family: "AwesomePossum" })
// Register Franklin Gothic Medium Regular Font
Canvas.registerFont(`${__dirname}/assets/fonts/Franklin-Gothic-Medium-Regular.ttf`, { family: "GothicMed" })
// Register Lean Font
Canvas.registerFont(`${__dirname}/assets/fonts/Lean.otf`, { family: "Lean" })

module.exports.Base = require('./src/greetings/Base');
module.exports.Welcome = require('./src/greetings/Welcome');
module.exports.Goodbye = require('./src/greetings/Goodbye');
module.exports.RankCard = require('./src/rank/Rank');
module.exports.Leaderboard = require('./src/leaderboard/base');
