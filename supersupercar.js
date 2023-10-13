/**
 * よくクラスの題材を扱う際に、「クラスは車の設計書」といった例が出てきます。
スーパーカー販売店に勤務しながらクラスの勉強をしていた paiza 君はスーパーカーの走る様子をクラスを用いてシミュレーションしてみようと考えました。
ただ車を走らせてもつまらないので、陸を走るスーパーカーに加えて、空を飛べるスーパースーパーカー ・ テレポートできるスーパースーパースーパーカー もシミュレーションに加えた
番号 1 〜 N の N 台のシミュレーションをすることにしました。

それぞれの車について、初めに入っている燃料の量 l と燃費 f が定まっており、加えて、車種に応じて次のような機能を持ちます。

スーパーカー
run
燃料を 1 消費し、 f (km) 走る。
燃料が 0 の場合は何も起こらない。
スーパースーパーカー
run
燃料を 1 消費し、 f (km) 走る。
燃料が 0 の場合は何も起こらない。
fly
燃料を 5 消費し、 f^2 (km) 飛行する。
燃料が 5 未満の場合は run を行う。
スーパースーパースーパーカー
run
燃料を 1 消費し、 f (km) 走る。
燃料が 0 の場合は何も起こらない。
fly
燃料を 5 消費し、 2 * f^2 (km) 飛行する。
燃料が 5 未満の場合は run を行う。
teleport
燃料を f^2 消費し、 f^4 (km) 移動する。
燃料が f^2 未満の場合は fly を行う。
シミュレートする車の台数 N と機能を使う回数 K , N 台の車の車種と機能を使った車の番号と使った機能が与えられるので、全てのシミュレーションが終わった後の、各車ごとの総移動距離を求めてください。

入力される値

N K
k_1 l_1 f_1
...
k_N l_N f_N
n_1 func_1
...
n_K func_K

1 行目では、シミュレートする車の台数 N と機能を使う回数 K が半角スペース区切りで与えられます。
続く N 行のうち i 行目(1 ≦ i ≦ N)では、 i 番の車の種類 k_i , 初めに入っている燃料 l_i , 燃費 f_i が半角スペース区切りで与えられます。
続く K 行では、車の番号 n_i と、使用するその車の機能 func_i が時系列順に与えられます。
入力値最終行の末尾に改行が１つ入ります。

期待する出力

全てのシミュレーションを終えたときの i 番の車の総移動距離 len_i を以下の形式で全ての車について出力してください。

len_1
...
len_N

条件

与えられる値は全て整数
1 ≦ N , K ≦ 10^5
k_i (1 ≦ i ≦ N) は "supercar","supersupercar","supersupersupercar" のいずれか
1 ≦ l_i ≦ 10^5 , 1 ≦ f_i ≦ 100(1 ≦ i ≦ N)
1 ≦ n_i ≦ N (1 ≦ i ≦ K)
func_i (1 ≦ i ≦ K) は "run" , "fly" , "teleport" のいずれか
未定義の機能が呼び出されることはないことが保証されている
入力例1
3 6
supercar 1 1
supersupercar 10 10
supersupersupercar 100 5
1 run
2 run
2 fly
3 run
3 fly
3 teleport
出力例1
1
110
680
入力例2
5 10
supersupercar 1102 67
supersupercar 63296 25
supersupersupercar 47388 32
supersupercar 30968 68
supersupercar 53668 78
2 run
3 teleport
1 fly
2 run
4 run
5 fly
5 run
2 fly
4 run
1 fly
出力例2
8978
675
1048576
136
6162
攻略ポイント
ポイント
SuperCarクラスを定義する
runメソッドを定義
SuperCarクラスを継承したSuperSuperCarクラスを定義する
flyメソッドを定義
SuperSuperCarクラスを継承したSuperSuperSuperCarクラスを定義する
flyメソッドをオーバーライドする
teleportメソッドを定義




続いてSuperCarクラス・SuperSuperCarクラス・SuperSuperSuperCarクラスと問題を解くsolveメソッドを変数の下に定義します。

まず、SuperCarクラス・SuperSuperCarクラス・SuperSuperSuperCarクラスを定義します。

SuperCarクラス

インスタンス変数
燃料 @fuel : Integer
燃費 @gas_mileage : Integer
走行距離 @mileage : Integer（外部から参照可）
initializeメソッド
initialize(fuel, gas_mileage)
@fuel を fuel で初期化する
@gas_mileage を gas_mileage で初期化する
@mileage を 0 で初期化する
インスタンスメソッド
run
@fuelが0なら何もしない
@fuelが1以上なら
@fuel から 1 を引く
@mileage に @gas_mileage を加える
SuperSuperCarクラス（SuperCarクラスを継承）

インスタンスメソッド
fly
@fuelが5未満なら
runメソッドを実行する
@fuelが5以上なら
@fuel から 5 引く
@mileage に @gas_mileage ** 2 を加える
SuperSuperSuperCarクラス（SuperSuperCarクラスを継承）

インスタンスメソッド
fly
@fuelが5未満なら
runメソッドを実行する
@fuelが5以上なら
@fuel から 5 を引く
@mileage に 2 * @gas_mileage ** 2 を加える
teleport
@fuelが@gas_mileage ** 2未満なら
flyメソッドを実行する
@fuelが @gas_mileage ** 2 以上なら
@fuel から @gas_mileage ** 2 を引く
@mileage に @gas_mileage ** 4 を加える



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
    const cars = []
    
    for (var i = 1; i <= N; i++) {
        const temp = lines[i].split(' ')
        if (temp[0] === 'supercar') {
            cars.push(new SuperCar(parseInt(temp[1]), parseInt(temp[2])))
        } else if (temp[0] === 'supersupercar') {
            cars.push(new SuperSuperCar(parseInt(temp[1]), parseInt(temp[2])))
        } else if (temp[0] === 'supersupersupercar') {
            cars.push(new SuperSuperSuperCar(parseInt(temp[1]), parseInt(temp[2])))
        }

    }
    //cars.forEach(x => console.log(x));
    
    
    for (var j = N + 1; j <= N + K; j++) {
        const temp = lines[j].split(' ')
        const index = parseInt(temp[0]) - 1
        if (temp[1] === 'run') {
            cars[index].run()
        } else if (temp[1] === 'fly') {
            cars[index].fly()
        } else if (temp[1] === 'teleport') {
            cars[index].teleport()
        }
    }
    
    cars.forEach(x => console.log(x.mileage));
    
});




class SuperCar {
    constructor(fuel, gas_mileage) {
        this.fuel = fuel
        this.gas_mileage = gas_mileage
        this.mileage = 0
    }
    
    run() {
        if (this.fuel === 0) {
            return
        }
        this.mileage += this.gas_mileage
        this.fuel--
    }
}

class SuperSuperCar extends SuperCar {
    constructor(fuel, gas_mileage) {
        super(fuel, gas_mileage)
        //this.mileage = 0
    }
    
    fly() {
        if (this.fuel < 5) {
            return this.run()
        }
        this.mileage += Math.pow(this.gas_mileage, 2)
        this.fuel -= 5
    }
}

class SuperSuperSuperCar extends SuperSuperCar {
    constructor(fuel, gas_mileage) {
        super(fuel, gas_mileage)
        //this.mileage = 0
    }

    fly() {
        if (this.fuel < 5) {
            return this.run()
        }
        this.mileage += 2 * Math.pow(this.gas_mileage, 2)
        this.fuel -= 5
    }
    
    teleport() {
        if (this.fuel < Math.pow(this.gas_mileage, 2)) {
            return this.fly()
        }
        this.mileage += Math.pow(this.gas_mileage, 4)
        this.fuel -= Math.pow(this.gas_mileage, 2)
    }
}