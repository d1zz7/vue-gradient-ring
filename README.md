<p align="center">
  <img src="https://i.imgur.com/g9aU155.jpg" alt="vue gradient ring">
</p>

# vue-gradient-ring
[CSS Gradient Ring](https://codepen.io/d1zz7/pen/JjaxZWo), [CSS Gradient Ring Loader](https://codepen.io/d1zz7/pen/ExeqVoJ)

## install
`npm i vue-gradient-ring`

## usage (example)
```javascript
import GradientRing from 'vue-gradient-ring'
```
```html
<GradientRing
size="200"
ring-height="30"
:value="75"
:colors="['#B1E1FF', '#AFB4FF', '#9C9EFE', '#A66CFF']"
/>
```
### result:

![example](https://i.imgur.com/xt6Kg6f.jpg)

## props

| name | info |
| --- | --- |
| size | ring size (default 200px) |
| ringHeight | ring thickness (default 30px) |
| deg | rotated degrees (default 0) |
| colors | gradient color (default colors available) |
| insideColor | color inside the ring (default #ffffff) |
| secondColor | blank color (default #ffffff) |
| value | progress value |
| loading | soon.. |
| transition | soon.. |


## License

MIT © [d1zz7](https://github.com/d1zz7)
