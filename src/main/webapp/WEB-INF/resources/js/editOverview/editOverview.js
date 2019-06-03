function generateQuestionBox(image, question, questionId) {
    return "<div class=\"draggable\" draggable=\"true\">\n" +
        "    <div class=\"draggable__handle\">\n" +
    "    <span class=\"icon\">\n" +
    "    <svg class=\"icon__svg\" data-functional-selector=\"icon\" focusable=\"false\">\n" +
    "    <use class=\"icon__use\" xlink:href=\"#drag-handle\"></use>\n" +
    "    </svg>\n" +
    "    </span>\n" +
    "    </div>\n" +
    "    <div class=\"draggable__container\">\n" +
    "    <section class=\"content-block content-block--bg question-content-block content-block--no-image\" data-functional-selector=\"game-block-content-block\">\n" +
    "    <figure class=\"content-block__figure content-block__figure--overlay\"><span class=\"content-block__info content-block__info--text\" data-functional-selector=\"game-block-content-block__info\">"+
        "<img src='"     +    ((image) ? image : "")   +        "' style='width: 100%;'>" +
        "</span></figure>\n" +
    "<div class=\"content-block__copy\">\n" +
    "    <p class=\"content-block__text\" data-functional-selector=\"game-block-content-block__main\">"+question+"</p>\n" +
    "</div>" +
    // "<div class=\"dropdown-list dropdown-list--secondary question-content-block__dropdown-list\" data-functional-selector=\"game-block-content-block__time-limit-dropdown-list\">\n" +
    // "    <label class=\"label dropdown-list--secondary question-content-block__dropdown-list\" for=\"question-content-block__time-limit-dropdown-list__select\" data-functional-selector=\"game-block-content-block__time-limit-dropdown-list__label\">\n" +
    // "</label>\n" +
    // "<div class=\"dropdown-list__wrap\">\n" +
    // "    <select class=\"dropdown-list__select\" role=\"listbox\" id=\"question-content-block__time-limit-dropdown-list__select\" data-functional-selector=\"game-block-content-block__time-limit-dropdown-list__select\" aria-invalid=\"false\">\n" +
    // "    <option class=\"dropdown-list__option\" role=\"option\" value=\"5000\">5s</option>\n" +
    // "<option class=\"dropdown-list__option\" role=\"option\" value=\"10000\">10s</option>\n" +
    // "<option class=\"dropdown-list__option\" role=\"option\" value=\"20000\">20s</option>\n" +
    // "<option class=\"dropdown-list__option\" role=\"option\" value=\"30000\">30s</option>\n" +
    // "<option class=\"dropdown-list__option\" role=\"option\" value=\"60000\">60s</option>\n" +
    // "<option class=\"dropdown-list__option\" role=\"option\" value=\"90000\">90s</option>\n" +
    // "<option class=\"dropdown-list__option\" role=\"option\" value=\"120000\" selected=\"selected\">120s</option>\n" +
    // "</select>\n" +
    // "<span class=\"dropdown-list__border\"></span>\n" +
    // "    <span class=\"icon icon--rotate-180deg dropdown-list__icon\">\n" +
    // "    <svg class=\"icon__svg\" data-functional-selector=\"icon\" aria-hidden=\"true\" focusable=\"false\">\n" +
    // "    <use class=\"icon__use\" xlink:href=\"#stroke-arrow\"></use>\n" +
    // "    </svg>\n" +
    // "    </span>\n" +
    // "    </div>\n" +
    // "    <div class=\"dropdown-list__error\" data-functional-selector=\"game-block-content-block__time-limit-dropdown-list__error\"><span class=\"dropdown-list__error-text\"></span></div>\n" +
    // "</div>\n" +
    "<aside class=\"content-block__actions\">\n" +
    "    <div class=\"question-content-block__menu\">\n" +
    "    <div class=\"\" style=\"display: inline;\" data-tooltipped=\"\" aria-describedby=\"tippy-tooltip-23\" data-original-title=\"Edit this question\">\n" +
    "    <button type=\"button\" role=\"button\" data-functional-selector=\"edit-quiz-block-button game-block-content-block__edit-button\" class=\"icon-button edit-question-button question-content-block__icon-button question-content-block__icon-button--edit-question\" aria-label=\"Edit question\">\n" +
    "    <span class=\"icon-button__wrap\">\n" +
    "    <span class=\"icon icon-button__icon icon--solid\">\n" +
    "    <svg class=\"icon__svg\" data-functional-selector=\"icon\" focusable=\"false\">\n" +
    "    <use class=\"icon__use\" xlink:href=\"#edit\"></use>\n" +
    "    </svg>\n" +
    "    </span>\n" +
    "    </span>\n" +
    "    </button>\n" +
    "    </div>\n" +
    "    <div class=\"\" style=\"display: inline;\" data-tooltipped=\"\" aria-describedby=\"tippy-tooltip-24\" data-original-title=\"Duplicate this question\">\n" +
    "    <button type=\"button\" role=\"button\" data-functional-selector=\"duplicate-quiz-block-button game-block-content-block__duplicate-button\" class=\"icon-button duplicate-question-button question-content-block__icon-button question-content-block__icon-button--duplicate-question\" aria-label=\"Duplicate question\">\n" +
    "    <span class=\"icon-button__wrap\">\n" +
    "    <span class=\"icon icon-button__icon icon--solid\">\n" +
    "    <svg class=\"icon__svg\" data-functional-selector=\"icon\" focusable=\"false\">\n" +
    "    <use class=\"icon__use\" xlink:href=\"#duplicate\"></use>\n" +
    "    </svg>\n" +
    "    </span>\n" +
    "    </span>\n" +
    "    </button>\n" +
    "    </div>\n" +
    "    <div class=\"\" style=\"display: inline;\" data-tooltipped=\"\" aria-describedby=\"tippy-tooltip-25\" data-original-title=\"Delete this question\">\n" +
    "    <button type=\"button\" role=\"button\" data-functional-selector=\"delete-quiz-block-button game-block-content-block__delete-button\" class=\"icon-button delete-question-button question-content-block__icon-button question-content-block__icon-button--delete-question\" aria-label=\"Delete question\">\n" +
    "    <span class=\"icon-button__wrap\">\n" +
    "    <span class=\"icon icon-button__icon icon--solid\">\n" +
    "    <svg class=\"icon__svg\" data-functional-selector=\"icon\" focusable=\"false\">\n" +
    "    <use class=\"icon__use\" xlink:href=\"#delete\"></use>\n" +
    "    </svg>\n" +
    "    </span>\n" +
    "    </span>\n" +
    "    </button>\n" +
    "    </div>\n" +
    "    <div class=\"\" style=\"display: inline;\" data-tooltipped=\"\" aria-describedby=\"tippy-tooltip-26\" data-original-title=\"Move this question down one\">\n" +
    "    <button type=\"button\" role=\"button\" data-functional-selector=\"move-question-button game-block-content-block__move-down-button\" class=\"icon-button move-question-button visibly-hidden question-content-block__icon-button question-content-block__move-down\" aria-label=\"Move question down\" aria-hidden=\"false\" tabindex=\"-1\">\n" +
    "    <span class=\"icon-button__wrap\">\n" +
    "    <span class=\"icon icon-button__icon icon--solid icon--rotate-180deg\">\n" +
    "    <svg class=\"icon__svg\" data-functional-selector=\"icon\" focusable=\"false\">\n" +
    "    <use class=\"icon__use\" xlink:href=\"#triangle\"></use>\n" +
    "    </svg>\n" +
    "    </span>\n" +
    "    </span>\n" +
    "    </button>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "    <button type=\"button\" role=\"button\" data-functional-selector=\"game-block-content-block__toggle-button\" class=\"icon-button question-content-block__toggle-button\" aria-label=\"More options\">\n" +
    "    <span class=\"icon-button__wrap\">\n" +
    "    <span class=\"icon icon-button__icon\">\n" +
    "    <svg class=\"icon__svg\" data-functional-selector=\"icon\" focusable=\"false\">\n" +
    "    <use class=\"icon__use\" xlink:href=\"#more\"></use>\n" +
    "    </svg>\n" +
    "    </span>\n" +
    "    </span>\n" +
    "    </button>\n" +
    "    </aside>\n" +
    "    </section>\n" +
    "    </div>\n" +
    "    </div>";
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

function loadQuestions() {
    var questionsArea = document.getElementById("questionsArea");
    questionsArea.innerHTML = ""; // clear questions area

    let questionCollectionId = getUrlParameter("questionCollectionId");
    if (questionCollectionId) {
        $.get("1.0/db/collection/get?questionCollectionId="+questionCollectionId, (data) => {
            let collection = data.content;
            if (collection) {
                document.getElementById("gameCollectionName").innerText = collection.name;
                document.getElementById("questionCollectionDescription").innerText = collection.description;
            }
            collection.questions.forEach((question) => {
                questionsArea.innerHTML += generateQuestionBox(question.image, question.question, question.id);
            })
        });
    }

}