Interview Question on Counters:

Q. Suppose we have a counter function like this (counter starts from 15) and we have multiple setCounter methods (4 for addValue and 4 for removeValue) will the counter go from 15 to 19 when we click addValue or will it do something else? 

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
 
setCounter(counter - 1)
setCounter(counter - 1)
setCounter(counter - 1)
setCounter(counter - 1)
}

A. Counter goes from 15 to 16 here inspite of having multiple setCounter methods being called.

The reason is: The new fiber algorithm sends these changes to the UI and the variables "in batches" hence duplicate tasks are "cancelled out".

Q2. But how to increment the setCounter multiple times then?

A. We can call the counter's previous state here by using "prevCounter". This gives us the counter's "existing state".

Basically, all states are functions with callbacks.

so to do our tasks, we can do some updation to the setCounter method:

setCounter(prevCounter => prevCounter + 1)

this will make our counter value from 15 to 19 on one single click.

