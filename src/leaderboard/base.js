const Canvas = require("canvas");
const dummyValues = require('../../assets/dummyValues/LBdata.json');

module.exports = class Greeting {

    constructor() {
        this.Data = dummyValues.data;
        this.color = '#ffffff';
        this.backgroundImage = `${__dirname}/../../assets/img/LBImage.png`;

    }
    
    setData(value) {
        this.username = value;
        return this;
    }
    
    setBackground(value) {
        this.backgroundImage = value;
        return this;
    }
    
    setTextColor(value) {
        this.textColor = value;
        return this;
    }

    async toAttachment() {
        // Create canvas
        const canvas = Canvas.createCanvas(950, 1285);
        const ctx = canvas.getContext("2d");

        let background = await Canvas.loadImage(this.backgroundImage);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Adding Entries
        ctx.font = '36px Lean';
        ctx.fillStyle = this.textColor;

        let gap = 0;
        for(let i=0; i<this.Data.length; i++){
            ctx.fillText(this.Data[i], 100, (62 + gap));
            gap = gap + 132;
        }
        
        return canvas;
    }
};