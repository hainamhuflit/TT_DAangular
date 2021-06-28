# DaAngular

Package
 "@fortawesome/fontawesome-free": "^5.15.3"
 "bootstrap": "^4.6.0"
 "jquery": "^3.6.0"
 "ngx-owl-carousel": "^2.0.7"
 "ngx-owl-carousel-o": "^5.0.0"

install bootstrap: $ npm install -g @angular/cli
  - $ npm install bootstrap
  - $ npm install jquery
  Register it on angular.json
    "style":[ "node_modules/bootstrap/dist/css/bootstrap.min.css"]
    "script":[ "node_modules/jquery/dist/jquery.min.js"]

install FontAwesome: 
  - npm install @fortawesome/fontawesome-free --save
  Register it on angular.json
    "style":["node_modules/@fortawesome/fontawesome-free/css/all.min.css"]
    
 install OwlCarousel:
  - npm install ngx-owl-carousel owl.carousel jquery --save
  Register it on angular.json
  "style":[ "node_modules/owl.carousel/dist/assets/owl.carousel.min.css",
            "node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"]
