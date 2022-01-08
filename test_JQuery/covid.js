
$(function(){

    // Address loading
    var data = [];
    $.getJSON('./walkinIreland.json', function(result){
      console.log(result, typeof result);
      $.each(result, function(i, field){
        data.push(field);
      })
      console.log('data= ', data);
      });
  
    // Display Address List
    function show_list(){
      var list = '';
      var url = '#';
      $(data).each(function(i, d){
        url = data[i].url;
        list += '<li><a href="' + url + '">' + data[i].centreName;
        list += '<p>' + data[i].addr + '</p>';
        list += '</a></li>';
      });
      $('#address_list').html(list);    }
  
   
    // search the selected list 
    function select_list(txt){
      console.log(txt);      
      var list = '';
      var url = '#';
      $('#address_list').empty();  

      for(var i in data){
        if(data[i].address.indexOf(txt) != -1){
          url = data[i].url;         
          list += '<li><a href="' + url + '">' + data[i].centreName;
          list += '<p>Address: ' + data[i].address + '</p>';
          list += '</a></li>';
          $('#address_list').html(list);
        } 
      }
    }    
  
    // select centre
    $('#county').on('change', function(){
      var i = $(this).prop('selectedIndex');
      console.log(i);
      var txt = $(this).find('option').eq(i).text();
      select_list(txt);
      // $('#map iframe').attr('src', data[i-1].url);
    })
    
    
  $('#address_list').on('click', 'a', function(){
    var url = $(this).attr('href');
    $('#map iframe').attr('src', url);
    return false;
  });
  
  }); 