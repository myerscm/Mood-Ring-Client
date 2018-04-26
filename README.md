# Mood-Ring-Client

Link to back end repo:
https://github.com/myerscm/Mood-Ring-API

Deployment link for api: https://pure-journey-24735.herokuapp.com
Deployment link for client: https://myerscm.github.io/Mood-Ring-Client/

Wireframe:
https://imgur.com/a/5jn7Sv9

User Stories:
As an unregistered user, I want to be able to create an account and sign in
As an unregistered user, I still want to be able to see popular and trending moods on the homepage
As a registered user, I want to be able to set my mood and get a list of songs corresponding to that mood
As a registered user, I want to be able to create a new mood and fill it with songs. This mood will ideally be categorized to a general mood that corresponds with a specific emotion (Happy, Sad, Tired, Determined, Frustrated etc.)
As a registered user, I want to be able to save specific mood playlists and view them later.
As a registered user, I want to be able to upvote/give +1 to certain mood playlists.
As a registered user, I want to be able to change my password and sign out.


Technologies used:
-Ruby on Rails
-Ruby
-JavaScript
-atom text editor
-html
-css

Problems to address in future versions:
-Before trying to move on to version 2 goals, It's absolutely necessary that I beautify the entire application with CSS. It needs a lot of basic css additions before I even think about adding further features. Specifically, a title, logo, page filler (even if its temporary lorem ipsum), and color.
-For version 2, I primarily want the site to focus more on the moods and categorizing songs by users into moods. Once we've added that table to the database, we can start having users add their songs to public moods that are viewable and accessable to any user on the site. For this to not devolve, we may need to rethink the deleting songs feature and have it strictly applying to songs users have added specifically, although thanks to a last minute change within the api we may already have that covered in a weird sort of way.
-For version 3 I want to really focus on making the styling perfect. One of my primary visions for this site was to have the background change according to which mood the user had set. I want this someday to act like a more stylized, user influenced pandora radio. I want users to be able to cycle through public and popular moods by spinning a ring in the middle of the page, but this would take lots more planning to achieve in reality. Also, feature-wise, we want to be applying sensitivity filters for song input, advanced security, and ideally having users input streaming links instead of just text for their songs. Since I'd want it to be user focused, I wouldn't restrict which streaming platform the link came from as long as it wasn't restricted to a subscription plan. I AM really trying to impress Spotify hiring partners, so maybe we can team up?
Either way, this stage and the stages beyond will need some real fleshing out, but the first priority is getting my project version 2 READY.

Planning Process:
   Initially, I thought this project was going to be a basic online shopping demo website. However, I ended up changing my mind to try and pursue an idea I felt compelled to pursue when I was listening to jazz music on the commuter rail on an especially rainy day. I had a much broader scope for my version 1 going into the primary planning 1:1 on the first project day. After that 1:1, I was presented a much simpler version 1 that would not be too daunting to meet requirements by the end of the week, but at the same time I felt like my app suddenly had no purpose. The functionality of being able to add songs to a user's list really didn't match up at all with what I initially envisioned for the site or it's purpose, even at its most basic. I'm a little embarrassed to present what I have now because, even though I'm almost sure it meets requirements, it feels like it has no direction or purpose. Hopefully the unsolved problems portion of this readme justifies why this is the layout of the site currently. Setting up the api deliberately and methodically was priority number 1 when trying to make sure I was meeting requirements on time. I knew that making a mistake in the api could be very costly and time consuming to come back from, so I tried to be veeerrryy slow when following the steps to setting it up and making sure everything ran smoothly. After that, the clientside authentication was muscle memory for me from project 1. I ran into a lot of apprehension when trying to focus on getting my resource client to api features set up, and that not only cost me valuable time, but also made me prone to making nervous mistakes when coding the features in. One very notable mistake that set me back at least a few hours was in my config.js, where I bookended unnecessary < and > characters around the production link. One of the best habits I can learn for the next project is to not be apprehensive about making changes and just make them frequently until things work the way I want them to. Better to test things constantly in practice than theorizing the correct answer in a futile attempt to fix it on the very first test.
