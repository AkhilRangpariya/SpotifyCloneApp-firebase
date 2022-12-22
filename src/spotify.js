//(spotify developer tools for client Id) https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
/* TASKS
click login button 
redirect to spotify login page for verifications
redirects to home page once authenticated user
*/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "ca207e3d929e41e69a3b078fd2d9b675";
const redirectUri = "http://localhost:3000/";

// user can use some functionalities of spotify
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// pull the access_token from url 
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    // reduce(initial value, value )
    .reduce((initial, item) => {
      // #accessToken=mysuperseretkey&name=sonny&
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      // parts ma 1 to end all characters taken 

      return initial;
    }, {});
};


// login URL created 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
