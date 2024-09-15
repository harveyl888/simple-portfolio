# Simple Portfolio

## Features

A simple responsive site to highlight an advertising portfolio.

## Installation

The theme can be installed either as a clone or a submodule.

### Clone
```
git clone https://github.com/harveyl888/simple_portfolio.git themes/simple_portfolio
```

### Submodule
```
git submodule add https://github.com/harveyl888/simple_portfolio.git themes/simple_portfolio
```

## Configuration

Three toml files under the config/_default folder are used for configuration

### Site Parameters - hugo.toml

The following are the site parameters that you can set in the `hugo.toml` file

```toml
# hugo.toml
baseURL = "/"
baseURL = "https://example.org/"
languageCode = "en-us"
title = "My Hugo Site Title"
theme = "simple_portfolio"
```

### Menus - menus.toml

This minimal theme contains an about page along with a portfolio page.

```toml
# menus.toml
[[main]]
url = "/"
name = "Home"
weight = 1

[[main]]
url = "about"
name = "About"
weight = 2

[[main]]
url = "portfolio"
name = "Portfolio"
weight = 3
```

### Parameters - params.toml

```toml
# params.toml

## logo
logo = ""

## typewriter effect
firstname = "Bob"
attributes = ["Writer", "Father", "Visionary", "Funny Person"]

## footer
footer_message = "Reach out if you want to work with me"  ## include a message in the footer

## social
footer_socials = true  ## include social icons in footer

[social]
  twitter = "username"
  instagram = "username"
  linkedin = "username"
  workingnotworking = "username"
  email = "name@email.com"
```

The site name will be included in the header unless a logo image is available, in which case the logo image will replace the site title.  
The theme includes a typewriter effect on the landing page.  To include this, set `firstname` to your firstname and add a series of terms to the `attributes`.  The effect will rotate through, typing out the terms.  
The following social icons, along with an email icon, are available: twitter/X, instagram, LinkedIn, WorkingNotWorking.  Setting any will place them in the footer (if `footer_socials` is true).

## License
Open sourced under MIT license.
