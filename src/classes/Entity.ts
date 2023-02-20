import position from "../Interfaces/Position";
import attributes from "../Interfaces/attributes";
import distance from "../util/distance";
import Attack from "./Attack";

export default abstract class Entity {
    public position: position;
    public attributes: attributes;

    constructor({ x, y }: position, attributes: attributes) {
        this.position = { x, y };
        this.attributes = attributes;
    }

    setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
        return this;
    }

    abstract move(): void;

    attack(target: Entity, attack: Attack): boolean {
        if (distance(this.position, target.position) > 2) {
            return false;
        }

        if (Math.floor(Math.random() * 100) > attack.accuracy) {
            return false;
        }

        return true;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x, this.position.y, 20, 20);
    }
}