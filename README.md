# Combining UIkit and AirTable
> Let's combine [UIkit](https://getuikit.com) and [AirTable](https://airtable.com/) to build a visually appealing website that grabs real data!

### UIkit Setup
---
1. Add a navbar using [UIkit's navbar](https://getuikit.com/docs/navbar). It should look like the image below. The active page should be "Our Team". (The other pages will not exist we are just faking them in the navbar)
    ![navbar-image](images/nav-bar.png)
1. Add a [grid](https://getuikit.com/docs/grid) to your page that looks like this. Add a class called `personContainer` to each card `<div>`.  You will use this class add information to each card.
    ![grid](images/grid.png)
1. In your `script.js` select the `peopleContainer` class using jQuery and save the array of `<div>`s in a variable.
1. Login to your Airtable account and click "Add a base" & "Import a spreadsheet" and import the `famousPeople.csv` in this repository. Your database will probably be named `Imported Base`, change the name to be something like `famousPeople`. Look through the data to see what your database is storing.
1. Now set up an `ajax` request in your javascript file to `GET` the list of famous people data from Airtable. Use `console.log` to make sure your response has the data.
1. Once you have set up your `ajax` request, loop through the data in your response to [`append`](http://api.jquery.com/append/) the `name` of each famous person in an `<h3>` on each `peopleContainer`
  ![names-grid](images/names-grid.png)
1. Now add the image of the person to each grid, if it exists, otherwise, show the [UIkit user icon](https://getuikit.com/docs/icon). *Hint* you add a [ratio](https://getuikit.com/docs/icon#ratio) to make the icon bigger. Here is an image to follow below (note: the scale of your grid may look a little different because this image is zoomed out).
  ![names-photos-grid](images/names-photos-grid.png)
1. Okay, now our goal is to show an icon for each url that is not null. The personalWebsite icon will be a link, and all of the other icons will show their logo. Checkout of the [icon list](https://getuikit.com/docs/icon) provided by UIkit. We've written some helpful steps to follow below the screenshots.
    For example, Preethi Kasireddy would look like this.
    ![preethi](images/preethi.png)
    And here are some other examples:
    ![more-examples](images/more-examples.png)
  - It may be helpful to write a function called something like `createIconButton` that takes in two parameters: a link and an icon name. It should return the HTML needed to create an [icon button link](https://getuikit.com/docs/icon#button-modifier) using UIkit.
  - As your are looping through your data, check for each link type. If the link exists for that person, use your `createIconButton` function to add a button link to their card. 








