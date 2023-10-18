// Dynamic Programming
/**
 * Dynamic Programming (DP) là một phương pháp giải quyết các bài toán tối ưu hóa và tìm kiếm 
 * trong lĩnh vực khoa học máy tính và toán học. Nó là một kỹ thuật sử dụng lập trình động để 
 * giải quyết các bài toán có cấu trúc trùng lặp, trong đó kết quả của các bài toán con có thể 
 * được sử dụng để tối ưu hóa việc giải quyết bài toán lớn hơn. 
 * DP thường được sử dụng để giải quyết các bài toán tối ưu hóa, như tìm đường đi ngắn nhất trong đồ thị,
 *  tối ưu hóa lựa chọn, hoặc tối ưu hóa các chuỗi hoạt động.

Các đặc điểm quan trọng của DP bao gồm:

Overlapping Subproblems (Các bài toán con trùng lặp): DP thường được áp dụng cho các bài toán mà có
sự trùng lặp trong việc giải quyết các bài toán con. Thay vì giải quyết lại từng bài toán con nhiều lần, 
DP lưu trữ kết quả của các bài toán con và sử dụng lại chúng khi cần.

Optimal Substructure (Cấu trúc tối ưu): Một bài toán lớn có thể được tối ưu hóa bằng cách tối ưu hóa 
các bài toán con của nó. Điều này cho phép chia nhỏ một bài toán lớn thành các bài toán con nhỏ hơn và 
giải quyết chúng một cách đệ quy.

Memoization (Ghi nhớ): DP thường sử dụng kỹ thuật ghi nhớ để lưu trữ kết quả của các bài toán con đã được giải quyết.
Khi một bài toán con đã được giải, kết quả được lưu trữ để tránh tính toán lại nếu cần.

DP có nhiều ứng dụng trong lĩnh vực khoa học máy tính, bao gồm tối ưu hóa các thuật toán tìm kiếm, 
tối ưu hóa quy trình quyết định, tối ưu hóa dãy thời gian, và nhiều bài toán phức tạp khác. 
Nó là một công cụ quan trọng trong việc tối ưu hóa giải quyết các bài toán có tính chất đệ quy hoặc có cấu trúc trùng lặp.
 */





// 2項間漸化式 1 (paizaランク C 相当)

/**
 * (問題)
整数 x, d, k が与えられます。
次のように定められた数列の k 項目の値を出力してください。

・ a_1 = x
・ a_n = a_{n-1} + d (n ≧ 2)
(ヒント)
等差数列の公式を使えばDPを使わずとも答えを求めることができますが、練習だと思ってDPで解いてみましょう。

DPを考える際には、まず漸化式を考えるとよいです。漸化式は、数列の各項をその前の項を用いて記述した式です。問題で与えられている a_n = a_{n-1} + d という式がこの問題における漸化式となっています。

では、実際にこの問題を解いてみましょう。最終的に求めたいのは a_k です。a_1 ~ a_{k-1} がわかっているとして、a_k がどうなるかを考えてみましょう (a_1 ~ a_{k-1} が、「はじめに」の部分で述べた"部分問題"に相当しています) 。a_{k-1} がわかっているので、a_k = a_{k-1} + d とすればよいですね。今回は a_1 が x であることがわかっているので、順に a_2, a_3, a_4, ... を計算していけば a_k が求まることがわかるかと思います。

以下の疑似コードを参考にして、あなたの得意な言語で実装してみましょう。

a[1] <- x

for i = 2 to k
    a[i] <- a[i-1] + d

print a[k]
 */


reader.on('close', () => {
    const XDK = lines[0].split(' ').map(x => parseInt(x))
    const x = XDK[0]
    const d = XDK[1]
    const k = XDK[2]
    const arr = [0]
    
    arr[1] = x
    
    for (let i = 2; i <= k; i++) {
        arr[i] = arr[i - 1] + d
    }
    
    console.log(arr[k]);
});



/////////////////////////////////////////////////////////////////////////

/** 2項間漸化式 2 (paizaランク C 相当)
 * 
 * 整数 x, d, Q と Q 個の整数 k_1, k_2, ... , k_Q が与えられます。

次のように定められた数列の k_i 項目の値を順に出力してください。


・ a_1 = x
・ a_n = a_{n-1} + d (n ≧ 2)
 */


reader.on('close', () => {
    const XD = lines[0].split(' ').map(x => parseInt(x))
    const x = XD[0]
    const d = XD[1]
    
    const Q = parseInt(lines[1])
    
    
    for (let i = 2; i < Q + 2; i++) {
        const k = parseInt(lines[i])
        const arr = [0]
        arr[1] = x
        for (let j = 2; j <= k; j++) {
            arr[j] = arr[j - 1] + d
        }
        console.log(arr[k]);
    }    
    
    
});



/**
 * 特殊な2項間漸化式 1 (paizaランク B 相当)
 * 
 * 整数 x, d_1, d_2, k が与えられます。
次のように定められた数列の k 項目の値を出力してください。

・ a_1 = x 
・ a_n = a_{n-1} + d_1 (n が奇数のとき、n ≧ 3) 
・ a_n = a_{n-1} + d_2 (n が偶数のとき)
(ヒント)
添字の偶奇によって漸化式の形が変わっていますが、やることはこれまでと同じです。a_1 ~ a_{k-1} が求まっているとして、
a_k をどのように計算すればよいかを考えてみましょう。計算するときに、添字の偶奇による場合分けを行えばよいです。
 */



reader.on('close', () => {
    const xddk = lines[0].split(' ').map(x => parseInt(x))
    const x = xddk[0]
    const d1 = xddk[1]
    const d2 = xddk[2]
    const k = xddk[3]
    const arr = [0]
    arr[1] = x

    for (let i = 2; i <= k; i++) {
        const d = i % 2 === 0 ? d2 : d1
        arr[i] = arr[i - 1] + d
    }    
    console.log(arr[k]);
});


/**
 * 特殊な2項間漸化式 2 (paizaランク B 相当)
 * 
 * 整数 x, d_1, d_2, Q と Q 個の整数 k_1, k_2, ... , k_Q が与えられます。

次のように定められた数列の k_i 項目の値を順に出力してください。


・ a_1 = x 
・ a_n = a_{n-1} + d_1 (n が奇数のとき、n ≧ 3) 
・ a_n = a_{n-1} + d_2 (n が偶数のとき)
 */



reader.on('close', () => {
    const xdd = lines[0].split(' ').map(x => parseInt(x))
    const x = xdd[0]
    const d1 = xdd[1]
    const d2 = xdd[2]
    
    const Q = parseInt(lines[1])
    
    for (let i = 2; i < Q + 2; i++) {
        const k = parseInt(lines[i])
        const arr = [0]
        arr[1] = x
        for (let j = 2; j <= k; j++) {
            const d = j % 2 === 0 ? d2 : d1
            arr[j] = arr[j - 1] + d
        }
        console.log(arr[k]);
    }

});



/**
 * 3項間漸化式 1 (paizaランク B 相当)
 * 
 * 整数 k が与えられます。
次のように定められた数列の k 項目の値を出力してください。
ちなみに、これはフィボナッチ数列と呼ばれる有名な数列です。

・ a_1 = 1 
・ a_2 = 1 
・ a_n = a_{n-2} + a_{n-1} (n ≧ 3)
(ヒント)
漸化式に登場する項の数が2つから3つへ増えましたが、やはりやることはこれまでと同じです。
 */

reader.on('close', () => {
    const k = parseInt(lines[0])
    const arr = [0]
    arr[1] = 1
    arr[2] = 1
    
    for (let i = 3; i <= k; i++) {
        arr[i] = arr[i-2] + arr[i-1]   
    }
    
    console.log(arr[k]);
});



/**
 * 漸化式】 3項間漸化式 2 (paizaランク B 相当)
 * 
 * 整数 Q と Q 個の整数 k_1, k_2, ... , k_Q が与えられます。

次のように定められた数列の k_i 項目の値を順に出力してください。

ちなみに、これはフィボナッチ数列と呼ばれる有名な数列です。


・ a_1 = 1 
・ a_2 = 1 
・ a_n = a_{n-2} + a_{n-1} (n ≧ 3)
 */






/**
 * 階段の上り方 1 (paizaランク B 相当)
 * 
 * 整数 n が与えられます。
階段を上るのに、1 歩で 1 段または 2 段を上ることができるとき、n 段の階段を上る方法は何通りあるでしょうか。

(ヒント)
これまでは問題文中に具体的な漸化式が書かれていましたが、この問題にはありません。自分で漸化式を立てる必要があります。

部分問題として、1 ~ n-1 段の階段を上る方法が何通りあるか、という問題を考えてみましょう。
この部分問題の答えが求まっているとして、n 段の階段を上る方法が何通りあるかを考えてみましょう。
n 段目に到達するには、n-1 段目から1段上る方法と、n-2 段目から2段上る方法の2種類が考えられます。
dp[n] を n 段の階段を上る方法の数とすれば、この関係は dp[n] = dp[n-1] + dp[n-2] で表すことが出来ます。
よって、0段の階段を上る方法が1通り (何もしない) であることを踏まえると、以下のようにして答えを求めることが出来ます。

dp[0] <- 1

for i = 1 to n
    dp[i] <- 0
    if i >= 1 then
        dp[i] <- dp[i] + dp[i-1]    // i-1 段目から1段上って i 段へ到達
    if i >= 2 then
        dp[i] <- dp[i] + dp[i-2]    // i-2 段目から2段上って i 段へ到達

print dp[n]
このような場合分けをすると上で考察した漸化式を満たす配列が実現できます (ピンとこなければ、i に具体的な値を入れて dp[i] がどのように計算されるのか、その処理を追ってみましょう) 。この場合分けは今のところ冗長に見えますが、次の問題を解くときに活きてきます。
 */


reader.on('close', () => {
    const n = parseInt(lines[0])
    const arr = [1]
    
    for (let i = 1; i <= n; i++) {
        arr[i] = 0 // init before use
        if (i >= 1) {
            arr[i] += arr[i-1]
        }
        if (i >= 2) {
            arr[i] += arr[i-2]
        }
    }

    console.log(arr[n]);
});
// 100



/**
 * 階段の上り方 2 (paizaランク B 相当)
 * 
 * 整数 n, a, b が与えられます。
階段を上るのに、1歩で a 段または b 段を上ることができるとき、n 段の階段を上る方法は何通りあるでしょうか。

(ヒント)
前問とやることは同じです。ただ、n, a, b の値によっては答えが0になることがあるので注意しましょう。
例えば、n = 4, a = 3, b = 5 のとき、答えは0です。(1歩で3段か5段上ることができるとき、ちょうど4段の階段を上る方法は存在しない)
 */



reader.on('close', () => {
    const nab = lines[0].split(' ').map(x => parseInt(x))
    const n = nab[0]
    const a = nab[1]
    const b = nab[2]
    
    const ways = [1]
    
    for (let i = 1; i <= n; i++) {
        ways[i] = 0
        if (i >= a) {
            ways[i] += ways[i-a]
        }
        if (i >= b) {
            ways[i] += ways[i-b]
        }
        
    }
    
    console.log(ways[n]);
});
// 100


reader.on('close', () => {
    const nabc = lines[0].split(' ').map(x => parseInt(x))
    const n = nabc[0]
    const a = nabc[1]
    const b = nabc[2]
    const c = nabc[3]
    
    const ways = [1]
    
    for (let i = 1; i <= n; i++) {
        ways[i] = 0
        if (i >= a) {
            ways[i] += ways[i-a]
        }
        if (i >= b) {
            ways[i] += ways[i-b]
        }
        if (i >= c) {
            ways[i] += ways[i-c]
        }
    }
    
    console.log(ways[n]);
});




/**
 * 最安値を達成するには 1 (paizaランク B 相当)
 * 
 * 
 * 八百屋にて、りんご1個が a 円で、りんご2個が b 円で売られています。

りんごの買い方を工夫したとき、n 個のりんごを手に入れるために必要な金額の最小値はいくらでしょうか。なお、買い方を工夫した結果、買ったりんごが n+1 個以上になってもよいものとします。

(ヒント)
りんご1つあたりの値段を計算し、安いほうのりんごを買うことで金額の最小値を達成することもできますが、練習だと思ってDPで解いてみましょう。

部分問題として、りんご i 個 (1 ≦ i ≦ n-1) を買うのに必要な金額の最小値を求める問題を考えてみましょう。これらの問題の答えがすべて分かっているとして、n 個のりんごを買うのに必要な金額の最小値はどうなるかを考えてみましょう。少し考えると、n 個のりんごを最も安く買う方法は、

n-1 個のりんごを最も安く買ってから最後に1個のりんごを a 円で買う
n-2 個のりんごを最も安く買ってから最後に2個のりんごを b 円で買う
の2通りのうち安いほうであることがわかります。なお、a < b という制約があるため、n-1 個のりんごを最も安く買ってから最後に1個買う代わりに2個買うのは常に無駄であることに注意しましょう。これで、部分問題と元の問題との関係が明らかになりました。dp[n] をちょうど n 個のりんごを買うのに必要な金額の最小値として、漸化式を立ててみましょう。(次セクションに答え)

漸化式を自力で立てられましたか？漸化式は dp[n] = min(dp[n-1] + a, dp[n-2] + b) となります。以下の疑似コードに従って、あなたの得意な言語で実装してみましょう。

dp[0] <- 0
dp[1] <- a

for i = 2 to n
    dp[i] <- min(dp[i-1] + a, dp[i-2] + b)

print dp[n]
 */


reader.on('close', () => {
    const nab = lines[0].split(' ').map(x => parseInt(x))
    const n = nab[0]
    const a = nab[1]
    const b = nab[2]
    
    const dp = [0, a]
    
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i-1] + a, dp[i-2] + b)
    }
    
    console.log(dp[n]);

});




/**
 * 最安値を達成するには 2 (paizaランク B 相当)
 * 
 * 
 * 八百屋にて、りんご2個が a 円で、りんご5個が b 円で売られています。
りんごの買い方を工夫したとき、n 個のりんごを手に入れるために必要な金額の最小値はいくらでしょうか。
なお、買い方を工夫した結果、買ったりんごが n+1 個以上になってもよいものとします。

(ヒント)
前問の八百屋ではりんごが1個と2個で売られていましたが、本問の八百屋では2個と5個で売られています。
この変更により、前問と同じようにして解こうとするとうまくいかなくなりました。理由を考えてみてください。

前問と同じように dp[n] をちょうど n 個のりんごを買うのに必要な金額の最小値とすると、dp[3] の値が正しく計算されないことがわかります。
これは、りんごは2個ずつか5個ずつでしか買うことが出来ないため、3個のりんごをちょうど買う方法が存在しないからです。
では、どうしたら dp[3] のような、2と5の組合せでは作れないような個数について最安値を計算することが出来るでしょうか。

問題文の最後の文に注目すると、買うりんごの数が3個以上になってもよいことがわかるので、ここで dp2[n] を 
n 個以上のりんごを買うのに必要な金額の最小値としてみましょう。dp と dp2 の定義から、dp2[n] = min(dp[n], dp[n+1], ...) 
であることがわかります。dp2[n] が求めたい答えになっています。

dp は dp[n] までではなく、余裕をもって dp[n+4] 程度まで計算しておく必要があることに注意しましょう 
(実はこの問題においては dp[n+2] まで計算しておけば十分なのですが、ある程度多めに計算しておくと安心です) 。
また、実は新しく dp2 という配列を用意せずとも、dp をうまく書き換えることで答えを求めることもできます。
余裕があれば考えてみてください (ヒント:ループを回す順番を工夫) 。
 */


























