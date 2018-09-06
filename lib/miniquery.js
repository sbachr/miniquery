/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {

    select: function (element) {

        let elements

        if (element[0] == '#') {
            elements = document.querySelector(element)
        } else {
            elements = document.querySelectorAll(element)
        }
        return elements
    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {

    hide: function (element) {
        let el = SweetSelector.select(element)
        if (element[0] === "#") {
            el.style.display = "none";
        } else {
            for (let i = 0; i < el.length; i++) {
                el[i].style.display = "none";
            }
        }
        return el;
    },

    show: function (element) {
        let el = SweetSelector.select(element)
        if (element[0] == '#') {
            el.style.display = ""
        } else {
            for (let i = 0; i < el.length; i++) {
                el[i].style.display = ""
            }
        }
        return el
    },

    addClass: function (element, klass) {
        let el = SweetSelector.select(element)
        if (element[0] == '#') {
            el.classList.add(klass)
        } else {
            for (let i = 0; i < el.length; i++) {
                el[i].classList.add(klass)
            }
        }
        return el
    },

    removeClass: function (element, klass) {
        let el = SweetSelector.select(element)
        if (element[0] == '#') {
            el.classList.remove(klass)
        } else {
            for (let i = 0; i < el.length; i++) {
                el[i].classList.remove(klass)
            }
        }
        return el
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

const EventDispatcher = {

    on: function (element, event, handler) {
        let el = SweetSelector.select(element)
        if (element[0] == '#') {
            el.addEventListener(event, handler)
        } else {
            for (let i = 0; i < el.length; i++) {
                el[i].addEventListener(event,handler)
            }
        }
        return el
    }

    // trigger : function (element, event, handler){
    //     let el = SweetSelector.select(element)

    //     if(element[0] == '#') {
    //         el.dispatchEvent(event, function(){
    //             console.log('Awesom Triger')
    //         })
    //     } else {
    //         el.dispatchEvent(event,function(){
    //             console.log('Awasom Triger');
    //         })
    //     }
    //     return 
    // }
}


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {
    request : function(obj){
      let elements = SweetSelector.select(element)
  
      const request = new XMLHttpRequest();
      request.open(obj.type, obj.url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          obj.success();
        } else {
          obj.fail();
        }
      };
      request.onerror = function() {
        console.log("Connection error");
      };
      request.send();
    
  
    return elements;
    }
  }
  


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
