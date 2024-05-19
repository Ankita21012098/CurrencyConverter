const populate = async (value, currency) => {
    let mystr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_B3myIFjp3neilK134X0c5hgQ3w9w3WW5BKppKrfE&base_currency=" + currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"
    for(let key of Object.keys(rJson["data"])){
        mystr += `<tr>
                    <td>${key}</td>
                  <td>${rJson["data"][key]["code"]}</td>
                  <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                  </tr>
                  `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = mystr;
}



const btn = document.querySelector('.btn');
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})
