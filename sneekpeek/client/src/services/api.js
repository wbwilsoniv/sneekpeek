const BASE_URL = 'http://localhost:3001';

export function fetchSneakers() {
    return fetch(`${BASE_URL}/sneakers`)
      .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
};

export function fetchOneSneaker(id) {
    return fetch(`${BASE_URL}/sneakers/${id}`)
        .then(resp => resp.json())
        .catch(err => {
            console.log(err);
            throw Error(err);
        });
};

export function saveSneaker(sneaker) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(sneaker),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      return fetch(`${BASE_URL}/sneakers`, opts)
        .then(resp => resp.json());
};