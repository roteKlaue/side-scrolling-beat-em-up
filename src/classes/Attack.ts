export default class {
    public readonly accuracy: number;
    public readonly power: number;
    
    constructor(power: number, accuracy?: number | undefined) {
        this.power = power;
        this.accuracy = accuracy || 100;
    }
}