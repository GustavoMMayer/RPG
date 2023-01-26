import { useState } from "react";
import {mapSpots} from '../data/mapSpots'
import { CharacterSide } from "../type/CharacterSides";


export const useCharacter = (PropName:string) =>{

const [pos, setPos] = useState({x:5, y:5});
const [side, setSide] = useState<CharacterSide>('down');
const [name, setName] = useState(PropName)


    const moveLeft = ()=>{
      setPos(pos=>({ 
        x: canMove(pos.x-1, pos.y)? pos.x-1 : pos.x ,
        y:pos.y }));
        setSide('left');
    };

    const moveRight = ()=>{
        setPos(pos=>({
            x: canMove(pos.x+1, pos.y)? pos.x+1 : pos.x,
            y:pos.y
        }));
        setSide('right');      
    };

    const moveUp = () => {
        setPos(pos=>({
            x:pos.x,
            y: canMove(pos.x, pos.y-1)? pos.y-1: pos.y
        }));
        setSide('up');
    };

    const moveDown = ()=>{
        setPos(pos=>({
            x:pos.x,
            y:canMove(pos.x, pos.y+1)? pos.y+1 : pos.y
        }));
        setSide('down');
    };

    const canMove = (x: number, y: number) => {
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            return (mapSpots[y][x] === 1);
        }
        return false;
    }
    return{
       x: pos.x,
       y: pos.y,
       moveDown,
       moveLeft,
       moveRight,
       moveUp,
       side,
       name

    };

};