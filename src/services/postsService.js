const URL = `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_SPACE}/environments/master`

async function _fetch(request, retries = 0) {
    const result = await fetch(
        URL,
        {
            method: 'POST',
            headers: {
                Authorization: import.meta.env.VITE_TOKEN,
                //Origin: ORIGIN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: request})
        }
    )

    if (result.status === 408 ) {
      if (retries > 3) {
        throw new Error('timeout in 3 retires')
      }
      return _fetch(request, retries +1)
    }

    if (!result.ok) {
      throw new Error('fetching failed')
    }
    
    const data = await result.json();
    return data;
}

const PostsRequests = `
query {
  postCollection {
    items {
      sys {
        id
      }
      title
      date
      picture {
        title
        url
      }
      author {
        name
      }
    }
  }
}
`

function _makePostDetailsRequest(postId) {
    return `
query { 
  post(id:"${postId}") {
    title
    author {
      name
    }
    picture {url}
    content {json}
  }
}
`
}

async function fetchBlogPostsList() {
    const data = await _fetch(PostsRequests)
    console.log(data)

    const blogItems = data.data.postCollection.items.map((rec) => {
        return {
            id: rec.sys.id,
            title: rec.title,
            pictureUrl: rec.picture.url,
            authorName: rec.author.name
        }
    })

    return blogItems
}

async function fetchBlogPostDetails(postId) {
    const postRequest = _makePostDetailsRequest(postId)
    const data = await _fetch(postRequest)
    console.log(data)
    //throw Error('viga!!!')
    const rawPost = data.data.post
    return {
        authorName: rawPost.author.name,
        content: rawPost.content.json,
        pictureUrl: rawPost.picture.url,
        title: rawPost.title
    }
} 

export {
    fetchBlogPostsList,
    fetchBlogPostDetails,
    _makePostDetailsRequest
}