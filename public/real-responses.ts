
// Obviously if we were going to do this for production we wouldn't want to have the API key in client code
// So we'd want to make a little lambda function or something that we can call which proxies these requests and doesn't require
// an auth token
export const getRealScoresFromNetwork = async() =>
    await fetch('https://wordle.shareup.fun/scores', {headers: new Headers({
        'X-Authorization': '<TOKEN GOES HERE>'
    })})