const getIssueList = async page => {
  console.log(process.env.REACT_APP_GITHUB_TOKEN);
  const response = await fetch(
    `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=8&page=${page}`,
    {
      method: 'GET',
      headers: {
        Authorization:
          'token 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',
      },
    }
  );
  const data = await response.json();
  return data;
};

export default getIssueList;
