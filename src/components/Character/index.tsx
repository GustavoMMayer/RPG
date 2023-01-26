import * as C from './styled';
import { CharacterSide } from '../../type/CharacterSides';

type Props={
    x:number;
    y:number;
    side: CharacterSide;
    name:string
}

const Character = ({x,y, side, name}:Props) => {
    const size = 30;
    const sides ={
        down:0,
        left:-30,
        right:-60,
        up:-90
    }
    return(
        <C.Container
          left={x*size}
          top = {y*size}
          size={size}  
          sidePos={sides[side]??0}
        >
            <C.Name>{name}</C.Name>
        </C.Container>
    );
};

export default Character;