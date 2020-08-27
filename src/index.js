import './scss/base.scss';
import './scss/typography.scss';

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log(fetch('/dist/metadata/catalog.json').then(data => data.json()))
});