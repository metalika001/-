//indexof: 조건에 해당하는 값이 몇번째 인덱스에 있는지를  표시
function init(){
    let a= [11,22,24,24]
    let b= [22]
    //for (let i=0; i<a.length; i++) {
      //  if(a[i]==b) {
        //    console.log('happy')
       // }
 //   }
if(a.indexOf (b)!= undefined) {
    console.log('당첨')

}



    //filter : 조건에 해당하는 값이 몇개 있는지를 검색해서 , 배열에 담아서 표시
   // let b= 24
    //let c = a.filter (function (item) { return item === b})
    //console.log(c) // [ 24 ,24]


    //nap : 밸류값 인덱스값을 동시에 꺼낸다.
   // a.map(function 
      //  (v,i) {
       // if (b==v){
         //   console.log(i+1+"번째상품이 당첨")
          //  }
       // })
        // foreach : 배열안에 있는값들을 하나씩 꺼낸다. 
        a.forEach (function (item) {
            if(item== b) {
                console.log('conglatulations')
            }
        })
       a.forEach (function (item) {
        if (item==b) {
            console.log ('tt') 
        }
       })
    a.forEach (function(value , index , array) {
        console.log('value: ' , value)
        console.log('index: ' , index)
        console.log('array: ' , array)

    })





        }










     
init()