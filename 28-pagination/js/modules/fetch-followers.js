import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

async function fetchFollowers(url) {
  const octokit = new Octokit({
    auth: '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',
  });

  const response = await octokit.request('GET /users/dmalan/followers', {
    username: 'ereljapco',
    per_page: 100,
  });
  const { data } = await response;

  return data;
}

export default fetchFollowers;
