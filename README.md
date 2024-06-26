# Stock Watcher

This app was made for a technical interview.

## Requirements
 - The application should be built using Next.js and styled using CSS or TailwindCSS.
 - https://www.alphavantage.co/ should be used to obtain the data for the stocks.
 - The application should have two views: a search view and a detail view. Both of these should be NextJS pages.
 - The search view should allow users to search for a stock by entering its symbol or name.
 - The detail view should display information about the selected stock, including its name, symbol, current price, and any other relevant data you can obtain from Alphavantage. Display the data with CSS Flex or Grid system.
 - The application should be responsive and mobile-friendly.
 - The code should be well-organized, modular, and easy to maintain.
 - The application should be deployed to a publicly accessible URL, such as Vercel.
 - The code should be hosted on a public Git repository, such as GitHub. Try to maintain a clear and concise commit history.

Bonus
 - ✅ NextJS SSR.
 - The search view should include a stock suggestion feature that displays a list of suggested stocks as the user types.
 - ✅ Add a chart to the detail view that shows the stock's price history over time.
 - ✅ Implement a caching mechanism to improve performance and reduce the number of API requests.
 - Add a feature that allows users to save their favourite stocks and view them in a separate view.

## Tools
This project was bootstrapped with [NextJS Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) which provides a production ready setup for the app. There are some features (auth, crash analytics, etc.) I don't intend to use though.

## Tech-debt (if it was a real project)
- No deployment pipeline
- No tests
- Error pages / error handling
- Proper number handling (eg BigJS)
- Secret envs in the repo
- Mocks set up in a primitive way (could be done with MSW)

## Extras
- Localization (en and hu)
- Dark theme

Note: The API is limited to 25 requests/day.