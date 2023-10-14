/**
 * paiza 株式会社では、物品の管理のために上の図のような座標系の広さが無限大のマスの工場 で 番号 1 〜 N が割り当てられた N 台のロボットを運用していました。ところがある日、全てのロボットが暴走してしまいました。各ロボットは性能ごとにレベル分けされており、次の通り移動距離が決まっています。

Lv1 : 特定の方角に 1 マス進む
Lv2 : 特定の方角に 2 マス進む
Lv3 : 特定の方角に 5 マス進む
Lv4 : 特定の方角に 10 マス進む

また、工場のマスのうち 10 マスには工具箱が置かれており、移動後にそのマスにロボットがぴったり止まっていた場合、そのロボットのレベルが 1 上がってしまいます（最大レベルは 4)。
レベル l のロボットの初期位置が工具箱の置かれているマスであったとしても、そのロボットのレベルは l で始まることに気をつけてください。

幸い、初めにロボットがいる範囲や工具箱の置かれているマス、各ロボットの位置とレベル、また、どのロボットがどのような順番でどの方角に移動するかの情報はわかっているので、ロボットの移動が K 回終わったときの各ロボットの位置とレベルを推定してください。

入力される値

H W N K
lx_1 ly_1
...
lx_10 ly_10
x_1 y_1 l_1
...
x_N y_N l_N
r_1 d_1
...
r_K d_K
1 行目では ロボットの初期位置の y , x 座標の上限についての整数 H , W , ロボットの数 N , ロボットの移動回数 K が半角スペース区切りで与えられます。
続く 10 行のうち i 行目では、i 個目の工具箱が置かれたマスの x , y 座標 x_i , y_i が与えられます。(1 ≦ i ≦ 10)
続く N 行のうち i 行目では、 番号 i のロボットの初期位置の x 座標 x_i , y 座標 y_i , レベル l_i が半角スペース区切りで与えられます。
続く K 行のうち i 行目では、 i 回目の移動を行ったロボットの番号 r_i と移動の方角 d_i が与えられます。
入力値最終行の末尾に改行が１つ入ります。

期待する出力

i 番のロボットの最終的な位置 x_i , y_i とレベル l_i を i 行目に出力してください。

x_1 y_1 l_1
...
x_N y_N l_N

条件

5 ≦ H , W , N , K ≦ 10^5
0 ≦ lx_i < W , 0 ≦ ly_i < H (1 ≦ i ≦ 10)
0 ≦ x_i < W , 0 ≦ y_i < H , 1 ≦ l_i ≦ 4 (1 ≦ i ≦ N)
0 ≦ r_i ≦ N-1
d_i は "N" , "S" , "E" , "W" のいずれか (1 ≦ i ≦ K) で、それぞれ 北・南・東・西 へ移動したことを表す。
入力例1
5 5 3 3
0 0
0 1
0 2
0 3
0 4
1 0
1 1
1 2
1 3
1 4
2 1 1
2 2 1
2 3 1
1 W
1 E
3 S
出力例1
3 1 2
2 2 1
2 4 1
攻略ポイント
ポイント
ロボットのクラスを定義する
移動方向と移動距離の制御
レベルアップ処理
工場のクラスを定義する
工具ボックスの配置を管理する
配置されているロボットを動かす


工場に工具箱とロボットを配置する
ロボットを動かす
ロボット1が西に進む（Lv1なので1コマ）
工具箱があるのでLv2になる
ロボット1が東に進む（Lv2なので2コマ）
ロボット3が南に進む（Lv1なので1コマ）
ロボット１から３までの現在位置とレベルを出力する。




function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
}


*/


/*
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const HWNK = lines[0].split(' ').map(x => parseInt(x))
    const H = HWNK[0]
    const W = HWNK[1]
    const N = HWNK[2]
    const K = HWNK[3]
    
    const factoryGrid =  new Grid(H, W)
    const robots = []
    
    for (var i = 1; i <= 10; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        const point = new Point(temp[0], temp[1])
        Grid.posBoxes.push(point)
    }
    
    for (var j = 1; j <= N; j++) {
        const temp = lines[j + 10].split(' ').map(x => parseInt(x))
        const robot = new Robot(temp[0], temp[1], temp[2])
        robots.push(robot)
    }
    
    for (var k = 1; k <= K; k++) {
        const temp = lines[k + 10 + N].split(' ')
        const index = parseInt(temp[0]) - 1
        const direct = temp[1]
        const newPosition = factoryGrid.move(robots[index].curPosition, direct, robots[index].level)
        if (newPosition) {
            robots[index].curPosition = newPosition
            if (factoryGrid.meetToolBox(newPosition)) {
                robots[index].levelUp()
            }
            
        }
    }
    
    
    
    robots.forEach(x  => x.info())
    //console.log(Grid.posBoxes);
    //console.log(robots);
    
});





class Robot {
    constructor(x, y, level) {
        this.curPosition  = new Point(x, y)
        this.level = level
    }
    
    levelUp(){
        if (this.level < 4) this.level++
    }
    
    info(){
        console.log(this.curPosition.x + " " + this.curPosition.y + " " + this.level)
    }
}

class Grid {
    static posBoxes = []
    
    constructor(H, W){
        this.h = H - 1
        this.w = W - 1
        
    }
    
    static len_level = [
        {level:1, len:1},
        {level:2, len:2},
        {level:3, len:5},
        {level:4, len:10},
    ]
    
    static directions = {
        "N": { x: 0, y: -1 },
        "S": { x: 0, y: 1 },
        "W": { x: -1, y: 0 },
        "E": { x: 1, y: 0 }
    }; //console.log(directions["N"].x); // Outputs: 0
    
    
    move(curPoint, direction, level){
        const newX = curPoint.x + Grid.directions[direction].x * Grid.len_level[level - 1].len
        const newY = curPoint.y + Grid.directions[direction].y * Grid.len_level[level - 1].len
        
        if (newX < 0 || newX > this.w || newY < 0 || newY > this.h) {
            return null
        }
        return new Point(newX, newY)
    }
    
    meetToolBox(curPoint){
        
        for (const box of Grid.posBoxes) {
            
            if (curPoint.doublicate(box)) {
                return true
            }
        }
        return false
    }
}



class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    
    doublicate(point){
        return (this.x === point.x && this.y === point.y) ? true : false
    }
}






//  50/100


*/


process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const HWNK = lines[0].split(' ').map(x => parseInt(x))
    const H = HWNK[0]
    const W = HWNK[1]
    const N = HWNK[2]
    const K = HWNK[3]
    
    const posBoxes = []
    const robots = []
    
    for (var i = 1; i <= 10; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        posBoxes.push([temp[0], temp[1]])
    }
    //posBoxes.forEach(x  => console.log(x.toString()))
    //console.log(posBoxes)
    
    for (var j = 1; j <= N; j++) {
        const temp = lines[j + 10].split(' ').map(x => parseInt(x))
        const robot = new Robot(temp[0], temp[1], temp[2])
        robots.push(robot)
    }
    //robots.forEach(x  => console.log(x.toString()))
    
    for (var k = 1; k <= K; k++) {
        const temp = lines[k + 10 + N].split(' ')
        const index = parseInt(temp[0]) - 1
        const direct = temp[1]
        
        robots[index].move(direct)
        const elementToFind = robots[index].getPosition()
        //console.log(elementToFind)
        if (posBoxes.some(arr => JSON.stringify(arr) === JSON.stringify(elementToFind))) {
            robots[index].levelUp()
        }
    }
    
    
    
    robots.forEach(x  => console.log(x.toString()))
    //console.log(Grid.posBoxes);
    //console.log(robots);
    
});





class Robot {
    
    constructor(x, y, level) {
        this.x = x
        this.y = y 
        this.level = level
        
        this.dirs = {"N": [0, -1], "S": [0, 1], "E": [1, 0], "W": [-1, 0]}
        this.mobilities = [0, 1, 2, 5, 10]
        this.len  = this.mobilities[level]
    }
    
    levelUp(){
        if (this.level < 4) this.level++
        this.len = this.mobilities[this.level]
    }
    
    move(direction){
        const value = this.dirs[direction]
        this.x += value[0] * this.len
        this.y += value[1] * this.len
    }
    
    getPosition(){
        return [this.x, this.y]
    }
    
    toString(){
        return this.x + " " + this.y + " " + this.level
    }

}

