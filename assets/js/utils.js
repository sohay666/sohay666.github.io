
document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('language');

    // chekcing the url
    selectElement.value = window.location.pathname.includes("/article/id/") ? "id": "en";

    selectElement.addEventListener('change', function () {
        // Get the selected option value
        const language = selectElement.value;
        let url = (window.location.pathname.includes("/article/id/")) ?  window.location.pathname.replace("/article/id/", `/article/${language}/`) :  window.location.pathname.replace("/article/en/", `/article/${language}/`); 
        window.location.assign(url);
    });
});