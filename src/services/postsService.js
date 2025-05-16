async function _fetch(request, retries = 0) {
    const result = await fetch(
        URL,
        {
            method: 'POST',
            headers: {
                Authorization: TOKEN,
                Origin: ORIGIN,
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
