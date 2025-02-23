# sign up and set up the account

- pick the 'start from scratch' option

# create CONTENT MODEL

- it is the structure of the data (as if you would build an array with objects inside [{}]. each object representing the data (title, img, img, etc etc))
- use GUI in contentful to create a content model (basically, create the structure of the fields which will host the data)

1. create new content type
    - assign name
2. add field (select between text, img, etc. etc)

    - add text field and confirm
    - add another text field (for the url)
    - add another media field (for the img) ... set it as a required field (this will prevent possible errors when fetching the data and also we can avoid using optional chaining)

   SAVE

# Now that we have the content type (the main structure), we can add the content itself by adding entries.....

# CONTENT menu tab (adding entry)

- CLICK ON ADD ENTRY (be sure to select the right content model in case you have multiple ones)
- fill up the 3 fields that we set up earlier (title, url and image)
- save & publish (otherwise won't have access to the resource via the contentful api)

# check documentation (we want to check which code we need to write in order to pull all the content into our app)

- we need 2 things:
  setting-> space id: h9m629eamgpo
  setting -> api key: 93Hkz-UVBjIlldQxunpoanUHVX6C3Jyui2EsKO8XL3Y

- using sdk js library to get the data
- click on Content Delivery API (we want to get all the entries)

# scroll down to content type (we need to retrieve the entries from a specific content type)

- To search for entries with a specific content type, set the content_type URI query parameter to the ID you want to search for.

- the sdk provides a method to get the entries -> get.entries({content_type: "<content_type_id>}). the get.entries method requires an object with content type id

- where do I get the content type id? -> content model -> click on name -> click on copy id

```js
const contentful = require("contentful");

const client = contentful.createClient({
  space: "<space_id>",
  environment: "<environment_id>", // defaults to 'master' if not set
  accessToken: "<content_delivery_api_key>",
});

client
  .getEntries({
    content_type: "<content_type_id>",
  })
  .then((response) => console.log(response.items))
  .catch(console.error);
```

# install SDK

- npm i contentful

# create a custom hook -> FetchProjects.jsx file

- inside the file import the client

```js
import { createClient } from "contentful";
```

- create instance

```js
const client = createClient({
  space: "qz00uzgg3leh",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response.items))
  .catch(console.error);
```

# set up the env key for the api key

# create a repo and push up the project

# deploy to netlify (make sure to create the env var)

# add webHook in contentful

1. go to netlify (hosting platform) -> build and deploy -> continuous deployment -> build hooks (unique url we can use to trigger the build of the site )
2. copy the url
3. go to contenful -> settings -> webhook -> add webhooks -> paste the url to the url field

now, each time the data are modified in contentful, the webhook is triggered and the application will sync automatically

4. save


how to add webhooks in vercel. go to your project -> settings -> git -> deploy hooks