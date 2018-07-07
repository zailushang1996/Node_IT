var a = [];
for ( var i=0; i<10; i++ ) {

    (function(i){
        a[i] = function () {
            console.log(i)
        }
    })(i)
}
