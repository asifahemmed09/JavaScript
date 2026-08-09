let url = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts(url) {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let posts = await response.json();
      console.log(response.headers.get('Content-Type'));
      console.log(posts);
    }
  } catch (error) {
    console.log(error);
  }
}



let post = {
  userId: 11,
  id: 101,
  title: 'My Post',
  body:
    'cupiditate quo est a modi nesciunt soluta\n' +
    'ipsa voluptas error itaque dicta in\n' +
    'autem qui minus magnam et distinctio eum\n' +
    'accusamus ratione error aut',
};

async function createPost(url,post){
  try {
    let response = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
    if(response.ok){
      let data = await response.json()
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}


createPost(url, post)
getPosts(url);
