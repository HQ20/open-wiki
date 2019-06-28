# Miscellaneous

This chapter is about miscellaneous tricks, very useful, but used just a few times.

# Parse URL

```js
import url from 'url';

const parts = url.parse(window.location.href, true);
const { id } = parts.query;
```



