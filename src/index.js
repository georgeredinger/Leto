import './index.css';

// import {getUsers, deleteUser} from './api/userApi';

// // Populate table of users via API call.
// getUsers().then(result => {
//   let usersBody = "";

//   result.forEach(user => {
//     usersBody+= `<tr>
//       <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
//       <td>${user.id}</td>
//       <td>${user.firstName}</td>
//       <td>${user.lastName}</td>
//       <td>${user.email}</td>
//       </tr>`
//   });

//   global.document.getElementById('users').innerHTML = usersBody;

//   const deleteLinks = global.document.getElementsByClassName('deleteUser');

//   // Must use array.from to create a real array from a DOM collection
//   // getElementsByClassname only returns an "array like" object
//   Array.from(deleteLinks, link => {
//     link.onclick = function(event) {
//       const element = event.target;
//       event.preventDefault();
//       deleteUser(element.attributes["data-id"].value);
//       const row = element.parentNode.parentNode;
//       row.parentNode.removeChild(row);
//     };
//   });
// });

 var tv,
    playerDefaults = {
      autoplay: 0,
      autohide: 1,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
      controls: 0,
      disablekb: 1,
      enablejsapi: 0,
      iv_load_policy: 3
    };
  var vid = [{
    'videoId': 'S7nOviZaMO0',
    'startSeconds': 180,
    'endSeconds': 190,
    'suggestedQuality': 'hd720',
    'message': 'first'
  },
  {
    'videoId': 'wspUEkFo9oI',
    'startSeconds': 120,
    'endSeconds': 127,
    'suggestedQuality': 'hd720',
    'message': 'Wait, that\'s not Leto'

  },
  {
    'videoId': 'PZpYZ3xYfQE',
    'startSeconds': 120,
    'endSeconds': 141,
    'suggestedQuality': 'hd720',
    'message': 'Leto Transitions'
  },
  {
    'videoId': 's9cgFPB-lD4',
    'startSeconds': 120,
    'endSeconds': 141,
    'suggestedQuality': 'hd720',
    'message': 'Leto at Spokane Sport Horse'

  },
  {
    'videoId': 'SAm34wutr2w',
    'startSeconds': 120,
    'endSeconds': 141,
    'suggestedQuality': 'hd720',
    'message': 'Leto winning at SSH'

  },
  {
    'videoId': 'v2dzXbJhz9k',
    'startSeconds': 120,
    'endSeconds': 141,
    'suggestedQuality': 'hd720',
    'message': 'Leto at home Winter'

  },
  {
    'videoId': 'HSZONtn0m8U',
    'startSeconds': 120,
    'endSeconds': 141,
    'suggestedQuality': 'hd720',
    'message': 'Leto at home Summer'

  },
  {
    'videoId': '_SBfBp6oN-Y',
    'startSeconds': 120,
    'endSeconds': 141,
    'suggestedQuality': 'hd720',
    'message': 'Gail\'s goof'

  },
  {
    'videoId': 'CCWxicZFaVU',
    'startSeconds': 120,
    'endSeconds': 141,
    'suggestedQuality': 'hd720',
    'message': 'Leto cool'

  }




  ],
    randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;



function onPlayerReady() {
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1) {
    document.getElementById('tv').className += 'active';


  } else if (e.data === 2) {

    if (currVid === vid.length - 1) {
      currVid = 0;
    } else {
      currVid++;
    }
    console.log(vid[currVid].message);
    document.getElementById("blurb").innerHTML = vid[currVid].message;
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

window.onYouTubePlayerAPIReady = function () {
    tv = new YT.Player('tv', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: playerDefaults
    });
    console.log("onYouTubePlayerAPIReady");
  }

var checkYT = setInterval(function () {
        console.log("tick");

    if(YT.loaded){
        //...setup video here using YT.Player()
        var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/player_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 /*global YT*/

      console.log("loaded"); // should do something here, but for now YT gets loaded

        clearInterval(checkYT);
    }
}, 100);



  // var tag = document.createElement('script');
  // tag.src = 'https://www.youtube.com/player_api';
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function getActualWidth() {
  var actualWidth = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    document.body.offsetWidth;
    return actualWidth;
}

function getActualHeight() {
  var actualHeight = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    document.body.offsetHeight;

  return actualHeight;

}


function vidRescale() {
  var w = getActualWidth() + 200;
  var h = getActualHeight() + 200;
  var newHeight = 0;
  var newWidth = 0;
  //var newLeft=0;
  var element = document.getElementById('tv');
  // console.log("w/h " + w / h);
  // if (w / h > 16 / 9) {
  element.style.width = (w).toString + "px";
  //  newHeight = (w / 16 * 9);
  newHeight = h;
  newWidth = w;
  element.style.height = (newHeight).toString() + "px";
  element.style.width = (newWidth).toString() + "px";

  newWidth = getActualWidth();
  element.style.left = "0px";
  // } else {
  //  // newWidth = (h / 9 * 16);
  //   newWidth=getActualWidth();
  //   element.style.width = (newWidth).toString() + "px";
  //   element.style.height = (h).toString() + "px";
  //   // newLeft = -(getActualWidth() - w) / 2;
  //   newLeft = 0;
  //   element.style.left = (newLeft).toString() + "px";
  // }
  element.style.fill = 'lime';
  // console.log("vidRescale " + element.style.left + "," + element.style.width + "," + element.style.height);

}
window.onresize = vidRescale;
window.onload = vidRescale;
//window.onload = doVideo;
