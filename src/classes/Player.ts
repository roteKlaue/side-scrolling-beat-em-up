import attributes from "../Interfaces/attributes";
import position from "../Interfaces/Position";
import Entity from "./Entity";
import Game from "./Game";

export default class extends Entity {
    private readonly velocity: { x: number, y: number } = { x: 0, y: 0 };

    constructor(position: position, attributes: attributes) {
        super(position, attributes);

        document.addEventListener("keydown", (event: KeyboardEvent) => {
            this.a(event, false);   
        });

        document.addEventListener("keyup", (event: KeyboardEvent) => {
            this.a(event, true);   
        });
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    private a(event: KeyboardEvent, up: boolean) {
        switch (event.key) {
            case "up":
            case "w":
                this.velocity.y = up? 0: -1;
                break;
            case "d":
            case "right":
                this.velocity.x = up? 0: 1;
                break;
            case "left":
            case "a":
                this.velocity.x = up? 0: -1;
                break;
            case "s":
            case "down":
                this.velocity.y = up? 0: 1;
                break;
        }
    }
}