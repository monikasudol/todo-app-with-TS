export const post = (url: string, body: object) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'content-Type': 'application/json'
  }
});

export const deleteRest = (url: string) => fetch(url, {
  method: 'DELETE'
});

export const toJSON = (response: any) => response.json();
