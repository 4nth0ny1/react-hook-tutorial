# useEffect

useEffect is used to perform side effects in our component. A side effect is an action which is performed with the "outside world."

## common side effects

- fetching data from api
- updating the dom document & window
- timer functions setTimeout & setInterval

## useEffect(callback, dependencies)

- callback -> what to run
- dependencies -> when to run

## three variations of useEffect

1. without dependencies
   - runs on first render
   - runs when anything changes
2. with an empty array
   - runs on first render and not again.
   - good for data fetching
3. with variables
   - runs with variable change
