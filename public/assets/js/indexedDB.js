let db;

//Open connection, parse name of database and version of database
const request = indexedDB.open("BudgetDB", 1);

request.onsuccess = (event) => {
    console.log(request.result)
}

