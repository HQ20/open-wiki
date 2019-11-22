# Miscellaneous

This chapter is about miscellaneous tricks, very useful, but used just a few times.

## Upload files with react

On top of the class
```javascript
private uploadingFileBuffer;
```

Anywhere on the class
```javascript
handleSubmit = (event) => {
    // do something with this.uploadingFileBuffer
    event.preventDefault();
}


captureFile = (event) => {
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
        this.uploadingFileBuffer = new Buffer(reader.result);
    };
    event.preventDefault();
}
```

On render method
```javascript
<form onSubmit={this.handleSubmit} encType="multipart/form-data">
    <input
        width="100%"
        id="my_file_upload"
        required={true}
        type="file"
        onChange={this.captureFile}
    />
    <input type="submit" />
</form>
```

## Parse URL

```js
import url from 'url';

const parts = url.parse(window.location.href, true);
const { id } = parts.query;
```



