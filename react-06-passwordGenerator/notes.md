useCallback: useCallback is a React Hook that lets you cache a function definition between re-renders.

eg. const cachedFn = useCallback(fn, dependencies)

Dependencies here:
- Length
- Has Number
- Has Sp Char
- Set Password

Dependencies is in the form of an array here.

Now we cannot use useCallback hook as with the loop, it is causing rendering multiple times which is not suited, hence to solve this, we use "USE EFFECT HOOK"

useEffect is a React Hook that lets you synchronize a component with an external system.

eg. useEffect(setup, dependencies?)

Now to copy the password text (just the password text and not anything else) we have to use another hook here because the button and input text fields are not related.

We use the "USE REF HOOK"

useRef: useRef is a React Hook that lets you reference a value that’s not needed for rendering.

e.g. const ref = useRef(initialValue)