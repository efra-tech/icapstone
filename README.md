# Informatics Capstone 2023
## Team Muse  

Welcome to the public repository for **GardenSpace**, a React application for consolidating information about and connecting BIPOC urban gardening communities in Seattle.

This application was developed for a capstone project as part of the undergraduate Informatics program at the University of Washington from January 2023 to June 2023. The students who worked on this project together went by Team Muse and were overseen by Informatics faculty.

As the Capstone project ended, we decided to make the source code available to anyone wanting to improve on the application. Below are starting documentation and instructions on how to acquire relevant API keys and libraries.

### Starting Documentation
- Quarter 1 Minimum Viable Product Presentation: https://pitch.com/public/c73361f2-ac7c-4611-bda3-f41e03ae78e9/a0f506d9-fb5d-4b84-9787-688d6876a8c7
- Survey: https://docs.google.com/forms/d/e/1FAIpQLSfksUv3SuByLZC70aJwq9NPAu9TQY-HJoIHEDcZJVPjpvVDeA/viewform?pli=1

As part of the research process, we sent out a Google Form to urban farmers in Seattle and received 108 responses. We also conducted user interviews with 7 of these people, further validation with 3 of them, and then user testing of the application with 5 people. If you would like to see this data, please contact one of the team members or the University of Washington to request access. A cleaned version without identifying information is included as a .csv file in the Survey Data Analysis folder.

#### Files of Note

- The Survey Data Anaysis folder houses data extrapolations made from our survey results. The initial csv. file has been cleaned of identifying information, such as emails and names.
- The <code>.env</code> file inside of the react-app folder houses the API key for Mapbox, a library which is detailed below.
- The <code>seattle-farms-complete.json</code> file inside of <code>react-app/src/data</code> is a collection of urban gardens in Seattle, including fields such as its name, associated phone numbers, addresses, and whether they are BIPOC-owned. The format of this JSON file must be kept like this in order to function properly with Mapbox v2.13.


### Libraries

Our web application uses React for Javascript, employing a couple third-party libraries.
- Fort Awesome: Custom icons and styling
- Firebase: Hosting
- Mapbox: Map interface
- Revo-calendar: Calendar function

In addition, we also used a couple native React dependencies, such as Bootstrap for styling and Multi-Carousel for image rotation.

#### Initializing the App

After cloning the repository, you may run into issues installing the correct libraries. Most likely, it is a dependency error with Revo Calendar, a library we used in the Get Involved page. To get around this issue with Node, run <code>npm i revo-calendar --force</code>.

In order for the map to show up correctly in the Map page, you will need to create a Mapbox account and use an API key.
**Mapbox instructions**
1. Create account on mapbox.com
2. Create a new API key
3. You may use the map editor to create a custom style. You will have to regenerate your API key here.
4. Put the API key into the <code>.env</code> file in the react-app folder.

### Next Steps

Our team unfortunately was not able to implement everything we wanted to in the Capstone timeframe. The development of this application is intended to be ongoing, so here are some features that would be nice to see in future iterations.

- Improved map functionality with clickable markers that navigate correctly to map cards
- Firestore functionality for garden data and Get Involved RSVP form data
- Improved web-scaling for different screen sizes
- A bulletin board feature where users can submit photos, videos, recipes, guides, and more to a spread-view of content. Ideally, the content is related to the gardens that users would go to. Other users can see these and comment or like them. Below is a prototype image of what this page might look like. There would also ideally be filers for the different type of posts that users can see.
<img src="https://i.imgur.com/GVEIM1X.png" />

<b>We hope you can continue this project and help to build an even better resource for BIPOC gardeners in Seattle, and even potentially beyond. Thank you!</b>

### Contributers: 
- Andrew Chen: achen77@uw.edu 
- Niha Gaddam: niha@uw.edu
- Efra Ahsan: eahsan@uw.edu
- Pranav Shekar: pranavsh@uw.edu
- Easha Dhillon: eashad@uw.edu
