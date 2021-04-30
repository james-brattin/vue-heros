import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://71uxr7sasa.execute-api.us-east-2.amazonaws.com/beta`
  //headers: {
  //   Authorization: 'Bearer {token}'
 // }
})
