/*
* 格闘ゲーム

友達の家で N 人で遊んでいる paiza 君は格闘ゲームを遊ぶことにしました。
格闘ゲームのルールは次の通りです。

各プレイヤーは 決まった hp と 3 種類の技を持っていて、技には強化系の技と攻撃の技があり、各攻撃技には技を出すための発生フレーム F とダメージ A が設定されている。
hp が 0 になったプレイヤーは退場となる。
あるプレイヤー 1 が、他のプレイヤーにある技 T_1 (発生フレーム F_1 , 攻撃力 A_1) を使って攻撃した場合、攻撃を受けたプレイヤー 2 は反撃の技 T_2 (発生フレーム F_2 , 攻撃力 A_2) を選ぶ。その後、次のようなルールに従っていずれかのプレイヤーにダメージが入る。
どちらか片方でもプレイヤーが退場している場合、互いに何も起こらない。

強化系の技を使った場合、使ったプレイヤーの他の全ての技の発生フレーム（最短 1 フレーム) を -3 , 攻撃力を +5 する。
相手が攻撃技を使っていた場合、その攻撃の攻撃力分 hp が減少する。

互いに攻撃技を使った場合

F_1 < F_2 のとき、プレイヤー 2 の hp が A_1 減る
F_1 > F_2 のとき、プレイヤー 1 の hp が A_2 減る
F_1 = F_2 のとき、何も起こらない
各プレイヤーの持っている技についての情報と、技が出された回数、使われた技の詳細が与えられるので、全ての技が使われた後に場に残っているプレイヤーの人数を答えてください。

入力される値

N K
hp_1 F1_1 A1_1 F2_1 A2_1 F3_1 A3_3
...
hp_N F1_N A1_N F2_N A2_N F3_N A3_N
P1_1 T1_1 P2_1 T2_1
...
P1_K T1_K P2_K T2_K

1 行目では、プレイヤー数 N と攻撃回数 K が与えられます。
続く N 行のうち i 行目(1 ≦ i ≦ N)では、
i 番目のプレイヤーの hp である hp_i,
技 1 の発生フレーム F1_i , 攻撃力 A1_i
技 2 の発生フレーム F2_i , 攻撃力 A2_i
技 3 の発生フレーム F3_i , 攻撃力 A3_i が半角スペース区切りで与えられます。
ただし、発生フレーム・攻撃力が共に 0 である技は強化技であることを表しています。
続く K 行のうち、 i 行目では i 回目の攻撃内容が与えられます。
技を使ったプレイヤーの番号 P1_i と P1_i が選んだ技の番号 T1_i
技を使ったプレイヤーの番号 P2_i と P2_i が選んだ技の番号 T2_i
が半角スペース区切りで与えられます。
入力値最終行の末尾に改行が１つ入ります。

期待する出力

場に残っているプレイヤーの人数を 1 行で出力してください。

条件

すべてのテストケースにおいて、以下の条件をみたします。

1 ≦ N , K ≦ 1000
1 ≦ hp_i ≦ 100 (1 ≦ i ≦ N)
0 ≦ F1_i , F2_i , F3_i ≦ 60 (1 ≦ i ≦ N)
0 ≦ A1_i , A2_i , A3_i ≦ 30 (1 ≦ i ≦ N)
1 ≦ P1_i , P2_i ≦ N , P1_i ≠ P2_i　(1 ≦ i ≦ K)
T1_i , T2_i は 1 , 2 , 3 のいずれか (1 ≦ i ≦ K)
強化技は各プレイヤーに最大 1 つまで
入力例1
3 6
10 1 1 2 2 3 3
10 0 0 6 1 7 2
10 0 0 7 5 8 3
1 1 2 2
1 2 3 2
1 3 2 3
2 2 3 1
2 3 3 1
1 2 3 2
出力例1
2
入力例2
5 10
8 2 24 40 25 42 26
59 48 13 21 13 56 2
5 59 7 57 5 25 24
99 28 6 32 5 23 2
62 24 19 11 19 7 21
2 1 3 2
2 1 3 2
5 1 3 1
5 3 1 2
1 1 2 2
4 2 3 1
5 3 3 2
2 3 3 2
4 1 5 3
2 3 3 2
出力例2
3




プレイヤーの情報をクラスにまとめる
hpをインスタンス変数に格納する
手持ちスキルをインスタンス変数に格納する
ダメージを受けたときの処理を考える
退場の処理を考える（今回はhp=0で退場とする）
hpがマイナスにならないようにする
インスタンスメソッドで強化技を実装する
ゲームの流れを管理するクラスを考える
ターンスキップの処理
プレイヤーのどちらかが退場している
攻撃技同士でスピードが同じ場合
攻撃処理の条件分岐
両方が攻撃技のとき
スピードが速い方が攻撃できる
片方が強化技の時
強化技を実行する
相手の攻撃を受ける
両方が強化技の時
両方が強化技を実行する



続いてPlayerクラス・FightingGameクラスと問題を解くsolveメソッドを変数の下に定義します。

まず、Playerクラスを定義します。

Playerクラス

インスタンス変数
体力 @hp : Integer（外部から参照可）
所持スキル @skills : Array（外部から参照可）
initializeメソッド
initialize(hp, skills)
@hp を hp で初期化する
@skills を skills で初期化する
インスタンスメソッド
 reinforce
強化技以外の所持スキルを強化する
早さ(speed) を -3 （下限を1とする）
攻撃(power) を +5 インスタンスメソッド
take_damage(damage)
@hp から damage を引く（下限を0とする）




続いて、FightingGameクラスを定義します。

FightingGameクラス

インスタンス変数
参加プレイヤー @players : Player（外部から参照可）
initializeメソッド
initialize(players)
@players を players で初期化する
インスタンスメソッド
fighting(p_no1, s_no1, p_no2, s_no2)
引数の情報を基に戦うプレイヤーと使うskillを選択する
プレイヤー player = players[p_no - 1]
使用スキル skill = player.skills[s_no - 1]
turn_end? メソッドでターンスキップを確認する
スキルのスピード順で並び替える(player1が早い、player2が遅い)
戦闘の処理を行う
player1が攻撃技ならskill1でplayer2のtake_damageメソッドを実行してターン終了
player1が強化技ならplayer1がreinforce メソッドを実行してplayer2の手番
player2が攻撃技ならskill2でplayer1のtake_damageメソッドを実行してターン終了
player2が強化技ならplayer2がreinforceメソッドを実行してターン終了
turn_end?(player1, skill1, player2, skill2)（外部から呼び出し不可）
ターンスキップの判定を行う
どちらかのhpが0ならtrue
両方が攻撃技でスピードが同じならtrue
上記どちらにも当てはまらなければfalse




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
    const NK = lines[0].split(' ').map(x => parseInt(x))
    const N = NK[0]
    const K = NK[1]  
    const players = []
    
    for (var i = 1; i <= N; i++) {
        const temp = lines[i].split(' ').map(x => parseInt(x))
        players.push(new Player(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6]))
    }
    //players.forEach(x => console.log(x));
    
    
    for (var j = N + 1; j <= N + K; j++) {
        const temp = lines[j].split(' ').map(x=> parseInt(x));
        const p1 = players[temp[0] - 1];
        const p2 = players[temp[2] - 1];
        
        if (!p1.IsAlive() || !p2.IsAlive()) continue
        
        const f1 = p1.f[temp[1] - 1]
        const a1 = p1.a[temp[1] - 1]
        const f2 = p2.f[temp[3] - 1]
        const a2 = p2.a[temp[3] - 1]
        
        const p1Reinforce = a1 == 0 && f1 == 0
        const p2Reinforce = a2 == 0 && f2 == 0
        
        if (p1Reinforce && p2Reinforce) {
            p1.Reinforce()
            p2.Reinforce()
        } else if (p1Reinforce) {
            p1.Reinforce()
            p1.TakeDamage(a2)
        } else if (p2Reinforce) {
            p2.Reinforce()
            p2.TakeDamage(a1)
        } else {
            f1 < f2 ? p2.TakeDamage(a1) : p1.TakeDamage(a2)  
        }
    }
    
    let numOfAlivePlayers =  0
    for (let p of players) {
        if (p.IsAlive()) numOfAlivePlayers++
    }
    
    console.log(numOfAlivePlayers)
});



class Player {
    constructor(hp, f1, a1, f2, a2, f3, a3){
        this.hp = hp
        this.f = [f1, f2, f3]
        this.a = [a1, a2, a3]
    }
    
    Reinforce() {
        for (var i = 0; i < 3; i++) {
            if (this.a[i] == 0 && this.f[i] == 0) continue
            
            this.a[i] += 5
            this.f[i] = Math.max(this.f[i] - 3, 1)
        }
            
    }
    
    IsAlive() {
        return this.hp > 0
    }
    
    TakeDamage(d) {
        this.hp -= d
    }
}


