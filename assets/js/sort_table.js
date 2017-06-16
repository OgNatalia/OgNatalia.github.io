var name, st, tab_html, tab_html_all, size, period, team;
var table=document.querySelectorAll('td');
tab_html_all='';
function chek(e){
    team='';
    period='';
    st='';
    size=0;
    var all=document.querySelectorAll('h3.all');
    for (i=0; i<all.length; i++){
        if (all[i]==e){
            name='';
            tab_html='';
            size=size+1;}
    }
    if (size==1){
        document.body.querySelector('table.champions_name').style.display='none'; 
        document.body.querySelector('table.champions_all').style.display='table'; 
        size=0;
    }else{
        var decade=document.querySelectorAll('li.decade');
        for (i=0; i<decade.length; i++){
            if (decade[i]==e){period = decade.item(i).textContent; break;}//если этот элемент выбран, то берем имя
        }
        if (period!=''){
            tab_html='<col style="background: #FFEFD5;"><col><col><tr style="background: #FFCFAB;">'+
            '<th>Сезон</th><th>Чемпион</th><th>Команда</th></tr>'; 
            switch(period){
                case 'Чемпионы 50-ых годов': 
                    for (i=1; i<29; i=i+3){
                    st='<tr><td>'+table[i-1].innerHTML+'</td><td>'+table[i].innerHTML+'</td><td>'+table[i+1].innerHTML+'</td><tr>';
                    // console.log(st);
                    tab_html=tab_html+st;
                } break;
                case 'Чемпионы 60-ых годов':
                    for (i=31; i<59; i=i+3){
                    st='<tr><td>'+table[i-1].innerHTML+'</td><td>'+table[i].innerHTML+'</td><td>'+table[i+1].innerHTML+'</td><tr>';
                    // console.log(st);
                    tab_html=tab_html+st;
                } break;
                case 'Чемпионы 70-ых годов':
                    for (i=61; i<89; i=i+3){
                    st='<tr><td>'+table[i-1].innerHTML+'</td><td>'+table[i].innerHTML+'</td><td>'+table[i+1].innerHTML+'</td><tr>';
                    // console.log(st);
                    tab_html=tab_html+st;
                } break;
                case 'Чемпионы 80-ых годов':
                    for (i=91; i<119; i=i+3){
                    st='<tr><td>'+table[i-1].innerHTML+'</td><td>'+table[i].innerHTML+'</td><td>'+table[i+1].innerHTML+'</td><tr>';
                    // console.log(st);
                    tab_html=tab_html+st;
                } break;
                case 'Чемпионы 90-ых годов':
                    for (i=121; i<149; i=i+3){
                    st='<tr><td>'+table[i-1].innerHTML+'</td><td>'+table[i].innerHTML+'</td><td>'+table[i+1].innerHTML+'</td><tr>';
                    // console.log(st);
                    tab_html=tab_html+st;
                } break;
                case 'Чемпионы XXI века':
                    for (i=151; i<table.length-1; i=i+3){
                    st='<tr><td>'+table[i-1].innerHTML+'</td><td>'+table[i].innerHTML+'</td><td>'+table[i+1].innerHTML+'</td><tr>';
                    console.log(st);
                    tab_html=tab_html+st;
                } break;
             }
            document.body.querySelector('table.champions_all').style.display='none';
            document.body.querySelector('table.champions_name').style.display='table';
            document.body.querySelector('table.champions_name').innerHTML=tab_html;
        }
        else{
            var sort_team=document.querySelectorAll('li.sort_team');
            for (i=0; i<sort_team.length; i++){
                if (sort_team[i]==e){team = sort_team.item(i).textContent; break;}//если этот элемент выбран, то берем имя
            }
            if (team!=''){
                tab_html='<col style="background: #FFEFD5;"><col><col><tr style="background: #FFCFAB;">'+
                '<th>Сезон</th><th>Чемпион</th><th>Команда</th></tr>'; 
                for (i=0; i<table.length; i++){
                if (table[i].textContent==team){
                    st='<tr><td>'+table[i-2].innerHTML+'</td><td>'+table[i-1].innerHTML+'</td><td>'+table[i].innerHTML+'</td><tr>';
                    tab_html=tab_html+st;
                }
            }
            document.body.querySelector('table.champions_all').style.display='none';
            document.body.querySelector('table.champions_name').style.display='table';
            document.body.querySelector('table.champions_name').innerHTML=tab_html;
            }else{
                var li = document.querySelectorAll('li.sort_name');//все элементы
                for (i=0; i<li.length; i++){
                    if (li[i]==e){name = li.item(i).textContent; break;}//если этот элемент выбран, то берем имя
                }
                // console.log(name);
                tab_html='<col style="background: #FFEFD5;"><col><col><tr style="background: #FFCFAB;">'+
                '<th>Сезон</th><th>Чемпион</th><th>Команда</th></tr>'; 
                for (i=0; i<table.length-1; i++){
                    if (table[i].textContent==name){
                        st='<tr><td>'+table[i-1].innerHTML+'</td><td>'+table[i].innerHTML+'</td><td>'+table[i+1].innerHTML+'</td><tr>';
                        tab_html=tab_html+st;
                    }
                }
                document.body.querySelector('table.champions_all').style.display='none';
                document.body.querySelector('table.champions_name').style.display='table';
                document.body.querySelector('table.champions_name').innerHTML=tab_html;
            }
        }
    }
}    
