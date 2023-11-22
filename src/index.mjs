// /**
//  * const,letによる変数宣言
//  *
//  * varはSwiftと同様定数ではないので上書き・再宣言可能
//  * letも上書きは可能だが再宣言は不可能
//  * constは上書きも再宣言もできない
//  */
// var val1 = "var変数１";
// console.log(val1);
// var val1 = "var変数は2に再宣言";
// console.log(val1);

// let val2 = "val変数2";
// console.log(val2);
// val2 = "val2をうわがき";
// console.log(val2);
// // let val2 = "aa";

// const val3 = "val変数3";
// console.log(val3);

// // val3 = "val変数上書き";
// // console.log(val3);

// /**
//  * だが constで定義したオブジェクトのプロパティは変更可能
//  *
//  */
// const val4 = { name: "名前", age: "10" };
// console.log(val4);

// val4.name = "名前変更";
// val4.address = "住所追加";
// console.log(val4);

// /**
//  * constで定義した配列の変更も可能
//  * 配列もオブジェクト　オブジェクトの中身は書き換えが可能
//  */

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

const name = "太郎";
const age = "11";
const message = "私の名前は" + name + "です。" + age + "です";
console.log(message);
age = "12";
console.log(message);
