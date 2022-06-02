function fetchData() {
    fetch('countries.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        let output = ''
        data.forEach(function (item) {
          output += `
          <ul>
            <li>Country: ${item.Country}</li>
            <li>CODE: ${item.ISO2}</li>
          </ul>
        `
        })
        document.getElementById('country').innerHTML = output
      })
      .catch((error) => {
        console.log(`Error Fetching data : ${error}`)
        document.getElementById('country').innerHTML = 'Error while Loading Data'
      })
  }
  
  fetchData()
  