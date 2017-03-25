'use strict';

// Declare app level module which depends on views, and components
angular.module('mazaci.cz', ['pascalprecht.translate'])

.controller('MazaciController', function ($scope, $translate) {
  $scope.view = "home";
  $scope.showTab = function (name) {
    $scope.view = name;
  };
  $scope.language = "cz";
  $scope.changeLanguage = function (lang) {
    $scope.language = lang;
    $translate.use($scope.language);
  };

  $scope.languages = {
    "cz" : {
      name : "Česky",
      class : "flag-icon-cz"
    },
    "de" : {
      name : "Deutsch",
      class : "flag-icon-de"
    },
    "en" : {
      name : "English",
      class : "flag-icon-gb"
    }
  };

  $scope.contacts = [{
    name : "Ondřej Vymazal",
    phone : "+420 776 660 150",
    email : "vymazal@mazaci.cz",
    dic : "XXXCZ",
    photo : "url('img/contacts/vymazal.png')"
  }, {
    name : "Tomáš Toufar",
    phone : "+420 775 432 900",
    email : "toufar@mazaci.cz",
    dic : "XXXCZ",
    photo : "url('img/contacts/toufar.png')"
  }, {
    name : "Někdo Další",
    phone : "+420 775 432 900",
    email : "dalsi@mazaci.cz",
    dic : "XXXCZ",
    photo : "url('img/contacts/toufar.png')"
  }];
})

.config(function ($translateProvider) {
  function createCzechTranslations() {
    return {
      home : {
        menu : "Domů",
        header : "Výškové práce",
      },
      prices : {
        menu : "Ceník",
        header : "Ceník prací",
      },
      contacts : {
        menu : "Kontakt",
        header : "Kontakty",
        labels : {
          name : "Mazák",
          phone : "Telefon",
          email : "E-mail",
          dic : "DIČ"
        }
      },
      references : {
        menu : "Reference",
        header : "Reference"
      }
    };
  };
  function createGermanTranslations() {
    return createCzechTranslations();
  };
  function createEnglishTranslations() {
    var translations = createCzechTranslations();
    translations.home.menu = "Home";
    translations.home.header = "Labour in Heights";
    translations.prices.menu = "Prices";
    translations.prices.header = "Prices of Labour";
    translations.contacts.menu = "Contacts";
    translations.contacts.header = translations.contacts.menu;
    translations.contacts.labels.name = "Name";
    translations.contacts.labels.phone = "Phone";
    translations.references.menu = "References";
    translations.references.header = translations.references.menu;
    return translations;
  };
  $translateProvider
    .translations('cz', createCzechTranslations())
    .translations('de', createGermanTranslations())
    .translations('en', createEnglishTranslations())
    .preferredLanguage('cz')
    .useSanitizeValueStrategy('escape');
});
