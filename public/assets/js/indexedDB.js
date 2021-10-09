//Open connection, parse name of database and version of database
const request = indexedDB.open("BudgetDB", 1);

//Create object store
//Will be exected when we change the version of the db
request.onupgradeneeded = ({ target }) => {
    //Gives access to db object
    const db = target.result;
    //access interface idbdatabase and Create new object store
    const newStore = db.createObjectStore("budgetStore", { //Collection
        keyPath: "transactionID"
    }); 
    console.log(newStore);

    //Create index from object store (column) to be able to query over database
    // "status" is index and "status" (index itself) key path (name for column)
    newStore.createIndex("statusIndex", "status");
};

//Add and get data from the database = Create transaction
request.onsuccess = () => {
    console.log(request.result)
    const db = request.result
    //Specify name of store and actions we will perform
    //Create transaction in order to query over db
    const transaction = db.transaction(["budgetStore"], "readwrite"); 
    //Define object store to be able to add data
    const budgetStore = transaction.objectStore("budgetStore");
    //Get status index
    const statusIndex = budgetStore.index("statusIndex");


    //Add elements to database
    budgetStore.add({transactionID: "1", status: "pending"});

    // 2 ways to query over database: 
    //Return item by keyPath/ kind of like primary key
    const getRequest = budgetStore.get("1");
    getRequest.onsuccess = () => {
        consolelog(getRequest.result)
    }

    //Return item by index/ retrieve object by specific value status
    const getRequestIdx = statusIndex.getAll("pending");
    getRequestIdx.onsuccess = () => {
        console.log(getRequestIdx.result)
    }

}