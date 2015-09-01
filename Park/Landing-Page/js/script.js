// Generated by CoffeeScript 1.8.0
(function() {
  var GoToPage, text;

  $("#cover .hint").click(function() {
    return $("body").animate({
      scrollTop: $("#cover").height()
    }, 800);
  });

  text = [
    {
      title: "附近频道",
      desc: "附近频道附近频道附近频道附近频道附近频道附近频道附近频道附近频道附近频道附近频道"
    }, {
      title: "群组",
      desc: "群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组群组"
    }, {
      title: "聊天聊天",
      desc: "附近频道附近频道附近频道附近频道附近频道附近频道附近频道附近频道附近频道附近频道"
    }, {
      title: "主页",
      desc: "主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页"
    }
  ];

  $(".descs").append("<h1>" + text[0].title + "</h1>" + "<h2>" + text[0].desc + "</h2>");

  GoToPage = function(index) {
    var duration;
    duration = 250;
    $(".screen").animate({
      scrollLeft: 320 * index
    }, duration);
    $("#screenshot .icons li.active").removeClass("active");
    $("#screenshot .icons li").eq(index).addClass("active");
    $(".bigicon").css("background-position-x", -(100 * index) * 1.5);
    $(".descs h1").html(text[index].title);
    return $(".descs h2").html(text[index].desc);
  };

  $("#screenshot .icons li").click(function() {
    var index;
    index = $(this).index();
    return GoToPage(index);
  });

  $(".iphone i.right").click(function() {
    var page;
    page = $(".screen").scrollLeft() / 320;
    if (page < 3) {
      return GoToPage(page + 1);
    } else {
      return GoToPage(0);
    }
  });

  $(".iphone i.left").click(function() {
    var page;
    page = $(".screen").scrollLeft() / 320;
    if (page > 0) {
      return GoToPage(page - 1);
    } else {
      return GoToPage(3);
    }
  });

}).call(this);
