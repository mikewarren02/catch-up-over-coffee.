# Catch Up Over Coffee

* **Live link:**
https://catch-up-over-coffee.surge.sh

![](https://user-images.githubusercontent.com/71364408/110894177-66374b00-82c5-11eb-90ec-28a81e72a089.png)
<br /> <br />
* **Purpose of the app:** <br/><br/>
 This app was created to be a one-stop website for a busy individual to start their day. A user can catch up on news, see active stock market prices, check out local weather, and view their horoscope while enjoying a great cup of coffee. They are able to view daily affirmations, suggested yoga exercises, nutrition tips, and nutrition quiz questions. The app encourages a seamless transition, allowing the user to quickly and easily catch up on any new developments that occurred while they were sleeping, thus helping them to have a prepared and productive day!

* **Features:** <br/><br/>

    Home page: Displays a daily affirmation and the directory for all subpages including news, weather, stocks, fitness, nutrition, and horoscopes.
    <br>
    Affirmations: The app utilizes a custom JSON document created by our project developers to present the affirmations on the home screen. An interval timer is used to periodically display a new affirmation on the screen.
<br>
    News: Consumes [MediaStack API](https://mediastack.com/documentation/).
    On initial page load, user is presented with general news stories from around the world. Each story includes title, URL, news source, and story description.<br/>
    Additional news search options include:<br/>
    - Search by category (e.g. business news)<br/>
    - Search by keyword (e.g. "covid")<br/>
    - Search by news source (e.g., BBC)<br/>
<br>
    Weather: Consumes [OpenWeatherMap API](https://openweathermap.org/current).
    On initial page load, user is presented with current local weather based on geolocation. Weather displayed includes current temperature, low/high temps for the day, current humidity, and current "feels like" temperature after accounting for heat index/wind chill.<br/>
    Additional search options/available information:
    - Weather search by ZIP or by city/state, for those who do not have location services enabled
    - Links to the National Weather Service radar map
<br>
    Stocks: Consumes [Finnhub API](https://finnhub.io/docs/api).<br>
    On initial page load, user is presented with a banner of pre-set stock quotes from well-known companies.
    Additional search options/available information:
    - Search by stock ticker symbol for custom quote
    - Search by company name to get stock ticker symbol
    - After custom quote is displayed, user can click a button to see the company's logo, industry, and website.
<br>
    Horoscopes: Consumes [Aztro API](https://aztro.readthedocs.io/en/latest/).<br>
    Users select their sign and can choose whether to see that sign's horoscope for today, yesterday, or tomorrow. The displayed information includes the horoscope, mood for the day, lucky color, lucky time of day, and lucky number.
<br>
    Fitness: The app utilizes a custom JSON document that sources its names and images from Rebecca Estes' [Yoga API](https://github.com/rebeccaestes/yoga_api), with pose descriptions and general yoga facts added by our project developers.  
    On initial page load, the user is presented with a random yoga fact which periodically changes according to an interval timer, as well as a yoga pose. The display for each yoga pose includes its English name, Sanskrit name, image, and description. A "Get New Pose" button is available for the user to request a new randomly-selected pose.

    Nutrition: The app utilizes a custom JSON document created by our developers to present the user with nutrition facts and quiz questions. On page load, the user is presented with a random nutrition fact and a quiz question. The user can click a button to see a detailed answer to the question. The answer's display includes another button to get a new question.

![](https://user-images.githubusercontent.com/71364408/110894171-65061e00-82c5-11eb-8859-b99c150e625f.png)

![](https://user-images.githubusercontent.com/71364408/110894168-633c5a80-82c5-11eb-8002-75c4fa0996f2.png)

![](https://user-images.githubusercontent.com/71364408/110894165-60da0080-82c5-11eb-86a5-f0cd5357d133.png)


* **Languages/Tools Used:**
Javascript, HTML/CSS, Surge, Github, VSCode, multiple APIs

* **Challenges/Solutions:**
Chrome browser requires HTTPS for geolocation to work for weather, while MediaStack's free API access disallows use of HTTPS.
- Solution: All links within our project were changed to full-path links - HTTPS for everything but the news page, and HTTP for the news page.
Accessing API keys that gives limited access on how many hits the website can have.
---Solution: Members created their own API keys to avoid monthly call limit.
Not finding a suitable API key for 2 of our areas.
---Solution: Created our own JSON document and populated with information to use in webpage.
Being able to make site mobile friendly and features of application viewable on all devices.
---Solution: adjusted padding to display evenly, saved images locally so they can be seen on mobile devices, and used media queries to make the site mobile-friendly.


* **Developers:**
[Nicole Aldurien](https://github.com/nicolealdurien), [Summer Johnson](https://github.com/SJ-CODES), [Neil Shah](https://github.com/neilshah101), [Mike Warren](https://github.com/mikewarren02)

<br>
