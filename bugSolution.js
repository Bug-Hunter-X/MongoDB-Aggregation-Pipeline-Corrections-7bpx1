```javascript
//Correct aggregation pipeline
db.collection.aggregate([
{
$match: {status: "active", amount: {$type: "number"}}
},{
$group: {_id: "$userId", total: {$sum: "$amount"}}
},{
$sort: {total: -1}
}])
```