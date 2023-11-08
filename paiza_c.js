/**
 * C138:反復横跳び大会
 * 
 * 
 * 今日は PAIZA 小学校の反復横跳び大会でした。
あなたは、この大会の記録委員に任命されており、記録を集計する必要があります。

生徒の記録からそれぞれの順位を求めてください。

ただし、記録が X 回の生徒の順位は、記録が X より大きい生徒の人数 + 1 となり、同じ順位の生徒が存在することもあります。

例えば、入力例 1 の場合、以下のようになります。
 */



reader.on('close', () => {
    const n = parseInt(lines[0])
    const points = []
    for (var i = 1; i <= n; i++) {
        points.push([parseInt(lines[i]), 101]) 
    }
    //console.log(points);
    
    points.forEach(item => {
        item[1] = points.filter(x => x[0] > item[0]).length + 1
        //countOfLagerPoint
    })
    
    //console.log(points);
    
    points.forEach(item => console.log(item[1]))
    
});


/**
 * C045:ページネーション
 * 
 * 
 * あなたは検索サイトを作成するエンジニアです。
この検索サイトでは便宜上、検索結果の件数を n 件としたとき、各検索結果は表示順に 1 から n まで番号付けられているとします。

今日のあなたの仕事はページネーションを実装することです。
ページネーションとは、大量に得られた検索結果を「ページサイズ」と呼ばれるサイズ毎に区切ることで、検索結果を複数のページに分割して表示する機能です。

例えば、検索結果が 34 件であり、ページサイズが 10 件/ページとすると
これらの検索結果はページ 1 からページ 4 までの 4 枚のページに分割され、各ページに表示される検索結果の番号は以下のようになります。

・ページ 1: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
・ページ 2: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
・ページ 3: 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
・ページ 4: 31, 32, 33, 34

検索結果の件数 n、ページサイズ s および表示したいページ番号 p が入力されるので、ページ p に表示される検索結果の番号を昇順に全て出力するプログラムを作成してください。
ただし、ページ p に表示される検索結果が 1 つも存在しない場合は "none" と出力してください。

入力例1を表した図

入力される値
入力は以下のフォーマットで与えられます。

n s p
・1 行目には、検索結果の件数を表す整数 n、ページサイズを表す整数 s および表示したいページ番号を表す整数 p がこの順で半角スペース区切りで入力されます。
・入力は 1 行となり、末尾に改行が 1 つ入ります。

それぞれの値は文字列で標準入力から渡されます。標準入力からの値取得方法はこちらをご確認ください
期待する出力
ページ p に表示される検索結果の番号を、昇順に全て半角スペース区切りで出力してください。

出力の最後に改行を入れ、余計な文字、空行を含んではいけません。

条件
すべてのテストケースにおいて、以下の条件をみたします。

・0 ≦ n ≦ 10,000
・1 ≦ s ≦ 10,000
・1 ≦ p ≦ 10,000
入力例1
34 10 3
出力例1
21 22 23 24 25 26 27 28 29 30
入力例2
10 10 2
出力例2
none
 */

reader.on('close', () => {
    const [n, s, p] = lines[0].split(' ').map(Number)
    
    if (Math.ceil(n  / s) < p) {
        console.log("none")
        return
    }  
    
    let page = []
    for (let i = (p - 1) * s + 1; i <= Math.min(n, p * s); i++) {
        page.push(i)
    }
    
    console.log(page.join(' '));
});



/**
 * C038:お菓子の分配
 * 

お菓子製造工場で働いている Bob は、小分け販売のためにお菓子を分配する作業を行っています。


作業には、 M 種類の機械が用いられます。

i 種類目の機械は、積み込まれたお菓子を m_i 個の容器に均等に分配し、余りを排出します。


Bob は、作業効率を上げるために、排出される余りが最も少なくなるようなお菓子の分配方法を知りたいと思っています。 ただし、このような分配方法が複数あった場合には、可能な限り小分け販売できるように、分配される容器の総数が最も多くなる方法を優先したいと考えています。

N 個のお菓子を分配するとき、 Bob の考えに沿う機械はどれでしょうか？


入力例 1 の図解を以下に示します。
 */

reader.on('close', () => {
    
    const [M, N] = lines[0].split(' ').map(Number)
    const arrM = []
    for (let i = 1; i <= M; i++) {
        const numBox = parseInt(lines[i])
        const remain = N % numBox
        arrM.push([i, numBox, remain])
    }
    //console.log(arrM);
    
    arrM.sort((a, b) => {
        if (a[2] < b[2]) {
            return -1;  // a should come before b
        } else if (a[2] > b[2]) {
            return 1;   // a should come after b
        } else {
            // If a[2] values are equal, sort by a[1] in descending order
            if (a[1] > b[1]) {
                return -1;  // a should come before b
            } else if (a[1] < b[1]) {
                return 1;   // a should come after b
            }
            return 0;  // a and b are equal with respect to both criteria
        }
    });
    console.log(arrM[0][0]);
    
});


/**
 * C005:アドレス調査
 * 
 * 
 * あなたはあるソフトウェアの開発でIPアドレスを入力してもらう機能の一部を開発しています。
入力は手入力で「.」と「数字」で構成された長さNの文字列が入力されます。

入力されているIPアドレスが書式に合っているか判定して、合っていればTrue、
違っていればFalseと標準出力で出力するプログラムを作成してください。

判別すべきIPアドレスはIPv4で定義された範囲のIPアドレスとします。書式は以下のようになります。

.で区切られた10進数の4つの数で表されます。
数の範囲は0から255までとします。
例:
100.23.103.20
123.11.22.33
14.33.103.20
102.233.13.2
 */

reader.on('close', () => {
    for (var i = 1, n = parseInt(lines[0]); i <= n; i++) {
        const ipAdd = lines[i].split('.').map(x => parseInt(x))
        //console.log(ipAdd);
        if (ipAdd.length != 4) {
            console.log("False");
            continue
        }
        let flag = true
        for (var j = 0; j < ipAdd.length; j++) {
            if (isNaN(ipAdd[j]) || ipAdd[j] < 0 || ipAdd[j] > 255) {
                console.log("False");
                flag = false
                break
            }
        }
        flag && console.log("True");
    }
    
     
});



/**
 * 【シミュレーション 2】perfect shuffle (paizaランク B 相当)
 * 
 * 
 * トランプのシャッフルの種類の一つにパーフェクトシャッフルというものがあり、パーフェクトシャッフルにおける 1 回のシャッフルは次の一連の操作を指します。

1. 全52枚の山札を上半分と下半分に分ける。
2. 下半分の一番下のカード, 上半分の一番下のカード, 下半分の下から 2 番目のカード, 上半分の下から 2 番目のカード, ... , 下半分の一番上のカード, 上半分の一番上のカード という順番でカードを積み重ねていく。

トランプの絵柄をS(スペード), H(ハート), D(ダイア), C(クラブ) と表現するものとし、その絵柄の 1 からキングまでの各カードを S_1 , ... , S_13 のように表現するものとします。

上から S_1, ... , S_13, H_1, ... , H_13, D_1, ... , D_13, C_1, ... , C_13 という順のトランプの山札を用いてパーフェクトシャッフルの操作を K 回おこなった後の山札のカードを上から順に出力してください。

カードの出力には {絵柄のアルファベット}_{カードの数字} の表現法を用いてください。
 * 
 */

reader.on('close', () => {
    const K = parseInt(lines[0])
    const originTrump = []
    let newTrump = []
    let upperTrump = []
    let lowerTrump = []
    const kinds = ['S', 'H', 'D', 'C']
    for (let k of kinds) {
        for (let i = 1; i <= 13; i++) {
            originTrump.push(k + '_' + i);
        }
    }
    if (K == 0) {
        originTrump.forEach(x => console.log(x))
        return
    }
    
    newTrump = [...originTrump]
    for (let k = 1; k <= K; k++) {
        
        upperTrump = newTrump.slice(0, 26)
        lowerTrump = newTrump.slice(26)
        
        newTrump = []
        for (let i = 1; i <= 26; i++) {
            newTrump.push(upperTrump[i-1])
            newTrump.push(lowerTrump[i-1])
        }
    }
    
    //console.log(upperTrump);
    //console.log(lowerTrump);
    
    
    //console.log(newTrump);
    newTrump.forEach(x => console.log(x))
    
});




/**
 * 【シミュレーション 3】燃費 (paizaランク B 相当)
 * 
 * 
 * 
 * 一般的な車では、車が止まった状態から発進する際は燃費がよくないことが知られています。
このことを知った paiza 君は発進時とそれ以外での燃費を分けて考えることで実際の燃費を求めたいと考えました。

具体的には、発進から X m 走るまでは 1 m あたり燃料が F_1 ml, 発進から X m 走った後から止まるまでは 1 m あたり燃料が F_2 ml かかります。
途中、出発地点から s_1(m), ..., s_N(m) の地点で一時停止をしながら全長 L m を走ると、全体を通して必要な燃料は何 ml になるでしょうか？

なお、停車中の燃料の消費や燃料切れについては考えないものとします。

入力される値
X
F_1 F_2
L N
s_1 ... s_N


期待する出力
途中 s_1(m), ..., s_N(m) の地点で一時停止をしながら全長 L m を走ると、全体を通して必要な燃料(ml) を出力してください。

条件
・1 ≦ X ≦ 1000
・1 ≦ F_2 ≦ F_1 ≦ 100
・1 ≦ N ≦ 1000
・0 < s_1
・s_i < s_{i+1}(1 ≦ i < N)
・s_N ≦ L ≦ 1,000,000,000

入力例1
10
7 3
100 1
50

出力例1
380

入力例2
50
5 4
100 2
30 60

出力例2
500

 */


reader.on('close', () => {
    const X = parseInt(lines[0])
    const [F1, F2] = lines[1].split(' ').map(Number);
    const [L, N] = lines[2].split(' ').map(Number);
    const S = [0].concat(lines[3].split(' ').map(Number), L);
    //S.push(L)//
    //console.log(S);
    let res = 0

    for (var i = 1; i < S.length; i++) {
        const dS = S[i] - S[i-1]    // deltaS
      if (dS > X) {
          res += X * F1 + (dS - X) * F2;
      } else {
          res += dS * F1
      }
    }

    console.log(res);
});





/**
 * C069:お祭りの日付


paiza 王国では 4 で割って余りが 1 になる年に開催されるパイーザ祭があります。
paiza 王国では暦が独特であり、以下のような暦になっています。

・1 年には 1 月から 13 月までの 13 ヶ月がある。
・偶数月の日数は 15 日である。
・奇数月の日数は 13 日である。

paiza 王国の国民たちはこのパイーザ祭が大好きでいつも、次に開催される日を楽しみにしています。
あなたも、パイーザ祭を楽しみにしているので、次の開催日まであと何日あるのか早く知りたいです。

そこで、あなたには、現在の日付と次のパイーザ祭の開催日が与えられるので、次のパイーザ祭までの日数を計算するプログラムを作ってもらいます。
ただし、今年パイーザ祭は開催されないことはわかっており、今日の日付はカウントされません。

入力例 1 の場合、以下のようになります。
 * 
 * 
 * 
 * 
 */

reader.on('close', () => {
    const [y, m, d] = lines[0].split(' ').map(Number);
    const [a, b] = lines[1].split(' ').map(Number);
    let nextCelebYear = y;
    let countDays = 0;
    while(nextCelebYear % 4 != 1){
        nextCelebYear++
    }
    //console.log(nextCelebYear)
    
    for (let year = y; year <= nextCelebYear; year++) {
        const monthOfYear = year == nextCelebYear ? a : 13
        for (let month = year > y ? 1 : m; month <= monthOfYear; month++) {
            //console.log(month)
            let dayOfMonth = 1;
            if (year == nextCelebYear && month == a) {
                dayOfMonth = b + 1
            } else {
                dayOfMonth = month % 2 == 0 ? 15 : 13
            }
            //console.log(dayOfMonth)
            let startDay = countDays == 0 ? d + 1 : 0
            
            countDays += dayOfMonth - startDay;
        }
    }
    
    console.log(countDays);
});





/**
 * C018:何人前作れる？
 * 
 * 
 * 
 * 魅力的な料理のレシピを手に入れたあなたは、早速調理を始めたいと思っています。
レシピには、1人前を調理するのに必要な食材とその量が載っています。

このレシピと、あなたが所持している食材とその量が与えられるので、最大で何人前作れるかを求めてください。

入力される値
入力は以下のフォーマットで与えられます。

n　　　　　#レシピに書かれている食材の数を表す整数 n
a_1 b_1　　#レシピに書かれている食材の名前 a_1, 数 b_1
a_2 b_2　　#レシピに書かれている食材の名前 a_2, 数 b_2
...
a_n b_n　　#レシピに書かれている食材の名前 a_n, 数 b_n
m　　　　　#あなたが所持している食材の数を表す整数 m
c_1 d_1　　#所持している食材の名前 c_1, 数 d_1
c_2 d_2　　#所持している食材の名前 c_2, 数 d_2
...
c_m d_m　　#所持している食材の名前 c_m, 数 d_m
ここで、n はレシピに書かれている食材の数を表す整数
文字列 a_i と整数 b_i (1 ≦ i ≦ n) は、1人前あたりの食材 a_i が b_i だけ必要であることを表します。

同様に、m はあなたが所持している食材の数を表す整数
文字列 c_i と整数 d_i (1 ≦i ≦ m) は、食材 c_i を d_i だけ所持していることを表します。


期待する出力
何人前作ることができるかを数字で一行に出力してください。

最後は改行し、余計な文字、空行を含んではいけません。
条件
すべてのテストケースで以下の条件を満たします。

・1 ≦ n ≦ 100
・0 ≦ m ≦ 100
・1 ≦ a_i の長さ, c_i の長さ ≦ 10
・1 ≦ b_i ≦ 100
・1 ≦ d_i ≦ 10,000
・i ≠ j のとき a_i ≠ a_j
・i ≠ j のとき c_i ≠ c_j

入力例1
4
supaisu 5
imo 2
niku 2
mizu 3
6
mizu 7
imo 4
ninjin 10
unagi 6
supaisu 20
niku 5
出力例1
2
入力例2
2
gohan 1
okazu 1
1
mizu 10000
出力例2
0

 */


reader.on('close', () => {
    const n = parseInt(lines[0])
    const m = parseInt(lines[n + 1])
    const iHave = []
    for (let i = n + 2; i < n + 2 + m; i++) {
        const temp = lines[i].split(' ')
        iHave[temp[0]] = parseInt(temp[1])
    }
    //console.log(iHave);
    
    let serving = []
    for (let i = 1; i <= n; i++) {
        const temp = lines[i].split(' ')
        //console.log(!iHave.hasOwnProperty(temp[0]))
        if ( !iHave.hasOwnProperty(temp[0]) ||
            iHave[temp[0]] / parseInt(temp[1]) < 1 ) {
            console.log(0);
            return;
        }
        let ninbun = Math.floor(iHave[temp[0]] / parseInt(temp[1]));
        serving.push(ninbun); 
        //console.log(ninbun, iHave[temp[0]], temp[1]);
    }
    console.log(Math.min(...serving))    
});







/**
 * C065:【ぱいじょ！コラボ問題】数字あてゲーム
 * 
 * 
 * 
 * 霧島京子・六村リオ・緑川つばめの3人は、「数字を使ったゲームを考える」というグループ課題で、次のようなゲームを考えました。

プレイヤーには、ある正整数 a に関する N 個のヒントが与えられます。
あなたはプレイヤーとして、そのヒントに基づいた正整数 a を推定し、出力してください。

ヒントには、以下の 3 種類があります。
x を変数として、

・"> x" は、a が x よりも大きいことを示します。
・"< x" は、a が x よりも小さいことを示します。
・"/ x" は、a が x でちょうど割り切れることを示します。

例えば、入力例 1 では以下のヒント 3 つが与えられます。

> 30
< 40
/ 5

このヒントを読み替えると、正整数 a は 30 より大きく 40 より小さい 5 で割り切れるものだとわかります。
すなわち、入力例 1 では a = 35 とわかるので 35 を出力してください。

条件
すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ N ≦ 10
・各 i (1 ≦ i ≦ N) について
　・o_i は半角記号で ">", "<", "/" のいずれか
　・1 ≦ x_i ≦ 100
・N 個の条件を満たす正整数は一意に定まる。
入力例1
3
> 30
< 40
/ 5
出力例1
35
入力例2
4
/ 4
< 90
/ 6
> 77
出力例2
84
 */





reader.on('close', () => {
    let X = [];
    for ( let j=1; j<=100; X.push(j++) ) {}
    
    for (let i = 1, n = parseInt(lines[0]); i <= n; i++) {
        const temp = lines[i].split(' ')
        //const index = X.indexOf(parseInt(temp[1]))
        if (temp[0] == '>') {
            X = X.filter(x => x > parseInt(temp[1]))
        } 
        else if (temp[0] == '<') {
            X = X.filter(x => x < parseInt(temp[1]))
        } 
        else { // '/'
            //console.log("////");
            X = X.filter(x => x % parseInt(temp[1]) == 0)
        }
    }

    console.log(X[0]);
});









