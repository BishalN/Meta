# Features to build and Architecture

- User Authentication
  with email and password
  or with a phone number and password
  also, add a feature to add a user handle so that
  it's easy to find users which is not the case in the current FB world
  or we could just use discord authentication / or even google auth to keep stuff simpler now lets go
  **_Tools to use:_**
  Nextjs auth with credentials along with Twilio for sending SMS.
  We’ll use a library MLM to generate a beautiful and responsive email for users.
  We’ll encapsulate all that inside our trpc app.
  - Paths APIS
    /login
    /register
    /forgot-password
    /fb/userhandle
- User Profile
  The uploaded profile picture and also have the old pictures around
  just to show it there.
  Pictures and User Handle
  Where to store pictures multiple pictures of a user and a current picture. The ability to delete the pictures and make the pictures only available to the users of the platform and not to others is really possible.
  Unless you make the pictures explicitly private everything is public for pictures.
  Which platform is good for profile pictures:
  The ability to create different sizes of pp would be good that is handled perfectly well by cloudinary I think I should search for another open-source alternative that handles this thing well.
  User Timeline as well.
- Friends
  Ability to send friends requests
  We’ll not have any fancy algorithms to make intelligent decisions we’ll just show a few users we have may paginated way in an infinite scroll technique
  and Accept friend requests.
  No Push Notifications but normal notifications could be a Postgres view.
  Also, the ability to unfriend people and see other people's profiles and friends.
  I think I need to research on the DB side of things and how to actually model this data better there might be already done design system for facebook I can reuse that concept here.
  If we can send the push notifications then that would be awesome but not required.
- Posts, Days, NewsFeed
  Ability to add text, pictures, and videos in posts of course of the limited amount may be the text of 1k words, picture less than 2 MBS,
  Make your posts or days only available for their friends or to everyone public.
  The algorithm for seeing the posts and days will be your friends only. If you don’t have any friends then we’ll show the public posts.
