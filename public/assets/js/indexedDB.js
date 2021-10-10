let db;

//Open connection, parse name of database and version of database
const request = indexedDB.open("BudgetDB", 1);

request.onupgradeneeded = function (event) {
    console.log("Upgrade needed IndexedDB");

    const { oldVersion } = event;
    const newVersion = event.newVersion || db.version;

    console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);

    db = event.target.result;

    if (db.objectStoreNames.length === 0) {
        db.createObjectStore('budgetStore', { autoIncrement: true });
    }
}

request.onerror = function (event) {
    console.log(event.target.errorCode);
}

request.onsuccess = function (event) {
    db = event.target.result;
  
    // Check if app is online before reading from db
    if (navigator.onLine) {
      console.log('Backend online! 🗄️');
      checkDB();
    }
};

function checkDB () {
    //Specify name of store and actions we will perform
    //Create transaction in order to query over db
    const transaction = db.transaction(["budgetStore"], "readwrite"); 
    //Define object store to be able to add/check data
    const budgetStore = transaction.objectStore("budgetStore");
    // Get all records from store and set to a variable
    const getAll = budgetStore.getAll();

    // If the request was successful
    getAll.onsuccess = function () {
    // If there are items in the store, we need to bulk add them when we are back online
    //Ceck for data
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result), //Send data to api.js to bulk post 
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
            console.log(response)
            response.json();
        })
        .then((res) => {
          // If our returned response is not empty
          if (res.length !== 0) {
            // Open another transaction to BudgetStore with the ability to read and write
            transaction = db.transaction(['budgetStore'], 'readwrite');

            // Assign the current store to a variable
            const currentStore = transaction.objectStore('budgetStore');

            // Clear existing entries because our bulk add was successful
            currentStore.clear();
            console.log('Clearing store 🧹');
          }
        });
    }
  };
}

//When fetch fails because we are offline we add record to indexeddb object store
const saveRecord = (record) => {
    console.log('Save record invoked');
    // Create a transaction on the BudgetStore db with readwrite access
    const transaction = db.transaction(['budgetStore'], 'readwrite');
  
    // Access your BudgetStore object store
    const store = transaction.objectStore('budgetStore');
  
    // Add record to your store with add method.
    store.add(record);
};

// Listen for app coming back online
window.addEventListener('online', checkDB);