//每次调用$.get()或$.post()或$.ajax()的时候，会先调用ajaxPrefilter
//这个函数

$.ajaxPrefilter(function (options) {
  options.url = 'http://api-breakingnews-web.itheima.net' + options.url;

})
