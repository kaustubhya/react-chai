createRoot() - This method creates a DOM like structure for us behind the scenes.
This compares the browser's main dom and the dom it creates and updates the changes in UI from its DOM to the main DOM.

Whereas in the browser, for each small change, the main DOM is removed and re-created or re-painted from scratch, this is called *page reload*

In virtual DOM, we can track changes as it is in the form of a tree-like structure. 

To update changes, just pull them out of the tree, change / update them and then put them back in the tree.

[React Fiber Architecture] (https://github.com/acdlite/react-fiber-architecture)

React-Fiber is an algorithm which updates the react virtual DOM.

Key Features: 
- Good Hydration Process (Hydration is the process of adding javascript logic to static front end (html css UI) code)
- Incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
- ability to pause, abort, or reuse work as new updates come in
- the ability to assign priority to different types of updates; and new concurrency primitives.

What is reconciliation?
Reconciliation : The algorithm React uses to diff one tree with another to determine which parts need to be changed.
(2 trees: Brower DOM tree and React Create Root Virtual Tree) 

Reconciliation algorithm is behind the virtual DOM.

"setState" is used to update changes.

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

The key points are:

- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.