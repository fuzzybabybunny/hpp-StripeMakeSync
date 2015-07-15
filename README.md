StripeMakeSync
=========================

A wrapper to allow a synchronous coding style for Stripe. Utilized the `makeSync` package found [`here.`](https://github.com/fuzzybabybunny/hpp-makeSync)

### Install

`meteor add hpp:stripe-makesync`

### How it Works

Wraps all the methods in ['stripe-node'](https://github.com/stripe/stripe-node).

Stripe methods return the following object:

```javascript
{error: error, data: data}
```

The value of `error` is the actual error returned by Stripe. If the value of `error` is `null`, the value of `data` will be the data returned by Stripe.

This works only on the server since the client doesn't have `fibers/future`.

### Example

`/server/server.js`

```javascript

Stripe = StripeMakeSync(key);

var result = Stripe.customers.create({ email: "none@example.com" });

console.log("Here is the result of creating a Stripe customer: ", result);

```

### Contributing

Feel free to make pull requests. 