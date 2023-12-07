const canvasSketch = require('canvas-sketch');


const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;
    let w = width * 0.1;
    let h = height * 0.1;
    let gap = width * 0.03;
    let iX = width * 0.2;
    let iY = height * 0.2;
    let off = width * 0.17;
    let x, y;
    let r = width * 0.035;


    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        x = iX + (w + gap) * i;
        y = iY + (h + gap) *j;

          context.beginPath();
          context.rect(x, y, w, h);
          context.stroke();   
          if (Math.random() < 0.5){
              context.beginPath();
              context.rect(x + off / 2, y + off / 2, w - off, h - off);
              context.stroke();                 
          }          
        }                          
      }
      
  }
  };


canvasSketch(sketch, settings);
