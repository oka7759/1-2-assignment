const getIssueList = async (page = 1) => {
  const response = await fetch(
    `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=30&page=${page}`,
    {
      method: 'GET',
      header: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    }
  );
  const data = await response.json();
  return data;
};

export default getIssueList;
