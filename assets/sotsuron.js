$(function(){

  function update(){
    var now  = new Date().getTime();
    var dead = new Date(deadline).getTime();
    var diff = Math.floor((dead - now) / 1000);
    var remain = {
      day  : Math.floor(diff / 86400),
      hour : Math.floor(diff / 3600 % 24),
      min  : Math.floor(diff / 60 % 60),
      sec  : Math.floor(diff % 60)
    };
    var str = remain.day  + ' 日 '
            + remain.hour + ' 時間 '
            + remain.min  + ' 分 '
            + remain.sec  + ' 秒 ';
    $('.remain').html(str);
  }

  setInterval(update, 1000);
  update();

  $('.name').text(name);
  $('.progress-per').text(progress);
  $('.progress-bar')
    .attr('aria-valuenow', progress)
    .css('width', progress+'%');

});
