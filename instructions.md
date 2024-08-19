# Lessonspace Senior Frontend Developer Take-Home Task

This task is intentionally quite open-ended and we'll be evaluating you on how you think about implementation, user experience, performance, edge cases etc.

### Brief:
At Lessonspace we need to add a reuseable component across all our products - dashboard and collaborative space - to help our end-users search and select from a list of user profiles.

Create a searchable select component to help achieve this. This component will be used in places like forms and filters but may also be used in other obscure areas of the application in future.

Results will be populated from an API - you can use [https://dummyjson.com/users](https://dummyjson.com/users) for this task - but assume that you may need to swap out for other APIs with different data structures and make affordances to make that as easy as possible.

### Specification:

- Set up a new JavaScript app in this folder. You can use whichever package manager you like - npm, yarn, bun, pnpm etc. and the folder structure is up to you!
- The component will need to fetch search results from an API as you type. You can use this dummy endpoint for the data for the purposes of this task: [https://dummyjson.com/products](https://dummyjson.com/users)
- For extra credit, you could also implement a GraphQL version.
- The look and feel/design, what the UI looks like, what values are shown (or not shown) and where are all up to you.
- When you're done, you can commit your results to a repo and send to us for review.

### Guidelines:

- You can use TypeScript or JavaScript, although there will be bonus points for TypeScript if you are comfortable using it (if not, this is a great opportunity to start learning 😄)
- You can use any framework (React, Svelte, etc.), or plain Vanilla JS, but we would prefer to see Vue as that's what our codebase uses.
- You can use any CSS framework/preprocessors you like, or handwrite your own if you're old school. FWIW, we use Tailwind across all our products at Lessonspace.
- You may use additional packages and libraries along the way if you feel it'll be more productive and/or effective, but remember to keep performance and load times in mind.
- The task does not have a time limit. Feel free to spend however much time on it that you want, but don't feel obliged to commit to any specific timeline. 
- We're looking to see your approach to building a piece of functionality that a user will be interacting with and how you might make that experience as pleasant and productive as possible, so do as much as you feel necessary to make that happen.
