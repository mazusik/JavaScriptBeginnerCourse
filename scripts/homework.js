'use strict';
  // 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов,
  // а возвращать – массив значений одного из полей (отсортированных в порядке возрастания):
  // ------------------------

 function getFieldValues(usersData, field) {
     let array = [];
     for (let index in usersData) {
 		array.push(usersData[index][field]);
 	}
     return array.sort();
 }
  let usersData = [
  	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
  	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
 @@ -15,7 +24,19 @@ console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']
  // ------------------------

  let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
 -function isEven(x) {/* Проверка на чётность */}
 function isEven(x) {
     return x % 2 == 0;
 }
 function filter(numbers, isEven) {
 	let array = [];
 	for (let i = 0; i < numbers.length; i++) {
         let element = numbers[i];
 		if (isEven(element)) {
 			array.push(element);
 		}
 	}
 	return array;
 }
  console.log(filter(numbers, isEven)); // --> [2, 8, 34]

  // ------------------------
 @@ -27,27 +48,101 @@ console.log(filter(numbers, isEven)); // --> [2, 8, 34]

  var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
  var secondLongString = 'She is over bored and self assured oh no I know a dirty word';
 function findSimilarWords(firstLongString, secondLongString) {
     let firstArray = firstLongString.split(' ');
 	let secondArray = secondLongString.split(' ');
 	let similar = [];
 	for (let i = 0; i < firstArray.length; i++) {
         let element = firstArray[i];
 		if (secondArray.includes(element) && !similar.includes(element)) {
 			similar.push(firstArray[i]);
 		}
 	}
 	return similar;
 }
  console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and', 'is'];

  // ------------------------


 -
  // 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
  // IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:
  // ------------------------

 -var IpAddress = '10.223.98.2';
 -var subnetMask = 28;
 let IpAddress = '10.223.98.2';
 let subnetMask = 28;
 function getNetworkAddress(ipArray, maskArray) {
     let result = [];
     for (let i = 0; i < 4; i++) {
         result.push(ipArray[i] & maskArray[i]);
     }
     return result.join(".");
 }
 function getBroadcastAddress(ipArray, maskArrayInverted) {
     let result = [];
     for (let i = 0; i < 4; i++) {
         result.push(ipArray[i] | maskArrayInverted[i]);
     }
     return result.join(".");
 }
 function generateBroadcastAndNetworsAddresses(IpAddress, subnetMask) {
     let ipArray = IpAddress.split(".");
     let maskArray = [];
     let maskArrayInverted = [];
     if (ipArray.length != 4) {
         return "Invalid IP address!";
     }
     for (let i = 0; i < 4; i++) {
         ipArray[i] = +ipArray[i];
         if (ipArray[i] > 255 || ipArray[i] < 0) {
             return "Invalid IP address!";
         }
     }
 	let maskArrayBinary = [];
 	let maskArrayBinaryInverted = [];
     for (let i = 0; i < 32; i++) {
 		if (subnetMask > 0){
 			maskArrayBinary.push("1");
 			maskArrayBinaryInverted.push("0");
 		} else {
 			maskArrayBinary.push("0");
 			maskArrayBinaryInverted.push("1");
 		}
 		subnetMask--;
 	}
     let index = 0;
     for (let i = 0; i < 4; i++) {
         let octet = "";
         let octetInverted = "";
         for (let i = index; i < index + 8; i++) {
             octet += maskArrayBinary[i];
             octetInverted += maskArrayBinaryInverted[i];
         }
         maskArray.push(parseInt(octet, 2));
         maskArrayInverted.push(parseInt(octetInverted, 2));
         index += 8;
     }
     return "Broadcast - " + getBroadcastAddress(ipArray, maskArrayInverted) + ", Network - " + getNetworkAddress(ipArray, maskArray);
 }
  console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

  // ------------------------


  // 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
  // ------------------------
 -

  var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
 function makeItClean(totalMessArray) {
     let array = [];
     for (var i = 0; i < totalMessArray.length; i++) {
         array = array.concat(totalMessArray[i]);
     }
     array = array.filter(function(element, index) {
         return array.indexOf(element) == index;
     });
     return array;
 }
  console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, '1', undefined, true];

  // ------------------------