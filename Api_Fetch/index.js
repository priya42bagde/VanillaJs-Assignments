async function getData() {
  await fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((json) => {                                 //console.log(json); //(10) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object]
             const results = Object.keys(json)                                          //console.log(results); //["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        .map((item) => {
          const obj = json[item];
          return `
          <div>
               <h3>${obj.name}</h3>
               <p>username: ${obj.username}</p>
               <p>email: ${obj.email}</p>
               <div>
                  <h5>Address</h5>
                  <p>${obj.address.street}${obj.address.suite && `, ${obj.address.suite}`}</p>
                  <p>${obj.address.city} ${obj.address.zipcode}</p>
              </div>
        </div>
        <hr/>`;
        })
        .join("");
      document.getElementById("app").innerHTML = results;
    })
    .catch((err) => console.log(err));
}

getData();
