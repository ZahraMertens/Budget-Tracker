let db;

//Open connection, parse name of database and version of database
const request = indexedDB.open("BudgetDB", 1);

request.onsuccess = (event) => {
    console.log(request.result)
}

//Create object store
//Will be exected when we change the version of the db
request.onupgradeneeded = ({ target }) => {
    //Gives access to db object
    const db = target.result;
    //access interface idbdatabase and Create new object store
    const newStore = db.createObjectStore("budgetStore"); //Collection
    console.log(newStore);

    //Create index from object store (column) to be able to query over database
    // "transaction1" is index and "transaction2" (index itself) key path (name for column)
    newStore.createIndex("transaction1", "transaction2");





};

