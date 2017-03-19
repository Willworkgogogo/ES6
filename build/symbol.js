// 1
// 1. 变量 直接作为 对象属性
var foo = 'bar';
var baz = { foo };
// console.log(baz) // {foo: 'bar'}


// 2. 属性简写
function f(x, y) {
	return { x, y };
}
// console.log(f(1, 2)) // {x : 1, y : 2}


// 3. 方法简写
var o = {
	method() {
		return 'hello';
	}
};
// =====> 等同于
// var o = {
// 	method: function() {
// 		return 'hello';
// 	}
// }
// console.log(o.method()) // hello


// 4. 例子
var birth = '2018/02/03',
    Person = {
	name: '张三',
	birth,
	hello() {
		console.log(this.name + ', ' + this.birth);
	}
};
// Person.hello() // 张三, 2018/02/03


// 导出模块时使用简写的便利
var ms = {};

function getitem(key) {
	return key in ms ? ms[key] : null;
}

function setItem(key, value) {
	ms[key] = value;
}

function clear() {
	ms = {};
}

// module.exports = { getItem, setItem, clear}
// 等同于
// module.exports = {
// 	getItem: getItem,
// 	setItem: setItem,
// 	clear: clear,
// }


// setter , getter   属性的赋值器 和 取值器,  给一个对象里的属性赋值
var cart = {
	_wheels: 4,

	get wheels() {
		return this._wheels;
	},

	set wheels(value) {
		if (value < this._wheels) {
			throw new Error('数值太小了！');
		}
		this._wheels = value;
	}
};
// console.log(cart._wheels)   4


//2 属性名表达式

// 
let propkey = 'foo';

let obj = {
	[propkey]: true,
	['a' + 'bc']: 123
};
console.log(obj.foo);