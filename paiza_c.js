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



















