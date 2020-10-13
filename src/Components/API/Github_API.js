import axios from 'axios';

const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export default axios.create({
  baseURL: 'https://api.github.com/',
  params: {
    client_id,
    client_secret
  },
});

 