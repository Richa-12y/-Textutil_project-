# How to get current location in React js functional component📍

**Hello Coders👨‍💻👩‍💻! In this blog, we'll be covering how to get the user's current location in React functional components. We'll start by discussing how to get the user's latitude and longitude from the browser's Geolocation API**

# ⛳Introduction

![I Think Its Time We Had A Proper Introduction Selina Giles GIF - I Think Its Time We Had A Proper Introduction Selina Giles Ryan Woods GIFs](https://media.tenor.com/9ryzw3s9Ux0AAAAM/i-think-its-time-we-had-a-proper-introduction-selina-giles.gif align="left")

In some situations, applications need to access the current location properties of the user. Location properties include latitude, longitude, and some more about the current location of the user. From the Location properties, the user can know the current geolocation of the user.

**<mark>The app can provide specific services to the user according to current geolocation. The app with a map integration can show the current location of the user on the Google map using </mark>** [**<mark>Google Maps API</mark>**](https://www.geeksforgeeks.org/python-get-google-map-image-specified-location-using-google-static-maps-api/)**<mark>.</mark>**

The user can get the following details.

* Latitude
    
* Longitude
    
* Altitude
    
* Accuracy
    
* speed
    
    ![Saturday Night Live Lets Commence GIF - Saturday Night Live Lets Commence And So It Begins GIFs](https://media.tenor.com/0WJUKxCxnN0AAAAM/saturday-night-live-lets-commence.gif align="left")
    
    ### How to create a Google API for getting the user's current location?
    
    These are the steps you have to follow:-
    
* To create a Google API for getting the current location, you will need to follow these steps:
    
    1. Go to the Google Cloud Console ([click for google api](https://console.cloud.google.com/) ).
        
    2. Create a new project or select an existing one.
        
    3. Go to the "Library" page and search for "Google Maps JavaScript API".
        
    4. Click on the API and enable it for your project.
        
    5. Go to the "Credentials" page and create a new API key.
        
    6. Configure the API key by setting the appropriate restrictions for your use case.
        
    7. Once you have the API key, you can use it in your JavaScript code to access the Google Maps JavaScript API and the Geolocation API, which allows you to get the user's current location.
        
    8. You can use the following code to get the current location.
        
        ```javascript
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              // you can use pos to get location
            }, function() {
              // handle errors here if any
            });
          } else {
            // Browser doesn't support Geolocation
          }
        ```
        
        <mark>Please note that You also need to enable the</mark> `Geolocation API` from the Google Cloud Console and also be aware of the browser compatibility of `Geolocation API`
        
        <mark>Also, you need to be aware that this is a client-side solution to get the location and might not work if the user blocks the location or if you want to access this information from the server side you need to use other APIs such</mark> as `IP Geolocation API`
        
        In ReactJS function components, you can use the `useEffect` hook to retrieve the user's address.
        
        ```javascript
        import { useEffect } from 'react';
        
        function MyComponent() {
          const [userAddress, setUserAddress] = useState(null);
        
          useEffect(() => {
            navigator.geolocation.getCurrentPosition(position => {
              const { latitude, longitude } = position.coords;
              
              // use the latitude and longitude to get the user's address
              fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`)
                .then(response => response.json())
                .then(data => {
                  setUserAddress(data.results[0].formatted_address);
                });
            });
          }, []);
        
          return <div>User's address: {userAddress}</div>;
        }
        ```
        
        **Note that you'll need an API key from Google to use the geocoding API. You can also use other APIs such as OpenStreetMap Nominatim.**
        
        **<mark>Also, make sure you have enabled the geolocation in your browser and ask user permission to use it.</mark>**
        
* Let's break down the code:-
    

```javascript
import { useEffect } from 'react';
```

We import the `useEffect` hook from the `react` library. `useEffect` allows us to run side effects, such as fetching data, in our functional components.

```javascript
function MyComponent() {
  const [userAddress, setUserAddress] = useState(null);
```

We define a functional component `MyComponent` and inside it we use `useState` hook to define a state variable `userAddress` which is set to `null` initially.

```javascript
  useEffect(() => {
},[])
```

**<mark>We use the </mark>** `useEffect` **<mark>hook to run some code on component mount (when the component is first rendered on the page).</mark>**

```javascript
    navigator.geolocation.getCurrentPosition(position => {
```

We use the `navigator.geolocation.getCurrentPosition` method to get the user's current location. This method takes a callback function as an argument. The callback function is called with a `position` object, which contains the user's latitude and longitude.

```javascript
      const { latitude, longitude } = position.coords;
```

We destructure the `coords` property of the `position` object to get the `latitude` and `longitude` properties.

```javascript
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
          setUserAddress(data.results[0].formatted_address);
        });
```

We use the `fetch` function to make a GET request to the Google Maps Geocoding API, passing in the latitude and longitude as parameters. This API returns the address corresponding to the provided coordinates. We parse the response from the API as json using `response.json()` method. Then we extract the formatted address from the json data and set the state variable `userAddress` using `setUserAddress` function.

```javascript
    });
  }, []);
```

We pass an empty array as the second argument to `useEffect` to run the effect only on the initial render.

```javascript
  return <div>User's address: {userAddress}</div>;
}
```

Finally, we render the component and display the user's address obtained from the API call.

It's important to note that the `getCurrentPosition` method is not supported by all browsers and it's a good practice to handle the case when the browser doesn't support it. Also, you need to replace `YOUR_API_KEY` with your own API key, which you can get from the Google Cloud Console.

Output:-

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673957608687/c3d15e34-019a-404a-86f6-fb15d342376f.png align="center")

%[https://codesandbox.io/s/eloquent-bell-op540f?file=/src/App.js] 

![The End Britney GIF - The End Britney Finished GIFs](https://media.tenor.com/wu1KAY10v78AAAAM/the-end-britney.gif align="center")

# **🎯 Wrap Up!!**

![Yebin Dia GIF - Yebin Dia Kpop GIFs](https://media.tenor.com/lFNVnlpN-bUAAAAM/yebin-dia.gif align="center")

**If you found this post helpful, please take a moment to share it with your friends and colleagues. You can use the social media sharing buttons below or simply copy and paste the link to share it on your preferred platform. Your support helps me create more valuable content for you. Thank you!**