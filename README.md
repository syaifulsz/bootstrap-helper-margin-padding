# Bootstrap Helper: Margin & Padding

This helper is useful for adding spacing in between element. Default sizes are 15px and 30px, the first size in sizes list is consider as first and default size for .margin and .padding, thus, there is no class name .margin-15 and .padding-15.

This helper is responsive and support Bootstrap 3's responsive utilities (xs, sm, md, lg). Additional media queries is configurable and can be extended depending on your project requirements.

## Getting Started

Include this stylesheet code into your site:

```html
<link rel="stylesheet" href="dist/bootstrap-helper-margin-padding.min.css" />
```

## Example usage:

```html
<div class="margin--top margin--bottom padding--left padding--right">
    <a href="btn btn-primary btn-block margin--bottom">Submit</a>
    <a href="btn btn-link btn-block">Reset</a>
</div>
```

## Example usage with responsive media query:

```html
<div class="margin--top margin--bottom padding-sm-30--left padding-sm-30--right">
    <div class="row">
        <div class="col-md-6">
            <a href="btn btn-primary btn-block margin-sm--bottom">Submit</a>        
        </div>
        <div class="col-md-6">
            <a href="btn btn-danger btn-block">Cancel</a>
        </div>
    </div>
</div>
```

## Extends and compile with Bootstrap 3 SASS

You're required to install these in order to extends this helper:

- NodeJS
- Grunt CLI
- Ruby
- SASS

### Installation

Run:

```sh
npm install
```

### Compile

Run:

```sh
grunt
```

### Enable Bootstrap 3's responsive utilities for this helper

Change these variables to `true`.

```sass
$helper-margin-padding--xs: false
$helper-margin-padding--sm: false
$helper-margin-padding--md: false
$helper-margin-padding--lg: false
```

### Add more sizes

Add more sizes here:

```sass
$sizes: 15 30
```