/*
paiza 村にたびたび魔物が訪れるため、 1 〜 N 番の番号が割り当てられた N 人の勇者を雇うことにしました。
勇者には次のようなステータスを持ちます。

レベル l_i
体力 h_i
攻撃力 a_i
防御力 d_i
素早さ s_i
賢さ c_i
運 f_i

また、各勇者には次のようなイベントが発生します。

levelup h a d s c f
レベルが 1 上昇
体力が h 上昇
攻撃力が a 上昇
防御力が d 上昇
素早さが s 上昇
賢さが c 上昇
運が f 上昇

muscle_training h a
体力が h 上昇
攻撃力が a 上昇

running d s
防御力が d 上昇
素早さが s 上昇

study c
賢さが c 上昇

pray f
運が f 上昇

各勇者の初期ステータスと起こるイベントの回数、
また、起こるイベントとその対象の勇者の番号が与えられるので、
全てのイベントが終わった後の各勇者のステータスを出力してください。


入力される値

入力は以下のフォーマットで与えられます。

N K
l_1 h_1 a_1 d_1 s_1 c_1 f_1
...
l_N h_N a_N d_N s_N c_N f_N
to_1 event_1
...
to_K event_K

1 行目では、勇者の人数 N と起こるイベントの回数 K が与えられます。
続く N 行のうち i 行目(1 ≦ i ≦ N)では、問題文の通り、番号 i の勇者のステータスが与えられます。
続く K 行では、イベントの対象の勇者の番号 to と、イベントの内容 event が問題文の通り与えられます。
入力値最終行の末尾に改行が１つ入ります。


期待する出力

i 行目に番号 i の勇者のステータスを以下の形式で出力してください。

l_1 h_1 a_1 d_1 s_1 c_1 f_1
...
l_N h_N a_N d_N s_N c_N f_N


条件

すべてのテストケースにおいて、以下の条件をみたします。

与えられる値は全て整数

1 ≦ N , K ≦ 10^5
1 ≦ l_i , h_i , a_i , d_i , s_i , c_i , f_i ≦ 1000(1 ≦ i ≦ N)
1 ≦ to_i ≦ N (1 ≦ i ≦ K)
event_i (1 ≦ i ≦ K) は以下のいずれかの形式で与えられる。

levelup h a d s c f (1 ≦ h , a , d , s , c , f ≦ 1000)
muscle_training h a (1 ≦ h , a ≦ 1000)
running d s (1 ≦ d , s ≦ 1000)
study c (1 ≦ c ≦ 1000)
pray f (1 ≦ f ≦ 1000)


入力例1
1 3
23 128 533 552 44 69 420
1 muscle_training 565 241
1 study 132
1 levelup 379 585 4 145 276 8
出力例1
24 1072 1359 556 189 477 428
入力例2
10 20
161 295 842 678 857 640 702
703 973 816 584 474 996 452
640 929 296 484 617 785 968
621 946 565 298 297 17 963
82 75 684 44 706 828 615
509 27 178 957 156 705 150
224 247 745 338 11 969 218
343 25 757 600 277 478 814
217 537 596 50 807 363 299
123 296 770 108 25 500 938
4 muscle_training 367 195
8 pray 229
10 levelup 683 829 497 446 843 38
3 pray 505
6 pray 488
6 muscle_training 280 653
4 study 630
10 muscle_training 111 609
8 levelup 846 819 872 906 126 58
7 muscle_training 75 112
3 levelup 750 656 95 557 50 95
7 study 771
3 muscle_training 251 458
8 study 888
4 study 52
3 pray 912
10 study 264
2 pray 886
5 muscle_training 1000 676
9 study 125
出力例2
161 295 842 678 857 640 702
703 973 816 584 474 996 1338
641 1930 1410 579 1174 835 2480
621 1313 760 298 297 699 963
82 1075 1360 44 706 828 615
509 307 831 957 156 705 638
224 322 857 338 11 1740 218
344 871 1576 1472 1183 1492 1101
217 537 596 50 807 488 299
124 1090 2208 605 471 1607 976


プレイヤーの情報をクラスにまとめる
ステータス情報をインスタンス変数に格納する
イベントに対応するインスタンスメソッドを定義する




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
    const heros = []
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]
    
    for (var i = 1; i <= N; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        heros.push(new Hero(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6]))
    }
    
    //heros.forEach(x => console.log(x.info()))
    
    for (var j = N + 1; j <= N + K; j++) {
        HeroEvents(lines[j], heros)
    }
    
    
    
    
    
    heros.forEach(x => console.log(x.info()))
    
    
    
});


function HeroEvents(event, heros) {
    const temp = event.split(' ')
    const idx = parseInt(temp[0])
    if (temp[1] == 'levelup') {
        heros[idx - 1].LevelUp(parseInt(temp[2]), parseInt(temp[3]), parseInt(temp[4]), parseInt(temp[5]), parseInt(temp[6]), parseInt(temp[7]))
    } else if (temp[1] == 'muscle_training') {
        heros[idx - 1].MuscleTraining(parseInt(temp[2]), parseInt(temp[3]))
    } else if (temp[1] == 'running') {
        heros[idx - 1].Running(parseInt(temp[2]), parseInt(temp[3]))
    } else if (temp[1] == 'study') {
        heros[idx - 1].Study(parseInt(temp[2]))
    } else if (temp[1] == 'pray') {
        heros[idx - 1].Pray(parseInt(temp[2]))
    }
}




class Hero {
    constructor (level, health, attack, defence, speed, clever, fortune) {
        this.level = level
        this.health = health
        this.attack = attack
        this.defence = defence
        this.speed = speed
        this.clever = clever
        this.fortune = fortune
    }

    info() {
        return this.level + " " + this.health + " " + this.attack.toString() + " " + this.defence.toString() + " " 
                + this.speed.toString() + " " + this.clever.toString() + " " + this.fortune.toString()
    }

    LevelUp(health, attack, defence, speed, clever, fortune) {
        this.level++
        this.health += health
        this.attack += attack
        this.defence += defence
        this.speed += speed
        this.clever += clever
        this.fortune += fortune
    }

    MuscleTraining (health, attack) {
        this.health += health
        this.attack += attack
    }

    Running (defence, speed) {
        this.defence += defence
        this.speed += speed
    }

    Study (clever) {
        this.clever += clever
    }

    Pray (fortune) {
        this.fortune += fortune
    }


}


