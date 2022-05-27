import "./styles.css";

/* 
The task is to implement Github client that will need
to perform the following actions:
  - add the autocomplete for searching for github users
  - list the user repositories
  - list the most starred Github repos that were created in the last 30 days

- There is a searchbar autocomplete for github users
- A checkbox to filter only the most starred repos

The list will contain cards that need to display the 
informations listed below:
  - Repository name
  - Repository description
  - Number of stars for the repo.
  - Number of issues for the repo.
  - Username and avatar of the owner.

Follow this design: https://www.figma.com/file/sN2xNgPcXRvelKwPTU0jCp/Repo-Card?node-id=0%3A1  


API URLs:
- https://api.github.com/search/users?q=[search]
- https://api.github.com/users/[username]/repos
- https://api.github.com/search/repositories?q=created:[YYYY-MM-DD]&sort=stars&order=desc&page=[PAGE-NUMBER]
/*

/*
==== EXTRA =====
 - Add pagination
*/

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
