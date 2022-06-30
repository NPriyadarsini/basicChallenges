 const purchases=[
	[ 
		{
			name:'Ragi',
			quantity:2,
		},
		{
			name:'Oil',
			quantity:3,
		},
		{	
			name:'Rice',
			quantity:15,
		},
		{
			name:'wheat',
			quantity:5,
		}],
	[
		{
			name:'Rice',
		 quantity:20,
		},
		{
			name:'Salt',
			quantity:2,
		},
		{
			name:'Sugar',
			quantity:2,
		},
		{
			name:'Dal',
			quantity:3
		}],
	[{
			name:'Rice',
		  quantity:5,
		},
		{
			name:'Wheat',
			quantity:1,
		}
	],
 ];
const data = purchases;
var getSmallestPurchaseList  = (purchase) => purchase.reduce((a,b) => a.length <= b.length ? a : b);

var hasCommonItem =(itemList)=>{
	var products = getSmallestPurchaseList(data);
	return products.some((item)=>item.name===itemList.name )
}
var getCommonItemList = (purchase) => purchase.filter(hasCommonItem);

var main = function main() {
var commonPurchaseList = data.map(getCommonItemList);
console.log(commonPurchaseList);
};

main();


// const result = array.reduce((acc, c) =>
// 	acc.filter(obj1 =>
// 		c.some(obj2 => obj1.name === obj2.name)));