
# Recruitment test
## Comments from the candidate
I appreciate the chance to join the company. I ejoyed doing the challange. The task could be almost infinitly extended to have more functionalities. Because of that, I've decided to put on myself a reasonable **8 hours** limit to develop the minimal viable solution. 

Saying that, there are things that I could further improve and some more important functionalities that I would add if I would do the task as a day-to-day job.

The solution is available under this link: https://vercel.com/tobis-projects-1d0960ef/makers-den-recruitment

### About the solution
There are 3 components:
- `components/Input` - reusable, controlled component
- `components/Suggestions` - reusable, controlled component
- `components/SearchBar` - combines Input and Suggestions and implements the logic

### What went well
- I believe I **completed all requirements**
- Solution is fairly **responsive**
- **Performance** is pretty **good**
- The components' structure is concise, all **components are controlled** and **testable**
- **Unit tests** of some of the most **important functionalities**

### What I would add
- **Pagination** - right now I am only pulling the first 50 items. Option to load more results would be the most important function current solution is lacking.
- **Handle more errors** (ie. No network connection, timeouts etc.) and display more specyfic message to the use (currently it's a generic message "Could not fetch suggestions")
- if the component were to be used on other projects, I would add some **style customisation capabilities** (right now it just allow to customise the properties on the top wrapper component)
- I would write **unit tests** to **cover much more scenarios** than I implemented
- I would add a **storybook**
- I would add a **caching mechanisms**
- I would add change REST APi to call just **one graphql query** or I would make a backend server which would call the GH API and send me back combined results. This would also include caching mechanisms on the backend as well. Currently it's easy to exceed the GH limits.
- Perhaps **storing previous searches** and some sort of **phrase weight calculations** to improve suggestions would be a good option
- And more :)


## Tech stack

As per task description I limitted myself to:

- React
- Typescript
- Styled-components

## Features

- Search bar with autosuggestions
- Min query length is 3 characters
- Input is debounced
- A generic error message is displayed on API error
- Loading spinner is displayed when API is fetching data
- Accessibility to elements
- Keyboard navigation

## Installation

Project has been created with latest version of creat-react-app

Before you launch the project generate Github key and add it to `.env` file in the root of the project under variable `GH_KEY`

```
npm i
npm start
```

