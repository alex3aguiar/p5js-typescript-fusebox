import * as p5 from 'p5'
import 'p5/lib/addons/p5.sound'
const { drawUseCase } = require('./drawUseCase');
var sketch = function (p: p5) {

  let useCases = [
    { name: 'comprar' },
    { name: 'vender' },
    { name: 'pagar' },
    { name: 'pagar' },
    { name: 'teste de nome de caso de uso grande' },
    { name: 'construir casa' },

  ];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
  p.draw = function () {
    p.background(220);
    drawActor("Admin", p);
    for (let i = 0; i < useCases.length; i++) {
      drawUseCase(useCases[i].name, 500, i, p)

    }
  }

}
new p5(sketch)

function drawActor(name: string, p: p5) {
  p.ellipse(p.mouseX, p.mouseY, 30, 30);
  p.line(p.mouseX, p.mouseY, p.mouseX, p.mouseY + 50);
  p.line(p.mouseX, p.mouseY + 50, p.mouseX + 30, p.mouseY + 70);
  p.line(p.mouseX, p.mouseY + 50, p.mouseX - 30, p.mouseY + 70);
  p.line(p.mouseX, p.mouseY + 10, p.mouseX + 30, p.mouseY + 30);
  p.line(p.mouseX, p.mouseY + 10, p.mouseX - 30, p.mouseY + 30);
  p.text(name, p.mouseX - 15, p.mouseY + 90);
}

