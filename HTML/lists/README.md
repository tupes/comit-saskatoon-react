# HTML Lists

Lists are all over the web. Dropdowns, top 10's, viewing your favourite spotify songs, lists are everywhere.

As we learned in the last exercise, many elements (like `<em>`, `<strong>`, etc) have default styling/formatting attached to them. Lists get styling to, you guessed it, look like a list.

There are 3 types of lists in HTML, all by default have a `block` layout:

## Unordered List

The `<ul>` element represents an unordered list of items. We'll use this type of list when we don't care about the items order. By default it will be rendered as a bulleted list.

The child elements of a `<ul>` must be `<li>` (list items). Each `<li>` will be rendered as a bullet (by default).

```html
<h1>Ingredients:</h1>
<ul>
  <li>Eggs</li>
  <li>Milk</li>
  <li>Flour</li>
</ul>
```

## Ordered List

The `<ol>` element represents an ordered list of items. We'll use this type of list when we care about the items order. By default it will be rendered as a numbered list.

This type of list also accepts `<li>` elements as children.

```html
<h1>Top 3 Populated Countries:</h1>
<ul>
  <li>China - 1,389,618,778</li>
  <li>India - 1,311,559,204</li>
  <li>United States - 331,883,986</li>
</ul>
```

## Description or Definition List

The `<dl>` element represents a description list. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).

The element encloses a list of groups of terms (`<dt>` element) and descriptions (`<dd>` elements)

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
</dl>
```

## Nesting Lists

HTML allows infinite nesting of lists, mixing and matching as needed. This can be very helful and used to create things like site navigation menus.

```html
<ul>
  <li>Unordered list item
    <ol>
      <li>Order list item</li>
      <li>Order list item</li>
      <li>Order list item</li>
    </ol>
  </li>
</ul>
```

# Further Reading

- [MDN ul doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [MDN li doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
- [MDN ol doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
- [MDN dl doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [MDN dt doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
- [MDN dd doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
