let voteArr = [0,0,0,0];


exports.handler = async event => {
  const v = event.queryStringParameters.vote

    if (v === "a") {
      voteArr[0] += 1
    }else if (v === "b") {
      voteArr[1] += 1
    }else if (v === "c") {
      voteArr[2] += 1
    }else if (v === "d") {
      voteArr[3] += 1
    }else if (v === "r") {
      voteArr = [0,0,0,0]
    }

    // return JSON.stringify(voteArr);


  // const subject = event.queryStringParameters.name || 'World'

  return{
    statusCode: 200,
    headers: {"Access-Control-Allow-Origin" : "*"},
    body: JSON.stringify(voteArr),
  }

}
