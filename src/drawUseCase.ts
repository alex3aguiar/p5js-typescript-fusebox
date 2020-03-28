import * as p5 from 'p5'

const drawUseCase = (label: any, x: number, y: number, p: p5) => {
    let useCaseX = 0
    let useCaseY = 0
    if (p.mouseIsPressed) {

        useCaseX = p.mouseX
        useCaseY = p.mouseY
    } else {
        useCaseX = 100;
        useCaseY = 100;
    }

    let wordWidth = p.textWidth(label);
    let positionOffset = +x - 1.0 * wordWidth;
    p.ellipse(wordWidth + positionOffset, (20 + y * 40), wordWidth + 30, 30);
    p.text(label, (wordWidth / 2) + positionOffset, 25 + y * 40);
    p.line(useCaseX, useCaseY, (wordWidth / 2) - 15 + positionOffset, (20 + y * 40));

}
exports.drawUseCase = drawUseCase;
