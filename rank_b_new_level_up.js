/**
 * 【マップの扱い 1】マップの書き換え・1 マス (paizaランク C 相当)
 * 
 * 
 * 行数 H , 列数 W の盤面があり、各マスには文字が 1 つだけ書かれています。
 * 盤面と y , x 座標 が与えられるので、盤面の与えられた座標の文字が "." の場合は
 *  "#" に、"#" の場合は "." に書き換えた後の盤面を出力してください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
 * 


入力例1
3 3
...
...
...
0 0

出力例1
#..
...
...

入力例2
4 4
####
####
....
##..
2 2

出力例2
####
####
..#.
##..
 */



reader.on('close', () => {
    const [H, W] = lines[0].split(' ').map(x => parseInt(x))
    const matrix = []
    for (let i = 1; i <= H; i++) 
        matrix.push(lines[i])

    const [y, x] = lines[H + 1].split(' ').map(xx => parseInt(xx))
    
    const replace = matrix[y][x] == '.' ? '#' : '.';
    const temp = [...matrix[y]] 
    temp[x] = replace;
    matrix[y] = temp.join('')
    matrix.forEach(x => console.log(x))
});



/**
 * 【マップの扱い 2】マップの書き換え・縦横
 * 
 * 
 * マップを表す H 行 W 列の文字列 S_1 ... S_H と y , x 座標 が与えられるので、
 * 与えられた座標のマスと上下左右で隣接するマスの最大 5 マスについて次の処理をおこなった後の盤面を出力してください。

・ マスに書かれている文字が "." の場合は "#" に、"#" の場合は "." に書き換える。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
 * 
 */




reader.on('close', () => {
    const [H, W] = lines[0].split(' ').map(x => parseInt(x))
    const matrix = []
    for (let i = 1; i <= H; i++) 
        matrix.push(lines[i])

    const [y, x] = lines[H + 1].split(' ').map(xx => parseInt(xx))
    
    swap5(matrix, y, x, H, W)
    
    matrix.forEach(x => console.log(x))
});


function swap5(matrix, y, x, H, W){
    swap(matrix, y, x);
    y > 0 && swap(matrix, y - 1, x)
    y < H - 1 && swap(matrix, y + 1, x)
    x > 0 && swap(matrix, y, x - 1)
    x < W - 1 && swap(matrix, y, x + 1)
}

function swap(matrix, y, x){
    const replace = matrix[y][x] == '.' ? '#' : '.';
    const temp = [...matrix[y]] 
    temp[x] = replace;
    matrix[y] = temp.join('')
}



/**
 * マップの扱い 3】マップの判定・縦横斜め
 * 
 * 
 * マップの行数 H と列数 W とマップを表す H 行 W 列の文字列 S_1 ... S_H と y , x 座標 が与えられるので、
 * 与えられた座標のマス(y, x) と、 (y, x) と同じ縦・横・斜めの列に存在する全てのマスについて次の処理をおこなった後の盤面を出力してください。

マスに書かれている文字が "." の場合は "#" に、"#" の場合は "." に書き換える。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
マス(y,x) と同じ斜めの列とは整数 a を用いて (y+a,x+a), (y+a,x-a), (y-a,x-a), (y-a,x+a) のいずれかで表されるマスの集合です。
例として下図の黒いマスと同じ斜め列は赤いマスのようになります。



条件
すべてのテストケースにおいて、以下の条件をみたします。

・ 1 ≦ H , W ≦ 20
・ 0 ≦ y < H, 0 ≦ x < W
・ S_i は W 文字の文字列 (0 ≦ i < H)
・ S_i の各文字は "." または "#" (0 ≦ i < H)

入力例1
3 3
##.
###
...
0 0

出力例1
..#
..#
#.#

入力例2
10 10
##########
..........
##########
##########
..........
#.#.#.#.#.
.#.#.#.#.#
#.#.#.#.#.
.#.#.#.#.#
..........
5 5

出力例2
.####.####
.#...#...#
##.##.##.#
###.#.#.##
....###...
.#.#.#.#.#
.#.##.##.#
#.#######.
.###...###
.#...#...#

 */


reader.on('close', () => {
    const [H, W] = lines[0].split(' ').map(x => parseInt(x))
    const matrix = []
    for (let i = 1; i <= H; i++) 
        matrix.push(lines[i])

    const [y, x] = lines[H + 1].split(' ').map(xx => parseInt(xx))
    
    swapDiagonal(matrix, y, x, H, W)
    
    matrix.forEach(x => console.log(x))
});


function swapDiagonal(matrix, y, x, H, W){
    swap(matrix, y, x);
    (y > 0 || x > 0) && diagonalUpperLeft(matrix, y, x, H, W)
}

function diagonalUpperLeft(matrix, y, x, H, W) {
    for(let i = y; i >= 0; i--)
}

function swap(matrix, y, x){
    const replace = matrix[y][x] == '.' ? '#' : '.';
    const temp = [...matrix[y]] 
    temp[x] = replace;
    matrix[y] = temp.join('')
}























