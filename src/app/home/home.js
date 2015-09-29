angular.module( 'ngSoloists.home', ['ngSanitize'])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeController($scope) {

  //bound to the search file model in the header directive
  $scope.searchQuery = null;

  //selection is bound to the main-nav module
  $scope.selection = {
    content:'all',
    format:'list'
  };

  $scope.postData = [
    {
      id:0,
      firstName:"Sam",
      lastName:"Soffes",
      avatar:"assets/images/avatar_sam_soffes.jpg",
      post:"How to Get Inspired: the Right Way - Designmodo bit.ly/1hqgbQA Good stuff from @designmodo!",
      createdOn: moment(moment().subtract(3, 'minutes')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[
        {
          firstName:"Jed",
          lastName:"Bridges",
          avatar:"assets/images/avatar_jed_bridges.jpg",
          post:"Great way to start the week. Thanks for sharing!",
          createdOn: moment(moment().subtract(1, 'hours')).fromNow()
        },{
          firstName:"Ren",
          lastName:"Walker",
          avatar:"assets/images/avatar_ren_walker.jpg",
          post:"Feeling inspired now... thanks for great article @designmodo",
          createdOn: moment(moment().subtract(1, 'hours')).fromNow()
        }
      ]
    },{
      id:1,
      firstName:"Meg",
      lastName:"Robichaud",
      avatar:"assets/images/avatar_meg_robichaud.jpg",
      post:"My view this morning is simply beautiful... instagram.com/p/mV0PUrHRwQ/",
      createdOn: moment(moment().subtract(25, 'minutes')).fromNow(),
      hasImage:true,
      postImage:"assets/images/img_meg_robichaud.jpg",
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:2,
      firstName:"Kerem",
      lastName:"Suer",
      avatar:"assets/images/avatar_kerem_suer.jpg",
      post:"8 Apps to Turn Your Pipe Dreams Into Prototypes on.mash.to/1oubyu8",
      createdOn: moment(moment().subtract(50, 'minutes')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:3,
      firstName:"Liang",
      lastName:"Shi",
      avatar:"assets/images/avatar_liang_shi.jpg",
      post:"How to get animations out of your head. bit.ly/1q7BngO Funny and useful.",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:4,
      firstName:"Vitor",
      lastName:"Leal",
      avatar:"assets/images/avatar_vitor_leal.jpg",
      post:"You have to see this bike. It will make your daily commute an absolute joy ride! vimeo.com/p/mV0PUrHRwQ/",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:true,
      postVideo:"assets/images/vid_vitor_leal.jpg",
      comments:[]
    },{
      id:5,
      firstName:"Pallavi",
      lastName:"Gupta",
      avatar:"assets/images/avatar_pallavi_gupta.jpg",
      post:"Need some reading? 11 free ebooks for designers | Creative Bloq bit.ly/1lE5QDM via @netmag",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:6,
      firstName:"Jenny",
      lastName:"Shen",
      avatar:"assets/images/avatar_jenny_shen.jpg",
      post:"Perfect day to be outside taking pictures instagram.com/p/mV0PUrHRwQ/",
      createdOn: moment(moment().subtract(25, 'minutes')).fromNow(),
      hasImage:true,
      postImage:"assets/images/img_jenny_shen.jpg",
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:7,
      firstName:"Jonathan",
      lastName:"Moreira",
      avatar:"assets/images/avatar_jonathan_moreira.jpg",
      post:"Thoughtful brand decisions vs. emotional brand decisions.  ow.ly/vtT2i",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:8,
      firstName:"Jon",
      lastName:"Brennan",
      avatar:"assets/images/avatar_jon_brennan.jpg",
      post:"Had some time to play with the interactive portion of inDesignCC bit.ly/1lE5QD",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:9,
      firstName:"Michael",
      lastName:"Wong",
      avatar:"assets/images/avatar_michael_wong.jpg",
      post:"Awesome! Check this out. instagram.com/p/mV0PUrHRwQ/",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:true,
      postVideo:"assets/images/img_michael_wong.jpg",
      comments:[]
    },{
      id:10,
      firstName:"Ed",
      lastName:"Wellbrook",
      avatar:"assets/images/avatar_ed_wellbrook.jpg",
      post:"#freelancers will enjoy @WDTrends for graphic and web design tips and inspiration.",
      createdOn: moment(moment().subtract(2, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:11,
      firstName:"Ignacio",
      lastName:"Giri",
      avatar:"assets/images/avatar_ignacio_giri.jpg",
      post:"Sponsor // Bootstrap Responsive Templates bit.ly/1qfjLOl #design",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:12,
      firstName:"Lauren",
      lastName:"Gray",
      avatar:"assets/images/avatar_lauren_gray.jpg",
      post:"7 Servings of Type for a Healthy Head & Body heydesigner.net/yfwnj",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:13,
      firstName:"Buzz",
      lastName:"Usborne",
      avatar:"assets/images/avatar_buzz_usborne.jpg",
      post:"Road trip!  bit.ly/1hkXFdK",
      createdOn: moment(moment().subtract(25, 'minutes')).fromNow(),
      hasImage:true,
      postImage:"assets/images/img_buzz_usborne.jpg",
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:14,
      firstName:"Scott",
      lastName:"Riley",
      avatar:"assets/images/avatar_scott_riley.jpg",
      post:"Deal with your problems before they deal with your happiness.",
      createdOn: moment(moment().subtract(2, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:15,
      firstName:"Ryan",
      lastName:"Hicks",
      avatar:"assets/images/avatar_ryan_hicks.jpg",
      post:"Excited about @99U Conf lineup this year conference.99u.com",
      createdOn: moment(moment().subtract(1, 'hours')).fromNow(),
      hasImage:false,
      postImage:null,
      hasVideo:false,
      postVideo:null,
      comments:[]
    },{
      id:16,
      firstName:"Samihah",
      lastName:"Azim",
      avatar:"assets/images/avatar_samihah_azim.jpg",
      post:"Love this picture instagram.com/p/mV0PUrHRwQ/",
      createdOn: moment(moment().subtract(25, 'minutes')).fromNow(),
      hasImage:true,
      postImage:"assets/images/img_samihah_azim.jpg",
      hasVideo:false,
      postVideo:null,
      comments:[]
    }
  ];
})





.filter('searchPosts', function () {
  return function (posts, query) {
    var filtered = [];
    var i;
    if (query!==null) {
      var lcQuery = query.toLowerCase();
      for (i=0; i<posts.length; i++) {
        var post = posts[i];
        var postName = post.firstName.toLowerCase() + " " + post.lastName.toLowerCase();
        if (postName.indexOf(lcQuery) > -1) {
          filtered.push(post);
        }
      }
    } else {
      filtered = posts;
    }
    
    return filtered;
  };
})




.filter('filterContent', function () {
  return function (posts, query) {
    var filtered = [];
    
    if (query!==null) {
      for (var i=0; i<posts.length; i++) {
        var post = posts[i];
        if (query==='photos') {
          if (post.hasImage===true) {
            filtered.push(post);
          }
        } else if (query==='videos') {
          post = posts[i];
          if (post.hasVideo===true) {
            filtered.push(post);
          }
        } else {
          filtered = posts;
        }
      }
    }
    
    return filtered;
  };
})




.filter('url2link', function () {
    var urlPattern = /(?:(?:http|https):\/\/)?([-a-zA-Z0-9.]{2,256}\.[a-z]{2,4})\b(?:\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    return function (text) {
        return text.replace(urlPattern, '<a target="_blank" href="http://' + '$&">$&</a>');
    };
});


