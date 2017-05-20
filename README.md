# json-unflat

Convert flat json like:

```typescript
    let json = {
	    "MY.UNFLATTEN.JSON.FILE.TITLE": "foo",
	    "MY.UNFLATTEN.JSON.FILE.DESCRIPTION": "bar"
    }
```
to Object like:
    
```typescript
    let unflatten = {
    	MY:{
    	    UNFLATTEN:{
    	    	JSON:{
    	    		FILE:{
    	    			TITLE:"foo",
    	    			DESCRIPTION:"bar"
    	    		}
    	    	}
    	    }
        }
    }
```    

## How to install
```
npm i json-unflat --save
```

## How to import
For TypeScript usage there is a index.d.ts in node_modules folder
```typescript
import {JsonUnFlat} from 'json-unflat';
```

or

```javascript
var JsonUnFlat = require('json-unflat');
```
## How to use
```typescript
    let json = {
	    "MY.UNFLATTEN.JSON.FILE.TITLE": "foo",
	    "MY.UNFLATTEN.JSON.FILE.DESCRIPTION": "bar"
    }
    
    let unflatten = JsonUnFlat.unflat(json);
```


## For reBuild

$ ./production
