---
title: Style guide of the site (H1)
subtitle: A set of examples of the various elements in a post and how they will look
author: Jeremie Litzler
hero_image: '../static/images/28-01-2021-styleguide.jpg'
date: 28 Jan 2021
category: Web fundamentals
---

## Titre H2

### Titre H3

#### Titre H4

##### Titre H5

A paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim dui et orci vehicula pellentesque. Mauris ac porta nulla. Vivamus scelerisque imperdiet metus, non egestas ipsum scelerisque a. Maecenas quis blandit dui, viverra scelerisque libero. Duis ac neque nisl. Nulla interdum leo quam, eu blandit leo cursus in. Fusce aliquet lobortis dui, ut varius ligula mollis ut. In a lorem at enim viverra consectetur luctus a diam. Praesent at justo eu ex fringilla tempus nec vel velit. Integer nec suscipit lectus. Nullam sem neque, ullamcorper sit amet viverra in, gravida id ante. Duis cursus aliquet massa.

Quisque pharetra consectetur nulla, vel iaculis eros ultricies vitae. Nullam non eros id lorem volutpat laoreet non in arcu. Duis facilisis pretium libero eu tincidunt. Duis mauris tellus, commodo condimentum nibh scelerisque, tincidunt condimentum felis. Donec blandit, enim vitae vulputate auctor, quam dui molestie tortor, non pretium est orci vel lorem. Duis porta tortor faucibus ipsum efficitur molestie a nec felis. Mauris ullamcorper sed magna ut aliquet. Ut in nibh scelerisque, malesuada erat non, dapibus nibh. Duis aliquam porttitor consequat. Morbi elementum libero sed maximus accumsan.

[A markdown link](https://iamjeremie.me/post/styleguide).

![An image](https://picsum.photos/200/300)

A bullet list:

- Item 1
- Item 2
  - Item 2.1
  - Item 2.2
- Item 3

A short quote:

> A short quote of a few words

And a long quote:

> Quoting text multilines.
>
> And more of the same quote that is long and allows to test how the text wraps in the width of the container.

And a quote of a quote (double level):

> first level of quote
>
> > A double level quote that is long and allows to test how the text wraps in the width of the container.
>
> And first level again

Some code:

```js
import React from 'react';
import uniquePropHOC from './lib/unique-prop-hoc';

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

class Expire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { component: props.children };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        component: null,
      });
    }, this.props.time || this.props.seconds * 1000);
  }
  render() {
    return this.state.component;
  }
}

export default uniquePropHOC(['time', 'seconds'])(Expire);
```

> A block quote with ~~strikethrough~~ and a URL: [See here](https://reactjs.org).

No table supported yet...

Check out the source [on GitHub](https://github.com/JeremieLitzler/iamjeremie.me/blob/master/posts/styleguide.md).

Photo by [Jan Losert](https://unsplash.com/@janlosert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash.
