/*
出口のない迷路 (paizaランク B 相当)


洞窟を探検していたあなたは出口のない迷路に迷い込んでしまいました。
脱出するには、迷路の地点を与えられた指示通りに移動し、移動で訪れた（移動の開始・終了地点を含む）地点に置かれたアルファベットを
つなげた文字列を呪文として唱える必要があります。
各頂点からは、他の頂点に向かって一方通行の 2 つの道が伸びています。
各ポイントの情報と移動の指示が与えられるので、呪文となる文字列を出力してください。




入力される値

入力は以下のフォーマットで与えられます。

N K S
a_1 r1_1 r2_1
...
a_N r1_N r2_N
M_1
...
M_K

1 行目では、地点の数 N と、移動の回数 K , 移動を開始する地点の番号 S が与えられます。
続く N 行のうち i 行目(1 ≦ i ≦ N)では、番号 i 地点に置いてあるアルファベット a_i と 1 つめの道のつながっている地点の番号 r1_i , 2 つめの道のつながっている地点の番号 r2_i が与えられます。
続く K 行のうち i 行目(1 ≦ i ≦ K)では、 i 回目の移動で選んだ道の番号 M_i が与えられます。
入力値最終行の末尾に改行が１つ入ります。


期待する出力

あなたが唱えるべき呪文となる文字列を 1 行で出力してください。
末尾には改行を出力してください。


条件

すべてのテストケースにおいて、以下の条件をみたします。

与えられる値は全て整数
1 ≦ N , K ≦ 10^5
1 ≦ S ≦ N
a_i (1 ≦ i ≦ N) はアルファベット 1 文字
1 ≦ r1_i , r2_i ≦ N (1 ≦ i ≦ N)
M_i (1 ≦ i ≦ K) は 1 または 2 である。


入力例1
4 4 1
p 2 4
a 3 1
i 4 2
z 1 2
1
1
1
2
出力例1
paiza


入力例2
5 10 5
o 5 4
f 1 5
b 1 2
k 1 5
k 2 4
1
2
1
2
2
2
2
2
1
1
出力例2
kfkfkkkkkfo



****************************
攻略ポイント

各地点の情報をクラスにまとめる
アルファベット1文字を持っている
次のポイントに行く道を二つ持っている
プレイヤーの情報をクラスにまとめる
移動で訪れた地点のアルファベットの情報を持っている
現在位置の情報を持っている
指定された道を進む


複雑そうな問題がでたら、入出力例を見ながら情報を整理してみましょう。
図にするとわかりやすいと思います。


入力例1


                    0	1	2	3	4
現在位置（point）	 1	2	3	4	2
進む道（direction）  1	1	1	2	-
文字(alphabet)  	p	a	i	z	a

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
    const NKS = lines[0].split(' ').map(x => parseInt(x))
    const N = NKS[0]
    const K = NKS[1]
    const S = NKS[2]
    const points = []
    const positions = []
    
    for (var i = 1; i <= N; i++) {
        const temp = lines[i].split(' ')
        const p = new Point(temp[0], temp[1], temp[2])
        points.push(p)
    }
    //points.forEach(x => console.log(x))
    
    // first position
    let pos = S // 01~
    let alpha = points[pos-1].alphabet
    positions.push({alpha, pos})
    let m = 0
    
    //console.log(positions)
    //console.log(points[0].Move('1'))
    
    for (var j = N + 1; j <= N + K; j++) {
        
        //console.log('j = ' + j + ' ' + lines[j] + " m= " + m)
        //console.log("positions[m].pos - 1 = " + (positions[m].pos - 1))
        const curPos = positions[m++].pos
        //console.log(curPos)
        pos = points[curPos -1].Move(lines[j])
        
        alpha = points[pos - 1].alphabet
        positions.push({alpha, pos})
        
        //m++
        //console.log(positions[m])
    }
    
    console.log(positions.reduce((magic, x) => magic + x.alpha, ""))
    
});



class Point {
    constructor(alphabet, route1, route2) {
        this.alphabet = alphabet
        this.route1 = route1
        this.route2 = route2
    }
    
    Move(direction) {
        return direction == '1' ? this.route1 : this.route2
    }
}
