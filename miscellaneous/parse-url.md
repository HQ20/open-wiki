# Parse URL

## Em NodeJS

```js
import url from 'url';

const parts = url.parse(window.location.href, true);
const { id } = parts.query;
```



