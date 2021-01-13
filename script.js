// Meme function that basically powers the site
function meme () {
    let fetchRes = fetch("https://www.reddit.com/r/memes/hot.json"); 
    fetchRes.then(res => res.json()).then(d => {
        // Generates a random number for the random meme
        var randomNumber = Math.floor(Math.random() * 26)

        // Actually gets the data from the api
        var memeTitle = d.data.children[randomNumber].data.title
        var memeImg = d.data.children[randomNumber].data.url
        var permalink = d.data.children[randomNumber].data.permalink
        var postURL = `https://reddit.com${permalink}`
        var upvotes = d.data.children[randomNumber].data.ups
        var awards = d.data.children[randomNumber].data.total_awards_received
        var comments = d.data.children[randomNumber].data.num_comments
        var author = d.data.children[randomNumber].data.author
        
        // setting the text to the data
        document.getElementById('meme').src = memeImg;
        document.getElementById('thing').innerHTML = memeTitle;
        document.getElementById('thing').href = postURL;
        document.getElementById('upvotes').innerHTML = `👍 Upvotes: ${upvotes}`;
        document.getElementById('comments').innerHTML = `💬 Comments: ${comments}`;
        document.getElementById('awards').innerHTML = `🏆 Awards: ${awards}`;
        document.getElementById('author').href = `https://reddit.com/user/${author}`;
        document.getElementById('author').innerHTML = `📕 Author: ${author}`;
    })
}

// Reload page button
function reloadPage () {
    document.location.reload(true)
}

// Calling the meme function
meme()
