import position from "../Interfaces/Position";

const distance = (path: position[], index: number = 0): number =>
path.length === index ?
    0 :
    Math.sqrt(Math.pow(path[index].x - path[index + 1].x, 2) + Math.pow(path[index].y - path[index + 1].y, 2)) + distance(path, ++index);

export default (pos1: position, pos2: position): number => {
    return distance([pos1, pos2]);
}