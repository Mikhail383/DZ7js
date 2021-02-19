if (confirm("Хотите создать контакт?")) {
    contacts = new Contacts();
    contacts.askOperation();
}
alert("Для создания справочника обновите страницу.")


function Contacts() {
    this.contactsList = [];

    this.askOperation = function () {
        let operation = prompt("Введите номер операции.\n\n" + 
        "1 - Новый контакт\n\n" + 
        "2 - Список контактов\n\n" + 
        "3 - Найти контакт и показать его данныеn\n\n" + 
        "4 - Выйти из справочника контактов\n\n");
    }
    switch (operation){
        case "1":
            this.addContact();
            this.askOperation();
            break;
        case "2":
            this.showContactsList();
            this.askOperation();
            break;
         case "3":
            this.showContactDetail();
            this.askOperation();
            break;
        case "4'":
            break;
        default :
            alert("Операция не распознана");
            this.askOperation();
            
    }
}

this.addContact = function () {
    let fullName = prompt("ФИО", "Иванов Иван Иванович"),
        age = prompt("Возраст", "33"),
        phone = prompt("Номер телефона", "+375 29 1234567"),
        email = prompt("Эл. почта", "test@gmail.com");
    
    this.contactsList.push(new Contacts(fullName, age, phone, email));
        
}


this.showContactDetail = function () {
    let searchValue = prompt("Введите имя контакта");
    let searchResult = this.searchContact(searchValue);
    let resultText = "";
    for (let each of searchResult) {
        resultText += "\n\nФИО - " + each.fullName;
        resultText += "\nВозраст - " + each.age;
        resultText += "\nТелефон - " + each.phone;
        resultText += "\nЭл. почта - " + each.email;
    }
    alert(resultText);
}
this.showContactsList = function () {
    let message = "";
    for (let item of this.contactsList)
    message += `${item.fullName}\n`
    alert(message == "" ? "Список пуст" : message)
}

this.searchContact = function (searchValue) {
    let result = [];
    for (let each of contacts.contactsList)
        if (each.fullName.indexOf(searchValue) != -1)
        result.push(each)
    return result
}

function Contact(fullName, age, phone, email) {
    this.fullName = fullName;
    this.age = age;
    this.phone = phone;
    this.email = email;
}


