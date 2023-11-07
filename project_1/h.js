document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var mobilePhone = document.getElementById("mobilePhone").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;

    // Отправка данных на удаленный сервер
    // Здесь можно использовать AJAX или другой метод отправки данных

    alert("Данные успешно отправлены!");
});
