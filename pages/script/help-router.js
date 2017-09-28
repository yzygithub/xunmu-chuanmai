/**
 * Created by yzy on 2017/9/27.
 */

function Router(){
  this.routes = {};
  this.curUrl = '';

  this.route = function(path, callback){
    this.routes[path] = callback || function(){};
    // console.log(this.routes)
  };

  this.refresh = function(){
    this.curUrl = location.hash.slice(1) || '/';
    this.routes[this.curUrl]();
  };

  this.init = function(){
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
  }

}

var R = new Router();
R.init();
var heCoRi = $('.help-content-right');

R.route('/aboutUs', function() {
  var htmlurl = './help/aboutUs.html'
  ajaxhtml(htmlurl);

});
R.route('/contactUs', function() {
  var htmlurl = './help/contactUs.html'
  ajaxhtml(htmlurl);
});
R.route('/orgHelp', function() {
  var htmlurl = './help/orgHelp.html'
  ajaxhtml(htmlurl);
});
R.route('/userHelp', function() {
  var htmlurl = './help/userHelp.html'
  ajaxhtml(htmlurl);
});
R.route('/teachHelp', function() {
  var htmlurl = './help/teachHelp.html'
  ajaxhtml(htmlurl);
});
R.route('/orgJoin', function() {
  var htmlurl = './help/orgJoin.html'
  ajaxhtml(htmlurl);
});
R.route('/userProto', function() {
  var htmlurl = './help/userProto.html'
  ajaxhtml(htmlurl);
});
R.route('/regiProto', function() {
  var htmlurl = './help/regiProto.html'
  ajaxhtml(htmlurl);
});
R.route('/probSolve', function() {
  var htmlurl = './help/probSolve.html'
  ajaxhtml(htmlurl);
});

function ajaxhtml(url) {
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'html',
    success: function (data) {
      // console.log(data);
      heCoRi.html(data);

    },
    error: function(xhr, type){
      alert('Ajax error!');
    }
  })
}

//侧边切换
$('.help-li').click(function () {
  $('.active').removeClass('active')
  $(this).addClass('active')
})