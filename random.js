(function(global){
//實作 RandomGenerator
//隨機的部分採用 https://www.random.org/clients/ 提供的API

})(window);

//1. 隨機產生5個數字介於10到100之間(上下皆包含)
var first_generator = new RandomGenerator({
	min : 10,
	max : 100,
	times : 5
});

while(first_generator.hasNext()){
	console.log(first_generator.get());
}

//2. 隨機從給予的資料中選取5個不重複的結果
var second_generator = new RandomGenerator({
	datas : ['a','b','c','d','e','f','g','h','i','j','k'],
	repeat : false,
	times : 5
});

while(second_generator.hasNext()){
	console.log(second_generator.get());
}