StripeMakeSync
=========================

A wrapper to allow a synchronous coding style for Stripe. Utilized the `makeSync` package found [`here.`](https://github.com/fuzzybabybunny/hpp-makeSync)

### Install

`meteor add hpp:stripe-makesync`

### How it Works

Wraps all the methods in ['stripe-node'](https://github.com/stripe/stripe-node).

```javascript
Stripe = StripeSync(key);
Stripe.customers.create([options]);
```

Stripe methods return the following object:

```javascript
{error: error, data: data}
```

The value of `error` is the actual error returned by Stripe. If the value of `error` is `null`, the value of `data` will be the data returned by Stripe.

This works only on the server since the client doesn't have `fibers/future`.

### Example

`/server/methods.js`

```javascript

Meteor.methods({

  createStripeCustomer: function(options){

    // remember that result will be an object - {error:  error, data: data}

    var result = Stripe.customers.create(options);

    if( result.error === null ){
      // no error
      return result.data;
    } else {
      // handle the particular error
      throw new Meteor.Error(result.error);
    };

  },
  
});

```

Now when we do 

```javascript
Meteor.call("createStripeCustomer", { email: "none@example.com" } , function(error, result){
  if(error){
    console.log("here is the error: ", error)
  } else {
    console.log("success: ", result);
  }
});
```

You get the actual error returned from the external API or the error-less result.

### Contributing

Feel free to make pull requests. 