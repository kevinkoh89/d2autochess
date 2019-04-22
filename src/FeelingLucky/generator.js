import CONST from '../Const'

const chessPlayPool = () => {
  let poolData = []
  let list = CONST.CHESS_LIST
  let commonChess = list.filter(function(el) {
    return el.cost === 1
  }).map((obj) => {
console.log(obj)
let obj1 = []
for(let i=0; i<10; i++){
    obj1.push(obj)
}
    return obj1
  })

console.log(commonChess)
}

const drawFromPool = rarity => {
  if (rarity === 'common') {
  }
}
const generator = {
    chessPlayPool
}
export default generator
