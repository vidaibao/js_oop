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




