import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GH_KEY
});

export default octokit;
