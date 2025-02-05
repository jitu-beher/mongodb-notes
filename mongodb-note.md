##While connecting to cluster if you get any error for url encode replace special characters

[url encode reference](https://https://www.w3schools.com/tags/ref_urlencode.ASP)

**Collection is a group of documents**
**Database is a group of collections**

## Enter to mongodb

`mongosh`

**Add connection string (Default: mongodb://localhost/)**

## Show all the databases

`show dbs`

##Switch to database

`use school`

## Create Table / collection

`db.createCollection("students")`

## Drop db

`Db.dropDatabase()`

## Insert data into table or collection

`Db.tablename.insertOne({name:"jitu", age:29, gpa : 3.4})`

`db.students.insertOne({name:"jitu", age : 29, gpa:3.4, fullTime: false, registrationDate: new Date(), graduationDate: null, courses:["Biology", "Chemistry", "Math"], address:{street:"134 fake st1233", city:'berhampur'}})`

`db.students.insertMany([{name:"Santosh", age:30, gpa:4.5},{name:"Sidhu", age:32, gpa:5.0}]);
`

## Show all the records in collection

`db.students.find()`

## Sort

`db.students.find().sort({name:-1})`

## Update record

`db.students.updateOne({name:'jitu'}, {$set:{fullTime:true}})`

## Remove Filed

db.students.updateOne({\_id: ObjectId('674b196dbe07974367893bfc')}, {$unset:{graduationDate:""}})

db.students.updateMany({\_id: ObjectId('674b196dbe07974367893bfc')}, {$unset:{graduationDate:""}})

## Find all but not name jitu

`db.students.find({name:{$ne:"jitu"}})`

## Find students whose age is greater than 23

`db.students.find({ age: { $gte: 23 } })`

## Find students whose age is less than or equal 23

`db.students.find({ age: { $lte: 23 } })`

## Find students whos age is greater than 23 and less then 30

`db.students.find({age:{$gte:23, $lte:30}})`

## Find students using in or not in

`db.students.find({name:{$in:["jitu","natasha"]}})
db.students.find({name:{$nin:["jitu","natasha"]}})`

## Find student who has fullTime field

`db.students.find({fulltime:{$exists:true}})`

## Find with nested properties

`db.students.find( {"address.city":"berhampur" })`

## Count documents

`db.students.countDocuments()
db.students.countDocuments({name:'jitu'})`

## Update document

`db.students.updateOne({name:"jitu"},{$set:{name:"jitu behera"}})`
`db.students.updateMany({name:"jitu"},{$set:{name:"jitu behera"}})`

## Delete document

`db.students.deleteOne({name:"abc"})`

`db.students.deleteMany({name:"abc"})`

## Get Indexes

`db.students.getIndexes()`

## Execution stats

db.students.find({name:"jitu"}).explain("executionStats")

## Create index by ascending order

`db.students.createIndex({name:1})`
`db.students.dropIndex("name_1")`

Indexes improve get operation but slows insert update and delete (because we have to update the binary search tree)

## Common Operators

$exists:false
$set:{} - updating
$unset:{} - remove property in update query
$ne - not equal
$gt - greater than
$lt - lessthan
$not:{age:{$not:{$gt:30}}}
$nor :[{},{}..]
$and : [{},{}..]
$or: [{},{}…]
$expr
