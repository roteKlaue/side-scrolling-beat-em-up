import attributes from "./attributes";
import position from "./Position";

export default interface enemyInfo extends attributes, position {
    type: "boss"|"lackey"|"miniboss";
}