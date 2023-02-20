import attributes from "../Interfaces/attributes";
import gameState from "../Interfaces/gameState";
import removeAllChildNodes from "../util/removeAllChildNodes";
import Player from "./Player";

export default class {
    state:gameState;
    lastFrame:number = 0;

    constructor() {
        this.state = {} as gameState;
        this.state.currentEnemies = [];
        
        this.state.config = {
            width: 800,
            height: 600,
            title: "Side Scroller",
            history: false,
            difficulty: 0,
        };

        const canvas = document.createElement("canvas") as HTMLCanvasElement;
        canvas.width = this.state.config.width;
        canvas.height = this.state.config.height;
        canvas.id = "gameCanvas";
        this.state.canvas = canvas;
        this.state.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        
        setTimeout(() => {
            removeAllChildNodes(document.body.id);
            document.body.appendChild(canvas);            
        }, 1000);

        this.state.ctx.fillStyle = "red";
        this.state.ctx.fillRect(0, 0, this.state.canvas.width, this.state.canvas.height);

        this.state.player = new Player({ y: 0, x: 0 }, {} as attributes);
        
        requestAnimationFrame(this.gameLoop.bind(this));    
    }

    gameLoop(time: number): void {
        const deltaTime = time - this.lastFrame;
        this.lastFrame = time;


        requestAnimationFrame(this.gameLoop.bind(this));
    }
}