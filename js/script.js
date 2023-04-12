'use strict';
//library dropdown
const libraryBtn = document.querySelectorAll('.library-btn');
const asideLibraryEl = document.querySelector('.aside-section-library');
libraryBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    asideLibraryEl.classList.toggle('active-dropdown-library');
  });
});

// subscriptions dropdown
const subscriptionBtn = document.querySelectorAll('.subscription-btn');
const asideSubscriptionEl = document.querySelector(
  '.aside-section-subscriptions'
);
subscriptionBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    asideSubscriptionEl.classList.toggle('active-dropdown-subscriptions');
  });
});

const menuIcon = document.querySelector('.menu-icon');
const asideSectionEl = document.querySelector('.wrapper-aside');
menuIcon.addEventListener('click', function () {
  asideSectionEl.classList.toggle('active');
});

const searchBtn = document.querySelector('.search-btn');
const headerSectionEl = document.querySelector('.header');
const backBtn = document.querySelector('.back-icon');
searchBtn.addEventListener('click', function () {
  headerSectionEl.classList.add('active-search');
});
backBtn.addEventListener('click', function () {
  headerSectionEl.classList.remove('active-search');
});
