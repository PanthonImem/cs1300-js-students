var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=Bj3U7dcSxaHfKFSAZuIx9lOH0Zs5k16SedvdMocJJ0g&q=lotus";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
      handleResponse(request.response)
      
    })
);
const handleResponse =(response)=> {
  const data = JSON.parse(response).data
  const result = data.filter(data => data.year <1776);
  for(line of result){
    console.log(line.year)
    var liwrapper = document.createElement('li')
    var textnode = document.createTextNode(line.common_name); 
    var textnode2 = document.createTextNode(line.year); 
    liwrapper.appendChild(textnode)
    liwrapper.appendChild(document.createTextNode(' '))
    liwrapper.appendChild(textnode2)
    document.getElementById('mylist').appendChild(liwrapper);   
  }
};

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
