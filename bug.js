```javascript
//Incorrect aggregation pipeline causing unexpected results
aggregate([{
$match: {status: "active"}
},{
$group: {_id: "$userId", total: {$sum: "$amount"}}
},{
$sort: {total: -1}
}])
```