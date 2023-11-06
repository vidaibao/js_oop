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
        matrix.push(lines[i].split(''))

    //console.log(matrix)
    const [y, x] = lines[H + 1].split(' ').map(xx => parseInt(xx))
    
    JustDoIt(matrix, y, x, H, W)
    
    matrix.forEach(x => console.log(x.join('')))
});


function JustDoIt(matrix, y, x, H, W) {
    const temp = matrix[y][x] == '.' ? '#' : '.';
    swapCross(matrix, y, x, H, W)
    swapDiagonal(matrix, y, x, H, W)
    matrix[y][x] = temp;
}


function swapCross(matrix, y, x, H, W) {
    // axis1 Y
    for (let index = 0; index < H; index++) {
        swap(matrix, index, x)
    }
    // axis2 X
    for (let index = 0; index < W; index++) {
        swap(matrix, y, index)
    }
}


function swapDiagonal(matrix, y, x, H, W){
    let idxY = y; // ref arguments
    let idxX = x;
    // main diagonal
    while (idxY >= 0 && idxX >= 0) {
        swap(matrix, idxY, idxX)
        idxX--; idxY--;
    }
    idxY = y; idxX = x;
    while (idxY < H  && idxX < W) {
        swap(matrix, idxY, idxX)
        idxX++; idxY++;
    }
    //sub diagonal
    idxY = y; idxX = x;
    while (idxY >= 0 && idxX < W) {
        swap(matrix, idxY, idxX);
        idxY--; idxX++;
    }
    idxY = y; idxX = x;
    while (idxY < H && idxX >= 0) {
        swap(matrix, idxY, idxX);
        idxY++; idxX--;
    }
}


function swap(matrix, y, x){
    const replace = matrix[y][x] == '.' ? '#' : '.';
    matrix[y][x] = replace;
}


/**
 * https://marine07.com/5772/b-rank-up2/
 */
 reader.on('close', () => {
    const [H, W] = lines[0].split(' ').map(Number);  // 行数 H , 列数 W の盤面
    const S = [];
    const [y, x] = lines[H + 1].split(' ').map(Number);
    for (let i = 1; i <= H; i++) {
       S.push(lines[i].split(''));
    }
 
    function exchange(y, x) {
       S[y][x] === '.' ? S[y][x] = '#' : S[y][x] = '.';
    }
    exchange(y, x);  // 中心
    for (let z = 1; z < Math.max(H, W); z++) {
       if (y - z >= 0) {
          exchange(y - z, x);  // 上
       }
       if (y + z < H) {
          exchange(y + z, x);  // 下
       }
       if (x + z < W) {
          exchange(y, x + z);  // 右
       }
       if (x - z >= 0) {
          exchange(y, x - z);  // 左
       }
       if (y + z < H && x + z < W) {
          exchange(y + z, x + z);  // 右下
       }
       if (y - z >= 0 && x - z >= 0) {
          exchange(y - z, x - z);  // 左上
       }
       if (y + z < H && x - z >= 0) {
          exchange(y + z, x - z);  // 左下
       }
       if (y - z >= 0 && x + z < W) {
          exchange(y - z, x + z);  // 右上
       }
    }
    for (let i = 0; i < H; i++) {
       console.log(S[i].join(''));
    }
 });
 /**
  * 
  */



















/**
 * 【マップの扱い 4】マップのナンバリング
 * 
 * 
 * マップの行数 H と列数 W とナンバリングの向き D が与えられるので、(0, 0) から指示通りに
 * ナンバリングしたとき、マップ全体にどのように番号が振られるかを出力してください。

ナンバリングの向き D に対応する方向と、例として 3×4 のマップをナンバリングをした結果は以下の通りです。
 * 
map4_direction00-04.jpeg

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。


入力される値
H W D


・ 1 行目に盤面の行数を表す整数 H , 盤面の列数を表す整数 W , 
ナンバリングの向きを表す整数 D が与えられます。

期待する出力
・ ナンバリングされたマップ全体を H 行で出力してください。
・ 要素間は半角スペースで区切ってください、詳しくは入出力例を参考にしてください。

条件
すべてのテストケースにおいて、以下の条件をみたします。

・ 2 ≦ H, W ≦ 10
・ 1 ≦ D ≦ 4

入力例1
4 4 1

出力例1
1 3 6 10
2 5 9 13
4 8 12 15
7 11 14 16

入力例2
3 5 2

出力例2
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15

入力例3
2 2 3

出力例3
1 3
2 4

入力例4
2 5 4

出力例4
1 2 4 6 8
3 5 7 9 10
 */


reader.on('close', () => {
    const [H, W, D] = lines[0].split(' ').map(Number)
    
    const matrix = []
    //const axisY = new Array(W).fill(0)   // cause between ref arr[]
    for (let y = 0; y < H; y++){
        matrix.push(new Array(W).fill(0))
    }
    
    NumberingMatrix(matrix, H, W, D)
        
    
    matrix.forEach(x => console.log(x.join('')))
});


function NumberingMatrix(matrix, H, W, D) {
    let numbering = 1;
    if (D == 1) {
        //upper left triangle
        for (let n = 0; n < H; n++) {
            // start diagonal
            let row = n;
            let col = 0;
            // 2 conditions
            while (row >= 0 && col < W){
                matrix[row][col] = numbering++;
                row--; col++; 
            }
        }
        // lower triangle
        for (let n = 1; n < W; n++) {
            let row = H - 1;
            let col = n;
            while (row >= 0 && col < W){
                matrix[row][col] = numbering++;
                row--; col++;
            }
        }
    }
    else if (D === 4) {
       //upper left triangle
        for (let n = 0; n < W; n++) {
            let row = 0;
            let col = n;
            // 2 conditions
            while (row < H && col >= 0){
                matrix[row][col] = numbering++;
                row++; col--; 
            }
        }
        // lower triangle
        for (let n = 1; n < H; n++) {
            let row = n;
            let col = W - 1;
            while (row < H && col >= 0){
                matrix[row][col] = numbering++;
                row++; col--;
            }
        }
    }
    else if (D === 2) {
        for (let row = 0; row < H; row++) {
            for (let col = 0; col < W; col++) {
                matrix[row][col] = numbering++;
            }
        }
    }
    else if (D === 3) {
        for (let col = 0; col < W; col++) {
            for (let row = 0; row < H; row++) {
                matrix[row][col] = numbering++;
            }
        }
    }
}





/**
 * シミュレーション 1】反復横跳び 
 * 
 * 
 * 
 * paiza 君の学校では体力テストがおこなわれており、現在反復横跳びの計測をしています。
いたずら好きの paiza 君は、友達が光の速さで反復横飛びをしている途中、
具体的には友達が線を跨ぐのが 4×N 回目になる直前に左の線を元の位置から外側に X cm 遠ざけました。

最終的に友達の反復横跳びの計測結果は K 回となりました。
友達は正規の反復横跳びで計測結果が K 回となるときよりも何 cm 多く移動したでしょうか

なお、今回の反復横跳びでは中央の線を跨いだ状態から始めて、右の線→中央の線→左の線→中央の線→... 
といった順番で跨いで行くものとします。
 */






