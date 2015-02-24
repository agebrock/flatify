#flatify

Converts the **most complex json objects in the World** to a 2D human readable 2D view.


###usage
```js
    var flatify = require('flatify');
    var flatObject = flatify.flatify(deepOriginal),
    var deepObject = flatify.toObject(flatObject);
```


flatify.flatify( **{object}** )
```js
{
  'first.0': 0,
  'first.1': 1,
  'first.2.0': 2,
  'first.2.1': 3,
  'second.0.c.0': 1,
  'second.0.c.1.0': 2,
  'second.0.c.1.1': 3,
  'second.0.d.0.last': 1,
  'second.0.f': 'g',
  'a.b.c': 1
}´
```

flatify.toObject( **flatObject** )
```js
{
  first: [
    0,
    1,
    [
      2,
      3
    ]
  ],
  second: [
    {
      c: [
        1,
        [
          2,
          3
        ]
      ],
      d: [
        {
          last: 1
        }
      ],
      f: 'g'
    }
  ],
  a: {
    b: {
      c: 1
    }
  }
}
```

