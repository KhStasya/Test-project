​    do {
    var firstName = prompt ('Ваше имя?','');
    } while (firstName===""||firstName===null|| !isNaN(firstName));
    
    do {
    var middleName = prompt ('Ваше отчество?', '');
    } while (middleName===""||middleName===null|| !isNaN(middleName));
    
    do {
        var lastName = prompt ('Ваша фамилия?','');
        } while (lastName===""|| lastName===null || !isNaN(lastName));
 
    do {
        var year = +prompt('Назовите Ваш возраст','');
          
       } while(year===""||year===null||(year<10)||(year>100)||isNaN(year));
    
       var gender = confirm('Ваш пол мужской?');
       function funcGender (gender) {
           if (gender ==true) {
               return 'Мужской'; }else{
                   return 'Женский';
               }
       }
       function setAgeDays(year){
              return ageDays=year*365;
       }
​       function isOnPension (gender,year) {
           if (gender==true && year>=65) {
               return 'Да';
           } else if (gender==false && year>=55){
               return 'Да';
           }else{
               return 'нет';
           }
       }
     var setGender =funcGender(gender);
     var ageDays=setAgeDays(year);
     var pension = isOnPension(gender,year);
     var ageAfterFive= year+5;

    document.write('Ваше ФИО: '+firstName + ' '+middleName+ ' '+lastName + '</br>'+'Ваш возраст в годах: '+year + '</br>'+'Ваш возраст в днях: '+ ageDays+ '</br>'+'Через 5 лет вам будет: '+ageAfterFive+'</br>'+'Ваш пол: '+ setGender+'</br>'+ 'Вы на пенсии: '+pension);