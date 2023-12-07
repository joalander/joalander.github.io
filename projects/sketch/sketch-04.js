//Mini-library Canvas-Sketch to draw
const canvasSketch = require('canvas-sketch');
const random  = require('canvas-sketch-util/random');
const math  = require('canvas-sketch-util/math');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

/*This is an example of ow the animate setting works
  
    const animationExample = () => {
    console.log('Example');
    requestAnimationFrame(animationExample);
    sketch(); 
  }
  animationExample();*/

const animation = () => {

}

const sketch = ({ context, width, height }) => {

  const agents = [];

  for ( let i = 0; i < 40; i++){

    // Variables that contains the position
    const x = random.range(0, width);
    const y = random.range(0, height);

    //Creating the circles
    agents.push(new Agent(x, y));
  }

  return ({ context, width, height }) => {

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    for (i = 0; i < agents.length; i++) {
      const agentLine = agents[i];

      // The condition "j = i +1" is to avoid two lines connected between the sames balls (from 0 to 1 and from 1 to 0)
          for (j = i + 1; j < agents.length; j++) { 
          const other = agents[j];

          const dist = agentLine.pos.getDistance(other.pos);
          
      

          if (dist > 200) continue; // The "continue" instruction says "go to next iteration"

          context.lineWidth = math.mapRange(dist, 0, 200, 12, 1);
         

          context.beginPath();
          context.moveTo(agentLine.pos.x, agentLine.pos.y);
          context.lineTo(other.pos.x, other.pos.y);
          context.stroke();
      }
    }

    // Rendering the circles/animation
    agents.forEach(agent => {
      agent.draw(context);
      agent.update();
      agent.border(width, height);

    });   
  };
};

canvasSketch(sketch, settings);

class Vector {
  constructor(x, y,){
    this.x = x;
    this.y = y;
  }
  getDistance(v) {
    const dx = this.x - v.x; 
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}



// Class to stablish the propieties of the circles
class Agent {
  constructor(x, y,) {
    this.pos = new Vector(x, y);
    this.speed = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = random.range(4, 12 );
  }

  border(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.speed.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.speed.y *= -1;
  
  }
  
  // Parameters for animation
  update() {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }

  // Parameters with the propieties to draw the circles
  draw(context){
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.lineWidth = 4
    ;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.restore();
  }
}
