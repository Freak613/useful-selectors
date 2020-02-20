# useful-selectors

Collection of utility selectors, compatible with reselect library

## createMemoSelector

```javascript
createMemoSelector(state => state.domain, ["foo", "bar"]);
// Will check only specified properties of output object
```

## createIdentitySelector

```javascript
createIdentitySelector(state => state.domain);
// Will be executed once, on next calls will return same object
```

## createArraySelector

```javascript
createArraySelector(state => state.todos);
// Will compare output array with previous value, returning same instance if nothing changed
```
