import Enemy from '../classes/Enemy';
import Player from '../classes/Player';

export default interface gameState {
    currentEnemies: Enemy[];
    config: {
        width:number;
        height:number;
        title:string;
        history: boolean;
        difficulty:number;
    };
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    player:Player;
}